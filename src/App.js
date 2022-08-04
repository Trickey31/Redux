import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter.js";

function App() {
  const { count } = useSelector((state) => state.counter);
  return (
    <div>
      <h2>The count in App: {count}</h2>
      <Counter></Counter>
    </div>
  );
}

export default App;
