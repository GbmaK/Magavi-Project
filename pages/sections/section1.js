import Link from "next/link"

export default function section1() {

    return(
        <>
            <header className="header-section-1">
                <div className="header-container-section-1">
                    <div className="header-image-section-1">
                        <Link href="/"><img src="/assets/img/logo/logo_white.png" alt="Logo"/></Link>
                    </div>
                    <div className="header-links-section-1">
                        <Link href="/sections/section1">Sección 1</Link>
                        <Link href="/sections/section2">Sección 2</Link>
                    </div>
                </div>
            </header>

            <div className="filtro-section-1">
                <h3>¿Dónde sera su próxima aventura?</h3>
                <h1>Filtros</h1>
                <div className="filtro-input-section-1">
                    <input type="text" placeholder="Ingresa un filtro" id="search-input-section-1"/>
                    <button className="btn btn-section-1">Buscar</button>
                </div>
            </div>

            <div className="result-section-1">
                <h1 className="">Resultados de tu búsqueda</h1>
                <div>
                    <ul className="response-section-1">

                        <li className="result-reponse-section-1">
                            <p>Resultado 1</p>
                            <div className="result-image-section-1">
                                <img src="\assets\img\blog\blog_img06.jpg"></img>
                            </div>
                        </li>

                        <li className="result-reponse-section-1">
                            <p>Resultado 2</p>
                            <div className="result-image-section-1">
                                <img src="\assets\img\blog\blog_img07.jpg"></img>
                            </div>
                        </li>

                        <li className="result-reponse-section-1">
                            <p>Resultado 3</p>
                            <div className="result-image-section-1">
                                <img src="\assets\img\blog\blog_img08.jpg"></img>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

        </>    
    )
}