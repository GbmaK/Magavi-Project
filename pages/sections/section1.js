
export default function section1() {

    return(
        <>
            <header className="header-section">
                <div class="header-container-section">
                    <div className="header-image-section">
                        <img src="/assets/img/logo/logo_white.png" alt="Logo"/>
                    </div>
                    <div class="header-links-section">
                        <a href="#">Sección 1</a>
                        <a href="#">Sección 2</a>
                    </div>
                </div>
            </header>

            <div class="filtro-section">
                <h3>¿Donde sera su proxima aventura?</h3>
                <h1>Filtro</h1>
                <div class="filtro-input-section">
                    <input type="text" placeholder="Ingresa un filtro" id="search-input-section"/>
                    <button>Buscar</button>
                </div>
            </div>

            <div class="resultados">
            </div>

        </>    
    )
}