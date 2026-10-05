import React, { useState } from 'react';
import { PageRoute, BriefingData } from '../types/index.ts';
import { MessageCircle, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState<BriefingData>({
    nome: '',
    tipo: 'Casa em Condomínio Fechado',
    metragem: '',
    estilo: 'Contemporâneo com Madeira e Vidro',
    mensagem: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const textPayload = `Olá, Sabrina! Gostaria de solicitar uma proposta de projeto arquitetônico:\n\n` +
      `👤 *Nome:* ${formData.nome || 'Não informado'}\n` +
      `🏡 *Tipo de Projeto:* ${formData.tipo}\n` +
      `📐 *Metragem Estimada:* ${formData.metragem || 'A definir'}\n` +
      `✨ *Estilo Desejado:* ${formData.estilo}\n` +
      `📝 *Desejos & Objetivos:* ${formData.mensagem || 'Gostaria de agendar uma reunião inicial.'}\n\n` +
      `Envio através do seu site sabrinafeitoza.vercel.app`;

    const encoded = encodeURIComponent(textPayload);
    const waUrl = `https://wa.me/5581994164831?text=${encoded}`;
    
    setSubmitted(true);
    window.open(waUrl, '_blank');
  };

  return (
    <div className="contact-page-wrapper">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
          <span className="section-label">Contato & Briefing</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3.2rem', color: 'var(--text-main)', marginBottom: '1rem', lineHeight: 1.15 }}>
            Vamos dar vida ao seu projeto?
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Preencha o formulário abaixo para enviar um briefing detalhado diretamente ao WhatsApp de Sabrina Feitoza.
          </p>
        </div>

        <div className="contact-grid">
          {/* Card Esquerdo de Informações */}
          <div className="contact-info-card">
            <div>
              <span className="section-label" style={{ color: 'var(--accent-gold)' }}>Atendimento Exclusivo</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: '#fff', marginBottom: '2rem', lineHeight: 1.2 }}>
                Canais Oficiais
              </h2>

              <div className="contact-info-item">
                <MessageCircle size={24} />
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '0.2rem' }}>WhatsApp Direto</h4>
                  <p style={{ color: 'var(--text-light-muted)', fontSize: '0.9rem' }}>+55 (81) 99416-4831</p>
                  <a 
                    href="https://wa.me/5581994164831" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ display: 'inline-block', marginTop: '0.4rem', color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: 600 }}
                  >
                    Iniciar Conversa Imediata →
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent-gold)">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '0.2rem' }}>Instagram Oficial</h4>
                  <p style={{ color: 'var(--text-light-muted)', fontSize: '0.9rem' }}>@sabrinafeittoza.arq</p>
                  <a 
                    href="https://www.instagram.com/sabrinafeittoza.arq/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ display: 'inline-block', marginTop: '0.4rem', color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: 600 }}
                  >
                    Acompanhar no Instagram →
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <MapPin size={24} />
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '0.2rem' }}>Modalidades de Atendimento</h4>
                  <p style={{ color: 'var(--text-light-muted)', fontSize: '0.9rem' }}>
                    Presencial em Pernambuco e Região<br />
                    Consultoria Online para todo o Brasil e Exterior
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <Clock size={24} />
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '0.2rem' }}>Horário de Funcionamento</h4>
                  <p style={{ color: 'var(--text-light-muted)', fontSize: '0.9rem' }}>
                    Segunda a Sexta-feira: 08:00 às 18:00
                  </p>
                </div>
              </div>
            </div>

            <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.82rem', color: 'var(--text-light-muted)' }}>
              Projetos com visualização 3D fotorrealista e acompanhamento técnico personalizado.
            </div>
          </div>

          {/* Formulário Direito de Briefing */}
          <div className="contact-form-box">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              Briefing Inicial de Projeto
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
              Conte-nos sobre o que você deseja construir ou reformar.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label>Seu Nome Completo *</label>
                <input 
                  type="text" 
                  placeholder="Ex: Mariana Albuquerque" 
                  required 
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>Tipo de Projeto *</label>
                <select 
                  value={formData.tipo}
                  onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                >
                  <option value="Casa em Condomínio Fechado">Casa em Condomínio Fechado</option>
                  <option value="Casa de Praia ou Campo">Casa de Praia ou Campo</option>
                  <option value="Projeto de Reforma e Interiores">Projeto de Reforma e Interiores</option>
                  <option value="Empreendimento Imobiliário / Comercial">Empreendimento Imobiliário / Comercial</option>
                </select>
              </div>

              <div className="form-field">
                <label>Área / Metragem Estimada (m²)</label>
                <input 
                  type="text" 
                  placeholder="Ex: 350 m²" 
                  value={formData.metragem}
                  onChange={(e) => setFormData({ ...formData, metragem: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>Estilo Arquitetônico de Preferência</label>
                <select 
                  value={formData.estilo}
                  onChange={(e) => setFormData({ ...formData, estilo: e.target.value })}
                >
                  <option value="Contemporâneo com Madeira e Vidro">Contemporâneo com Madeira e Vidro</option>
                  <option value="Minimalista Sofisticado">Minimalista Sofisticado</option>
                  <option value="Rústico Chic / Biofílico">Rústico Chic / Biofílico</option>
                  <option value="Moderno com Concreto Aparente">Moderno com Concreto Aparente</option>
                </select>
              </div>

              <div className="form-field">
                <label>Desejos Especiais & Detalhes da Casa</label>
                <textarea 
                  rows={4} 
                  placeholder="Ex: Terreno com aclive, desejo 4 suítes, varanda gourmet integrada com piscina de borda infinita e escritório..."
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                />
              </div>

              <button 
                type="submit" 
                className="btn-luxury-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}
              >
                <Send size={18} />
                <span>Enviar Briefing via WhatsApp</span>
              </button>

              {submitted && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '1rem', color: '#128C7E', fontSize: '0.9rem', fontWeight: 600 }}>
                  <CheckCircle size={18} />
                  <span>Mensagem gerada com sucesso! Redirecionando para o WhatsApp...</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
