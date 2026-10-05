/**
 * SABRINA FEITOZA | ARQUITETURA
 * Motor de Interação em Primeira Pessoa & Walkthrough Villa Bella III
 */

// Configuração das Estações do Percurso Pedestre
const STATIONS = [
  {
    id: 1,
    title: "01. Aproximação & Vista da Estrada",
    subtitle: "Chegada ao Empreendimento",
    image: "assets/images/01_portao_distante.jpg",
    mapCoords: { x: 40, y: 260 },
    heading: 45,
    description: "Visão panorâmica da via de acesso com vegetação nativa preservada e primeiro enquadramento do pórtico.",
    hotspots: [
      { x: 50, y: 48, title: "Pórtico ao Longe", desc: "Volumetria contemporânea emoldurada pela topografia natural." },
      { x: 25, y: 70, title: "Acesso Principal", desc: "Via pavimentada com drenagem e canteiros laterais." }
    ]
  },
  {
    id: 2,
    title: "02. Pórtico Frontal Monumental",
    subtitle: "Fachada Principal & Acesso",
    image: "assets/images/02_portao_frente.jpg",
    mapCoords: { x: 80, y: 215 },
    heading: 55,
    description: "Estrutura monumental com brises de madeira, iluminação embutida e guarita blindada integrada.",
    hotspots: [
      { x: 42, y: 42, title: "Ripado em Madeira Nobre", desc: "Tratamento UV e durabilidade com conforto térmico." },
      { x: 62, y: 55, title: "Controle de Acesso", desc: "Pistas duplas para moradores e visitantes com cancelas automáticas." }
    ]
  },
  {
    id: 3,
    title: "03. Guarita & Controle de Acesso",
    subtitle: "Segurança & Recepção",
    image: "assets/images/03_portao_guarita.jpg",
    mapCoords: { x: 110, y: 185 },
    heading: 60,
    description: "Detalhe da guarita de segurança com pele de vidro reflexivo e cobertura em balanço.",
    hotspots: [
      { x: 38, y: 46, title: "Cobertura em Balanço", desc: "Design minimalista e proteção climática contínua." },
      { x: 70, y: 60, title: "Paisagismo de Entrada", desc: "Composição com palmeiras ornamentais e forrações." }
    ]
  },
  {
    id: 4,
    title: "04. Perspectiva Lateral & Jardins",
    subtitle: "Harmonia com a Natureza",
    image: "assets/images/04_entrada_lateral.jpg",
    mapCoords: { x: 145, y: 155 },
    heading: 75,
    description: "Vista angular evidenciando a fluidez das linhas retas e a integração do muro verde.",
    hotspots: [
      { x: 35, y: 52, title: "Muro Verde & Jardins", desc: "Espécies tropicais de baixa manutenção e alta exuberância." },
      { x: 68, y: 40, title: "Iluminação Cênica", desc: "Fitas de LED 3000K proporcionando luz acolhedora ao entardecer." }
    ]
  },
  {
    id: 5,
    title: "05. Pórtico de Entrada Interno",
    subtitle: "Transição para o Boulevard",
    image: "assets/images/05_portico_entrada.jpg",
    mapCoords: { x: 180, y: 130 },
    heading: 80,
    description: "Momento da transição entre a recepção e o interior arborizado do condomínio.",
    hotspots: [
      { x: 48, y: 50, title: "Pavimento Permeável", desc: "Pisos intertravados que auxiliam na drenagem sustentável." },
      { x: 22, y: 45, title: "Pórtico Interno", desc: "Acabamento em concreto aparente e perfis metálicos." }
    ]
  },
  {
    id: 6,
    title: "06. Boulevard Central & Alamedas",
    subtitle: "Circulação e Convivência",
    image: "assets/images/06_boulevard_alameda.jpg",
    mapCoords: { x: 215, y: 105 },
    heading: 85,
    description: "Alameda principal ampla com fiação subterrânea e arborização cênica.",
    hotspots: [
      { x: 50, y: 45, title: "Alameda das Árvores", desc: "Eixo visual contínuo com sombreamento natural para pedestres." },
      { x: 75, y: 65, title: "Passeio Pedestre", desc: "Calçadas largas pensadas para caminhadas e lazer familiar." }
    ]
  },
  {
    id: 7,
    title: "07. Vista em Perspectiva da Capela",
    subtitle: "Aproximação do Ponto Focal",
    image: "assets/images/07_vista_capela.jpg",
    mapCoords: { x: 255, y: 75 },
    heading: 90,
    description: "Enquadramento dramático da capela A-frame ao fim da alameda principal.",
    hotspots: [
      { x: 50, y: 38, title: "Silhueta A-Frame", desc: "Geometria triangular icônica inspirada em arquitetura biofílica nórdica." },
      { x: 30, y: 60, title: "Gramado Central", desc: "Área verde de contemplação e eventos ao ar livre." }
    ]
  },
  {
    id: 8,
    title: "08. Capela Villa Bella (Ponto Focal)",
    subtitle: "Arquitetura Sagrada & Ecumênica",
    image: "assets/images/08_capela_aframe.jpg",
    mapCoords: { x: 285, y: 45 },
    heading: 90,
    description: "Obras-primas em madeira laminada, vitrais translúcidos e altar banhado por luz natural.",
    hotspots: [
      { x: 50, y: 35, title: "Viga Estrutural em Madeira", desc: "Madeira engenheirada com alta resistência e calor sensorial." },
      { x: 50, y: 62, title: "Fachada de Vidro Transparente", desc: "Integração total entre a espiritualidade interna e a mata externa." }
    ]
  }
];

