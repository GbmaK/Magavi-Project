import { useState } from "react"
import YouTubeVideo from "../tools/YoutubeAPI"
import Chat from "../chat/chatModal"

export default function Banner1() {
    const videoId1 = '06bxyMCfdPA'
    const videoId2 = '8CC7f0Hr2cc'

    const [modalClick1, setModal1] = useState(false)
    const [modalClick2, setModal2] = useState(false)
    const [modalClick3, setModal3] = useState(false)
    const [modalClick4, setModal4] = useState(false)

    const handleModlaClick1 = () => {modalClick1? setModal1(false): setModal1(true)}
    const handleModlaClick2 = () => {modalClick2? setModal2(false): setModal2(true)}
    const handleModlaClick3 = () => {modalClick3? setModal3(false): setModal3(true)}
    const handleModlaClick4 = () => {modalClick4? setModal4(false): setModal4(true)}

    return (
        <>
            <section className="banner-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner1-title-button">
                                <h3>En Magavi ofrecemos soluciones reales</h3>
                                <button  onClick={handleModlaClick1} className="gradient-btn wow fadeInLeft"> Innovación Digital</button>
                                <button onClick={handleModlaClick2} className="gradient-btn gradient-btn-two wow fadeInRight">Ciberseguridad</button>
                            </div>
                            <dialog className="dialog" open={modalClick1}>
                                <div className="dialog-container">
                                    <div className="dialog-right-container">
                                        <YouTubeVideo videoId={videoId2} width={"100%"} height={"350vh"}/>
                                    </div>

                                    <div className="dialog-left-containers">
                                        <div class="dialog-top-left-container">
                                            <h1>SOLUCIONES <span className="dialog-span-gradient">INTELIGENTES</span></h1>
                                        </div>
                                        <div class="dialog-bottom-left-container">
                                            <p>Potencie su éxito de su negocio con 
                                            inteligencia artifcial. 
                                            Nuestras soluciones personalizadas 
                                            impulsan la productividad y aumentan 
                                            las ventas. ¡Descubra el futuro de los 
                                            negocios hoy mismo!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dialog-buttons">
                                    <button id="dialog-close-btn" onClick={handleModlaClick1}>Cerrar</button>
                                    <button id="dialog-chat-btn" onClick={handleModlaClick4}>¿Conversamos?</button>
                                </div>
                            </dialog>

                            <dialog className="dialog" open={modalClick2}>
                                <div className="dialog-container">
                                    <div className="dialog-right-container">
                                        <YouTubeVideo videoId={videoId1} width={"100%"} height={"350vh"}/>
                                    </div>

                                    <div className="dialog-left-containers">
                                        <div class="dialog-top-left-container">
                                            <h1>ASESORIA EN <span className="dialog-span-gradient">CIBERSEGURIDAD</span></h1>
                                        </div>
                                        <div class="dialog-bottom-left-container">
                                            <p>¿Tus datos están protegidos? Nuestro equipo de expertos en ciberseguridad y protección de 
                                                datos están aquí para brindarle asesoría personalizada. Garantice la seguridad de su información.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dialog-buttons">
                                    <button id="dialog-close-btn" onClick={handleModlaClick2}>Cerrar</button>
                                    <button id="dialog-chat-btn" onClick={handleModlaClick3}>¿Conversamos?</button>
                                </div>
                            </dialog>

                            <dialog className="dialog" open={modalClick3}>
                                <button id="dialog-close-btn-chat" onClick={handleModlaClick3}>X</button>
                                <Chat></Chat>
                            </dialog>

                            <dialog className="dialog" open={modalClick4}>
                                <button id="dialog-close-btn-chat" onClick={handleModlaClick4}>X</button>
                                <Chat></Chat>
                            </dialog>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
