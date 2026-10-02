// src/pages/Home.jsx
import { useState, useEffect, useMemo } from 'react';
import { fetchAllItems } from '../services/api';

function Home() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null); // Estado do Modal

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchAllItems();

        if (!result) {
          setLoading(false);
          return;
        }

        let itemsArray = [];

        // Os itens vêm diretamente num array dentro de result.data (Padrão V3)
        if (Array.isArray(result.data)) {
          itemsArray = result.data;
        }
        // Os itens vêm divididos por categorias num objeto
        else if (result.data && typeof result.data === 'object' && !Array.isArray(result.data)) {
          itemsArray = [
            ...(result.data.creatures?.food || []),
            ...(result.data.creatures?.non_food || []),
            ...(result.data.equipment || []),
            ...(result.data.materials || []),
            ...(result.data.monsters || []),
            ...(result.data.treasure || [])
          ];
        }
        // O próprio result já é o array direto
        else if (Array.isArray(result)) {
          itemsArray = result;
        }

        setItems(itemsArray);
      } catch (error) {
        console.error("Erro ao carregar itens", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // useMemo para filtrar por texto e por categoria clicada
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [items, searchTerm, activeCategory]);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Carregando o universo de Zelda...</p>
      </div>
    );
  }

  return (
    <div className="home-container">
      {/* Seção Hero - Destaque Visual */}
      <section className="hero-section">
        <div className="hero-content">
          <h2>Explore a Enciclopédia de Zelda</h2>
          <p>Encontre detalhes sobre monstros, materiais, tesouros e equipamentos de Zelda BOTW e TOTK.</p>
        </div>
      </section>

      {/* Controles Dinâmicos */}
      <section className="controls-section">
        <input
          type="text"
          placeholder="Pesquisar por nome (ex: sword, bokoblin)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <div className="category-filters">
          <button className={activeCategory === 'all' ? 'active' : ''} onClick={() => setActiveCategory('all')}>Todos</button>
          <button className={activeCategory === 'monsters' ? 'active' : ''} onClick={() => setActiveCategory('monsters')}>Monstros</button>
          <button className={activeCategory === 'equipment' ? 'active' : ''} onClick={() => setActiveCategory('equipment')}>Equipamentos</button>
          <button className={activeCategory === 'materials' ? 'active' : ''} onClick={() => setActiveCategory('materials')}>Materiais</button>
          <button className={activeCategory === 'treasure' ? 'active' : ''} onClick={() => setActiveCategory('treasure')}>Tesouros</button>
        </div>
      </section>

      {/* Grade de Resultados */}
      <section className="grid">
        {filteredItems.length > 0 ? (
          filteredItems.slice(0, 40).map((item) => (
            <div
              key={item.id}
              className="card"
              onClick={() => setSelectedItem(item)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-image-wrapper">
                <img src={item.image} alt={item.name} loading="lazy" />
              </div>
              <div className="card-info">
                <h3>{item.name}</h3>
                <span className="badge">{item.category}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>Nenhum item encontrado com estes filtros.</p>
          </div>
        )}
      </section>

      {/* Janela do Modal */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedItem(null)}>X</button>

            <img src={selectedItem.image} alt={selectedItem.name} />
            <h2>{selectedItem.name}</h2>
            <p className="modal-description">{selectedItem.description}</p>

            {/* Só mostra os locais se eles existirem */}
            {selectedItem.common_locations && selectedItem.common_locations.length > 0 && (
              <div className="modal-details">
                <strong style={{ color: 'var(--text-gold)' }}> Locais Comuns:</strong>
                <ul>
                  {selectedItem.common_locations.map((loc, index) => (
                    <li key={index}>{loc}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Só mostra os drops se eles existirem */}
            {selectedItem.drops && selectedItem.drops.length > 0 && (
              <div className="modal-details">
                <strong style={{ color: 'var(--text-gold)' }}> Drops:</strong>
                <ul>
                  {selectedItem.drops.map((drop, index) => (
                    <li key={index}>{drop}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default Home;