// Estado da Aplicação
const state = {
  currentStationIndex: 0,
  currentMode: 'walk', // 'walk' ou 'video'
  currentLighting: 'day', // 'day', 'golden', 'night'
  isAudioPlaying: false,
  isWalking: false,
  panOffset: { x: 0, y: 0 },
  isDragging: false,
  dragStart: { x: 0, y: 0 }
};

// Motor de Áudio Sintetizado (Web Audio API)
let audioCtx = null;
let ambientGain = null;

function initAudio() {
  if (audioCtx) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();

    // Ruído suave de brisa / vento sutil
    const bufferSize = audioCtx.sampleRate * 2;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = audioCtx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Filtro Passa-Baixa para simular vento suave
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 280;

    ambientGain = audioCtx.createGain();
    ambientGain.gain.value = 0.04;

    whiteNoise.connect(filter);
    filter.connect(ambientGain);
    ambientGain.connect(audioCtx.destination);
    whiteNoise.start(0);
  } catch (e) {
    console.warn("Áudio não suportado ou bloqueado pelo navegador", e);
  }
}

function playFootstepSound() {
  if (!state.isAudioPlaying || !audioCtx) return;
  try {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(90, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(35, audioCtx.currentTime + 0.12);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(250, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.14);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.15);
  } catch (e) {}
}

function toggleAudio() {
  initAudio();
  state.isAudioPlaying = !state.isAudioPlaying;
  const audioBtn = document.getElementById('audio-toggle-btn');
  const audioIcon = document.getElementById('audio-icon');

  if (state.isAudioPlaying) {
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    if (ambientGain) ambientGain.gain.value = 0.05;
    audioBtn.classList.add('active');
    audioBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
      </svg>
      Som: Ligado
    `;
  } else {
    if (ambientGain) ambientGain.gain.value = 0;
    audioBtn.classList.remove('active');
    audioBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
      </svg>
      Som: Mudo
    `;
  }
}

// Atualiza a Estação Atual no Visualizador
function goToStation(index, animated = true) {
  if (index < 0 || index >= STATIONS.length) return;
  state.currentStationIndex = index;
  const station = STATIONS[index];

  // Disparar Som e Animação de Passos
  if (animated) {
    state.isWalking = true;
    const viewport = document.getElementById('walk-viewport');
    viewport.classList.add('is-walking');
    playFootstepSound();
    setTimeout(() => {
      playFootstepSound();
    }, 280);
    setTimeout(() => {
      state.isWalking = false;
      viewport.classList.remove('is-walking');
    }, 600);
  }

  // Atualizar Imagem do Palco
  const stageImg = document.getElementById('walk-stage-image');
  stageImg.src = station.image;
  stageImg.alt = station.title;

  // Atualizar Informações de Texto
  document.getElementById('walk-step-counter').innerText = `Estação ${station.id} de ${STATIONS.length}`;
  document.getElementById('walk-station-name').innerText = station.title;
  document.getElementById('compass-heading').innerText = `${station.heading}° NE`;

  // Atualizar Hotspots
  renderHotspots(station.hotspots);

  // Atualizar Botões de Navegação
  document.getElementById('btn-prev-step').disabled = (index === 0);
  document.getElementById('btn-next-step').disabled = (index === STATIONS.length - 1);

  // Atualizar Linha do Tempo
  document.querySelectorAll('.timeline-item').forEach((el, i) => {
    if (i === index) {
      el.classList.add('active');
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    } else {
      el.classList.remove('active');
    }
  });

  // Atualizar Mini-Mapa
  updateMinimap();
}

