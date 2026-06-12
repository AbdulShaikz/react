import { useEffect, useState } from 'react';
import './App.css';

type Products = {
  id: number,
  title: string,
  description: string,
  price: string,
  rating: string,
  thumbnail: string
}

function App() {
  const [products, setProducts] = useState<Products[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function fetchData(){
    try {
      const response = await fetch('https://dummyjson.com/products/?limit=10');
      if(!response.ok){
        throw new Error("Error while getting data");
      }

      const data = await response.json();
      setProducts(data.products || []);

    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else if (typeof error === 'string') {
        setError(error);
      } else {
        setError('unknown');
      }
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <main className="container">
      {products.length > 0 && (
        <section className='card-container'>
          {products.map((product) => (
            <article key={product.id} className='card'>
              <img src={product.thumbnail} className='card-image' alt={product.title} />
              <h3>{product.title}</h3>
              <h3>$ {product.price}</h3>
            </article>
          ))}
        </section>
      )}
    </main>
  );

}

export default App;