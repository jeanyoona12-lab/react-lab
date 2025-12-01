import React from 'react'

const LoginPopUp = ({onClose,textID,textPW,textEmail}) => {
    return (
        <div>
            <h2>Popup</h2>
            <p>입력한 ID: {textID}</p>
            <p>입력한 PW: {textPW}</p>
            <p>입력한 Email: {textEmail}</p>
            <button onClick={onClose}>X</button>
        </div>
    )
}

export default LoginPopUp