import Button from "./components/Button";

function App(props) {
  return (
    <div>
      <Button
        type="primary"
        text="Button 1"
        basilinca={() => alert("This is first button")}
      />
      <Button
        type="secondary"
        text="Button 2"
        basilinca={() => alert("This is second button")}
      />
      <Button
        type="third"
        text="Button 3"
        basilinca={() => alert("This is third button")}
      />
    </div>
  );
}

export default App;
