import React from 'react';
import { PageRoute } from '../types/index.ts';
import { MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand-link" style={{ marginBottom: '1.2rem' }} onClick={() => onNavigate('home')}>
              <div className="brand-monogram">SF</div>
              <div className="brand-text-block">
                <h1 style={{ color: '#fff' }}>Sabrina Feitoza</h1>
                <span>Arquitetura</span>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '340px' }}>
              Casas pensadas para unir estética, conforto e funcionalidade. Arquitetura de alto padrão, projetos de interiores e consultorias personalizadas.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1.2rem', fontWeight: 700 }}>
              Navegação
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              <li><button className="nav-btn" style={{ padding: 0, color: 'var(--text-light-muted)' }} onClick={() => onNavigate('home')}>Início</button></li>
              <li><button className="nav-btn" style={{ padding: 0, color: 'var(--text-light-muted)' }} onClick={() => onNavigate('tour-villa-bella')}>Tour Villa Bella III</button></li>
              <li><button className="nav-btn" style={{ padding: 0, color: 'var(--text-light-muted)' }} onClick={() => onNavigate('contato')}>Entrar em Contato</button></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1.2rem', fontWeight: 700 }}>
              Atendimento
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.9rem' }}>
              <li>📍 Atendimento Presencial: Pernambuco & Região</li>
              <li>🌐 Atendimento On-line: Brasil e Exterior</li>
              <li>⏱️ Segunda a Sexta: 08:00 às 18:00</li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1.2rem', fontWeight: 700 }}>
              Canais Oficiais
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li>
                <a 
                  href="https://www.instagram.com/sabrinafeittoza.arq/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--accent-gold)">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @sabrinafeittoza.arq
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5581994164831" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem' }}
                >
                  <MessageCircle size={18} color="var(--accent-gold)" />
                  (81) 99416-4831
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div>© {new Date().getFullYear()} Sabrina Feitoza Arquitetura. Todos os direitos reservados.</div>
          <div style={{ color: 'var(--accent-gold)' }}>sabrinafeitoza.vercel.app</div>
        </div>
      </div>
    </footer>
  );
};
