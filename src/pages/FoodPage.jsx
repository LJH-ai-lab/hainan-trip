import { useState } from 'react';
import FoodCard from '../components/FoodCard';
import ScrollReveal from '../components/ScrollReveal';
import { foodByCity, mustTryList } from '../data/food';

export default function FoodPage({ favorites, onFavorite, onRemoveFavorite, isFavorited }) {
  const [activeCity, setActiveCity] = useState('海口');

  const cities = Object.keys(foodByCity);
  const cityData = foodByCity[activeCity];

  return (
    <div className="page">
      <h1 className="page-title">海南美食地图</h1>
      <p className="page-subtitle">
        从海口到三亚，一路吃遍海南
      </p>

      {/* Must try */}
      <ScrollReveal>
        <div className="section">
          <div className="section-title">⭐ 必吃清单</div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {mustTryList.map(item => (
              <span key={item} className="chip chip-sand" style={{ fontSize: '0.8rem' }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

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

          {/* Food list */}
          {cityData.dishes.map(dish => (
            <ScrollReveal key={dish.id}>
              <FoodCard
                dish={dish}
                onFavorite={onFavorite}
                isFavorited={isFavorited(dish)}
              />
            </ScrollReveal>
          ))}
        </>
      )}

      {/* Food tips */}
      <ScrollReveal>
        <div className="section">
          <div className="section-title">🍽️ 觅食小贴士</div>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontSize: '0.85rem', lineHeight: 1.8 }}>
              <p>🕐 海口夜市晚上7点后才热闹，别去太早</p>
              <p>💸 海鲜价格：万宁 ≈ 海口 &lt; 三亚</p>
              <p>🌶️ 黄灯笼辣椒酱超辣，少放！</p>
              <p>🥥 路边椰子10-15元一个，比景区便宜一半</p>
              <p>🦞 海鲜加工费一般15-30元/斤，先问价</p>
              <p>🍵 老爸茶的「老爸」不是爸爸，是老茶客的意思</p>
              <p>🧊 清补凉可以要求「少甜」</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
