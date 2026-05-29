import { plans } from '../data/itinerary';

export default function PlanSwitcher({ activePlan, onSwitch }) {
  const planList = Object.values(plans);

  return (
    <div className="section">
      <div className="section-title">
        🗺️ 选择旅行方案
      </div>
      <div className="plan-switcher">
        {planList.map(plan => (
          <button
            key={plan.id}
            className={`plan-tab ${activePlan === plan.id ? 'active' : ''}`}
            style={activePlan === plan.id ? { background: plan.color } : {}}
            onClick={() => onSwitch(plan.id)}
          >
            <span className="plan-tab-icon">{plan.icon}</span>
            <span>{plan.name}</span>
          </button>
        ))}
      </div>
      <p className="text-sm text-secondary mt-sm">
        {planList.find(p => p.id === activePlan)?.description}
      </p>
    </div>
  );
}
