import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Texteditor from "./components/Texteditor";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={`/documents/${uuidv4()}`} />}
          />
          <Route path="/documents/:id" element={<Texteditor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
