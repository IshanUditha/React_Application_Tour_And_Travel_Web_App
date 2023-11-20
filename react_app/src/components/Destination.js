import Img1 from "../assets/1.jpg"
import Img2 from "../assets/2.jpg"
import Img3 from "../assets/3.jpg"
import Img4 from "../assets/4.jpg"
import "./Destination.css"
import DestinationData from "./DestinationData"


const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot,within atime frame</p>
            <DestinationData
            classname ="first-des"
            heading ="Nine Arch Bridge"
            text ="Commissioned under the British in the year 1921, the Nine Arch Bridge stands proudly, a testament to the engineering and architectural brilliance of the early 20th century. Ideally placed between the Ella and Demodara railway station, those choosing to walk along the bridge will be presented with scenes of rolling hills and dense jungle to delight in.The Nine Arch Bridge, also known as the ‘Bridge in the Sky’ was constructed by connecting two bog mountains when constructing the Badulla – Colombo railway. This bridge is 300 feet in length, 25 feet in width and 80-100 feet in height. It is one of the best examples of colonial-era railway construction in the country. The Bridge can be reached by travelling 2km on Gotuwala road starting from Halpe Textile centre in Badulla Bandarawela road."
            Image1 = {Img1}
            Image2 = {Img2}
            />
            <DestinationData
            classname ="first-des-reverse"
            heading ="Sigiriya"
            text ="Sigiriya is one of the most valuable historical monuments of Sri Lanka. Referred by locals as the Eighth Wonder of the World, this ancient palace and fortress complex has significant archaeological importance and attracts thousands of tourists annually. It is probably the most visited tourist destination in Sri Lanka. The palace is located in the heart of the island between Dambulla and Habarane on a massive rocky plateau 370 meters above sea level. Entrance to Sigiria can only be purchased at the site!.Sigiriya rock plateau, formed from the magma of an extinct volcano, is 200 meters higher than the surrounding jungles. Its view astonishes the visitors with the unique harmony between nature and human imagination. "
            Image1 = {Img3}
            Image2 = {Img4}
            />
        
        </div>
    )
}

export default Destination
