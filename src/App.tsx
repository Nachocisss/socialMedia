import "./App.css";
import React from "react";
import Home from "./screens/Home/Home";
import LeftMenu from "./screens/LeftMenu/LeftMenu";
import { RightMenu } from "./screens/RightMenu/RightMenu";

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <Home />
      <RightMenu />
    </div>
  );
}

export default App;
