import logo from "./logo.svg";
import "./App.css";
import Component2 from "./Component2";
import { useState } from "react";

function App() {
  const contohVariable = "ini variable";
  const [angka, setAngka] = useState("ini angka");
  const fungsi =()=>{
    setAngka("ini angka yang sudah dirubah")
  }

  return (
    <div className="App">
      <div onClick={fungsi}>appp</div>
      <Component2 contohVariable={contohVariable} angka={angka} setAngka={setAngka} fungsi={fungsi}/>
    </div>
  );
}

export default App;
