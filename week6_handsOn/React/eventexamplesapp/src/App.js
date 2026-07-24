import { useState } from "react";
import CurrencyConvertor from "./Components/CurrencyConverter";

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert("Hello! Member");
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handlePress = (e) => {
    alert("I was clicked");
  };

  return (

    <div style={{ margin: "30px" }}>

      <h2>{count}</h2>

      <button onClick={increment}>Increment</button>

      <br /><br />

      <button onClick={decrement}>Decrement</button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>

      <br /><br />

      <button onClick={handlePress}>
        Click on me
      </button>

      <hr />

      <CurrencyConvertor />

    </div>

  );

}

export default App;