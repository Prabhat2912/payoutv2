import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-row justify-start items-start ">
        <div className="flex flex-col  justify-start sticky">
          <Navbar />
        </div>
        <div>
          <Header />
          <Body />
        </div>
      </div>
    </>
  );
}

export default App;
