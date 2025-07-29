import React from 'react'
import { MdSearch } from 'react-icons/md'

const containerStyle = {
	height: '100vh',
	width: '100vw',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	cursor: 'pointer',
}

const HiddenSearchBar = () => {

	const [searchVisible, setSearchVisible] = React.useState(false);

	const handleSearch = () => {
		setSearchVisible(!searchVisible);
	}
	return (
		<div className='search-container' style={containerStyle}>
			{searchVisible ? (
				<input 
					type='text' 
					placeholder='Search...' 
					className='search-input' 
					onBlur={() => setSearchVisible(false)} 
					autoFocus
				/>
			) : 
				<MdSearch className='search-icon' size={40} onClick={handleSearch}/>
			}
		</div>
	)
}

export default HiddenSearchBar