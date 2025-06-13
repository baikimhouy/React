import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-gray-100">
      <h1 className="text-2xl font-bold text-black">React Counter</h1>

      <p className="bg-violet-500 p-4 rounded-lg text-xl">{count}</p>

      <div className="space-x-4">
        <button
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>

        <button
          className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </button>

        <button
          className="bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
