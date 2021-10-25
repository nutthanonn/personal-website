import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/Home/Nav";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
    </div>
  );
}
