import React from 'react'
import "./LoginPage.css";
import InputData from './InputData';

const Loginpage = () => {
    const handleSubmit = (e)=>{
        //원래 가진 기능이 사용되지 않도록 방지
        e.preventDefault();
    }
return (
    <div className="login-page" onSubmit={handleSubmit}>
    <form>
        <InputData title="아이디 또는 전화번호" />
        <InputData title="비밀번호" />
        <div className='checkbox'>
            <input type="checkbox" />
            <input type="submit" />
        </div>
    </form>
    </div>
)
}

export default Loginpage