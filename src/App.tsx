import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import About from "./components/About";
import Catalog from "./components/Catalog";
import HitProducts from "./components/HitProducts";
import Advantages from "./components/Advantages";
import HowItWorks from "./components/HowItWorks";
import RequestForm from "./components/RequestForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Catalog />
        <HitProducts />
        <Advantages />
        <HowItWorks />
        <RequestForm />
      </main>
      <Footer />
    </div>
  );
}
