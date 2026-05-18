import { useState, useEffect } from 'react';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Błąd pobierania kategorii:", err));

    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Błąd pobierania produktów:", err));
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter(p => p.categoryId === selectedCategory)
    : products;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Sklep</h1>

      <section>
        <h2>Kategorie</h2>
        <button 
          onClick={() => setSelectedCategory(null)}
          style={{ marginRight: '10px', padding: '5px 10px', fontWeight: selectedCategory === null ? 'bold' : 'normal' }}
        >
          Wszystkie
        </button>
        
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            style={{ marginRight: '10px', padding: '5px 10px', fontWeight: selectedCategory === cat.id ? 'bold' : 'normal' }}
          >
            {cat.name}
          </button>
        ))}
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>Produkty</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {filteredProducts.map(prod => (
            <li 
              key={prod.id} 
              style={{ borderBottom: '1px solid #ccc', padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}
            >
              <span>{prod.name}</span>
              <strong>{prod.price} PLN</strong>
            </li>
          ))}
        </ul>
        {filteredProducts.length === 0 && <p>Brak produktów w tej kategorii.</p>}
      </section>
    </div>
  );
}

export default App;