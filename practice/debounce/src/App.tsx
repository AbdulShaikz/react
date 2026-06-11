import { useState } from 'react';
import './App.css'

interface CryptoCurrency {
  id: string,
  symbol: string,
  name: string
}

const dummyData: CryptoCurrency[] = [
  {id: '1', symbol: 'BTC', name: 'BitCoin'},
  {id: '2', symbol: 'ETH', name: 'Ethereum'}
];

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsOpen(e.target.value.length>0);
  }
  return (
    <div className='container'>
      <input 
        type="text"
        value={inputValue}
        onChange={handleChange}
        className='inputContainer' 
      />
      {isOpen && (
        <ul>
          {dummyData
            .filter(ticker => ticker.name.toLowerCase().includes(inputValue.toLowerCase()))
            .map(ticker => (
              <li
                key={ticker.id}
              >
                {ticker.name} ({ticker.symbol})
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default App
