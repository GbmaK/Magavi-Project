import React, { useState, useRef, useEffect  } from 'react';

function Chat({context, focus}) {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);

  const chatContainerRef = useRef(null);
  const chatInputRef = useRef(null);

  const [loading, setLoading] = useState("enviar");
  const [btnEnabled,setbtnEnabled] = useState(false);

  useEffect(() => {
    focus? chatInputRef.current.focus() : chatInputRef
  }, [focus]);


  const spinner = <div className="hollow-dots-spinner">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>

  // Configuracion chatGPT
  const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  const systemMessage = {
    role: "system",
    content: "Eres un asistente en seguridad virtual, respondes dudas exclusivamente sobre ese tema.(manten respuestas muy cortas, identificate con el primer mensaje)"
  }

  const systemMessage2 = {
    role: "system",
    content: "Eres un asistente de innovacion digital, respondes dudas exclusivamente sobre ese tema.(manten respuestas muy cortas, identificate con el primer mensaje)"
  }
  
  const [gptMessages, setGPTMessages] = useState([
    {
      message: "Hola, soy chat gpt",
      sender: "ChatGPT",
    }
  ]);
  
  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user"
    };

    const newMessages = [...gptMessages, newMessage];

    setGPTMessages(newMessages);
    setLoading(spinner)
    setbtnEnabled(true)
    await processMessageToChatGPT(newMessages);
  }

  async function processMessageToChatGPT(chatMessages) {
    // chatmesages { sender: "user" o "chatgpt", message: "el mensaje" }
    // mensaje para la api { role: "usuario" o "asistente", content: "el mensaje" }

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });

    if (context==1) {
      const apiRequestBody = {
        "model": "gpt-3.5-turbo",
        "messages": [
          systemMessage,
          ...apiMessages
        ],
      }

      await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
        }).then((data) => {
          return data.json();
        }).then((data) => {
          console.log(data);
          console.log(data.choices[0].message.content);
          handleGenerateDivGPT(data.choices[0].message.content);
          setLoading("Enviar")
          setbtnEnabled(false)
        });
    }else{      
      const apiRequestBody = {
        "model": "gpt-3.5-turbo",
        "messages": [
          systemMessage2,
          ...apiMessages
        ],
      }

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
      }).then((data) => {
        return data.json();
      }).then((data) => {
        handleGenerateDivGPT(data.choices[0].message.content);
        setLoading("Enviar")
        setbtnEnabled(false)
      });
  }

  }
  // Configuracion chtaGPT

  const autoResize = (element) => {
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  };

  const handleTextAreaResize = (event) => {
    autoResize(event.target);
  };

  const handleTextChange = (event) => {
    autoResize(event.target);
    setInputText(event.target.value);
  };

  const resetHeight = (element) => {
    element.style.height = '40px'; 
  };

  const handleGenerateDivGPT = (gptText) => {
      const options = { hour: '2-digit', minute: '2-digit', hour12: true };

      const newMessage = {
        text: gptText,
        time: new Date().toLocaleTimeString([], options),
        style: "gpt"
      };
      setMessages((prevMessages) => [newMessage, ...prevMessages]);
      setTimeout(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      }, 1);

    };
  
  const handleGenerateDiv = () => {
    if (inputText.trim() !== '') {
      const options = { hour: '2-digit', minute: '2-digit', hour12: true };

      const newMessage = {
        text: inputText,
        time: new Date().toLocaleTimeString([], options),
        style: "user"
      };
  
      setMessages((prevMessages) => [newMessage, ...prevMessages]);
      handleSend(inputText);
      setInputText('');
      resetHeight(document.getElementById('chat-input'));
  
      setTimeout(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      }, 1);

    }
  };

  const handleKeyUp = (event) =>{
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleGenerateDiv();
    }
  }

  return (
    <div id='chat-container'>
      <div ref={chatContainerRef} id='chat-messages-container'>
        {messages.slice().reverse().map((message, index) => (
          <div id={`${message.style}-text-container`} key={index}>
            <div id={`${message.style}-text`}>{message.text}</div>
            <div id={`${message.style}-text-time`}>{message.time}</div>
          </div>
        ))}

      </div>
      <div id='chat-input-container'>
        <div id='textarea-container'>
          <textarea
            id='chat-input'
            value={inputText}
            onChange={handleTextChange}
            onInput={handleTextAreaResize}
            onKeyDown={handleKeyUp}
            placeholder='Dime tus dudas'
            ref={chatInputRef}
          />
        </div>
        <button id='send-button' onClick={handleGenerateDiv} disabled={btnEnabled}>
          {loading}
        </button>
      </div>
    </div>
  );
}

export default Chat;
