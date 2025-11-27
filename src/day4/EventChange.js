import React, { useState } from "react";

const EventChange = () => {
    const [text,settext] = useState('');
    const handleChange =(e)=>{
        const txt = e.target.value;
        settext(txt);
    }
    return  (
        <div className="change">
            <input onChange={handleChange} value={text}/>
            <p>input 입력값 : {text}</p>
        </div>
    )
    
};

export default EventChange;
