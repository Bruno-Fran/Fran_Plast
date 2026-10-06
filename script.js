// ================= MENU MOBILE TOGGLE =================
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// ================= BANCO DE FOTOS DOS PRODUTOS =================
const bancoDeFotos = {
  tricoline_estampado: [
    'img/tricoline-1.jpeg',
    'img/tricoline-2.jpeg',
    'img/tricoline-3.jpeg',
    'img/tricoline-4.jpeg',
    'img/tricoline-5.jpeg',
    'img/tricoline-6.jpeg',
    'img/tricoline-7.jpeg',
    'img/tricoline-8.jpeg',
    'img/tricoline-9.jpeg',
    'img/tricoline-10.jpeg',
    'img/tricoline-11.jpeg',
    'img/tricoline-12.jpeg',
  ],
  gorgurinho_estampado: [
    'img/gorgurinho-1.jpeg',
    'img/gorgurinho-2.jpeg',
    'img/gorgurinho-3.jpeg',
    'img/gorgurinho-4.jpeg',
    'img/gorgurinho-5.jpeg',
    'img/gorgurinho-6.jpeg',
    'img/gorgurinho-7.jpeg',
    'img/gorgurinho-8.jpeg',
    'img/gorgurinho-9.jpeg',
    'img/gorgurinho-10.jpeg',
    'img/gorgurinho-11.jpeg',
    'img/gorgurinho-12.jpeg',
  ],
  corino_estampado: [
    'img/corino-1.jpeg',
    'img/corino-2.jpeg',
    'img/corino-3.jpeg',
    'img/corino-4.jpeg',
    'img/corino-5.jpeg',
    'img/corino-6.jpeg',
    'img/corino-7.jpeg',
    'img/corino-8.jpeg',
    'img/corino-9.jpeg',
    'img/corino-10.jpeg',
    'img/corino-11.jpeg',
  ],
  oxford_estampado: [
    'img/oxford-1.jpeg',
    'img/oxford-2.jpeg',
    'img/oxford-3.jpeg',
    'img/oxford-4.jpeg',
    'img/oxford-5.jpeg',
    'img/oxford-6.jpeg',
    'img/oxford-7.jpeg',
    'img/oxford-8.jpeg',
    'img/oxford-9.jpeg',
    'img/oxford-10.jpeg',
    'img/oxford-11.jpeg',
    'img/oxford-12.jpeg',
  ],
  tactel_estampado: [
    'img/tactel-1.jpeg',
    'img/tactel-2.jpeg',
    'img/tactel-3.jpeg',
    'img/tactel-4.jpeg',
    'img/tactel-5.jpeg',
    'img/tactel-6.jpeg',
    'img/tactel-7.jpeg',
    'img/tactel-8.jpeg',
    'img/tactel-9.jpeg',
    'img/tactel-10.jpeg',
    'img/tactel-11.jpeg',
  ],
  ultrasoft_estampado: [
    'https://via.placeholder.com/400x300?text=Ultra+Soft+Estampa+1'
  ],
  pele_agatha_estampada: [
    'img/pele-1.jpeg',
    'img/pele-2.jpeg',
    'img/pele-3.jpeg',
    'img/pele-4.jpeg',
    'img/pele-5.jpeg',
    'img/pele-6.jpeg',
    'img/pele-7.jpeg',
  ],
  velboa_estampado: [
    'img/velboa-1.jpeg',
    'img/velboa-2.jpeg',
    'img/velboa-3.jpeg',
    'img/velboa-4.jpeg',
    'img/velboa-5.jpeg',
    'img/velboa-6.jpeg',
    'img/velboa-7.jpeg',
    'img/velboa-8.jpeg',
  ],
  sherpa_estampada: [
    'img/sherpa-1.jpeg',
    'img/sherpa-2.jpeg',
    'img/sherpa-3.jpeg',
    'img/sherpa-4.jpeg',
    'img/sherpa-5.jpeg',
    'img/sherpa-6.jpeg',
  ],
  dijon_estampado: [
    'img/dijon-1.jpeg',
    'img/dijon-2.jpeg',
    'img/dijon-3.jpeg',
    'img/dijon-4.jpeg',
    'img/dijon-5.jpeg',
    'img/dijon-6.jpeg',
    'img/dijon-7.jpeg',
    'img/dijon-8.jpeg',
  ],
  micropet_estampado: [
    'img/micropet_1.jpeg',
    'img/micropet_2.jpeg',
    'img/micropet_3.jpeg',
    'img/micropet_4.jpeg',
    'img/micropet_5.jpeg',
    'img/micropet_6.jpeg',
    'img/micropet_7.jpeg',
    'img/micropet_8.jpeg',
    'img/micropet_9.jpeg',
    'img/micropet_10.jpeg',
  ],
  toalha_mesa_estampada: [
    'img/toalha_1.jpeg',
    'img/toalha_2.jpeg',
    'img/toalha_3.jpeg',
    'img/toalha_4.jpeg',
    'img/toalha_5.jpeg',
    'img/toalha_6.jpeg',
    'img/toalha_7.jpeg',
    'img/toalha_8.jpeg',
  ],
  tactel_liso: [
    'img/tactel_liso-1.jpeg',
    'img/tactel_liso-2.jpeg',
    'img/tactel_liso-3.jpeg',
    'img/tactel_liso-4.jpeg',
    'img/tactel_liso-5.jpeg',
    'img/tactel_liso-6.jpeg',
    'img/tactel_liso-7.jpeg',
    'img/tactel_liso-8.jpeg',
  ],
  suede_liso: [
    'img/suede-1.jpeg',
    'img/suede-2.jpeg',
    'img/suede-3.jpeg',
    'img/suede-4.jpeg',
    'img/suede-5.jpeg',
    'img/suede-6.jpeg',
    'img/suede-7.jpeg',
    'img/suede-8.jpeg',
    'img/suede-9.jpeg',
    'img/suede-10.jpeg',
  ],
  bagum: [
    'img/bagum-1.jpeg',
    'img/bagum-2.jpeg',
    'img/bagum-3.jpeg',
    'img/bagum-4.jpeg',
    'img/bagum-5.jpeg',
    'img/bagum-6.jpeg',
    'img/bagum-7.jpeg',
    'img/bagum-8.jpeg',
    'img/bagum-9.jpeg',
    'img/bagum-10.jpeg',
    'img/bagum-11.jpeg',
    'img/bagum-12.jpeg',
  ],
  cristal: [
    'img/cristal-1.jpeg',
    'img/cristal-2.jpeg',
    'img/cristal-3.jpeg',
    'img/cristal-4.jpeg',
  ],
  tnt: [
    'img/tnt-1.jpeg',
    'img/tnt-2.jpeg',
    'img/tnt-3.jpeg',
    'img/tnt-4.jpeg',
    'img/tnt-5.jpeg',
    'img/tnt-6.jpeg',
    'img/tnt-7.jpeg',
    'img/tnt-8.jpeg',
    'img/tnt-9.jpeg',
    'img/tnt-10.jpeg',
  ],
  vies: [
    'img/vies-1.jpg',
    'img/vies-2.jpeg',
    'img/vies-3.jpeg',
    'img/vies-4.jpeg',
    'img/vies-5.jpeg',
    'img/vies-6.jpeg',
    'img/vies-7.jpeg',
    'img/vies-8.jpeg',
    'img/vies-9.jpeg',
    'img/vies-10.jpeg',
  ],
  linha: [
    'img/linha-1.jpeg',
    'img/linha-2.jpeg',
  ],
  ziper: [
    'img/ziper-1.jpeg',
    'img/ziper-2.jpeg',
    'img/ziper-3.jpeg',
    'img/ziper-4.jpeg',
    'img/ziper-5.jpeg',
    'img/ziper-6.jpeg',
    'img/ziper-7.jpeg',
    'img/ziper-8.jpeg',
    'img/ziper-9.jpeg',
  ],
  velcro: [
    'img/velcro-1.jpg',
    'img/velcro-2.jpg',
  ],
  tesoura: [
    'img/tesoura-1.jpeg',
    'img/tesoura-2.jpeg',
    'img/tesoura-3.jpeg',
  ],
  cursor: [
    'img/cursor-1.jpg',
    'img/cursor-2.jpeg',
  ]
};

