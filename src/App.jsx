import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TopSellingPlants from "./components/TopSellingPlants";
import CustomerReview from "./components/CustomerReview";
import O2PLantsSection from "./components/O2PlantsSection";
import Footer from "./components/Footer";

function App(){
  return(
    <>
     <Navbar />
     <HeroSection />
     <TopSellingPlants />
     <CustomerReview />
     <O2PLantsSection />
     <Footer />
    </>
  )
}

export default App;