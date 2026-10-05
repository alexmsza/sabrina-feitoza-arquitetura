import React, { useState, useEffect, useRef } from 'react';
import { PageRoute, LightingMode, DisplayMode } from '../types/index.ts';
import { STATIONS, VIDEOS } from '../data/stations.ts';
import { 
  Compass, 
  Volume2, 
  VolumeX, 
  Sun, 
  Sunset, 
  Moon, 
  Play, 
  Video, 
  ChevronLeft, 
  ChevronRight, 
  ArrowLeft,
  MessageCircle,
  Footprints
} from 'lucide-react';

interface WalkthroughPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const WalkthroughPage: React.FC<WalkthroughPageProps> = ({ onNavigate }) => {
  const [stationIndex, setStationIndex] = useState<number>(0);
  const [displayMode, setDisplayMode] = useState<DisplayMode>('walk');
  const [lighting, setLighting] = useState<LightingMode>('day');
  const [isAudioOn, setIsAudioOn] = useState<boolean>(false);
  const [isWalking, setIsWalking] = useState<boolean>(false);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [currentVideo, setCurrentVideo] = useState<string>(VIDEOS[0].file);

  // Câmera Look Around State
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Web Audio Context Refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const ambientGainRef = useRef<GainNode | null>(null);

  const currentStation = STATIONS[stationIndex];

