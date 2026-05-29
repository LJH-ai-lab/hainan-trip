import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ItineraryPage from './pages/ItineraryPage';
import MapPage from './pages/MapPage';
import FoodPage from './pages/FoodPage';
import StayPage from './pages/StayPage';
import { plans } from './data/itinerary';

// Simple hash-based routing
function useHash() {
  const [hash, setHash] = useState(() => window.location.hash.slice(1) || 'home');

  useEffect(() => {
    function onHashChange() {
      setHash(window.location.hash.slice(1) || 'home');
    }
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (page) => {
    window.location.hash = page;
    setHash(page);
    window.scrollTo(0, 0);
  };

  return [hash, navigate];
}

// Persistence helpers
function loadFromStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(`hainan-trip-${key}`);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(`hainan-trip-${key}`, JSON.stringify(value));
  } catch { /* ignore */ }
}

export default function App() {
  const [page, navigate] = useHash();

  // State
  const [activePlanId, setActivePlanId] = useState(() => loadFromStorage('plan', 'A'));
  const [expandedDays, setExpandedDays] = useState(() => loadFromStorage('expanded', {}));
  const [votes, setVotes] = useState(() => loadFromStorage('votes', {}));
  const [favorites, setFavorites] = useState(() => loadFromStorage('favorites', []));

  // Auto-expand day 1
  useEffect(() => {
    if (Object.keys(expandedDays).length === 0) {
      setExpandedDays({ 1: true });
    }
  }, []);

  // Persist
  useEffect(() => { saveToStorage('plan', activePlanId); }, [activePlanId]);
  useEffect(() => { saveToStorage('expanded', expandedDays); }, [expandedDays]);
  useEffect(() => { saveToStorage('votes', votes); }, [votes]);
  useEffect(() => { saveToStorage('favorites', favorites); }, [favorites]);

  const activePlan = plans[activePlanId];

  function toggleDay(dayNum) {
    setExpandedDays(prev => ({ ...prev, [dayNum]: !prev[dayNum] }));
  }

  function handleVote(dayId, vote) {
    setVotes(prev => {
      if (prev[dayId] === vote) {
        const next = { ...prev };
        delete next[dayId];
        return next;
      }
      return { ...prev, [dayId]: vote };
    });
  }

  function handleFavorite(item) {
    setFavorites(prev => {
      const exists = prev.find(f => f.id === item.id || f.name === item.name);
      if (exists) {
        return prev.filter(f => f.id !== item.id && f.name !== item.name);
      }
      return [...prev, { ...item, id: item.id || `${item.name}-${Date.now()}` }];
    });
  }

  function removeFavorite(item) {
    setFavorites(prev => prev.filter(f => f.id !== item.id && f.name !== item.name));
  }

  function clearFavorites() {
    setFavorites([]);
  }

  function isFavorited(item) {
    return favorites.some(f => f.id === item.id || f.name === item.name);
  }

  // Navigation items
  const navItems = [
    { key: 'home', label: '首页', icon: '🏠' },
    { key: 'itinerary', label: '行程', icon: '📋' },
    { key: 'map', label: '路线', icon: '🗺️' },
    { key: 'food', label: '美食', icon: '🍜' },
    { key: 'stay', label: '住宿', icon: '🏨' },
  ];

  function renderPage() {
    const props = {
      activePlan,
      activePlanId,
      onSwitchPlan: setActivePlanId,
      onNavigate: navigate,
      expandedDays,
      onToggleDay: toggleDay,
      votes,
      onVote: handleVote,
      favorites,
      onFavorite: handleFavorite,
      onRemoveFavorite: removeFavorite,
      onClearFavorites: clearFavorites,
      isFavorited,
    };

    switch (page) {
      case 'home': return <HomePage onNavigate={navigate} onSwitchPlan={setActivePlanId} />;
      case 'itinerary': return <ItineraryPage {...props} />;
      case 'map': return <MapPage {...props} />;
      case 'food': return <FoodPage {...props} />;
      case 'stay': return <StayPage {...props} />;
      default: return <HomePage onNavigate={navigate} onSwitchPlan={setActivePlanId} />;
    }
  }

  return (
    <>
      {page !== 'home' && (
        <Header
          activePlan={activePlanId}
          onPlanChange={setActivePlanId}
          favorites={favorites}
        />
      )}

      {renderPage()}

      <Footer />

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="nav-list">
          {navItems.map(item => (
            <button
              key={item.key}
              className={`nav-item ${page === item.key ? 'active' : ''}`}
              onClick={() => navigate(item.key)}
            >
              <span className="nav-item-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* AI Chat FAB (placeholder for future) */}
      <button className="ai-chat-fab" title="AI旅行助手（即将上线）" onClick={() => alert('🤖 AI旅行助手即将上线！\n\n可以问我：\n- "今天下雨怎么玩？"\n- "推荐附近好吃的"\n- "帮我调整行程"')}>
        🤖
      </button>
    </>
  );
}
