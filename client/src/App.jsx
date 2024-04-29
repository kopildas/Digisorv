import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Contact from "./page/Contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        {/* <Cursor scaling={scaling}/> */}
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
