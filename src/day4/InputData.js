import React, { useState } from 'react'

const InputData = ({title,type,value,onChange}) => {
    const [text,setText] = useState('');
    return (
        <div className='input-data'>
            <input 
            type={type}
            placeholder=" "
            value={text}
            onChange={(e)=>setText(e.target.value)}/>
            <label>{title}</label>
        </div>
    )
}

export default InputData