import Card from "./Home/Card";
import Contact from "./Home/Contact";
import Faq from "./Home/Faq";
import Hero from "./Home/Hero";
import Reviews from "./Home/Reviews";
import Services from "./Home/Services";

    
function Home() {
    
    return (
       <>
       <Hero />
       <Services />
       <Card />
       <Faq />
       <Reviews />
       <Contact />
         </>
    )
}

export default Home;