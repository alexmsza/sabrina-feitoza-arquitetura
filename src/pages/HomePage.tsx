import React from 'react';
import { PageRoute } from '../types/index.ts';
import { Compass, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="home-page">
      {/* 1. CLEAN HERO */}
      <section className="clean-hero">
        <div className="container">
          <div className="hero-pill">
            <Sparkles size={14} color="var(--accent-gold)" />
            Arquitetura Residencial de Alto Padrão
          </div>

          <h1 className="clean-hero-title">
            Casas pensadas para unir <em>estética</em>, conforto e <em>funcionalidade</em>.
          </h1>

          <p className="clean-hero-subtitle">
            Desenvolvemos projetos autorais que combinam elegância atemporal, integração biofílica e rigor técnico. Atendimento presencial e online em todo o Brasil.
          </p>

          <div className="clean-hero-actions">
            <button className="btn-luxury-primary" onClick={() => onNavigate('tour-villa-bella')}>
              <Compass size={18} />
              <span>Explorar Tour Villa Bella III</span>
              <ArrowRight size={16} />
            </button>

            <button className="btn-luxury-secondary" onClick={() => onNavigate('contato')}>
              <MessageCircle size={18} />
              <span>Solicitar Orçamento</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. FEATURED PROJECT SHOWCASE (VILLA BELLA III HIGHLIGHT) */}
      <section className="showcase-feature-section">
        <div className="container">
          <div className="showcase-feature-card">
            <div className="showcase-media">
              <img src="/assets/images/08_capela_aframe.jpg" alt="Villa Bella III por Sabrina Feitoza" />
            </div>

            <div className="showcase-content">
              <span className="section-label">Projeto em Destaque</span>
              <h2>Villa Bella III</h2>
              <p>
                Uma imersão completa em arquitetura integrada. Projetado com linhas contemporâneas, madeira engenheirada e o icônico templo A-Frame cercado por mata nativa.
              </p>

              <div className="feature-tag-list">
                <span className="feature-tag">Capela A-Frame</span>
                <span className="feature-tag">Boulevard Arborizado</span>
                <span className="feature-tag">Iluminação Cênica 3000K</span>
                <span className="feature-tag">Simulação 1ª Pessoa</span>
              </div>

              <div>
                <button 
                  className="btn-luxury-primary"
                  onClick={() => onNavigate('tour-villa-bella')}
                >
                  <Compass size={18} />
                  <span>Acessar Experiência do Pedestre</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROFILE / ABOUT SABRINA FEITOZA */}
      <section className="profile-section">
        <div className="container profile-grid">
          <div className="profile-image-box">
            <img src="/assets/images/sabrina_portrait.jpg" alt="Sabrina Feitoza Arquiteta" />
            <div className="profile-badge-float">
              <strong>Sabrina Feitoza</strong>
              <span>Arquiteta e Urbanista</span>
            </div>
          </div>

          <div className="profile-info">
            <span className="section-label">A Arquiteta</span>
            <h2>Projetos que traduzem a sua identidade e estilo de vida.</h2>
            
            <div className="profile-quote">
              "A boa arquitetura nasce da escuta sensível das necessidades de cada família aliada ao domínio técnico e à harmonia dos materiais nobres."
            </div>

            <p>
              Com escritório atuante no Nordeste e atendimento digital em âmbito nacional e internacional, Sabrina Feitoza cria residências marcantes pela iluminação acolhedora, ventilação cruzada e uso consciente de texturas naturais como madeira, pedra e vidro.
            </p>

            <p>
              Utilizando tecnologia 3D fotorrealista de ponta, cada cliente vivencia seu novo lar antes mesmo do assentamento do primeiro tijolo.
            </p>

            <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <div>
                <strong style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--accent-gold)', display: 'block', lineHeight: 1 }}>+70</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Projetos Desenvolvidos</span>
              </div>
              <div>
                <strong style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--accent-gold)', display: 'block', lineHeight: 1 }}>100%</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Satisfação & Precisão</span>
              </div>
              <div>
                <strong style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--accent-gold)', display: 'block', lineHeight: 1 }}>4K</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Visualização Imersiva</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. METHODOLOGY (4 STEPS) */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem auto' }}>
            <span className="section-label">Metodologia Autoral</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
              Processo claro do primeiro traço à entrega
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
              Nosso fluxo de trabalho assegura assertividade, controle orçamentário e fidelidade executiva.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#fff', padding: '2.2rem 1.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', fontWeight: 700, color: 'var(--accent-stone)', marginBottom: '0.8rem' }}>01</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', marginBottom: '0.6rem' }}>Briefing & Diagnóstico</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Entendimento aprofundado do seu estilo de vida, orçamento e características do terreno.</p>
            </div>

            <div style={{ background: '#fff', padding: '2.2rem 1.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', fontWeight: 700, color: 'var(--accent-stone)', marginBottom: '0.8rem' }}>02</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', marginBottom: '0.6rem' }}>Estudo & 3D Fotorrealista</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Modelagem volumétrica com imagens e vídeos de alta fidelidade para aprovação total.</p>
            </div>

            <div style={{ background: '#fff', padding: '2.2rem 1.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', fontWeight: 700, color: 'var(--accent-stone)', marginBottom: '0.8rem' }}>03</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', marginBottom: '0.6rem' }}>Projeto Executivo</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Documentação técnica completa com paginações, iluminação, forro e detalhamento de marcenaria.</p>
            </div>

            <div style={{ background: '#fff', padding: '2.2rem 1.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', fontWeight: 700, color: 'var(--accent-stone)', marginBottom: '0.8rem' }}>04</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', marginBottom: '0.6rem' }}>Consultoria & Acompanhamento</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Suporte contínuo na escolha de acabamentos e alinhamento com a equipe de obra.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO SNAPSHOT */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="section-label">Galeria Autoral</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: 'var(--text-main)', lineHeight: 1.15 }}>
                Projetos & Conceitos
              </h2>
            </div>
            <button className="btn-luxury-secondary" onClick={() => onNavigate('tour-villa-bella')}>
              <span>Ver Tour 3D Completo</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="portfolio-grid">
            <div className="portfolio-card" onClick={() => onNavigate('tour-villa-bella')} style={{ cursor: 'pointer' }}>
              <div className="portfolio-card-media">
                <img src="/assets/images/02_portao_frente.jpg" alt="Pórtico Villa Bella III" />
              </div>
              <div className="portfolio-card-body">
                <span style={{ fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600 }}>Condomínio Horizontal</span>
                <h3>Pórtico & Guarita Monumental</h3>
                <p>Villa Bella III — Linhas contemporâneas e ripados nobres.</p>
              </div>
            </div>

            <div className="portfolio-card" onClick={() => onNavigate('tour-villa-bella')} style={{ cursor: 'pointer' }}>
              <div className="portfolio-card-media">
                <img src="/assets/images/04_entrada_lateral.jpg" alt="Jardins e Muro Verde" />
              </div>
              <div className="portfolio-card-body">
                <span style={{ fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600 }}>Biofilia & Paisagismo</span>
                <h3>Alameda Verde & Iluminação Cênica</h3>
                <p>Composição botânica tropical e iluminação suave 3000K.</p>
              </div>
            </div>

            <div className="portfolio-card" onClick={() => onNavigate('tour-villa-bella')} style={{ cursor: 'pointer' }}>
              <div className="portfolio-card-media">
                <img src="/assets/images/08_capela_aframe.jpg" alt="Capela A-Frame" />
              </div>
              <div className="portfolio-card-body">
                <span style={{ fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600 }}>Espaço Ecumênico</span>
                <h3>Capela Sagrada Villa Bella</h3>
                <p>Geometria A-Frame em madeira engenheirada e vidros reflexivos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-dark)', color: '#fff', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label">Vamos conversar?</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: '#FAF8F5', marginBottom: '1.2rem' }}>
            Pronto para transformar seu espaço?
          </h2>
          <p style={{ color: 'var(--text-light-muted)', maxWidth: '580px', margin: '0 auto 2.5rem auto', fontSize: '1.1rem' }}>
            Entre em contato para agendar uma reunião inicial e dar o primeiro passo para o seu novo projeto.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
            <button className="btn-luxury-primary" onClick={() => onNavigate('contato')}>
              <MessageCircle size={18} />
              <span>Solicitar Orçamento de Projeto</span>
            </button>
            <a 
              href="https://wa.me/5581994164831" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-luxury-secondary"
              style={{ background: 'transparent', color: '#fff', borderColor: 'var(--border-gold)' }}
            >
              Falar Direto no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
