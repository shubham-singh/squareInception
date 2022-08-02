export default function Square({
    width,
    stepSize,
    relativeSquareGap
  }: {
    width: number;
    stepSize: number;
    relativeSquareGap: number;
  }) {
    console.log(width, stepSize, relativeSquareGap);
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