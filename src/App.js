import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import useDarkMode from "./hooks/useDarkMode";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";
import { getNews } from "./sagas/news/newsSlice";
import ButtonToggle from "./uis/ButtonToggle";
import Card from "./uis/Card";
import HackerNews from "./uis/HackerNews";
import Sidebar from "./uis/Sidebar";

function App() {
  return (
    <div>
      <HackerNews></HackerNews>
    </div>
  );
}

export default App;