  // Inicializar Áudio Sintético (Web Audio API)
  const initAudio = () => {
    if (audioCtxRef.current) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 260;

      const gain = ctx.createGain();
      gain.gain.value = 0.04;
      ambientGainRef.current = gain;

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      whiteNoise.start(0);
    } catch (e) {
      console.warn("Áudio não disponível", e);
    }
  };

  const playStepAudio = () => {
    if (!isAudioOn || !audioCtxRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(95, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(35, ctx.currentTime + 0.12);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(260, ctx.currentTime);

      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.13);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.14);
    } catch (e) {}
  };

  const toggleAudio = () => {
    initAudio();
    const nextState = !isAudioOn;
    setIsAudioOn(nextState);

    if (ambientGainRef.current) {
      ambientGainRef.current.gain.value = nextState ? 0.05 : 0;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended' && nextState) {
      audioCtxRef.current.resume();
    }
  };

  // Navegar para estação com efeito de caminhada
  const goToStation = (index: number) => {
    if (index < 0 || index >= STATIONS.length) return;
    setIsWalking(true);
    playStepAudio();
    setTimeout(() => {
      playStepAudio();
    }, 280);
    setTimeout(() => {
      setIsWalking(false);
    }, 600);

    setStationIndex(index);
    setActiveHotspot(null);
    setPan({ x: 0, y: 0 });
  };

  // Atalhos de teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (displayMode !== 'walk') return;
      if (['ArrowRight', 'ArrowDown', 'd', 's', 'w'].includes(e.key)) {
        goToStation(stationIndex + 1);
      } else if (['ArrowLeft', 'ArrowUp', 'a'].includes(e.key)) {
        goToStation(stationIndex - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stationIndex, displayMode, isAudioOn]);

  // Pan / Look Around Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = (e.clientX - dragStartRef.current.x) * 0.15;
    const deltaY = (e.clientY - dragStartRef.current.y) * 0.15;

    setPan(prev => ({
      x: Math.max(-30, Math.min(30, prev.x + deltaX)),
      y: Math.max(-18, Math.min(18, prev.y + deltaY))
    }));
    dragStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      setPan({ x: 0, y: 0 });
    }
  };

  // Render do Cone de Visão no Masterplan
  const renderSightCone = () => {
    const angleRad = (currentStation.heading - 90) * (Math.PI / 180);
    const length = 45;
    const spread = 0.35;

    const x1 = currentStation.mapCoords.x + Math.cos(angleRad - spread) * length;
    const y1 = currentStation.mapCoords.y + Math.sin(angleRad - spread) * length;
    const x2 = currentStation.mapCoords.x + Math.cos(angleRad + spread) * length;
    const y2 = currentStation.mapCoords.y + Math.sin(angleRad + spread) * length;

    return `M ${currentStation.mapCoords.x} ${currentStation.mapCoords.y} L ${x1} ${y1} A ${length} ${length} 0 0 1 ${x2} ${y2} Z`;
  };

  // Traçado da rota
  const routePathD = STATIONS.reduce((acc, st, i) => {
    return i === 0 ? `M ${st.mapCoords.x} ${st.mapCoords.y}` : `${acc} L ${st.mapCoords.x} ${st.mapCoords.y}`;
  }, '');

  return (
    <div className="tour-page-wrapper">
      <div className="container">
        {/* Top Header Bar */}
        <div className="tour-header-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button 
              className="tour-tab-btn"
              onClick={() => onNavigate('home')}
              style={{ padding: '0.45rem 0.9rem' }}
            >
              <ArrowLeft size={16} />
              <span>Voltar ao Início</span>
            </button>
            <div className="tour-header-title">
              <span>Experiência Pedestre Imersiva</span>
              <h2>Villa Bella III</h2>
            </div>
          </div>

          <div className="tour-controls-bar">
            {/* Modo Tabs */}
            <button 
              className={`tour-tab-btn ${displayMode === 'walk' ? 'active' : ''}`}
              onClick={() => setDisplayMode('walk')}
            >
              <Footprints size={16} />
              <span>Modo Pedestre</span>
            </button>

            <button 
              className={`tour-tab-btn ${displayMode === 'video' ? 'active' : ''}`}
              onClick={() => setDisplayMode('video')}
            >
              <Video size={16} />
              <span>Vídeo Cinema</span>
            </button>

            {/* Iluminação */}
            {displayMode === 'walk' && (
              <div style={{ display: 'flex', background: 'rgba(0,0,0,0.5)', padding: '0.2rem', borderRadius: 'var(--radius-full)' }}>
                <button 
                  className={`tour-tab-btn ${lighting === 'day' ? 'active' : ''}`}
                  style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                  onClick={() => setLighting('day')}
                >
                  <Sun size={14} />
                  <span>Dia</span>
                </button>
                <button 
                  className={`tour-tab-btn ${lighting === 'golden' ? 'active' : ''}`}
                  style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                  onClick={() => setLighting('golden')}
                >
                  <Sunset size={14} />
                  <span>Dourado</span>
                </button>
                <button 
                  className={`tour-tab-btn ${lighting === 'night' ? 'active' : ''}`}
                  style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                  onClick={() => setLighting('night')}
                >
                  <Moon size={14} />
                  <span>Noite</span>
                </button>
              </div>
            )}

            {/* Som */}
            <button 
              className={`tour-audio-btn ${isAudioOn ? 'active' : ''}`}
              onClick={toggleAudio}
            >
              {isAudioOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
              <span>{isAudioOn ? 'Som Ativo' : 'Som Mudo'}</span>
            </button>
          </div>
        </div>

        {/* Main Stage */}
        <div className="tour-main-stage">
          {displayMode === 'walk' ? (
            <>
              {/* Top Station Status */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', background: 'rgba(18,16,14,0.85)', borderBottom: '1px solid var(--border-dark)', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span style={{ background: 'var(--accent-gold-soft)', border: '1px solid var(--border-gold)', color: 'var(--accent-gold)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 700 }}>
                    Passo {currentStation.id} de {STATIONS.length}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#fff' }}>
                    {currentStation.title}
                  </h3>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-light-muted)' }}>
                  {currentStation.description}
                </div>
              </div>

              {/* Viewport Canvas */}
              <div 
                className={`tour-viewport ${isWalking ? 'is-walking' : ''} ${lighting !== 'day' ? `light-${lighting}` : ''}`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
              >
                <img 
                  className="tour-stage-image"
                  src={currentStation.image}
                  alt={currentStation.title}
                  style={{
                    transform: isDragging 
                      ? `translate(${pan.x}px, ${pan.y}px) scale(1.05)`
                      : 'translate(0px, 0px) scale(1)'
                  }}
                />

                {/* Hotspots */}
                {currentStation.hotspots.map((hp, idx) => (
                  <div
                    key={idx}
                    className={`stage-hotspot ${activeHotspot === idx ? 'active' : ''}`}
                    style={{ left: `${hp.x}%`, top: `${hp.y}%` }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveHotspot(activeHotspot === idx ? null : idx);
                    }}
                  >
                    <div className="hotspot-inner-dot" />
                    <div className="stage-hotspot-card">
                      <h4>{hp.title}</h4>
                      <p>{hp.desc}</p>
                    </div>
                  </div>
                ))}

                {/* HUD Compass & Keys */}
                <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'rgba(18,16,14,0.7)', backdropFilter: 'blur(10px)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-full)', padding: '0.4rem 1rem', fontSize: '0.8rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', zIndex: 10 }}>
                  <Compass size={16} color="var(--accent-gold)" />
                  <span>{currentStation.heading}° NE</span>
                </div>

                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(18,16,14,0.7)', backdropFilter: 'blur(10px)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-full)', padding: '0.4rem 1rem', fontSize: '0.78rem', color: 'var(--text-light-muted)', display: 'flex', alignItems: 'center', gap: '0.6rem', zIndex: 10 }}>
                  <span>Arraste para olhar</span>
                  <span style={{ background: 'rgba(255,255,255,0.15)', padding: '0.15rem 0.45rem', borderRadius: '4px', color: '#fff', fontWeight: 700 }}>W / ↑</span>
                  <span>Avançar</span>
                </div>

                {/* Walk Controls */}
                <div className="stage-walk-controls">
                  <button 
                    className="stage-step-btn"
                    disabled={stationIndex === 0}
                    onClick={() => goToStation(stationIndex - 1)}
                  >
                    <ChevronLeft size={18} />
                    <span>Passo Anterior</span>
                  </button>

                  <button 
                    className="stage-step-btn primary"
                    disabled={stationIndex === STATIONS.length - 1}
                    onClick={() => goToStation(stationIndex + 1)}
                  >
                    <span>Dar Passo à Frente</span>
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Dashboard: Masterplan & Timeline */}
              <div className="tour-dashboard-grid">
                {/* Minimap */}
                <div className="tour-minimap-col">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: '#fff' }}>Masterplan</h3>
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Radar Ativo</span>
                  </div>

                  <div style={{ position: 'relative', width: '100%', aspectRatio: '1', background: '#12100E', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-dark)', overflow: 'hidden' }}>
                    <svg viewBox="0 0 320 300" style={{ width: '100%', height: '100%' }}>
                      <path d={routePathD} fill="none" stroke="rgba(197, 160, 89, 0.4)" strokeWidth="3" strokeDasharray="4,4" />
                      <path d={renderSightCone()} fill="rgba(212, 175, 55, 0.28)" pointerEvents="none" />
                      
                      {STATIONS.map((st, idx) => (
                        <g key={st.id} style={{ cursor: 'pointer' }} onClick={() => goToStation(idx)}>
                          <circle 
                            cx={st.mapCoords.x} 
                            cy={st.mapCoords.y} 
                            r={idx === stationIndex ? 7 : 5}
                            fill={idx === stationIndex ? 'var(--accent-gold)' : '#5A524A'} 
                            stroke="#FAF8F5" 
                            strokeWidth="1.5"
                          />
                        </g>
                      ))}

                      <circle 
                        cx={currentStation.mapCoords.x} 
                        cy={currentStation.mapCoords.y} 
                        r="7" 
                        fill="#D4AF37" 
                        style={{ filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.95))' }}
                      />
                    </svg>
                  </div>
                </div>

                {/* Timeline */}
                <div className="tour-timeline-col">
                  <div className="timeline-flex-track">
                    {STATIONS.map((st, idx) => (
                      <div
                        key={st.id}
                        className={`timeline-step-card ${idx === stationIndex ? 'active' : ''}`}
                        onClick={() => goToStation(idx)}
                      >
                        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-gold)', marginBottom: '0.2rem' }}>
                          PASSO {st.id}
                        </div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {st.subtitle}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Video Cinema Mode */
            <div className="tour-video-stage">
              <video 
                key={currentVideo}
                className="tour-video-player"
                controls 
                autoPlay 
                playsInline
              >
                <source src={currentVideo} type="video/mp4" />
              </video>

              <div className="tour-video-selector">
                {VIDEOS.map((vid) => (
                  <button
                    key={vid.id}
                    className={`video-pill-btn ${currentVideo === vid.file ? 'active' : ''}`}
                    onClick={() => setCurrentVideo(vid.file)}
                  >
                    <Play size={14} />
                    <span>{vid.title}</span>
                    <span style={{ fontSize: '0.72rem', opacity: 0.7 }}>({vid.duration})</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Fast Contact Banner */}
        <div style={{ marginTop: '3rem', background: 'var(--bg-dark-card)', padding: '2.5rem 3rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-gold)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#fff', marginBottom: '0.4rem' }}>
              Inspirado pelo Villa Bella III?
            </h3>
            <p style={{ color: 'var(--text-light-muted)', fontSize: '0.95rem' }}>
              Desenvolva o projeto autoral da sua casa com visualização 3D hiper-realista.
            </p>
          </div>

          <button className="btn-luxury-primary" onClick={() => onNavigate('contato')}>
            <MessageCircle size={18} />
            <span>Falar com Sabrina Feitoza</span>
          </button>
        </div>
      </div>
    </div>
  );
};
