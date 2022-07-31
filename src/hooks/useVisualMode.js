import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    if (replace) {
      setHistory(prev => [...prev.slice(0, history.length-1), mode])
    } else {
      setHistory(prev => [...prev, mode])
      // setHistory([...history, mode])
    }

    setMode(mode);
  };
  function back() {
    if (history.length < 2) {
      return;
    }
    //minus the last item from history
    const test = [...history.slice(0, -1)]
    // console.log("looking for this", test)
    
    setHistory(test)
    setMode(test[test.length-1])
 
  };

  return { mode, transition, back };
};

