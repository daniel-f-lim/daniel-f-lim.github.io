import Homepage from './Homepage';
import About from './About';
import GSheet from './GSheet';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/gsheet" className="nav-item">Google Sheet</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/gsheet" element={<GSheet />}></Route>
      </Routes>
    </div>
  );
}

export default App;
