export default function PlaceDetail({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-sheet" onClick={e => e.stopPropagation()}>
        <div className="modal-handle" />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700 }}>📍 {data.name}</h2>
          <button onClick={onClose} style={{ fontSize: '1.2rem', padding: 8 }}>✕</button>
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16 }}>
          {data.desc}
        </p>

        {data.highlights && (
          <div style={{ marginBottom: 16 }}>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: 8, color: 'var(--text-secondary)' }}>
              ✨ 推荐亮点
            </h4>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {data.highlights.map((h, i) => (
                <span key={i} className="chip chip-ocean">{h}</span>
              ))}
            </div>
          </div>
        )}

        {data.bestTime && (
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            ⏰ 最佳时间：{data.bestTime}
          </div>
        )}
      </div>
    </div>
  );
}
