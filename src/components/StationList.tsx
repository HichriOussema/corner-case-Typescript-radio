/* Copy right oussema mouhib HICHRI February 2022 */
import React,{useState,useEffect}from 'react'
import {StationItem} from './StationItem'

interface props{
  setNameStationforstationList : (x :string) => void
  }
 
export const StationsList: React.FC<props> = ({setNameStationforstationList}) => {
  const [stationList,setStationList] = useState([]);

useEffect(() => {
fetch('http://localhost:3001/stations')
    .then(res => {
     return res.json();
    })
    .then(data =>{
      console.log(data)
      setStationList(data);
    })
},[]);

  return (
    <div className='station-list'>
        {stationList.map((el,i)=> { 
        return <StationItem  
        key={i} 
        item={el} 
        setStationNameForstationItem = { (x: string) => setNameStationforstationList(x)}
        />
       } 
     )}
    </div>
  )
}


