import { useEffect, useState } from "react";

const useRestroMenu = (resid)=>{
const[resInfo,setResInfo]=useState(null);
useEffect(()=>{
    fetchMenuData();
},[])
const fetchMenuData =async ()=>{
    console.log('Inside fetchdata')
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9801436&lng=77.5685724&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`)
    const res = await data.json()
    setResInfo(res.data)
}
return resInfo;
}
export default useRestroMenu;