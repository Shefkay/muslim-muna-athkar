import { useState } from "react";
function AthkarCard({ id, text, maxCount, total }) {
  const [count, setcount] = useState(0);

  const handleShare = () => {
    navigator.share
      ? navigator.share({ text })
      : alert("Sharing not supported");
  };

  const handlePlay = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    window.speechSynthesis.speak(utterance);
  }

  const handleCount = () => {
    if (count < maxCount) {
      setcount(count + 1);
    }
  }

  return (
    <div className="card">
      <span className="num-id">{id}-{total}</span>
      <p>{text}</p>
      <div className="buttons">
        <button onClick={handleShare}
        >Share
        </button>
        <button onClick={handleCount}>
          <span className="count">{count}/{maxCount}</span>
        </button>
        <button onClick={handlePlay}>
          Play
        </button>
      </div>
    </div>
  );
}

export default AthkarCard