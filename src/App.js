import Homepage from './Homepage';
import About from './About';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about" className="nav-item">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
