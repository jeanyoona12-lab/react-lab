const Props = ({idx,text,text_2,text_3})=>{
    
    return (
        <div className="card">
            <h1>{text}</h1>
            <p>{text_2}</p>
            <p className="cap">{text_3}</p>
            <img src={`/image/img-0${idx}.png`} />
        </div>
    );
}


export default Props;