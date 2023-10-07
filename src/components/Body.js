import RestaurantCard from "./RestaurantCard";
import { RESTAURANTS } from "../utils/mockData";
import {useEffect, useState} from 'react';
import Shimmer from './Shimmer';
import { withPromotedLabel } from "./RestaurantCard";
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
let allRestroData;
export const Body = ()=>{
let[listOfRestro,setListOfRestro]=useState([]);
let [showTopRestrobtn,setShowTopRestro]=useState(true)
const[filteredRestro, setFilteredRestro]=useState([]);
const onlineStatus = useOnlineStatus()
const[searchText, setSearchText]=useState('');
const RestroPromotedCard =withPromotedLabel(RestaurantCard)
useEffect(()=>{
   fetchData();
},[]);
const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9801436&lng=77.5685724&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const res = await data.json();
    console.log(res)
    allRestroData= res.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    console.log('allrestro@#$',allRestroData)
    setListOfRestro( allRestroData)
    setFilteredRestro(allRestroData)
}
if(onlineStatus===false){
    return <h1>looks like you are offline!!, please check your internet connection</h1>
}
    return listOfRestro.length===0 ? <Shimmer/>:  (<div className='body'>
        <div  className='m-4 p-4'>
        <input className='border border-solid border-black' type='text' value={searchText} onChange={(e)=>{
         setSearchText(e.target.value)
        }}/>
        <button  className="px-4 py-1 m-4 bg-green-100 rounded-lg" onClick={()=>{
            console.log(searchText)
          let filteredSearch = listOfRestro.filter((info)=>{
             return   info.info.name.toLowerCase().includes(searchText.toLowerCase())
          })  
          setFilteredRestro(filteredSearch)
        }}>Search</button>
        {showTopRestrobtn ? <button className="px-4 py-1 m-4 bg-green-100 rounded-lg" onClick={()=>{   
           filteredList = listOfRestro.filter((info)=>
              info.info.avgRating > 4.4);
              setFilteredRestro(filteredList)
            setShowTopRestro(!showTopRestrobtn)
    }}>Top Rated Restro</button>: <button className="px-4 py-1 m-4 bg-green-100 rounded-lg" onClick={()=>{   
            setFilteredRestro(allRestroData)
            setShowTopRestro(!showTopRestrobtn)
    }}>All Restro</button>}
        </div>
       <div className='flex flex-wrap'>
        {filteredRestro.map((info)=>{
            return <Link to={`/restro/${info.info.id}`}>
                {console.log(info?.info.cuisines.length,'cusinnnes')}
                {info?.info.cuisines.length>4 ? <RestroPromotedCard data={info}/>:
                <RestaurantCard key={info.info.id} data={info}/>}
              
                
                </Link>
            })};
        </div>
    </div>)
}
export default Body;