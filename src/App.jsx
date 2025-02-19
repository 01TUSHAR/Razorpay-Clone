import "./App.css";
import Navbar from './components/navbar.jsx';
import HeroSection from "./components/heroSection.jsx";
import FeatureSection from "./components/featureSection.jsx";
import Card from './components/cards.jsx';
import Section2 from './components/section2.jsx';
import Section3 from './components/section3.jsx';
import Section4 from './components/section4.jsx';
import Section5 from './components/section5.jsx';
import Section6 from './components/section6.jsx';
import Section7 from './components/section7.jsx';
import Footer from './components/footer.jsx';
import Banner from './components/banner.jsx';

function App() {
  return (
    <>
    <Banner/>
     <Navbar/>
      <HeroSection/>
      <FeatureSection/>
      <Card/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Footer/>

    </>
  );
}

export default App;
