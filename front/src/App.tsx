import "./App.css";
import React from "react";
import LeftMenu from "./screens/LeftMenu/LeftMenu";
import { RightMenu } from "./screens/RightMenu/RightMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileScreen from "./screens/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LeftMenu />
        <Routes>
          <Route path={"/"} index element={<ProfileScreen />} />
        </Routes>
        <RightMenu />
      </div>
    </BrowserRouter>
  );
}

export default App;
