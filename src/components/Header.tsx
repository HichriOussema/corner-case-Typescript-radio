/* Copy right oussema mouhib HICHRI February 2022 */
import React,{useState} from 'react'
import leftButton from '../icons/back-arrow.png'
import startButton from '../icons/switch.png'

export const  Header : React.FC = () => {

  function clicable () {
{document.getElementById('1')?console.log('left is clicable' ):console.log('right is clicable' )}
  }

  return (
   
    <div className='header'>
        <img id='1' onClick={()=>clicable()} className='left-button-params' src={leftButton}/>
        <p className='the-word-station'>STATIONS</p>
        <img id='2'  onClick={()=>clicable()} className='switch-button-params' src={startButton}/>
    </div>
  )
}
