// src/pages/Sobre.jsx
function Sobre() {
  return (
    <div className="home-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4rem 2rem' }}>
      <h2 style={{ color: 'var(--primary-gold)', fontSize: '2.5rem', marginBottom: '2rem' }}>Sobre o Projeto</h2>
      
      <div className="card" style={{ maxWidth: '600px', width: '100%', padding: '2.5rem', textAlign: 'left' }}>
        <div style={{ marginBottom: '2rem' }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
            <strong style={{ color: 'white' }}>Disciplina:</strong> Programação Web Fullstack
          </p>
          <p style={{ color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
            <strong style={{ color: 'white' }}>Projeto 1:</strong> Frontend SPA com React.js e AJAX
          </p>
          <p style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'white' }}>API Utilizada:</strong> Hyrule Compendium API v3
          </p>
        </div>
        
        <h3 style={{ color: 'var(--accent-green)', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.8rem', marginBottom: '1.5rem' }}>
          Equipe de Desenvolvimento
        </h3>
        
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: 'var(--text-main)' }}>
          <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
             <span><strong>Gabriel Mohamad</strong> — RA: 2779730</span>
          </li>
          <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
             <span><strong>João Vitor Souza Santiago</strong> — RA: 2767082</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
             <span><strong>Abner Eduardo</strong> — RA: 2766930</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sobre;