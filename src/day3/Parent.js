import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [count,setcount] = useState(1);
    const handleClick = ()=>{
        setcount(count+1);
    }
    return (
        <div className="parent">
            <h2>현재 카운트 : {count} </h2>
            <Child />
        </div>
    );
};

export default Parent;
