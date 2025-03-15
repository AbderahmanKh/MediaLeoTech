import Card from "./Home/Card";
import Ceo from "./Home/Ceo";
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
       <Ceo
        name="John Smith"
        companyName="Tech Solutions Inc."
        description="With over 15 years of experience in technology and innovation, John leads our company with a vision to transform digital experiences. His expertise in business strategy and technological advancement has been instrumental in our company's growth and success in delivering cutting-edge solutions to our clients worldwide."
        imageUrl="https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?cs=srgb&dl=pexels-teddyjmodel-2955376.jpg&fm=jpg"
        linkedinUrl="https://linkedin.com/in/johnsmith"
        twitterUrl="https://twitter.com/johnsmith"
      />
       <Reviews />
       <Contact />
         </>
    )
}

export default Home;