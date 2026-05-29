import { weatherAlerts, mockWeather } from '../data/weather';

export default function WeatherAlert({ onSwitchPlan }) {
  return (
    <div className="section">
      <div className="section-title">
        🌤️ 天气看板
      </div>

      {/* City weather strip */}
      <div className="weather-strip">
        {Object.entries(mockWeather).map(([city, w]) => (
          <div key={city} className={`weather-city-card ${w.condition === '晴' ? 'sunny' : w.condition === '阵雨' ? 'rain' : 'cloudy'}`}>
            <div className="weather-city-name">{city === 'haikou' ? '海口' : city === 'wanning' ? '万宁' : city === 'wuzhishan' ? '五指山' : city === 'sanya' ? '三亚' : city === 'qionghai' ? '琼海' : '文昌'}</div>
            <div className="weather-city-icon">{w.icon}</div>
            <div className="weather-city-temp">{w.temp}°C</div>
            <div className="weather-city-rain">降雨 {w.rainChance}</div>
          </div>
        ))}
      </div>

      {/* Alerts */}
      <div className="mt-lg">
        {weatherAlerts.slice(0, 3).map(alert => (
          <div key={alert.id} className={`weather-alert alert-${alert.severity}`}>
            <div className="weather-alert-header">
              <span className="weather-alert-icon">{alert.icon}</span>
              <span className="weather-alert-title">{alert.title}</span>
            </div>
            <p className="weather-alert-message">{alert.message}</p>
            <div className="weather-alert-tips">
              {alert.tips.map((tip, i) => (
                <span key={i} className="weather-tip">{tip}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Quick action */}
      <button
        className="rain-check-btn secondary mt-md"
        onClick={() => onSwitchPlan && onSwitchPlan('B')}
      >
        🌧️ 如果下雨怎么办？切换到雨天备选方案
      </button>
    </div>
  );
}
