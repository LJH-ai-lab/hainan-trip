import Hero from '../components/Hero';
import WeatherAlert from '../components/WeatherAlert';
import ScrollReveal from '../components/ScrollReveal';
import { plans } from '../data/itinerary';

export default function HomePage({ onNavigate, onSwitchPlan }) {
  return (
    <div>
      <Hero onNavigate={onNavigate} />

      <div className="page">
        <WeatherAlert onSwitchPlan={onSwitchPlan} />

        <ScrollReveal>
          <div className="section">
            <div className="section-title">🗺️ 三种方案对比</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {Object.values(plans).map(plan => (
                <div
                  key={plan.id}
                  className="card"
                  style={{ cursor: 'pointer', padding: 16 }}
                  onClick={() => { onNavigate('itinerary'); onSwitchPlan(plan.id); }}
                >
                  <div className="flex" style={{ gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '2rem' }}>{plan.icon}</span>
                    <div>
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: 4 }}>
                        {plan.name}
                      </h3>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                        {plan.subtitle}
                      </p>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', marginTop: 4 }}>
                        {plan.description.slice(0, 60)}...
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="section">
            <div className="section-title">💡 旅行小贴士</div>
            <div className="grid-2">
              {[
                { icon: '🚗', title: '自驾建议', desc: '海南高速免费，油费略高。SUV更适合山路。' },
                { icon: '🧴', title: '防晒必备', desc: 'SPF50+防晒霜、帽子、墨镜、防晒衣。' },
                { icon: '📱', title: '实用APP', desc: '高德地图（离线）、大众点评、美团。' },
                { icon: '💊', title: '随身药品', desc: '防蚊液、肠胃药、创可贴、晕车药。' },
              ].map((tip, i) => (
                <div key={i} className="card" style={{ padding: 16, textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 8 }}>{tip.icon}</div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: 4 }}>{tip.title}</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="section">
            <div className="section-title">🎒 行前准备</div>
            <div className="card" style={{ padding: 20 }}>
              <div style={{ fontSize: '0.85rem', lineHeight: 1.8 }}>
                <p>✅ 身份证、驾驶证、行驶证</p>
                <p>✅ 防晒霜（SPF50+ PA++++）</p>
                <p>✅ 泳衣 + 冲浪衣（万宁）</p>
                <p>✅ 徒步鞋（五指山雨林）</p>
                <p>✅ 薄外套（山区晚上凉）</p>
                <p>✅ 雨伞/雨衣（6月雨季）</p>
                <p>✅ 手机防水袋</p>
                <p>✅ 充电宝（至少2个）</p>
                <p>✅ 防蚊喷雾（雨林必备）</p>
                <p>✅ 现金少许（山区可能用得到）</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="section">
            <div className="section-title">🌟 朋友说</div>
            <div className="card" style={{ padding: 20 }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.7 }}>
                "万宁的沿海公路真的太美了！一定要慢慢开，随时停下来拍照。"<br />
                <span style={{ fontStyle: 'normal', fontWeight: 600, color: 'var(--text-primary)' }}>—— 上次去过的朋友</span>
              </div>
              <hr className="divider" />
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.7 }}>
                "五指山完全是不一样的海南，从炎热海边到凉爽山林的转变太神奇了。"<br />
                <span style={{ fontStyle: 'normal', fontWeight: 600, color: 'var(--text-primary)' }}>—— 户外爱好者</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
