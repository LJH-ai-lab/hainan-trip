import { useState } from 'react';
import MapView from '../components/MapView';
import ScrollReveal from '../components/ScrollReveal';
import { routeCoordinates } from '../data/itinerary';

const locationDetails = {
  haikou: {
    name: '海口',
    desc: '海南省会，旅程起点。南洋风情骑楼、火山遗迹、地道夜市美食。',
    spots: ['骑楼老街', '雷琼火山公园', '云洞图书馆', '假日海滩', '海南省博物馆', '南门夜市'],
    foods: ['糟粕醋', '老爸茶', '清补凉', '椰子鸡火锅', '海南粉', '芒果肠粉'],
  },
  wanning: {
    name: '万宁',
    desc: '海南最年轻活力的旅行地。冲浪圣地、绝美海景公路、人少海清。',
    spots: ['日月湾', '石梅湾', '神州半岛', '最美沿海公路', '兴隆热带植物园'],
    foods: ['东山羊', '兴隆咖啡', '和乐蟹', '后安粉', '海鲜大排档'],
  },
  wuzhishan: {
    name: '五指山',
    desc: '海南最高峰，热带雨林国家公园。完全不同的凉爽海南。',
    spots: ['热带雨林徒步', '峡谷漂流', '牙胡梯田', '民族博物馆'],
    foods: ['竹筒饭', '五脚猪', '山兰酒', '野菜', '小黄牛'],
  },
  sanya: {
    name: '三亚（可选）',
    desc: '海南最知名的度假城市。潜水、免税店、绝美沙滩。',
    spots: ['蜈支洲岛', '海棠湾免税店', '亚龙湾', '热带天堂森林公园'],
    foods: ['海鲜加工', '抱罗粉', '椰子饭', '港门粉'],
  },
};

export default function MapPage({ activePlan, onSwitchPlan }) {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="page">
      <h1 className="page-title">自驾路线</h1>
      <p className="page-subtitle">
        点击地图上的城市查看详情
      </p>

      <MapView
        activePlan={activePlan}
        onNavigate={() => {}}
      />

      {/* Location details */}
      <div className="section">
        <div className="section-title">📍 站点详情</div>
        {Object.entries(locationDetails).map(([key, loc]) => (
          <ScrollReveal key={key}>
            <div
              className="card"
              style={{
                padding: 20,
                marginBottom: 12,
                cursor: 'pointer',
                borderLeft: selectedLocation === key ? '4px solid var(--ocean-500)' : '4px solid transparent',
              }}
              onClick={() => setSelectedLocation(selectedLocation === key ? null : key)}
            >
              <h3 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: 4 }}>
                {key === 'sanya' ? '🏖️ ' : key === 'wanning' ? '🏄 ' : key === 'wuzhishan' ? '🏔️ ' : '🌴 '}
                {loc.name}
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: 8 }}>
                {loc.desc}
              </p>

              {selectedLocation === key && (
                <div style={{ animation: 'fadeIn 0.3s var(--ease-out)' }}>
                  <div style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-tertiary)' }}>
                      ✨ 推荐景点
                    </span>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 6 }}>
                      {loc.spots.map(s => (
                        <span key={s} className="chip chip-ocean">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-tertiary)' }}>
                      🍜 推荐美食
                    </span>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 6 }}>
                      {loc.foods.map(f => (
                        <span key={f} className="chip chip-sand">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Driving notes */}
      <ScrollReveal>
        <div className="section">
          <div className="section-title">🚗 自驾注意事项</div>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontSize: '0.85rem', lineHeight: 1.8 }}>
              <p>🛣️ <strong>海南高速免费</strong>，但油价比内地贵约1元/L</p>
              <p>🚙 推荐SUV或底盘高一些的车，五指山山路有烂路</p>
              <p>⛽ 山区加油站间隔较远，保持油箱充足</p>
              <p>📱 五指山部分区域信号弱，提前下载离线地图</p>
              <p>🅿️ 海口市区停车难且贵，建议酒店停车后打车</p>
              <p>🌧️ 雨天山路注意减速，弯道多鸣笛</p>
              <p>⚡ 电车注意：五指山充电桩少，提前规划</p>
              <p>📷 沿海公路有很多观景台，随时停车拍照</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
