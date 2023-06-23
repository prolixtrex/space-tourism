import Crew from "./Crew";
import Destination from "./Destination";
import Header from "./Header";
import Home from "./Home";
import Technology from "./Technology";
import { Routes, Route, } from "react-router-dom";
import { useState } from "react";


function App() {
  const [active, setActive] = useState()

  return (
    <div className="App">
      <Header {...{ active }} />
      <Routes>
        <Route path="/" element={<Home {...{ setActive }} />} />
        <Route path="/destination" element={<Destination {...{ setActive }} />} />
        <Route path="/crew" element={<Crew {...{ setActive }} />} />
        <Route path="/technology" element={<Technology {...{ setActive }} />} />
      </Routes>
    </div>
  );
}

export default App;
