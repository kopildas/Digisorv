import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import { Footer } from "./components/Footer/Footer";
import Transition from "./components/Page_transition/Transition";
import { Page_Routes } from "./components/Page_transition/Page_Routes";

function App() {
  localStorage.setItem("scrollY", 12);
  return (
    <>
      <Transition>
        <Router>
          {/* <Cursor scaling={scaling}/> */}
          <Header />
          <Page_Routes />
          <Footer />
        </Router>
      </Transition>
    </>
  );
}

export default App;
