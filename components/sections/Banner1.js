import { useState } from "react"
import YouTubeVideo from "../tools/YoutubeAPI"

export default function Banner1() {
    const videoId = '06bxyMCfdPA'

    const [modalClick1, setModal1] = useState(false)
    const [modalClick2, setModal2] = useState(false)

    const handleModlaClick1 = () => {modalClick1? setModal1(false): setModal1(true)}
    const handleModlaClick2 = () => {modalClick2? setModal2(false): setModal2(true)}

    return (
        <>
            <section className="banner-area">
                <div className="container">
                    <div className="row">
                        <h3>En Magavi ofrecemos soluciones reales</h3>
                        <div className="col-lg-12">
                            <button  onClick={handleModlaClick2} className="gradient-btn wow fadeInLeft"> Innovación Digital</button>
                            <button onClick={handleModlaClick1} className="gradient-btn gradient-btn-two wow fadeInRight">Ciberseguridad</button>

                            {/* <dialog className="dialog-container" open={modalClick1}>
                                <div className="dialog-right-container"></div>

                                <div className="dialog-left-containers">
                                    <div class="dialog-top-left-container"></div>
                                    <div class="dialog-bottom-left-container"></div>
                                </div>
                                
                            </dialog> */}

                            <dialog className="dialog" open={modalClick2}>
                                <div className="dialog-container">
                                    <div className="dialog-right-container">
                                        <YouTubeVideo videoId={videoId} width={"100%"} height={"300vh"}/>
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
                                    <button id="dialog-chat-btn">¿Conversamos?</button>
                                </div>
                            </dialog>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
