import React, { useState } from 'react'
import "./LoginPage.css";
import InputData from './InputData';
import LoginPopUp from './LoginPopUp';

const Loginpage = () => {
    const [isShow,setIsShow] = useState(false);
    const [strID,setStrID] = useState('');
    const [strPW,setStrPW] = useState('');
    const [strEmail,setSterEmail] = useState('');
    const handleSubmit = (e)=>{
        //원래 가진 기능이 사용되지 않도록 방지
        e.preventDefault();
        //이메일 주소를 검사한 다음, 제대로 된 이메일 주소면 popup오픈
        if( strEmail.includes('@'));
        //popup
        setIsShow(true);
    };
    const handelEmailBlur = ()=>{
        alert("블러상태")
    }
    const handleClose = ()=>{
        setIsShow(false);
        setStrID('');
        setStrPW('');
    };
return (
    <>
        <form 
        className="login-page" 
        onSubmit={handleSubmit}>
            <InputData 
            type="text"
            value={strID}
            onChange={(e)=>{setStrID(e.target.value)}}
            title="아이디 또는 전화번호" />
            <InputData 
            type="password"
            value={strPW}
            onChange={(e)=>{setStrPW(e.target.value)}}
            title="비밀번호" />
            <InputData 
            title="이메일주소"
            type="email"
            value={strEmail}
            onChange={(e)=>{setStrEmail(e.target.value)}}
            onBlur={handleCloseEmailBlur}
            />
            {
                isError &&
                <p>올바른 이메일 주소가 아닙니다</p>
            }
            <div className='checkbox'>
                <input id="check" type="checkbox" />
                <label htmlFor="check">로그인상태유지</label>
            </div>
            <button type="submit">로그인</button>
        </form>
        {
        isShow && <LoginPopUp 
        onClose={handleClose}
        textID={strID}
        textPW={strPW}
        textEmail={strEmail}
        />
        }
    </>
)
}

export default Loginpage