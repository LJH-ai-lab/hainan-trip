export default function AccommodationCard({ stay, onFavorite, isFavorited }) {
  return (
    <div className="stay-card">
      <div className="stay-card-header">
        <div>
          <h3>{stay.name}</h3>
        </div>
        <button
          className={`fav-btn ${isFavorited ? 'saved' : ''}`}
          onClick={() => onFavorite && onFavorite(stay)}
        >
          {isFavorited ? '❤️' : '🤍'}
        </button>
      </div>
      <span className="stay-type">{stay.type}</span>
      <p className="stay-card-desc mt-sm">{stay.desc}</p>
      <div className="stay-card-meta">
        <span>🅿️ {stay.parking}</span>
        <span>💰 {stay.priceLevel}</span>
        <span>🎯 {stay.vibe}</span>
      </div>
      <div className="stay-card-tags">
        {stay.tags.map((tag, i) => (
          <span key={i} className="stay-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}
