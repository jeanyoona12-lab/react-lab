import { useState } from "react";

const Toggle = ()=>{
    const [isShow,setIsShow] = useState(true);
    return(
        <div className="toggle">
            <button 
            onClick={()=>{setIsShow(!isShow)}}>{isShow? "내용 숨기기":"내용 보이기"}
            </button>
            {isShow && <p>집에 가고싶다</p>}
        </div>

    );
}
export default Toggle;