import { useState } from 'react';
import { routeCoordinates, routeLines, plans } from '../data/itinerary';
import PlaceDetail from './PlaceDetail';

// Map Hainan island coordinates to SVG viewport (400 x 500)
function project(lat, lng, w, h) {
  const x = ((lng - 108.5) / 3.2) * w;
  const y = ((20.3 - lat) / 2.4) * h;
  return { x, y };
}

const locationInfo = {
  haikou: {
    name: '海口',
    desc: '海南省的省会，旅程的起点。骑楼老街、火山公园、南门夜市，城市烟火气与海岛风情的完美结合。',
    highlights: ['骑楼老街', '雷琼火山公园', '南门夜市', '云洞图书馆', '假日海滩'],
    bestTime: '傍晚最适合逛骑楼和海边',
  },
  wenchang: {
    name: '文昌',
    desc: '海南著名的侨乡，文昌鸡的发源地。东郊椰林万亩椰树，是航拍和自驾的好去处。',
    highlights: ['东郊椰林', '文昌鸡', '航天发射中心'],
    bestTime: '上午光线好适合拍椰林',
  },
  qionghai: {
    name: '琼海（博鳌）',
    desc: '博鳌亚洲论坛所在地，潭门渔港海鲜便宜新鲜。比万宁三亚更安静的小城。',
    highlights: ['博鳌亚洲论坛', '潭门渔港', '海的故事'],
    bestTime: '全年适合，海鲜中午最新鲜',
  },
  wanning: {
    name: '万宁',
    desc: '海南最年轻、最有活力的旅行目的地。冲浪文化、海景公路、人少海清，自驾体验最好的路段。',
    highlights: ['日月湾冲浪', '石梅湾', '神州半岛', '最美沿海公路'],
    bestTime: '4-10月适合冲浪，傍晚光线最美',
  },
  wuzhishan: {
    name: '五指山',
    desc: '海南最高峰，热带雨林国家公园。从海边到山区的温度骤降，体验完全不同的海南。',
    highlights: ['热带雨林徒步', '峡谷漂流', '牙胡梯田', '黎苗文化'],
    bestTime: '上午爬山最舒适，雨后空气最好',
  },
  sanya: {
    name: '三亚',
    desc: '海南最知名的度假城市，蜈支洲岛潜水、海棠湾免税店、亚龙湾沙滩。如果时间充裕值得停留。',
    highlights: ['蜈支洲岛', '海棠湾免税店', '亚龙湾', '热带天堂森林公园'],
    bestTime: '冬季最佳，6月也不错但热',
  },
};

export default function MapView({ activePlan = 'A', onNavigate }) {
  const [selectedCity, setSelectedCity] = useState(null);
  const line = routeLines[activePlan] || routeLines.A;
  const W = 400, H = 500;
  const points = line.map(key => ({
    key,
    ...routeCoordinates[key],
    ...project(routeCoordinates[key].lat, routeCoordinates[key].lng, W, H),
  }));

  return (
    <div className="section">
      <div className="section-title">
        🗺️ 自驾路线地图
      </div>
      <div className="map-container">
        <svg className="map-svg" viewBox={`0 0 ${W} ${H}`} style={{ background: 'transparent' }}>
          {/* Hainan island silhouette */}
          <path
            d="M180,40 C220,30 280,28 310,40 C340,55 350,90 340,140 C330,180 310,230 290,280 C270,330 250,370 220,410 C200,440 170,455 150,440 C125,420 110,380 105,340 C98,290 95,240 100,190 C105,140 120,80 140,55 C155,42 165,42 180,40Z"
            fill="rgba(14,165,233,0.08)"
            stroke="rgba(14,165,233,0.2)"
            strokeWidth="2"
          />

          {/* Route lines */}
          {points.map((p, i) => {
            if (i === points.length - 1) return null;
            const next = points[i + 1];
            return (
              <line
                key={`line-${i}`}
                x1={p.x} y1={p.y}
                x2={next.x} y2={next.y}
                className="map-route-line"
              />
            );
          })}

          {/* City points */}
          {points.map((p, i) => (
            <g
              key={p.key}
              className="map-point"
              onClick={() => setSelectedCity(p.key)}
              style={{ cursor: 'pointer' }}
            >
              {/* Pulse ring */}
              <circle
                cx={p.x} cy={p.y} r="14"
                fill="none"
                stroke={p.key === 'wanning' || p.key === 'wuzhishan' ? '#0ea5e9' : '#94a3b8'}
                strokeWidth="1.5"
                opacity="0.3"
                style={{ animation: 'pulse 2s ease-in-out infinite' }}
              />
              {/* Main dot */}
              <circle
                cx={p.x} cy={p.y} r="7"
                fill={p.key === 'wanning' || p.key === 'wuzhishan' ? '#0ea5e9' : p.key === 'sanya' ? '#f59e0b' : '#64748b'}
                stroke="white"
                strokeWidth="2.5"
              />
              {/* Label */}
              <text
                x={p.x}
                y={p.y - 16}
                textAnchor="middle"
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  fill: '#334155',
                }}
              >
                {p.name}
              </text>
              {/* Label badge */}
              {p.label && (
                <text
                  x={p.x}
                  y={p.y + 24}
                  textAnchor="middle"
                  style={{
                    fontSize: '9px',
                    fill: '#94a3b8',
                    fontWeight: 400,
                  }}
                >
                  {p.label}
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* City chips */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {points.map(p => (
          <button
            key={p.key}
            className="chip chip-ocean"
            onClick={() => setSelectedCity(p.key)}
            style={{
              cursor: 'pointer',
              border: selectedCity === p.key ? '2px solid var(--ocean-500)' : '2px solid transparent',
            }}
          >
            📍 {p.name}
          </button>
        ))}
      </div>

      {/* Place detail modal */}
      {selectedCity && locationInfo[selectedCity] && (
        <PlaceDetail
          data={locationInfo[selectedCity]}
          onClose={() => setSelectedCity(null)}
        />
      )}
    </div>
  );
}
