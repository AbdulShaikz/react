import { useRef } from "react";

const FocusInput = () => {

  const inputElement = useRef(null);
  return (
    <div>
      <h2>Foucs input</h2>
      <input ref={inputElement} />
      <button onClick={() => inputElement.current.focus()}>Focus Input</button>
    </div>
  )
}

export default FocusInput;