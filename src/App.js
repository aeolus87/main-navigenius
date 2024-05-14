import React from "react";
import Navbar from "./components/Main/Navbar.jsx";
import Map from "./components/Main/Map.jsx";
import Firebasemap from "./components/Main/firebasemap.jsx";


function App() {
  return (
    <>
      <Navbar />
      <Map />
      <Firebasemap />

    </>
  );
}

export default App;
