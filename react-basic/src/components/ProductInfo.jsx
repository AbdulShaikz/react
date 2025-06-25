const ProductInfo = () => {
  const product = {
    name: "laptop",
    price: 999.99,
    availability: "In Stock"
  };

  return (
    <div>
      <h1>Product name: {product.name}</h1>
      <h2>Product price: {product.price}</h2>
      <h3>Product availability: {product.availability}</h3>
    </div>
  )
}

export default ProductInfo