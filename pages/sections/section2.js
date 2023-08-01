import Link from "next/link"

export default function section2() {

    return(
        <>
            <header className="header-section-2">
                <div className="header-container-section-2">
                    <div className="header-image-section-2">
                        <Link href="/"><img src="/assets/img/logo/logo_white.png" alt="Logo"/></Link>
                    </div>
                    <div className="header-links-section-2">
                        <Link href="/sections/section1">Sección 1</Link>
                        <Link href="/sections/section2">Sección 2</Link>
                    </div>
                </div>
            </header>

            <div className="filtro-section-2">
                <h3>¿Dónde sera su próxima aventura?</h3>
                <h1>Filtros</h1>
                <div className="filtro-input-section-2">
                    <input type="text" placeholder="Ingresa un filtro" id="search-input-section-2"/>
                    <button className="btn btn-section-2">Buscar</button>
                </div>
            </div>

            <div className="result-section-2">
                <h1>Resultados de tu búsqueda</h1>
                <div>
                    <ul className="response-section-2">

                        <li className="result-reponse-section-2">
                            <p>Resultado 1</p>
                            <div className="result-image-section-2">
                                <img src="\assets\img\blog\blog_img01.jpg"></img>
                            </div>
                        </li>

                        <li className="result-reponse-section-2">
                            <p>Resultado 2</p>
                            <div className="result-image-section-2">
                                <img src="\assets\img\blog\blog_img02.jpg"></img>
                            </div>
                        </li>

                        <li className="result-reponse-section-2">
                            <p>Resultado 3</p>
                            <div className="result-image-section-2">
                                <img src="\assets\img\blog\blog_img03.jpg"></img>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

        </>    
    )
}