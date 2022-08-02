import { useState } from "react";
import SideForm from "./SideForm";
import Square from "./Square";
import "./styles.css";

export default function App() {
  const [width, setWidth] = useState(300);
  const [stepSize, setStepSize] = useState(30);

  return (
    <div className="App">
      <div className="Squares">
        <Square
          width={width}
          stepSize={stepSize}
          relativeSquareGap={stepSize / 2}
        />
      </div>
      <SideForm
        // width={width}
        // stepSize={stepSize}
        setWidth={setWidth}
        setStepSize={setStepSize}
      />
    </div>
  );
}
