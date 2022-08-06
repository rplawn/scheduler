import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    if (replace) {
      setHistory(prev => [...prev.slice(0, history.length-1), mode])
    } else {
      setHistory(prev => [...prev, mode])
    }

    setMode(mode);
  };
  function back() {
    if (history.length < 2) {
      return;
    }
    const backOne = [...history.slice(0, -1)]
    setHistory(backOne)
    setMode(backOne[backOne.length-1])
 
  };

  return { mode, transition, back };
};

