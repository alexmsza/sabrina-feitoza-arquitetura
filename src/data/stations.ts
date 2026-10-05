import { Station } from '../types/index.ts';

export const STATIONS: Station[] = [
  {
    id: 1,
    title: "01. Aproximação & Vista da Estrada",
    subtitle: "Chegada ao Empreendimento",
    image: "/assets/images/01_portao_distante.jpg",
    mapCoords: { x: 40, y: 260 },
    heading: 45,
    description: "Visão panorâmica da via de acesso com topografia natural e primeiro vislumbre do pórtico monumental.",
    hotspots: [
      { x: 50, y: 48, title: "Pórtico ao Longe", desc: "Volumetria contemporânea perfeitamente integrada ao horizonte campestre." },
      { x: 25, y: 70, title: "Acesso Principal", desc: "Via pavimentada com canteiros floridos e iluminação balizadora." }
    ]
  },
  {
    id: 2,
    title: "02. Pórtico Frontal Monumental",
    subtitle: "Fachada Principal & Acesso",
    image: "/assets/images/02_portao_frente.jpg",
    mapCoords: { x: 80, y: 215 },
    heading: 55,
    description: "Estrutura monumental em madeira nobre ripada, iluminação linear e guarita de segurança integrada.",
    hotspots: [
      { x: 42, y: 42, title: "Ripado em Madeira Nobre", desc: "Tratamento UV com durabilidade superior e acolhimento sensorial." },
      { x: 62, y: 55, title: "Controle de Acesso", desc: "Pistas segregadas para moradores e visitantes com leitura biométrica." }
    ]
  },
  {
    id: 3,
    title: "03. Guarita & Controle de Acesso",
    subtitle: "Segurança & Recepção",
    image: "/assets/images/03_portao_guarita.jpg",
    mapCoords: { x: 110, y: 185 },
    heading: 60,
    description: "Cobertura em balanço com linhas puras e acabamentos em concreto e vidro.",
    hotspots: [
      { x: 38, y: 46, title: "Cobertura em Balanço", desc: "Design minimalista oferecendo proteção climática elegante." },
      { x: 70, y: 60, title: "Paisagismo Tropical", desc: "Composição harmônica com palmeiras e forrações aromáticas." }
    ]
  },
  {
    id: 4,
    title: "04. Perspectiva Lateral & Jardins",
    subtitle: "Harmonia com a Natureza",
    image: "/assets/images/04_entrada_lateral.jpg",
    mapCoords: { x: 145, y: 155 },
    heading: 75,
    description: "Integração contínua entre arquitetura construída e jardins verticais.",
    hotspots: [
      { x: 35, y: 52, title: "Muro Verde & Jardins", desc: "Espécies tropicais nativas com rega automatizada sustentável." },
      { x: 68, y: 40, title: "Iluminação Cênica", desc: "Fitas de LED 3000K proporcionando luz dourada e atmosfera intimista." }
    ]
  },
  {
    id: 5,
    title: "05. Pórtico de Entrada Interno",
    subtitle: "Transição para o Boulevard",
    image: "/assets/images/05_portico_entrada.jpg",
    mapCoords: { x: 180, y: 130 },
    heading: 80,
    description: "Entrada interna que conduz pedestres e veículos ao eixo principal do condomínio.",
    hotspots: [
      { x: 48, y: 50, title: "Pavimento Drenante", desc: "Blocos intertravados que preservam a permeabilidade do solo." },
      { x: 22, y: 45, title: "Pórtico Interno", desc: "Estrutura robusta em concreto e detalhes metálicos." }
    ]
  },
  {
    id: 6,
    title: "06. Boulevard Central & Alamedas",
    subtitle: "Circulação e Convivência",
    image: "/assets/images/06_boulevard_alameda.jpg",
    mapCoords: { x: 215, y: 105 },
    heading: 85,
    description: "Ampla alameda arborizada com fiação subterrânea e passeios seguros para famílias.",
    hotspots: [
      { x: 50, y: 45, title: "Alameda das Árvores", desc: "Eixo de sombreamento natural para passeios matinais e entardecer." },
      { x: 75, y: 65, title: "Passeio Pedestre", desc: "Calçadas amplas com acessibilidade total." }
    ]
  },
  {
    id: 7,
    title: "07. Vista em Perspectiva da Capela",
    subtitle: "Aproximação do Ponto Focal",
    image: "/assets/images/07_vista_capela.jpg",
    mapCoords: { x: 255, y: 75 },
    heading: 90,
    description: "Enquadramento icônico da capela ao fundo do parque central.",
    hotspots: [
      { x: 50, y: 38, title: "Silhueta A-Frame", desc: "Geometria triangular marcante com referências contemporâneas e nórdicas." },
      { x: 30, y: 60, title: "Gramado Central", desc: "Espaço verde de convivência para contemplação da paisagem." }
    ]
  },
  {
    id: 8,
    title: "08. Capela Villa Bella (Ponto Focal)",
    subtitle: "Arquitetura Sagrada & Ecumênica",
    image: "/assets/images/08_capela_aframe.jpg",
    mapCoords: { x: 285, y: 45 },
    heading: 90,
    description: "Templo em madeira laminada colada e grandes panos de vidro que conectam o sagrado à natureza.",
    hotspots: [
      { x: 50, y: 35, title: "Madeira Engenheirada", desc: "Vigas de alta precisão estética e sustentabilidade comprovada." },
      { x: 50, y: 62, title: "Fachada de Vidro Panorâmico", desc: "Transparência total que permite a entrada de luz zenital suave." }
    ]
  }
];

export const VIDEOS = [
  {
    id: "dolly",
    title: "Caminhada até a Capela (Dolly Forward)",
    file: "/assets/videos/caminhada_capela_dolly.mp4",
    duration: "HD Cinema"
  },
  {
    id: "flythrough",
    title: "Voo de Drone pelo Boulevard",
    file: "/assets/videos/drone_flythrough.mp4",
    duration: "4K Aerial"
  },
  {
    id: "tour",
    title: "Tour Aéreo Panorâmico do Empreendimento",
    file: "/assets/videos/drone_tour_completo.mp4",
    duration: "Masterplan View"
  }
];
