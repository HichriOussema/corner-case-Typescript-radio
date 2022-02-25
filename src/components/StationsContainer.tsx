/* Copy right oussema mouhib HICHRI February 2022 */
import React ,{useState}from 'react'
import {Header} from './Header'
import {StationsList} from './StationList'
import {Footer} from './Footer'
import '../index.css'


 export const  StationsContainer: React.FC = () => {
  const [stationName,setStationName] = useState<string>('');
    
  return (
    <div className='station-container'>
    <Header/>
    <StationsList setNameStationforstationList={(stationName) => setStationName(stationName)} />
    <Footer stationNameforFooter = {stationName}/>
    </div>
  )
}