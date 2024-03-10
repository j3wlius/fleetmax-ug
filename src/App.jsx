import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Services />
          <Clients />
          <Contact />
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
