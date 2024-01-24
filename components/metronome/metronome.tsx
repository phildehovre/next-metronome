"use client";

import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useState } from "react";
import "./metronome.css";
// @ts-ignore
import useSound from "use-sound";
import { Button } from "../ui/button";
import {
  PlusIcon,
  MinusIcon,
  HamburgerMenuIcon,
  CircleIcon,
} from "@radix-ui/react-icons";
import TapTempo from "./TapTempo";
import MetroDropdown from "./dropdown";

const Metronome = () => {
  const [bpm, setBpm] = useState(120);
  const [play, setPlay] = useState(false);
  const [soundEffect, setSoundEffect] = useState("sidestick");
  const [tempoInterval, setTempoInterval] = useState<number>(0);

  const [cowbell] = useSound("@/assets/Cowbell.mp3");
  const [woodblock] = useSound("@/assets/Woodblock.mp3");
  const [sidestick] = useSound("@/assets/Click.wav");

  const playSound = useCallback(() => {
    if (soundEffect === "cowbell") {
      cowbell();
    } else if (soundEffect === "woodblock") {
      woodblock();
    } else {
      sidestick();
    }
  }, [soundEffect, cowbell, woodblock, sidestick]);

  const trigger = useCallback(() => {
    if (play) {
      //   playSound();
    } else {
      return;
    }
  }, [play, playSound]);

  const startClick = () => {
    setPlay(!play);
  };

  const increment = () => {
    setBpm(Number(bpm) + 1);
  };
  const decrement = () => {
    setBpm(Number(bpm) - 1);
  };

  // Tempo setter:
  useEffect(() => {
    if (play) {
      const intervalId = setInterval(() => {
        trigger();
        // setPulse(true);
        setTimeout(() => {
          // setPulse(false);
        }, tempoInterval - tempoInterval * 0.1);
      }, tempoInterval);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [play, tempoInterval, soundEffect, trigger]);

  const handleDisplaySongsList = () => {
    console.log("click");
  };

  return (
    <div className={cn("metronome")}>
      <div className="display">
        <button className="metro_btn" onClick={increment}>
          <MinusIcon />
        </button>
        <div className="display_text">{bpm}</div>
        <button className="metro_btn" onClick={decrement}>
          <PlusIcon />
        </button>
      </div>
      <input
        type="range"
        min="40"
        max="220"
        value={bpm}
        onChange={(e) => setBpm(Number(e.target.value))}
      />
      <div className="metro-controls">
        <div
          onClick={startClick}
          className={`metro-btn ${play ? `pause` : `play`} noSelect`}
          id="metro-there"
        ></div>
        <div
          className="metro-btn-generate"
          onClick={() => handleDisplaySongsList()}
        >
          <HamburgerMenuIcon />
        </div>
        <TapTempo setBpm={setBpm} bpm={bpm} />
        {/* <div
            className="metro-dropdown-header"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {soundEffect}
            <Dropdown
              open={dropdownOpen}
              soundEffect={soundEffect}
              setSoundEffect={setSoundEffect}
              dropdownOpen={dropdownOpen}
              setDropdownOpen={setDropdownOpen}
            />
          </div> */}

        <MetroDropdown
          options={[
            { label: "Cowbell", value: "cowbell" },
            { label: "Sidekick", value: "sidekick" },
            { label: "Woodblock", value: "woodblock" },
          ]}
        />
      </div>
      //{" "}
    </div>
  );
};

export default Metronome;
