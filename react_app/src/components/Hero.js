import "./HeroStyle.css";

const Hero = (props) => {
  
    return (
        <>
        <div className={props.cName}>
            <img alt="HeroImg" src={props.HeroImg}/>
            
        </div>
        <div className={props.textname}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>
                {props.btnText}
            </a>

        </div>
        </>
    )
}

export default Hero;
