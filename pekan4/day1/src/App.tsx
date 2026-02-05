import { useState, useCallback } from 'react'
import './App.css'
import { UserCard } from './components/UserCard'
import { ProductList } from './components/ProductList'
import { SimpleForm } from './components/SimpleForm'
import { useAsync } from './hooks/useAsync'
import type { User, Product } from './types/index'
import { useAppContext } from './context/AppContext'
import { isUser } from './utils/typeGuards'

const App = () => {
  const { theme, toggleTheme } = useAppContext();
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', isActive: true, roles: ['Admin'] },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', isActive: false, roles: ['User'] },
  ]);

  const fetchProducts = useCallback(async (): Promise<Product[]> => {
    await new Promise(r => setTimeout(r, 800));
    return [
      { id: '1', name: 'MacBook Pro', price: 2000, tags: ['laptop'], inStock: true },
      { id: '2', name: 'Magic Mouse', price: 80, tags: ['accessory'], inStock: false },
    ];
  }, []);

  const { data: products, loading, error } = useAsync<Product[]>(fetchProducts);

  // Type Guard demonstration
  const checkFirstUser = () => {
    if (isUser(users[0])) alert(`Verified: ${users[0].name} is a valid User object`);
  };

  return (
    <main className={`container ${theme}`}>
      <header>
        <h1>TS Day 1</h1>
        <div>
          <button onClick={toggleTheme}>Theme: {theme}</button>
          <button onClick={checkFirstUser}>Check Type</button>
        </div>
      </header>

      <section>
        <h3>Users</h3>
        {users.map(u => (
          <UserCard
            key={u.id}
            user={u}
            onUpdateStatus={(id, status) => setUsers(prev => prev.map(x => x.id === id ? { ...x, isActive: status } : x))}
          />
        ))}
      </section>

      <section>
        <h3>Products</h3>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {products && <ProductList products={products} onProductClick={p => alert(`${p.name}: $${p.price}`)} />}
      </section>

      <section>
        <SimpleForm />
      </section>
    </main>
  );
};

export default App;
