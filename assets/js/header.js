const headerElement = document.querySelector('.site-header');

const headerHTML = `
        <a href="../index.html"><img src="../assets/img/logo/tauri_logo2.webp" alt="Logo GuiaJanu" class="logo-header"></a>
        
        <input type="checkbox" id="menu-mobile-check" class="menu-checkbox" hidden>

        <nav class="main-nav">
            <ul class="nav-links">
                
                <li><a href="../index.html">Início</a></li>
                
                <li>
                    <input type="checkbox" id="drop-1" class="drop-checkbox" hidden>
            
                    <label for="drop-1" class="link-wrapper">
                        <span class="drop-text">Descubra Januária</span>
                        <span class="drop-icon">▾</span>
                    </label>

                    <ul class="dropdown">
                        <li><a href="../pages/a_cidade.html">A cidade</a></li>
                        <li><a href="../pages/como_chegar.html">Como chegar</a></li>
                    </ul>
                </li>
                
                <li><a href="./listagem_pontos_turisticos.html">O que fazer</a></li>
                <li><a href="./em_construcao.html">Onde comer</a></li>
                <li><a href="./em_construcao.html">Onde ficar</a></li>
                
                <li>
                    <input type="checkbox" id="drop-2" class="drop-checkbox" hidden>
                    
                    <label for="drop-2" class="link-wrapper">
                        <span class="drop-text">Mais</span>
                        <span class="drop-icon">▾</span>
                    </label>

                    <ul class="dropdown">
                        <li><a href="../pages/cat.html">CAT</a></li>
                        <li><a href="../pages/guia_oficial.html">Guia Oficial</a></li>
                        <li><a href="../pages/about_us.html">Sobre nós</a></li>
                    </ul>
                </li>
            </ul>
        </nav>

        <div class="header-right">
            <a href="https://www.instagram.com/guia.janu" class="social-icon" target="_blank">
                <img src="../assets/img/social_icons/insta_logo.webp" alt="Instagram">
            </a>
            <label for="menu-mobile-check" class="menu-toggle" aria-label="Abrir e Fechar menu"></label>
        </div>
`;

if (headerElement) {
    headerElement.innerHTML = headerHTML;
}