import { useState } from 'react';
import PlanSwitcher from '../components/PlanSwitcher';
import DayCard from '../components/DayCard';
import FavoritesList from '../components/FavoritesList';
import ScrollReveal from '../components/ScrollReveal';

export default function ItineraryPage({
  activePlan,
  onSwitchPlan,
  expandedDays,
  onToggleDay,
  votes,
  onVote,
  favorites,
  onFavorite,
  onRemoveFavorite,
  onClearFavorites,
  isFavorited,
}) {
  const plan = activePlan;

  return (
    <div className="page">
      <h1 className="page-title">行程计划</h1>
      <p className="page-subtitle">
        点击每天展开详情 · 和朋友一起投票讨论 · 收藏想去的地方
      </p>

      <FavoritesList
        favorites={favorites}
        onRemove={onRemoveFavorite}
        onClear={onClearFavorites}
      />

      <PlanSwitcher activePlan={plan?.id} onSwitch={onSwitchPlan} />

      <div className="section">
        <div className="section-title">
          📅 每日行程 · {plan?.days?.length || 0} 天
        </div>

        {plan?.days?.map((day, index) => (
          <ScrollReveal key={day.day}>
            <DayCard
              day={day}
              isExpanded={expandedDays[day.day]}
              onToggle={() => onToggleDay(day.day)}
              votes={votes}
              onVote={onVote}
              onFavorite={onFavorite}
              isFavorited={isFavorited(day)}
            />
          </ScrollReveal>
        ))}
      </div>

      {/* Vote summary */}
      {Object.keys(votes).length > 0 && (
        <ScrollReveal>
          <div className="section">
            <div className="section-title">📊 投票统计</div>
            <div className="card" style={{ padding: 20 }}>
              <div style={{ display: 'flex', gap: 16, textAlign: 'center' }}>
                {[
                  { key: 'want', label: '想去', icon: '👍' },
                  { key: 'ok', label: '一般', icon: '👌' },
                  { key: 'skip', label: '跳过', icon: '👋' },
                ].map(opt => {
                  const count = Object.values(votes).filter(v => v === opt.key).length;
                  return (
                    <div key={opt.key} style={{ flex: 1 }}>
                      <div style={{ fontSize: '1.5rem' }}>{opt.icon}</div>
                      <div style={{ fontSize: '1.3rem', fontWeight: 700 }}>{count}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{opt.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}
