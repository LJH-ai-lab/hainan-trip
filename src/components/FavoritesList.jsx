export default function FavoritesList({ favorites = [], onRemove, onClear }) {
  if (favorites.length === 0) {
    return (
      <div className="favorites-bar">
        <div className="empty-favorites">
          💝 还没有收藏，点击卡片上的 🤍 来收藏吧
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-bar">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
        <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
          💝 已收藏 {favorites.length} 项
        </span>
        {favorites.length > 0 && (
          <button
            onClick={onClear}
            style={{ fontSize: '0.73rem', color: 'var(--text-tertiary)' }}
          >
            清空
          </button>
        )}
      </div>
      <div className="favorites-list">
        {favorites.map((fav, i) => (
          <div key={i} className="favorite-chip">
            <span>{fav.name}</span>
            <button onClick={() => onRemove && onRemove(fav)}>×</button>
          </div>
        ))}
      </div>
    </div>
  );
}
