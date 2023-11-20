import "./Destination.css"

const DestinationData = (props1) => {
    return (
        <div className={props1.classname}>
                <div className="des-text">
                    <h2>{props1.heading}</h2>
                    <p>{props1.text}</p>
                </div>
                <div className="image">
                    <img alt="img" src={props1.Image1}/>
                    <img alt="img" src={props1.Image2}/>
                </div>

            </div>
    )
}

export default DestinationData
