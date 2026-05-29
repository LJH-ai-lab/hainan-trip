import { useState, useRef, useEffect } from 'react';
import { plans } from '../data/itinerary';

export default function Header({ activePlan, onPlanChange, favorites = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    }
    if (menuOpen) document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo">
          <span className="header-logo-icon">🌴</span>
          <span>海南自驾计划</span>
        </div>
        <div className="header-actions" ref={menuRef}>
          {favorites.length > 0 && (
            <div className="header-btn" title="收藏">
              ❤️
            </div>
          )}
          <div className="header-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </div>
          {menuOpen && (
            <div style={{
              position: 'absolute', top: '100%', right: 16,
              background: 'white', borderRadius: 12, boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
              padding: 8, minWidth: 160, zIndex: 110,
            }}>
              {Object.values(plans).map(p => (
                <button
                  key={p.id}
                  onClick={() => { onPlanChange(p.id); setMenuOpen(false); }}
                  style={{
                    display: 'block', width: '100%', textAlign: 'left',
                    padding: '10px 14px', borderRadius: 8, fontSize: '0.85rem',
                    background: activePlan === p.id ? 'var(--ocean-50)' : 'transparent',
                    color: activePlan === p.id ? 'var(--ocean-700)' : 'var(--gray-700)',
                    fontWeight: activePlan === p.id ? 600 : 400,
                  }}
                >
                  {p.icon} {p.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
