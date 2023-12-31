import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import {Link} from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header =()=>{
const [btnName,setBtnName]=useState('Login');
const onlineStatus = useOnlineStatus();

useEffect(()=>{
console.log('useEffect is called!!')
},[])    
    return (<div className='flex justify-between shadow-lg bg-pink-50 m-2 mb-2'>
        <div className='logo-container'>
            <img className='w-28' src={LOGO_URL}/>
        </div>
        <div className='flex items-center'>
            <ul className="flex p-4 m-4">
                <li className="px-4">online Status: {onlineStatus?'✅':'🛑'}</li>
                <li className="px-4"><Link to='/'>Home</Link></li>
                <li className="px-4"><Link to='/about'>About Us</Link></li>
                <li className="px-4"><Link to='/contact'>Contact Us</Link></li>
                <li className="px-4"><Link to='/grocery'>Grocery</Link></li>
                <li className="px-4">Cart</li>
                <button className="login-btn" onClick={()=>{btnName==='Login'?setBtnName('Logout'):setBtnName('Login')}}>{btnName}</button>
            </ul>
        </div>
    </div>)
}