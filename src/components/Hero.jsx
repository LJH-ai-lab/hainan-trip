export default function Hero({ onNavigate }) {
  return (
    <section className="hero">
      <div className="waves-container">
        <svg className="wave wave-1" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" fill="rgba(255,255,255,0.15)" />
        </svg>
        <svg className="wave wave-2" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,40 C360,0 600,120 960,40 C1200,0 1320,80 1440,40 L1440,120 L0,120 Z" fill="rgba(255,255,255,0.1)" />
        </svg>
        <svg className="wave wave-3" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,80 C200,40 500,120 720,60 C1000,0 1200,80 1440,60 L1440,120 L0,120 Z" fill="rgba(255,255,255,0.05)" />
        </svg>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          🌴 和朋友一起规划旅行
        </div>
        <h1 className="hero-title">
          2026 海南<br />自驾旅行计划
        </h1>
        <p className="hero-date">
          6月9日 — 6月18日 · 约10天
        </p>
        <div className="hero-route">
          <span>📍 海口</span>
          <span className="hero-route-arrow">→</span>
          <span>🏄 万宁</span>
          <span className="hero-route-arrow">→</span>
          <span>🏔️ 五指山</span>
          <span className="hero-route-arrow">→</span>
          <span style={{ opacity: 0.7 }}>(可选) 🏖️ 三亚</span>
        </div>

        <div className="hero-cta">
          <button className="hero-cta-btn" onClick={() => onNavigate('itinerary')}>
            查看行程计划 →
          </button>
        </div>
      </div>
    </section>
  );
}
