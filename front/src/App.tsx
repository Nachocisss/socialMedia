import "./App.css";
import TopMenu from "./screens/TopMenu/TopMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortafolioScreen from "./screens/PortafolioScreen/PortafolioScreen";
import ResumeScreen from "./screens/ResumeScreen/ResumeScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopMenu />
        <Routes>
          <Route path={"/"} index element={<ResumeScreen />} />
          <Route path={"/portafolio"} index element={<PortafolioScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
