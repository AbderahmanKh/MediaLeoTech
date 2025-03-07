import Cards from "./Services/Card"
import { ServiceSlider } from "./Services/CardAnim"
import Ceo from "./Services/Ceo"
// import Do from "./Services/Do"
import Hero from "./Services/Hero"

function Services() {
  return (
    <>
    <Hero />
    <Cards />
    <ServiceSlider />
    <Ceo />
    {/* <Do /> */}
    </>
  )
}

export default Services