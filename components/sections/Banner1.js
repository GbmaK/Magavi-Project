import { useState } from "react"

export default function Banner1() {
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

                            <dialog open={modalClick1} style={{background: "black"}}>
                                <h3>Empresa de innovacion y soluciones de problemas con inteligencia artifical</h3>
                                <marquee>hols rn marquee</marquee>
                            </dialog>

                            <dialog open={modalClick2} style={{background: "black"}}>
                                <h3>Empresa de innovacion y soluciones de problemas con inteligencia artifical</h3>
                                <marquee>hola en marquee</marquee>
                            </dialog>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
