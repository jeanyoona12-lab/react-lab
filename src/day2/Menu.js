import { useState } from "react";
import './menu.css';

const Menu =()=>{
    const [Menu,setMenu] = useState(true);
    return (
    <div className="menu">
        <p onClick={()=>setMenu(!Menu)}>{Menu? "":""}=</p>
        {Menu && 
        <>
            <ul>
            <li>Session</li>
            <li>INFO</li>
            <li>FAQ</li>
            </ul>
            <div className="login">LOGIN</div>
        </>}
    </div>
    );
}
export default Menu;