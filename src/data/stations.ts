import { Station } from '../types/index.ts';

export const STATIONS: Station[] = [
  {
    id: 1,
    title: "01. Pórtico Monumental & Fonte",
    subtitle: "Acesso Principal & Recepção",
    image: "/assets/images/station_01_portaria_intertravado.jpg",
    mapCoords: { x: 30, y: 260 },
    heading: 45,
    description: "Pórtico monumental com muro em pedra natural, mandala dourada retroiluminada, fonte ornamental central e pavimento em piso intertravado de concreto permeável cinza grafite.",
    hotspots: [
      { x: 20, y: 45, title: "Muro em Pedra & Mandala", desc: "Alvenaria em pedra natural com brasão floral dourado iluminado por LED 3000K." },
      { x: 58, y: 64, title: "Fonte Ornamental", desc: "Chafariz clássico escalonado com bacia circular e espelho d'água." },
      { x: 45, y: 85, title: "Piso Intertravado Permeável", desc: "Bloquetes cinza grafite drenantes garantindo sustentabilidade e elegância." }
    ]
  },
  {
    id: 2,
    title: "02. Boulevard Central & Alamedas",
    subtitle: "Eixo de Circulação & Paisagismo",
    image: "/assets/images/station_02_boulevard_alameda.jpg",
    mapCoords: { x: 60, y: 230 },
    heading: 55,
    description: "Alameda principal arborizada com fiação subterrânea, canteiros verdes floridos e ampla via em piso intertravado contínuo com vista para o horizonte.",
    hotspots: [
      { x: 50, y: 38, title: "Eixo Paisagístico", desc: "Sombreamento natural por árvores nativas e canteiros contínuos." },
      { x: 40, y: 80, title: "Pavimento Drenante", desc: "Blocos intertravados que preservam a permeabilidade natural do solo." }
    ]
  },
  {
    id: 3,
    title: "03. Alameda dos Pássaros & Vagas",
    subtitle: "Circulação & Estacionamento Integrado",
    image: "/assets/images/station_03_acesso_vagas.jpg",
    mapCoords: { x: 90, y: 200 },
    heading: 60,
    description: "Pista interna do condomínio com demarcação nítida de vagas de estacionamento em pintura termoplástica sobre o piso intertravado.",
    hotspots: [
      { x: 30, y: 60, title: "Vagas Demarcadas", desc: "Faixas contínuas organizando o estacionamento com precisão." },
      { x: 60, y: 40, title: "Iluminação Balizadora", desc: "Postes contemporâneos com iluminação LED direcionada." }
    ]
  },
  {
    id: 4,
    title: "04. Aproximação da Capela Ecumênica",
    subtitle: "Espelho d'Água & Harmonia",
    image: "/assets/images/station_04_capela_espelho.jpg",
    mapCoords: { x: 120, y: 170 },
    heading: 75,
    description: "Enquadramento frontal da Capela A-Frame flutuando sobre espelho d'água com iluminação linear quente 3000K nos degraus de acesso.",
    hotspots: [
      { x: 50, y: 42, title: "Silhueta A-Frame", desc: "Geometria triangular marcante com referências contemporâneas e nórdicas." },
      { x: 50, y: 65, title: "Espelho d'Água", desc: "Reflexão serena do pôr do sol e integração paisagística biofílica." }
    ]
  },
  {
    id: 5,
    title: "05. Capela Villa Bella (Ponto Focal)",
    subtitle: "Arquitetura Sagrada Contemporânea",
    image: "/assets/images/station_05_capela_aframe.jpg",
    mapCoords: { x: 150, y: 140 },
    heading: 90,
    description: "Templo em madeira engenheirada com cruz latina minimalista, piso em cerâmica cinza fosca e integração total com a paisagem natural.",
    hotspots: [
      { x: 50, y: 35, title: "Madeira Engenheirada", desc: "Vigas de alta precisão estética e sustentabilidade comprovada." },
      { x: 50, y: 55, title: "Cruz Latina Minimalista", desc: "Ponto focal sereno e atemporal para contemplação e celebração." },
      { x: 50, y: 85, title: "Piso Cerâmico Fosco", desc: "Acabamento nobre e atemporal, substituindo cimento queimado para maior conforto visual." }
    ]
  },
  {
    id: 6,
    title: "06. Mercado Autônomo & Carport Solar",
    subtitle: "Conveniência 24/7 & Mobilidade Elétrica",
    image: "/assets/images/station_06_mercado_solar.jpg",
    mapCoords: { x: 180, y: 120 },
    heading: 100,
    description: "Pavilhão moderno em aço galvanizado trapezoidal preto com iluminação 3000K, integrado ao carport fotovoltaico para recarga de veículos elétricos.",
    hotspots: [
      { x: 28, y: 46, title: "Mercado 24/7", desc: "Conveniência autônoma com fachada envidraçada e iluminação cênica acolhedora." },
      { x: 65, y: 48, title: "Carport Fotovoltaico", desc: "Cobertura de placas solares com totens de recarga para carros elétricos." }
    ]
  },
  {
    id: 7,
    title: "07. Complexo Aquático & Bangalôs Resort",
    subtitle: "Lazer Aquático & Gastronomia",
    image: "/assets/images/station_07_complexo_aquatico.jpg",
    mapCoords: { x: 210, y: 100 },
    heading: 120,
    description: "Piscinas com águas cristalinas em tons turquesa, decks de madeira nobre e bangalôs privativos com churrasqueiras em pedra natural.",
    hotspots: [
      { x: 50, y: 60, title: "Piscinas Resort", desc: "Águas cristalinas com iluminação subaquática e caustics naturais." },
      { x: 80, y: 45, title: "Bangalôs Gourmet", desc: "Estruturas em pergolado de madeira com bancadas e churrasqueiras privativas." }
    ]
  },
  {
    id: 8,
    title: "08. Playground Infantil & Recreação",
    subtitle: "Espaço Kids & Convivência Familiar",
    image: "/assets/images/station_08_playground_infantil.jpg",
    mapCoords: { x: 240, y: 80 },
    heading: 135,
    description: "Brinquedos contemporâneos em madeira escandinava, caixas de areia branca higienizada com bordas em concreto arredondado e sombra natural.",
    hotspots: [
      { x: 50, y: 55, title: "Brinquedos em Madeira", desc: "Equipamentos lúdicos de design nórdico e alta durabilidade ecológica." },
      { x: 30, y: 70, title: "Bordas Arredondadas", desc: "Segurança total com concreto moldado sem quinas e areia fina filtrada." }
    ]
  },
  {
    id: 9,
    title: "09. Arena Poliesportiva Solar & Beach Tennis",
    subtitle: "Esporte, Saúde & Autossuficiência",
    image: "/assets/images/station_09_quadra_solar.jpg",
    mapCoords: { x: 270, y: 60 },
    heading: 150,
    description: "Arena poliesportiva coberta com cobertura fotovoltaica angular de alta tecnologia, quadra de beach tennis com areia fina e calçadão para caminhadas.",
    hotspots: [
      { x: 40, y: 40, title: "Arena Esportiva Solar", desc: "Piso acrílico oficial azul/verde e cobertura 100% fotovoltaica autossuficiente." },
      { x: 20, y: 65, title: "Quadra de Beach Tennis", desc: "Espaço de areia com rede oficial para práticas esportivas ao ar livre." }
    ]
  },
  {
    id: 10,
    title: "10. Salão de Festas & Pátio Gourmet",
    subtitle: "Celebração, Design & Convivência",
    image: "/assets/images/station_10_salao_de_festas.jpg",
    mapCoords: { x: 295, y: 40 },
    heading: 165,
    description: "Espaço de eventos com volumetria contemporânea em alvenaria branca, parede de pedra com canais de LED vertical, carport solar e pátio em piso intertravado.",
    hotspots: [
      { x: 35, y: 42, title: "Parede em Pedra com LED", desc: "Três pilastras verticais em pedra natural com fitas de LED 3000K embutidas." },
      { x: 58, y: 50, title: "Pórtico Chanfrado", desc: "Entrada monumental em concreto escuro e portas amplas de vidro duplo." },
      { x: 15, y: 48, title: "Carport Solar Integrado", desc: "Estrutura metálica com placas solares e vagas cobertas para veículos elétricos." }
    ]
  }
];

