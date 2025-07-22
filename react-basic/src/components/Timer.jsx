import { useEffect, useRef, useState } from "react"


const Timer = () => {
  const [count,setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    console.log("Timer started");
    intervalRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <h2>Timer</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
    </div>
  )
}

export default Timer