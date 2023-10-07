import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";
export const RestroMenu=()=>{
const {resid}=useParams()
const resInfo = useRestroMenu(resid);
if(resInfo===null){
    return <Shimmer/>
}
const {costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    return (
        <div className="menu">
            <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
            <h1>{costForTwoMessage}</h1>
            <h1>Menu</h1>
            <ul>
                {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.itemCards?.map((item)=>{
                    return <li key={item.card.info.id}>{item.card.info.name}-{(item.card.info.price/100) || (item.card.info.defaultPrice/100)}</li>
                })}
            </ul>
        </div>
    )
}