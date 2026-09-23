import "./App.css";
import Button from "./components/Button";

function App() {
  const buttonProps = {
    text: "블로그",
    color: "blue",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
      <Button text={"메일"} color={"red"} />
      <Button text={"카페"} />
      <Button {...buttonProps} />
    </>
  );
}

export default App;
