import VotingPanel from './VotingPanel';

export default function DayCard({ day, isExpanded, onToggle, votes = {}, onVote, onFavorite, isFavorited }) {
  const weatherClass = day.weather?.type === 'rain' ? 'weather-rain'
    : day.weather?.type === 'cloudy' ? 'weather-cloudy'
    : 'weather-sunny';

  const dayColors = {
    1: { bg: '#eff6ff', text: '#1e40af' },
    2: { bg: '#f0fdf4', text: '#166534' },
    3: { bg: '#fef3c7', text: '#854d0e' },
    4: { bg: '#fce7f3', text: '#9d174d' },
    5: { bg: '#f3e8ff', text: '#6b21a8' },
    6: { bg: '#e0f2fe', text: '#075985' },
    7: { bg: '#fef2f2', text: '#991b1b' },
    8: { bg: '#f0fdfa', text: '#115e59' },
    9: { bg: '#fff7ed', text: '#9a3412' },
    10: { bg: '#f5f5f4', text: '#44403c' },
  };
  const dc = dayColors[day.day] || dayColors[1];

  return (
    <div className={`day-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="day-card-header" onClick={onToggle}>
        <div className="day-card-left">
          <div className="day-number" style={{ background: dc.bg, color: dc.text }}>
            {day.day}
          </div>
          <div className="day-info">
            <h3>{day.location}</h3>
            <p>{day.date} · {day.region}</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            className={`fav-btn ${isFavorited ? 'saved' : ''}`}
            onClick={e => { e.stopPropagation(); onFavorite && onFavorite(day); }}
            title={isFavorited ? '取消收藏' : '收藏'}
          >
            {isFavorited ? '❤️' : '🤍'}
          </button>
          <span className="day-card-expand">▼</span>
        </div>
      </div>

      <div className="day-card-body">
        <div className="day-card-content">
          {/* Drive Info */}
          {day.drive && (
            <div className="day-subsection">
              <h4>🚗 驾车信息</h4>
              <div className="drive-info">
                <div className="drive-stat">
                  <span className="drive-stat-label">路线</span>
                  <span className="drive-stat-value">{day.drive.from} → {day.drive.to}</span>
                </div>
                <div className="drive-stat">
                  <span className="drive-stat-label">距离</span>
                  <span className="drive-stat-value">{day.drive.distance}</span>
                </div>
                <div className="drive-stat">
                  <span className="drive-stat-label">时间</span>
                  <span className="drive-stat-value">{day.drive.time}</span>
                </div>
              </div>
            </div>
          )}

          {/* Spots */}
          {day.spots && day.spots.length > 0 && (
            <div className="day-subsection">
              <h4>📍 推荐景点</h4>
              {day.spots.map((spot, i) => (
                <div key={i} className="spot-item">
                  <span className="spot-icon">📍</span>
                  <div className="spot-info">
                    <strong>{spot.name}</strong>
                    <p>{spot.desc} · ⏱ {spot.time}</p>
                    <span className="item-tag tag-spot">{spot.type}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Foods */}
          {day.foods && day.foods.length > 0 && (
            <div className="day-subsection">
              <h4>🍜 推荐美食</h4>
              {day.foods.map((food, i) => (
                <div key={i} className="food-item">
                  <span className="food-icon">🍴</span>
                  <div className="food-info">
                    <strong>{food.name}</strong>
                    <p>{food.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Stay */}
          {day.stay && day.stay.area !== '—' && (
            <div className="day-subsection">
              <h4>🏨 推荐住宿</h4>
              <div className="tip-box" style={{ background: '#f0fdf4', color: '#166534' }}>
                <strong>{day.stay.area}</strong>
                <p className="mt-sm">{day.stay.reason}</p>
              </div>
            </div>
          )}

          {/* Weather */}
          {day.weather && (
            <div className="day-subsection">
              <h4>🌤️ 天气</h4>
              <div className={`weather-badge ${weatherClass}`}>
                {day.weather.icon} {day.weather.temp} — {day.weather.note}
              </div>
            </div>
          )}

          {/* Tips */}
          {day.tips && (
            <div className="day-subsection">
              <h4>💡 当日建议</h4>
              <div className="tip-box">{day.tips}</div>
            </div>
          )}

          {/* Voting */}
          <div className="day-subsection">
            <h4>🗳️ 朋友投票</h4>
            <VotingPanel
              dayId={day.day}
              votes={votes}
              onVote={onVote}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
