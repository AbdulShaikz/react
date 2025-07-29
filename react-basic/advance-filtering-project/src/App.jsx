import { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Products from './components/Products/Products';
import Recommended from './components/Recommended/Recommended';
import Sidebar from './components/Sidebar/Sidebar';

import products from './db/data';
import Card from './components/Card';
import './index.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [query, setQuery] = useState("");
  
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }
  const filterItems = products.filter(product => 
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!==-1
  );

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  }
  
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  }

  function filteredData(products, selected, query){
    let filteredProducts = products;

    if(query){
      filteredProducts = filterItems;
    }

    if(selected){
      filteredProducts = filteredProducts.filter(({category,color,company,newPrice,title}) => 
        category===selected ||
        color===selected||
        newPrice===selected||
        title===selected||
        company===selected
      );
    }

    return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice}) => (
      <Card
        key={Math.random()}
        img={img}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
        title={title}
      />
    ));
  }

  const result = filteredData(products,selectedCategory,query);

  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Navigation query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>
    </>
  )
}

export default App