// Renderiza Hotspots na Imagem
function renderHotspots(hotspots) {
  const container = document.getElementById('hotspots-layer');
  container.innerHTML = '';

  hotspots.forEach(hp => {
    const pin = document.createElement('div');
    pin.className = 'hotspot-pin';
    pin.style.left = `${hp.x}%`;
    pin.style.top = `${hp.y}%`;

    pin.innerHTML = `
      <div class="pin-dot"></div>
      <div class="hotspot-tooltip">
        <h4>${hp.title}</h4>
        <p>${hp.desc}</p>
      </div>
    `;

    pin.addEventListener('click', (e) => {
      e.stopPropagation();
      pin.classList.toggle('active');
    });

    container.appendChild(pin);
  });
}

// Atualização do Mini-Mapa SVG
function updateMinimap() {
  const station = STATIONS[state.currentStationIndex];
  const playerDot = document.getElementById('minimap-player');
  const sightCone = document.getElementById('minimap-cone');

  if (playerDot && station) {
    playerDot.setAttribute('cx', station.mapCoords.x);
    playerDot.setAttribute('cy', station.mapCoords.y);

    // Calcular Cone de Visão
    const angleRad = (station.heading - 90) * (Math.PI / 180);
    const length = 45;
    const spread = 0.35; // abertura do cone

    const x1 = station.mapCoords.x + Math.cos(angleRad - spread) * length;
    const y1 = station.mapCoords.y + Math.sin(angleRad - spread) * length;
    const x2 = station.mapCoords.x + Math.cos(angleRad + spread) * length;
    const y2 = station.mapCoords.y + Math.sin(angleRad + spread) * length;

    sightCone.setAttribute('d', `M ${station.mapCoords.x} ${station.mapCoords.y} L ${x1} ${y1} A ${length} ${length} 0 0 1 ${x2} ${y2} Z`);
  }
}

// Inicializa Linha do Tempo e Mini-Mapa
function initDashboard() {
  // Construir Linha do Tempo
  const track = document.getElementById('timeline-track');
  track.innerHTML = '';

  STATIONS.forEach((st, idx) => {
    const item = document.createElement('div');
    item.className = `timeline-item ${idx === 0 ? 'active' : ''}`;
    item.innerHTML = `
      <div class="timeline-item-number">PASSO ${st.id}</div>
      <div class="timeline-item-name">${st.subtitle}</div>
    `;
    item.addEventListener('click', () => {
      goToStation(idx, true);
    });
    track.appendChild(item);
  });

  // Adicionar Pontos no Mini-Mapa
  const pointsLayer = document.getElementById('minimap-points-layer');
  pointsLayer.innerHTML = '';

  // Desenhar Linha de Trajetória
  let pathD = `M ${STATIONS[0].mapCoords.x} ${STATIONS[0].mapCoords.y}`;
  for (let i = 1; i < STATIONS.length; i++) {
    pathD += ` L ${STATIONS[i].mapCoords.x} ${STATIONS[i].mapCoords.y}`;
  }
  const routePath = document.getElementById('minimap-route');
  if (routePath) routePath.setAttribute('d', pathD);

  STATIONS.forEach((st, idx) => {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', 'minimap-point');
    g.innerHTML = `
      <circle cx="${st.mapCoords.x}" cy="${st.mapCoords.y}" r="5" fill="#6E675F" stroke="#FAF8F5" stroke-width="1.5" />
      <title>${st.title}</title>
    `;
    g.addEventListener('click', () => {
      goToStation(idx, true);
    });
    pointsLayer.appendChild(g);
  });
}

// Modos de Iluminação
function setLightingMode(mode) {
  state.currentLighting = mode;
  const viewport = document.getElementById('walk-viewport');
  viewport.classList.remove('light-day', 'light-golden', 'light-night');
  if (mode !== 'day') {
    viewport.classList.add(`light-${mode}`);
  }

  document.querySelectorAll('.light-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.light === mode);
  });
}

// Alternância Walkthrough / Vídeo Cinema
function setDisplayMode(mode) {
  state.currentMode = mode;
  const walkViewport = document.getElementById('walk-viewport');
  const videoViewport = document.getElementById('walk-video-container');
  const dashboard = document.getElementById('walk-bottom-dashboard');
  const customVideo = document.getElementById('custom-video-player');

  document.querySelectorAll('.mode-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.mode === mode);
  });

  if (mode === 'walk') {
    walkViewport.style.display = 'block';
    videoViewport.classList.remove('active');
    dashboard.style.display = 'grid';
    if (customVideo) customVideo.pause();
  } else {
    walkViewport.style.display = 'none';
    videoViewport.classList.add('active');
    dashboard.style.display = 'none';
    if (customVideo) {
      customVideo.play().catch(() => {});
    }
  }
}

