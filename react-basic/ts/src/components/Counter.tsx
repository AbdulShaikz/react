import { useReducer } from "react";
import { counterReducer, type CounterState } from "../counterReducer"

const initialState:CounterState = {
    count: 0
};

const Counter = () => {
  const [state,dispatch] = useReducer(counterReducer, initialState)
  
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={()=> dispatch({type: 'INCREMENT'})}>Increment</button>
      <button onClick={()=> dispatch({type: 'DECREMENT'})}>Decrement</button>
    </div>
  )
}

export default Counter