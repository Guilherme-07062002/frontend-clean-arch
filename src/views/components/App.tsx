import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../application/store";
import "./App.css";

function App() {
  const count = useSelector((state: AppState) => state.count);
  const dispatch = useDispatch();

  function setCount() {
    dispatch({ type: "COUNT" });
  }

  return (
    <>
      <div className="card">
        <button onClick={() => setCount()}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
