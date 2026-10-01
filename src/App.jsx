// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
        <h1>Hyrule Compendium</h1>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;