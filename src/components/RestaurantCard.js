import { CDN_URL } from "../utils/constant";
const RestaurantCard = ({data})=>{
    const {cuisines,name,avgRating,costForTwo, cloudinaryImageId}=data.info;
    return (<div className='m-4 p-4 w-[180px] bg-gray-200 rounded-lg hover:bg-gray-300'>
        <img className='w-[148px] h-[111px] rounded-lg' src={CDN_URL+cloudinaryImageId}/>
        <h4 className="font-bold p-0">{name.length>15?name.substring(0,14):name}</h4>
        <h4 className="p-0 m-0">{cuisines.length>2?cuisines[0]:cuisines}</h4>
        <h4 className="p-0 m-0">{avgRating}</h4>
        <h4 className="p-0 m-0">{costForTwo}</h4>
    </div>)
}

export const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
        return (
<div>
    <label className="absolute bg-black text-white">Promoted</label>
    <RestaurantCard data={props.data}/>
</div>
        );
    } 
}



export default RestaurantCard;