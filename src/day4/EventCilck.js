import React from "react";
    

const EventCilck = () => {
    const handleClick = ()=>{
    alert('버튼클릭');
    }
    return (
    <div className="click">
        <button onClick={handleClick}>클릭!</button>
        </div>
    )
};

export default EventCilck;
