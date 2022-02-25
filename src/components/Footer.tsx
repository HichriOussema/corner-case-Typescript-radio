/* Copy right oussema mouhib HICHRI February 2022 */
import React from 'react'

interface Props {
  stationNameforFooter : string;
}

export const Footer : React.FC<Props> =({stationNameforFooter}) => {
  return (
    <div className='footer'>
      <div className='curently-playing'> <p >CURRENTLY PLAYING</p> </div>
      <div> <p>{stationNameforFooter}</p> </div>
    </div>
  )
}