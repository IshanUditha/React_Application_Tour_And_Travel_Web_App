import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Trip from "../components/Trip"
import ServiceImg from "../assets/service.jpg"

const Service = () => {
    return (
        <>
            <Navbar/>
            <Hero
            cName="hero-about"
            textname ="about-text"
            HeroImg ={ServiceImg}
            title = "Service"
            btnClass = "hide"
            />
            <Trip/>
            <Footer/>

            

        </>
    )
}

export default Service
