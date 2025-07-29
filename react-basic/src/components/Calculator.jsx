import { useState } from 'react';
import './calculatorStyles.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButton = (e) => {
    const value = e.target.value || e.target.textContent;
    switch(value){
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
      case '.':
        setInput(input + value);
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        setInput(input + ' ' + value + ' ');
        break;
      case '=':
        try {
          const evalResult = eval(input.replace(/ /g, ''));
          const result = evalResult.toString();
          setResult(result);
          setInput(result);
        } catch (error) {
          setResult('Error');
        }
        break;
      case 'C':
        setInput('');
        setResult('');
        break;
      default:
        break;
    }
  }

  return (
    <div className='container'>
      <div className='calculator-container'>
        <div className='calculator-display'>
          <input type="text" className='display-input' value={input} readOnly />
        </div>
        <div className='calculator-buttons'>
          <button className='button' onClick={handleButton}>7</button>
          <button className='button' onClick={handleButton}>8</button>
          <button className='button' onClick={handleButton}>9</button>
          <button className='button' onClick={handleButton}>/</button>
          <button className='button' onClick={handleButton}>4</button>
          <button className='button' onClick={handleButton}>5</button>
          <button className='button' onClick={handleButton}>6</button>
          <button className='button' onClick={handleButton}>*</button>
          <button className='button' onClick={handleButton}>1</button>
          <button className='button' onClick={handleButton}>2</button>
          <button className='button' onClick={handleButton}>3</button>
          <button className='button' onClick={handleButton}>-</button>
          <button className='button' onClick={handleButton}>0</button>
          <button className='button' onClick={handleButton}>.</button>
          <button className='button' onClick={handleButton}>+</button>
          <button className='button' onClick={handleButton}>=</button>
          <button className='button clear-btn' onClick={handleButton}>C</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator