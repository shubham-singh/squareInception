import { useState } from "react";
import "./styles.css";

function Square({
  width,
  stepSize,
  relativeSquareGap
}: {
  width: number;
  stepSize: number;
  relativeSquareGap: number;
}) {
  if (width < 0) {
    return null;
  }
  return (
    <div
      style={{
        position: "relative",
        inset: relativeSquareGap,
        width,
        height: width,
        border: "1px solid black"
      }}
    >
      <Square
        width={width - stepSize}
        stepSize={stepSize}
        relativeSquareGap={relativeSquareGap}
      />
    </div>
  );
}

export default function App() {
  const [stepSize, setStepSize] = useState(150);
  const [width, setWidth] = useState(300);

  return (
    <div className="App">
      <div className="Squares">
        <Square
          width={width}
          stepSize={stepSize}
          relativeSquareGap={stepSize / 2}
        />
      </div>
      <div className="Form">
        <h1>
          Square Inception <span>😲</span>
        </h1>
        <input
          placeholder="Max Width"
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
        />
        <input
          placeholder="Step Size"
          value={stepSize}
          type="number"
          min={1}
          onChange={(e) => setStepSize(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
