import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import useDarkMode from "./hooks/useDarkMode";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";
import Card from "./uis/Card";

function App() {
  const { darkMode } = useSelector((state) => state.global);
  console.log(darkMode);
  const dispatch = useDispatch();
  const [darkmode, setDarkMode] = useDarkMode();
  const handleToggleDarkMode = () => {
    setDarkMode(!darkmode);
    dispatch(toggleDarkMode(!darkmode));
  };
  return (
    <div>
      <Card></Card>
      <button onClick={handleToggleDarkMode}>Toggle dark mode</button>
    </div>
  );
}

export default App;
