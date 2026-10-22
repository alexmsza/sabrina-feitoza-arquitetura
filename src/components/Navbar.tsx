import React, { useState } from 'react';
import { PageRoute } from '../types/index.ts';
import { MessageCircle, Compass, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: PageRoute) => {
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header className="site-navbar">
      <div className="container navbar-inner">
        <div className="brand-link" onClick={() => handleNav('home')}>
          <div className="brand-monogram">SF</div>
          <div className="brand-text-block">
            <h1>Sabrina Feitoza</h1>
            <span>Arquitetura</span>
          </div>
        </div>

        <nav className="desktop-nav">
          <ul className="nav-menu">
            <li>
              <button 
                className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => handleNav('home')}
              >
                Início
              </button>
            </li>
            <li>
              <button 
                className={`nav-btn ${currentPage === 'tour-villa-bella' ? 'active' : ''}`}
                onClick={() => handleNav('tour-villa-bella')}
              >
                Tour Villa Bella III
              </button>
            </li>
            <li>
              <button 
                className={`nav-btn ${currentPage === 'contato' ? 'active' : ''}`}
                onClick={() => handleNav('contato')}
              >
                Contato
              </button>
            </li>
          </ul>
        </nav>

        <div className="navbar-actions">
          {currentPage !== 'tour-villa-bella' && (
            <button 
              className="nav-cta-btn nav-tour-shortcut" 
              style={{ background: 'var(--bg-surface)', color: 'var(--text-main)', border: '1px solid var(--border-light)' }}
              onClick={() => handleNav('tour-villa-bella')}
            >
              <Compass size={16} color="var(--accent-gold)" />
              <span>Tour 3D</span>
            </button>
          )}

          <a
            href="https://wa.me/5581994164831?text=Ol%C3%A1%2C%20Sabrina!%20Gostaria%20de%20conversar%20sobre%20um%20projeto%20arquitet%C3%B4nico."
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta-btn nav-wa-btn"
          >
            <MessageCircle size={16} />
            <span className="wa-btn-label">Falar no WhatsApp</span>
          </a>

          <button
            className="mobile-menu-toggle"
            aria-label="Abrir menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <button
            className={`mobile-nav-item ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => handleNav('home')}
          >
            Início
          </button>
          <button
            className={`mobile-nav-item ${currentPage === 'tour-villa-bella' ? 'active' : ''}`}
            onClick={() => handleNav('tour-villa-bella')}
          >
            <Compass size={16} color="var(--accent-gold)" />
            <span>Tour 3D — Villa Bella III</span>
          </button>
          <button
            className={`mobile-nav-item ${currentPage === 'contato' ? 'active' : ''}`}
            onClick={() => handleNav('contato')}
          >
            Contato & Orçamento
          </button>
        </div>
      )}
    </header>
  );
};
