const ProductList = () => {
  const products = [
    { id: 1, name: 'Product A', price: 29.99 },
    { id: 2, name: 'Product B', price: 49.99 },
    { id: 3, name: 'Product C', price: 19.99}
  ];

  return (
    <div>
      {
        products.map(({name, price}) => (
          <ul key={name}>
            <li>{name}</li>
            <li>${price.toFixed(2)}</li>
          </ul>
        ))
      }
    </div>
  );
}

export default ProductList;