// Troca de Vídeos Cinematográficos
function switchVideo(videoFile, btnElement) {
  const player = document.getElementById('custom-video-player');
  const source = document.getElementById('custom-video-source');
  source.src = `assets/videos/${videoFile}`;
  player.load();
  player.play().catch(() => {});

  document.querySelectorAll('.vid-choice-btn').forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
}

// Interação de Câmera 360 / Panorâmica com o Mouse
function initCameraControls() {
  const viewport = document.getElementById('walk-viewport');
  const stageImg = document.getElementById('walk-stage-image');

  viewport.addEventListener('mousedown', (e) => {
    state.isDragging = true;
    state.dragStart = { x: e.clientX, y: e.clientY };
  });

  window.addEventListener('mousemove', (e) => {
    if (!state.isDragging) return;
    const deltaX = (e.clientX - state.dragStart.x) * 0.15;
    const deltaY = (e.clientY - state.dragStart.y) * 0.15;

    state.panOffset.x = Math.max(-25, Math.min(25, state.panOffset.x + deltaX));
    state.panOffset.y = Math.max(-15, Math.min(15, state.panOffset.y + deltaY));

    stageImg.style.transform = `translate(${state.panOffset.x}px, ${state.panOffset.y}px) scale(1.05)`;
    state.dragStart = { x: e.clientX, y: e.clientY };
  });

  window.addEventListener('mouseup', () => {
    if (state.isDragging) {
      state.isDragging = false;
      // Retorno suave à posição central
      stageImg.style.transform = 'translate(0px, 0px) scale(1)';
      state.panOffset = { x: 0, y: 0 };
    }
  });

  // Suporte a Teclado (WASD / Setas)
  window.addEventListener('keydown', (e) => {
    if (document.activeElement && ['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      return;
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'd' || e.key === 's' || e.key === 'w') {
      goToStation(state.currentStationIndex + 1, true);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'a') {
      goToStation(state.currentStationIndex - 1, true);
    }
  });
}

// Formulário de Briefing Express para WhatsApp
function initBriefingForm() {
  const form = document.getElementById('briefing-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('form-nome').value.trim();
    const tipo = document.getElementById('form-tipo').value;
    const metragem = document.getElementById('form-metragem').value.trim();
    const estilo = document.getElementById('form-estilo').value;
    const mensagem = document.getElementById('form-mensagem').value.trim();

    const textPayload = `Olá, Sabrina! Gostaria de solicitar um orçamento de projeto arquitetônico:\n\n` +
      `👤 *Nome:* ${nome || 'Não informado'}\n` +
      `🏡 *Tipo de Projeto:* ${tipo}\n` +
      `📐 *Metragem Estimada:* ${metragem || 'A definir'}\n` +
      `✨ *Estilo Desejado:* ${estilo}\n` +
      `📝 *Detalhes/Objetivos:* ${mensagem || 'Gostaria de agendar uma reunião inicial.'}\n\n` +
      `Vi o projeto *Villa Bella III* no seu site e me encantei com a proposta!`;

    const encoded = encodeURIComponent(textPayload);
    const waUrl = `https://wa.me/5581994164831?text=${encoded}`;
    window.open(waUrl, '_blank');
  });
}

// Header Scroll Effect
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Inicialização Global
document.addEventListener('DOMContentLoaded', () => {
  initDashboard();
  goToStation(0, false);
  initCameraControls();
  initBriefingForm();
  initHeaderScroll();

  // Event Listeners dos Controles
  document.getElementById('btn-next-step').addEventListener('click', () => {
    goToStation(state.currentStationIndex + 1, true);
  });

  document.getElementById('btn-prev-step').addEventListener('click', () => {
    goToStation(state.currentStationIndex - 1, true);
  });

  document.getElementById('audio-toggle-btn').addEventListener('click', toggleAudio);

  document.querySelectorAll('.mode-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      setDisplayMode(tab.dataset.mode);
    });
  });

  document.querySelectorAll('.light-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLightingMode(btn.dataset.light);
    });
  });

  document.querySelectorAll('.vid-choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchVideo(btn.dataset.video, btn);
    });
  });
});
