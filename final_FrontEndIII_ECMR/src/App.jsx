
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Routes/Home";
import Dentist from "./Routes/Dentist";
import Contact from "./Routes/Contact";
import Favorite from "./Routes/Favorite";
import {ContextProvider} from "./Components/utils/global.context";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dentist/:id" element={<Dentist />} />
            <Route path="/favorites" element={<Favorite />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </ContextProvider>
    </div>
  );
}

export default App;
