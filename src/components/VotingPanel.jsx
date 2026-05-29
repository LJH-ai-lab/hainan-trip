const VOTE_OPTIONS = [
  { key: 'want', label: '想去', icon: '👍', className: 'want' },
  { key: 'ok', label: '一般', icon: '👌', className: 'ok' },
  { key: 'skip', label: '跳过', icon: '👋', className: 'skip' },
];

export default function VotingPanel({ dayId, votes = {}, onVote }) {
  const currentVote = votes[dayId];

  return (
    <div className="vote-buttons">
      {VOTE_OPTIONS.map(opt => (
        <button
          key={opt.key}
          className={`vote-btn ${opt.className} ${currentVote === opt.key ? 'selected' : ''}`}
          onClick={() => onVote && onVote(dayId, opt.key)}
        >
          <span className="vote-icon">{opt.icon}</span>
          <span>{opt.label}</span>
        </button>
      ))}
    </div>
  );
}
