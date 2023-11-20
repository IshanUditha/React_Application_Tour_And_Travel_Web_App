import  Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import AboutImg from "../assets/about.jpg"
import Footer from "../components/Footer"
import AboutUs from "../components/AboutUs"

const About = () => {
    return (
        <>
         <Navbar/>
         <Hero
            cName="hero-about"
            textname ="about-text"
            HeroImg ={AboutImg}
            title = "About"
            btnClass = "hide"
         />
         <AboutUs/>
         <Footer/>
    </>
    )
}

export default About
