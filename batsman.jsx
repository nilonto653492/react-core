import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);

  const handleSingles = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  };
  const handleFour = () => {
    const updatedRuns = runs + 4;
    setRuns(updatedRuns);
  };
  const handleSix = () => {
    const updatedRuns = runs + 6;
    const updtaedSixes = sixes +1;
    setSixes(updtaedSixes);
    setRuns(updatedRuns);
  };

  return (
    <div>
      <h3> Player: Bangla Batsman</h3>
      {runs>50 && <p>You Score 50</p>}
      <p><small>Six:{sixes}</small></p>
      <h1>Score:{runs}</h1>

      <button onClick={handleSingles}>singles</button>
      <button onClick={handleFour}>four</button>
      <button onClick={handleSix}>six</button>
    </div>
  );
}
