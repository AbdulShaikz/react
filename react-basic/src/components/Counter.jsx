import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{`You clicked ${count} times!`}</p>
      <button onClick = {()=> setCount(count+1)}>
        Increment
      </button>
      <button onClick = {()=> count > 0 && setCount(count-1)}>
        Decrement
      </button>
    </div>
  )
}

export default Counter