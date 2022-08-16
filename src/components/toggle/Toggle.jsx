import React, { useContext } from 'react';
import '../toggle/toggle.css';
import Sun from '../../img/sun.png';
import Moon from '../../img/moon.png';
import { ThemeContext } from '../../context';

const Toggle = () => {
    const theme = useContext(ThemeContext)
    const handleClick = ()=>{
        theme.dispatch({type: "TOGGLE"})

    }
    


  return (
    <div className='t'>
        <img src={Sun} alt="light mode" className='t-icon' />
        <img src={Moon} alt="Dark mode" className='t-icon' />
        <div className="t-button" onClick={handleClick} style= {{left:theme.state.darkMode ? 0 : 25 }}> </div>
      
    </div>
  )
}

export default Toggle
