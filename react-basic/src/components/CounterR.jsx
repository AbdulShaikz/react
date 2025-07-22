import { useReducer, useState } from "react";
import { initialState, counterReducer } from "./counterReducer";

const CounterR = () => {

  const [state,dispatch] = useReducer(counterReducer, initialState);  
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  }

  const handleDecrement = () => {
    dispatch({type: 'decrement'});
  }

  const handleIncrementByAmount = () => {
    dispatch({ type: 'incrementByAmount', payload: inputValue });
  }

  const handleDecrementByAmount = () => {
    dispatch({ type: 'decrementByAmount', payload: inputValue });
  }

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <input placeholder="Enter Amount" value={inputValue} onChange={(e) => setInputValue(Number(e.target.value))} />
      <button onClick={handleIncrementByAmount}>Increment by {inputValue}</button>
      <button onClick={handleDecrementByAmount}>Decrement by {inputValue}</button>
    </div>
  )
}

export default CounterR;