export const VIDEOS = [
  {
    id: "portaria",
    title: "Pórtico Monumental & Fonte (Área 01)",
    file: "/assets/videos/drone_flythrough.mp4",
    duration: "FHD Cinema"
  },
  {
    id: "dolly",
    title: "Caminhada até a Capela (Piso Intertravado)",
    file: "/assets/videos/caminhada_capela_dolly.mp4",
    duration: "FHD Cinema"
  },
  {
    id: "travessia",
    title: "Travessia Portaria & Alameda da Capela",
    file: "/assets/videos/drone_tour_completo.mp4",
    duration: "FHD Cinema"
  },
  {
    id: "capela_int",
    title: "Imersão Interna na Capela A-Frame",
    file: "/assets/videos/capela_interior.mp4",
    duration: "Interior Walk"
  },
  {
    id: "mercado",
    title: "Mercado & Carport Solar (Área 02)",
    file: "/assets/videos/mercado_solar.mp4",
    duration: "FHD Cinema"
  },
  {
    id: "piscina",
    title: "Complexo Aquático & Bangalôs (Área 03)",
    file: "/assets/videos/complexo_aquatico.mp4",
    duration: "Resort Walk"
  },
  {
    id: "playground",
    title: "Playground & Lazer Infantil (Área 04)",
    file: "/assets/videos/playground.mp4",
    duration: "Family Tour"
  },
  {
    id: "quadra",
    title: "Arena Esportiva Solar (Área 05)",
    file: "/assets/videos/quadra_esportiva.mp4",
    duration: "Sports Arena"
  },
  {
    id: "salao",
    title: "Salão de Festas & Pátio (Área 06)",
    file: "/assets/videos/salao_de_festas.mp4",
    duration: "Clubhouse Night"
  }
];
