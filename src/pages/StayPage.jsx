import { useState } from 'react';
import AccommodationCard from '../components/AccommodationCard';
import ScrollReveal from '../components/ScrollReveal';
import { staysByCity, parkingTips } from '../data/stays';

export default function StayPage({ favorites, onFavorite, isFavorited }) {
  const [activeCity, setActiveCity] = useState('海口');

  const cities = Object.keys(staysByCity);
  const cityData = staysByCity[activeCity];

  return (
    <div className="page">
      <h1 className="page-title">住宿推荐</h1>
      <p className="page-subtitle">
        从海景民宿到山区客栈，自驾友好的住宿指南
      </p>

      {/* City tabs */}
      <div className="section">
        <div className="plan-switcher">
          {cities.map(city => (
            <button
              key={city}
              className={`plan-tab ${activeCity === city ? 'active' : ''}`}
              style={activeCity === city ? { background: 'var(--ocean-500)' } : {}}
              onClick={() => setActiveCity(city)}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* City intro */}
      {cityData && (
        <>
          <ScrollReveal>
            <div className="tip-box" style={{ marginBottom: 16 }}>
              {cityData.intro}
            </div>
          </ScrollReveal>

          {cityData.areas.map(stay => (
            <ScrollReveal key={stay.id}>
              <AccommodationCard
                stay={stay}
                onFavorite={onFavorite}
                isFavorited={isFavorited(stay)}
              />
            </ScrollReveal>
          ))}
        </>
      )}

      {/* Parking tips */}
      <ScrollReveal>
        <div className="section">
          <div className="section-title">🅿️ 自驾停车指南</div>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontSize: '0.85rem', lineHeight: 1.8 }}>
              {parkingTips.map((tip, i) => (
                <p key={i}>💡 {tip}</p>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Budget reference */}
      <ScrollReveal>
        <div className="section">
          <div className="section-title">💰 住宿预算参考</div>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontSize: '0.85rem', lineHeight: 1.8 }}>
              <p>🟢 <strong>经济型</strong>：100-250元/晚（五指山、海口民宿）</p>
              <p>🔵 <strong>舒适型</strong>：250-500元/晚（万宁海景民宿、海口酒店）</p>
              <p>🟣 <strong>高端型</strong>：500-1500元/晚（石梅湾度假酒店）</p>
              <p>🟡 <strong>奢华型</strong>：1500+元/晚（三亚海棠湾酒店）</p>
              <hr className="divider" />
              <p>📊 <strong>10天预算参考</strong></p>
              <p>经济型约：2,000-3,000元</p>
              <p>舒适型约：3,500-5,500元</p>
              <p>高端型约：6,000-12,000元</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: 8 }}>
                * 以上为两人一间的参考价格
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
