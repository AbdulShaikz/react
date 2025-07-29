import { FiHeart } from 'react-icons/fi';
import './Navigation.css';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';

const Navigation = ({handleInputChange, query}) => {
  return (
    <nav>
      <div className='nav-container'>
        <input 
          type="text"
          placeholder='Search..'
          onChange={handleInputChange}
          value={query}
        />
      </div>
      <div className='profile-container'>
        <a href="#">
          <FiHeart className='nav-icons'/>
        </a>
        <a href="#">
          <AiOutlineShoppingCart className='nav-icons'/>
        </a>
        <a href="#">
          <AiOutlineUser className='nav-icons'/>
        </a>
      </div>
    </nav>
  )
}

export default Navigation