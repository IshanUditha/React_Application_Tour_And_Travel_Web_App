import Destination from "../components/Destination"
import Footer from "../components/Footer"
import  Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Trip from "../components/Trip"

const Home = () => {
    return (
    <>
             
     <Navbar/>
      <Hero
      cName="hero"
      textname ="hero-text"
      HeroImg ="https://www.journeyera.com/wp-content/uploads/2018/01/sri-lanka-photos-0251.jpg"
      title = "Your Journey Your story"
      text ="Choose Your Favourite Destination"
      url = "/"
      btnClass = "show"
      btnText = "Travel Plan"
      />
      <Destination/>
      <Trip/>
      <Footer/>
     

    </>
    )
}

export default Home
