import React from "react"
import Navbar from "./components/navbar/Navbar"
import Content from "./components/content/Content"
import "./App.css"


function App(){
  return(
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
