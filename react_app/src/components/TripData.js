

const TripData = (props) => {
    return (
        <div className="trip-card">
            <div className="trip-image">
                <img alt="image" src={props.image}/>

            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>



           
            
        </div>
    )
}

export default TripData
