import './card.css';
//props : 부모-> 자식 : 객체로 전달 
const Card = ({file,title})=>{
    return(
        <div className="card">
            <div className="img-wrap">
                <img src={`/image/day${file}.png`} alt="day1이미지" />
                <h2>{title}</h2>
            </div>
        </div>
    )
}
export default Card;