// 1. Banco de dados com todos os itens formatados com objetos { src: "..." }
const bancoDeGalerias = {
  mercado_municipal: [
    { src: "../../assets/img/pontos_turisticos_img/mercado_municipal/IMG_0036.webp" },
    { src: "../../assets/img/pontos_turisticos_img/mercado_municipal/IMG_0037.webp" },
    { src: "../../assets/img/pontos_turisticos_img/mercado_municipal/IMG_0038.webp" },
    { src: "../../assets/img/pontos_turisticos_img/mercado_municipal/IMG_0041.webp" },
    { src: "../../assets/img/pontos_turisticos_img/mercado_municipal/IMG_0043.webp" },
    { src: "../../assets/img/pontos_turisticos_img/mercado_municipal/IMG_0044.webp" },
    { src: "../../assets/img/pontos_turisticos_img/mercado_municipal/IMG_0045.webp" },
    { src: "../../assets/img/pontos_turisticos_img/mercado_municipal/IMG_0048.webp" },
    { src: "../../assets/img/pontos_turisticos_img/mercado_municipal/IMG_0051.webp" },
    { src: "../../assets/img/pontos_turisticos_img/mercado_municipal/IMG_0054.webp" },
    { src: "../../assets/img/pontos_turisticos_img/mercado_municipal/IMG_0058.webp" },
    { src: "../../assets/img/pontos_turisticos_img/mercado_municipal/IMG_0061.webp" },
    { src: "../../assets/img/pontos_turisticos_img/mercado_municipal/IMG_0062.webp" },
    { src: "../../assets/img/pontos_turisticos_img/mercado_municipal/IMG_0063.webp" },
    { src: "../../assets/img/pontos_turisticos_img/mercado_municipal/IMG_0064.webp" },
    { src: "../../assets/img/pontos_turisticos_img/mercado_municipal/IMG_0067.webp" },
    { src: "../../assets/img/pontos_turisticos_img/mercado_municipal/IMG_0068.webp" },
    { src: "../../assets/img/pontos_turisticos_img/mercado_municipal/IMG_0069.webp" },
    { src: "../../assets/img/pontos_turisticos_img/mercado_municipal/IMG_0071.webp" },
    { src: "../../assets/img/pontos_turisticos_img/mercado_municipal/IMG_0074.webp" }
  ],

  cais: [
    {
      src: "../../assets/img/pontos_turisticos_img/Cais/fotos_antigas/foto_cais_antigo_1.webp",
      copyright: "Foto antiga do Cais (© GORHAM, 1927)"
    },
    {
      src: "../../assets/img/pontos_turisticos_img/Cais/fotos_antigas/foto_antigo_cais_coronel_rocha_collares_2008_1.webp",
      copyright: "Antigo Cais Coronel Rocha.<br>Foto Collares. In PEREIRA, A. E. Januária relicário fotográfico.<br>Belo Horizonte, 2008."
    },
    {
      src: "../../assets/img/pontos_turisticos_img/Cais/fotos_antigas/foto_antigo_cais_coronel_rocha_collares_2008_2.webp",
      copyright: "Antigo Cais Coronel Rocha.<br>Foto Collares. In PEREIRA, A. E. Januária relicário fotográfico.<br>Belo Horizonte, 2008."
    },
    {
      src: "../../assets/img/pontos_turisticos_img/Cais/fotos_antigas/foto_antigo_cais_coronel_rocha_collares_2008_4.webp",
      copyright: "Antigo Cais Coronel Rocha.<br>Foto Collares. In PEREIRA, A. E. Januária relicário fotográfico.<br>Belo Horizonte, 2008."
    },
    {
      src: "../../assets/img/pontos_turisticos_img/Cais/fotos_antigas/foto_antigo_cais_coronel_rocha_collares_2008_3.webp",
      copyright: "Antigo Cais Coronel Rocha.<br>Foto Collares. In PEREIRA, A. E. Januária relicário fotográfico.<br>Belo Horizonte, 2008."
    },
    {
      src: "../../assets/img/pontos_turisticos_img/Cais/fotos_antigas/foto_antigo_cais_coronel_rocha_collares_2008_5.webp",
      copyright: "Cais de Januária nos anos 70.<br>Foto Collares. In PEREIRA, A. E. Januária relicário fotográfico.<br>Belo Horizonte, 2008."
    },
    { src: "../../assets/img/pontos_turisticos_img/Cais/cais_foto_2.webp" },
    { src: "../../assets/img/pontos_turisticos_img/Cais/cais_foto_3.webp" },
    {
      src: "../../assets/img/pontos_turisticos_img/Cais/cais_foto_1.webp",
      copyright: "© @la_belle_janu"
    },
    { src: "../../assets/img/pontos_turisticos_img/Cais/cais_foto_4.webp" },
    { src: "../../assets/img/pontos_turisticos_img/Cais/cais_foto_5.webp" },
    { src: "../../assets/img/pontos_turisticos_img/Cais/cais_foto_6.webp" },
    { src: "../../assets/img/pontos_turisticos_img/Cais/cais_foto_7.webp" },
    { src: "../../assets/img/pontos_turisticos_img/Cais/cais_foto_8.webp" },
    { src: "../../assets/img/pontos_turisticos_img/Cais/cais_foto_9.webp" },
    { src: "../../assets/img/pontos_turisticos_img/Cais/cais_foto_10.webp" },
    { src: "../../assets/img/pontos_turisticos_img/Cais/cais_foto_11.webp" },
    { src: "../../assets/img/pontos_turisticos_img/Cais/cais_foto_12.webp" },
    { src: "../../assets/img/pontos_turisticos_img/Cais/cais_foto_13.webp" },
    { src: "../../assets/img/pontos_turisticos_img/Cais/cais_foto_14.webp" },
    { src: "../../assets/img/pontos_turisticos_img/Cais/cais_foto_15.webp" },
    { src: "../../assets/img/pontos_turisticos_img/Cais/cais_foto_16.webp" },
    { src: "../../assets/img/pontos_turisticos_img/Cais/cais_foto_17.webp" },
    { src: "../../assets/img/pontos_turisticos_img/Cais/cais_foto_18.webp" },
    { src: "../../assets/img/pontos_turisticos_img/Cais/cais_foto_19.webp" },
    { src: "../../assets/img/pontos_turisticos_img/Cais/cais_foto_20.webp" },
    { src: "../../assets/img/pontos_turisticos_img/Cais/cais_foto_21.webp" },
    { src: "../../assets/img/pontos_turisticos_img/Cais/cais_foto_22.webp" }
  ]
};

