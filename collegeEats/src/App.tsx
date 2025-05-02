import { useState } from "react";
import LeftSide from "./components/LeftSide.tsx";
import RightSide from "./components/RightSide";
import Navbar from "./components/Navbar.tsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <div className="flex grid-col-[180px_1fr]">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
