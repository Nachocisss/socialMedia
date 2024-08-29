import "./App.css";
import React from "react";
import LeftMenu from "./screens/LeftMenu/LeftMenu";
import { RightMenu } from "./screens/RightMenu/RightMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileScreen from "./screens/Profile/Profile";
import PortafolioScreen from "./screens/Portafolio/Portafolio";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LeftMenu />
        <Routes>
          <Route path={"/"} index element={<ProfileScreen />} />
          <Route path={"/Portafolio"} element={<PortafolioScreen />} />
        </Routes>
        <RightMenu />
      </div>
    </BrowserRouter>
  );
}

export default App;
