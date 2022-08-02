export default function SideForm({
  setWidth,
  setStepSize,
}: {
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  setStepSize: React.Dispatch<React.SetStateAction<number>>;
}) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    const maxWidth = e.target[0].value;
    const stepSize = e.target[1].value;
    setStepSize(Number(stepSize));
    setWidth(Number(maxWidth));
  };

  return (
    <form className="Form" onSubmit={onSubmit}>
      <h1>
        Square Inception <span>😲</span>
      </h1>
      <input placeholder="Max Width" type="number" />
      <input placeholder="Step Size" type="number" min={1} />
      <button type="submit">Submit</button>
    </form>
  );
}
