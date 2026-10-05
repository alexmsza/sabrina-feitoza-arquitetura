import React from 'react';
import { PageRoute } from '../types/index.ts';
import { MessageCircle, Compass } from 'lucide-react';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  return (
    <header className="site-navbar">
      <div className="container navbar-inner">
        <div className="brand-link" onClick={() => onNavigate('home')}>
          <div className="brand-monogram">SF</div>
          <div className="brand-text-block">
            <h1>Sabrina Feitoza</h1>
            <span>Arquitetura</span>
          </div>
        </div>

        <nav>
          <ul className="nav-menu">
            <li>
              <button 
                className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => onNavigate('home')}
              >
                Início
              </button>
            </li>
            <li>
              <button 
                className={`nav-btn ${currentPage === 'tour-villa-bella' ? 'active' : ''}`}
                onClick={() => onNavigate('tour-villa-bella')}
              >
                Tour Villa Bella III
              </button>
            </li>
            <li>
              <button 
                className={`nav-btn ${currentPage === 'contato' ? 'active' : ''}`}
                onClick={() => onNavigate('contato')}
              >
                Contato
              </button>
            </li>
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          {currentPage !== 'tour-villa-bella' && (
            <button 
              className="nav-cta-btn" 
              style={{ background: 'var(--bg-surface)', color: 'var(--text-main)', border: '1px solid var(--border-light)' }}
              onClick={() => onNavigate('tour-villa-bella')}
            >
              <Compass size={16} color="var(--accent-gold)" />
              <span>Tour 3D</span>
            </button>
          )}

          <a
            href="https://wa.me/5581994164831?text=Ol%C3%A1%2C%20Sabrina!%20Gostaria%20de%20conversar%20sobre%20um%20projeto%20arquitet%C3%B4nico."
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta-btn"
          >
            <MessageCircle size={16} />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};
