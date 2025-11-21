import { useState } from "react";

const Islike =()=>{
    const[isLike,setisLike] = useState('false');
    return(
        <div className="is-like">
            <p>현재 좋아요 : {isLike?"on":"OFF"}</p>
            {isLike && <p>👍</p>}
            <button onClick={()=>{setisLike(!isLike)}}>좋아요 토글</button>
        </div>
    )
};
export default Islike;