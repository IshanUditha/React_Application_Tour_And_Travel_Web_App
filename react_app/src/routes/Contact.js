import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import ContactImg from "../assets/contact.jpg"
import ContactForm from "../components/ContactForm"
const Contact = () => {
    return (
        <>
        <Navbar/>
        <Hero
        cName="hero-about"
        textname ="about-text"
        HeroImg ={ContactImg}
        title = "Contact"
        btnClass = "hide"
        />
        <ContactForm/>
        <Footer/>
        

        </>
    )
}

export default Contact
