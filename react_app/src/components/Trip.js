import TripData from "./TripData"
import "./TripStyle.css"
import Img1 from "../assets/5.jpg"
import Img2 from "../assets/6.jpg"
import Img3 from "../assets/7.jpg"

const Trip = () => {
    return (
        <div className="trip">
            <h1>Recent Trip</h1>
            <p>You can discover unique destination using Google maps</p>
            <div className="tripcard">
                <TripData
                image = {Img1}
                heading = "Trip in Nuwara Eliya"
                text = "Dubbed Little England due to its cool climate and colonial-era bungalows, Nuriwaya Eliya boasts a landscape far more dramatic than Britain's. Mist-shrouded mountains and terraced tea plantations surround the former hill station, while world-class brews are abundant."
                />

                <TripData
                image = {Img2}
                heading = "Trip in Anuradhapura"
                text = "This sacred city was established around a cutting from the 'tree of enlightenment', the Buddha's fig tree, brought there in the 3rd century B.C. by Sanghamitta, the founder of an order of Buddhist nuns. Anuradhapura, a Ceylonese political and religious capital that flourished for 1,300 years, was abandoned after an invasion in 993. Hidden away in dense jungle for many years, the splendid site, with its palaces, monasteries and monuments, is now accessible once again."
                />

                <TripData
                image = {Img3}
                heading = "Trip in Galle"
                text = "Perched on Sri Lanka’s southwest coast, Galle wears its history on its sleeve. Windswept beaches and nodding palms surround its colonial-era showpiece, a 16th-century Portuguese-built fort, while the rest of the city is trimmed with Dutch-style houses, quirky shops, whitewashed mansions, and heritage museums."
                />
            </div>
            
        </div>
    )
}

export default Trip
