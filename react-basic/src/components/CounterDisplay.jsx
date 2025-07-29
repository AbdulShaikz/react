import { useState } from "react";
import './counterDisplayStyles.css';

const CounterDisplay = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='counter-container'>
      <div className='counter-display'>
        <button className='round-btn' onClick={()=>setCount(count+1)}>+</button>
        <p className='count-text'>{count}</p>
        <button className='round-btn' onClick={()=>setCount(count-1)}>-</button>
      </div>
    </div>
  )
}

export default CounterDisplay