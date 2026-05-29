import { useState } from 'react';

export default function FoodCard({ dish, onFavorite, isFavorited }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="food-card" onClick={() => setExpanded(!expanded)}>
      <div className="food-card-header">
        <div className="food-card-emoji">{dish.icon}</div>
        <div className="food-card-info">
          <h3>{dish.name}</h3>
          <span className="food-category">{dish.category}</span>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <button
            className={`fav-btn ${isFavorited ? 'saved' : ''}`}
            onClick={e => { e.stopPropagation(); onFavorite && onFavorite(dish); }}
          >
            {isFavorited ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
      <p className="food-card-desc">{dish.desc}</p>
      <div className="food-card-meta">
        <span>💰 {dish.price}</span>
        <span>📍 {dish.where}</span>
      </div>
      <div className="food-card-tags">
        {dish.tags.map((tag, i) => (
          <span key={i} className="food-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}
