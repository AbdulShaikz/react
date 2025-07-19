import { useEffect, useState } from "react"

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log("Count has changed:", count);
    document.title = `Count: ${count}`;
  },[count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default CounterEffect