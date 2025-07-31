import "./App.css";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App container mx-auto px-4">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
