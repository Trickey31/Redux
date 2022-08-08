import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import useDarkMode from "./hooks/useDarkMode";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";
import ButtonToggle from "./uis/ButtonToggle";
import Card from "./uis/Card";
import Sidebar from "./uis/Sidebar";

function App() {
  return (
    <div>
      <Sidebar></Sidebar>
      <ButtonToggle></ButtonToggle>
    </div>
  );
}

export default App;
