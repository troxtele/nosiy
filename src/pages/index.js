
import NavBar from "../components/Navbar";
import Stats from "../components/Stats";
import Hero from "../components/Hero";
import Business from "../components/Business";
import Billing from "../components/Billing";
import Steps from "../components/Steps";
import CardDeal from "../components/CardDeal";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Cta from "../components/Cta";


export default function Home() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <NavBar />
      <Hero />
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Steps />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
}
