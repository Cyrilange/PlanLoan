import "./style/Style.scss";
import { useState } from "react";
import Left from "./components/Left";
import Right from "./components/Right";
import Right_result from "./components/Right_result";

function App() {
  const [isCalculated, setIsCalculated] = useState(false);
  const [result, setResult] = useState(null);
  let rightComponent;

  if (isCalculated) {
    rightComponent = <Right_result result={result} />;
  } else {
    rightComponent = <Right />;
  }
  return (
    <div className="container">
      <Left setIsCalculated={setIsCalculated} setResult={setResult} />
      {rightComponent}
    </div>
  );
}

export default App;
