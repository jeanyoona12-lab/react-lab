const Props = (props)=>{
    console.log (props.user);
    return (
        <div className="card">
            <img src="./image/img-01.png"/>
            <h2>홍길동</h2>
            <p>우리의 영웅</p>
        </div>
    );
}
export default Props;