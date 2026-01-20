import { useState } from "react";
function AthkarCard({ id, text, maxCount, total }) {
  const [count, setcount] = useState(0);

  const handleShare = () => {
    navigator.share ? navigator.share({ text }) : alert("Sharing not supported");
  };

  const handlePlay = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }

  const handleCount = () => {
    if (count < maxCount) {
      setcount(count + 1);
    }
  }

  return (
    <div className="card">
      <span>{id}-{total}</span>
      <p>{text}</p>
      <div className="buttons">
        <button onClick={handleShare}>Share</button>
        <button onClick={handleCount}>{count}/{maxCount}</button>
        <button onClick={handlePlay}>Play</button>
      </div>
    </div>
  );
}

export default AthkarCard