import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ColorBox from "./components/ColorBox";

function App() {
  const colors = ["pink", "blue", "red", "lightseagreen", "tomato", "lightcoral"];
  return (
    <>
      <h1>🎨 Color Switcher</h1>

      <div className="gap-2 my-7">
        {
      colors.map(items => 
        <Button key={items} color={items}>{items}</Button>
      )
      }
      <ColorBox/>
      </div>
    </>
  )
}

export default App;
