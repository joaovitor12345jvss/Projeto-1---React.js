import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
// Depois criar um App.css para os estilos do Zelda
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
          <Route path="/sobre" element={<h2>Projeto 1 - Programação Web Fullstack</h2>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;