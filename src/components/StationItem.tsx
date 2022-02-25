/* Copy right oussema mouhib HICHRI February 2022 */
import React,{useState} from 'react'
import minusButton from '../icons/minus.png'
import plusButton from '../icons/plus.png'


interface Props {
  item : {
    name : string,
    frequence :string,
    imagelink: string
  },
  setStationNameForstationItem: ( x :string) => void
}
export const  StationItem: React.FC<Props> = ({item,setStationNameForstationItem}) =>{
  
    const [isActive, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
    setStationNameForstationItem(item.name);
  };
  const clicable = () => {
    console.log('clickkk !!')
  };
  const UpperComponent = () => (
     <div  id="results" className='station-item2' >
      <img  onClick={clicable}className='interface_plus_add' src={minusButton}/>
      <img onClick={toggleClass} className='middleButtonImage' src={item.imagelink}/>
      <img  onClick={clicable}className='interface_plus_add' src={plusButton}/>
      </div>
  ) 
  return (
    <div className= 'container-station-items'>
      { !isActive ? <UpperComponent /> : null }
      <div onClick={toggleClass}  className='station-item' >
      <p className='station-name-params'>{item.name}</p>
      <p className='station-freqeunce-params'>{item.frequence}</p>
      </div>
    </div>
  )
}
