import React from 'react'
import StyleScss from './StyleScss'
import AlertBox from "./AlertBox"
// import Component from './Component'
import StyleBtn from './StyleBtn'

const Style = () => {
    return (
        <div className='style-page'
        ><StyleScss />
        <AlertBox />
        {/* <Component /> */}
        <StyleBtn />
        </div>
        
    )
}

export default Style