const indicesAtual = {};

// ================= FUNÇÃO: MUDAR FOTO AO CLICAR NAS SETAS =================
function mudarFoto(idProduto, direcao) {
  if (!bancoDeFotos[idProduto]) return;

  if (indicesAtual[idProduto] === undefined) {
    indicesAtual[idProduto] = 0;
  }

  indicesAtual[idProduto] += direcao;

  if (indicesAtual[idProduto] < 0) {
    indicesAtual[idProduto] = bancoDeFotos[idProduto].length - 1;
  } else if (indicesAtual[idProduto] >= bancoDeFotos[idProduto].length) {
    indicesAtual[idProduto] = 0;
  }

  const imgElement = document.getElementById(`img-${idProduto}`);
  if (imgElement) {
    imgElement.src = bancoDeFotos[idProduto][indicesAtual[idProduto]];
  }
}

// ================= FUNÇÃO: GERAR LINK DO WHATSAPP COM LINK DIRETO DA IMAGEM =================
function enviarParaWhatsApp(tituloProduto, idElementoImg) {
  const imgElement = document.getElementById(`img-${idElementoImg}`);
  
  // Pega o URL completo da imagem exibida na tela no momento
  const urlFotoCompleta = imgElement ? imgElement.src : '';
  
  // Extrai o nome do arquivo (ex: tricoline-estampado-2.jpg)
  const nomeArquivo = urlFotoCompleta.substring(urlFotoCompleta.lastIndexOf('/') + 1);

  const textoMensagem = 
`Olá! Vim pelo site da Fran Plast.

Gostaria de solicitar um orçamento para:
📌 *Produto:* ${tituloProduto}
🎨 *Modelo/Foto Selecionada:* ${nomeArquivo}
🖼️ *Link da Foto:* ${urlFotoCompleta}`;

  const numeroWhatsApp = "5511965050312"; // Número Fran Plast
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoMensagem)}`;

  window.open(urlWhatsApp, '_blank');
}

// Variável global para guardar o ID do produto atualmente aberto na modal
let produtoModalAtual = '';

// ================= FUNÇÃO: ABRIR APENAS A FOTO NA MODAL =================
function abrirModalProduto(titulo, idElementoImg) {
  produtoModalAtual = idElementoImg;

  const imgElement = document.getElementById(`img-${idElementoImg}`);
  const urlFoto = imgElement ? imgElement.src : '';

  document.getElementById('modalImagem').src = urlFoto;
  document.getElementById('modalProduto').classList.add('active');
}

// Alternar foto de dentro da janela
function mudarFotoModal(direcao) {
  if (!produtoModalAtual || !bancoDeFotos[produtoModalAtual]) return;

  mudarFoto(produtoModalAtual, direcao);
  const novaFoto = document.getElementById(`img-${produtoModalAtual}`).src;
  document.getElementById('modalImagem').src = novaFoto;
}

function fecharModalProduto() {
  document.getElementById('modalProduto').classList.remove('active');
}

// ================= FUNÇÃO: BARRA DE BUSCA EM TEMPO REAL =================
function filtrarProdutos() {
  const termo = document.getElementById('inputBusca').value.toLowerCase();
  const cards = document.querySelectorAll('.product-card');

  cards.forEach(card => {
    const texto = card.innerText.toLowerCase();
    if (texto.includes(termo)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}