import "./metronome.css";

import { useState } from "react";
import { HandIcon } from "@radix-ui/react-icons";

function TapTempo(props: {
  setBpm: React.Dispatch<React.SetStateAction<number>>;
  bpm: number;
}) {
  const { setBpm, bpm } = props;
  const [tapped, setTapped] = useState<number>(0);
  const [tappedArray, setTappedArray] = useState<number[]>([]);

  const tapTempo = () => {
    if (tapped) {
      let elapsed = new Date().getTime() - tapped;
      if (elapsed < 2500) {
        const tappedBpm = Math.round((6000 / elapsed) * 10);
        tappedArray.length > 1 &&
          setBpm(
            Math.round(
              tappedArray.reduce((a, b) => a + b, 0) / tappedArray.length
            )
          );
        if (tappedArray.length == 5) {
          setTappedArray((prev) => [...prev.slice(1), tappedBpm]);
        } else {
          setTappedArray((prev) => [...prev, tappedBpm]);
        }
      } else {
        setTapped(new Date().getTime());
      }
    }
    setTapped(new Date().getTime());
  };

  return (
    <div onClick={tapTempo} className="metro-btn-tap">
      <HandIcon />
    </div>
  );
}

export default TapTempo;
