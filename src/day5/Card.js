import React from 'react'
import Style from './Card.module.css';
import listStyles from './list.module.css';

const Card = () => {
    return (
        <div className={Style.card}>
            <h2>모듈 카드</h2>
            <p>CSS MODULE 적용</p>
        </div>
    )
}

export default Card
