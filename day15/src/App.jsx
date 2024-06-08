import { useState } from "react";
import "./App.css";

function App() {
  const [increase, setIncrease] = useState(0);

  // if (increase === 0) setIncrease(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        </a>
        <a href="https://react.dev" target="_blank">
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setIncrease((increase) => increase + 1)}>
          +
        </button>

        {increase}
        <button
          onClick={() =>
            setIncrease((increase) => {
              return increase === 0 ? 0 : increase - 1;
            })
          }
        >
          -
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