// 2. Lógica genérica de renderização
function carregarCarrosseis() {
  const elementosCarrossel = document.querySelectorAll('[data-galeria]');

  elementosCarrossel.forEach(container => {
    const idGaleria = container.getAttribute('data-galeria');
    const imagens = bancoDeGalerias[idGaleria];

    if (!imagens || imagens.length === 0) return;

    const carrossel3d = container.querySelector('.carrossel-3d');
    const indicadoresContainer = container.querySelector('.indicadores');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');

    let current = 0;

    // Renderiza slides e pontos dinamicamente
    imagens.forEach((item, index) => {
      const src = item.src;
      const copyright = item.copyright || '© Guia Janu';

      // Criar Slide
      const slide = document.createElement('div');
      slide.className = 'slide';
      slide.innerHTML = `
        <div class="slide-img-wrapper">
          <img src="${src}" alt="Foto ${index + 1} da galeria" loading="lazy">
          <div class="copyright-tag">${copyright}</div>
        </div>
      `;
      carrossel3d.appendChild(slide);

      // Criar Dot
      const dot = document.createElement('span');
      dot.className = 'dot';
      dot.addEventListener('click', () => {
        current = index;
        atualizar();
      });
      indicadoresContainer.appendChild(dot);
    });

    // Atualiza classes 3D e visibilidade
    function atualizar() {
      const slides = carrossel3d.querySelectorAll('.slide');
      const dots = indicadoresContainer.querySelectorAll('.dot');
      const total = slides.length;

      slides.forEach(slide => slide.classList.remove('center', 'left', 'right', 'hidden'));
      dots.forEach(dot => dot.classList.remove('active'));

      const prev = (current - 1 + total) % total;
      const next = (current + 1) % total;

      slides[current].classList.add('center');
      slides[prev].classList.add('left');
      slides[next].classList.add('right');
      dots[current].classList.add('active');

      slides.forEach((slide, i) => {
        if (i !== current && i !== prev && i !== next) {
          slide.classList.add('hidden');
        }
      });
    }

    // Botões de navegação
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        current = (current + 1) % imagens.length;
        atualizar();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        current = (current - 1 + imagens.length) % imagens.length;
        atualizar();
      });
    }

    atualizar();
  });
}

document.addEventListener('DOMContentLoaded', carregarCarrosseis);