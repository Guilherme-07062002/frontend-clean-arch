import "./App.css";
import { makeCountUsecase } from "../../factories";
import { makeGetUsecase } from "../../factories";
import { useState } from "react";

function App() {
  const countUsecase = makeCountUsecase();
  const getUsecase = makeGetUsecase();

  const [count, setCount] = useState(0);

  function handle() {
    countUsecase.execute();
    setCount(getUsecase.execute());
  }

  return (
    <div className="card">
      <button onClick={() => handle()}>count is {count}</button>
    </div>
  );
}

export default App;
