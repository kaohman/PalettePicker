import React from 'react';

export const Header = () => {
  return(
    <div className='header-div'>
      <h1>Palette Picker</h1>
      <label className='search-bar'>Search Projects:
        <input placeholder='Type project/palette name'></input>
      </label>
    </div>
  )
}

export default Header;