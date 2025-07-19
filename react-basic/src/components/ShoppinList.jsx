import { useState } from "react"

const ShoppinList = () => {

  const [items, setItems] = useState([]);

  const [currentItem, setCurrentItem] = useState({
    name: "",
    price: "",
    quantity: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem(prev => ({
      ...prev,
      [name]: name === "price" || name === "quantity" ? Number(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems(prev => [...prev, currentItem]);
    setCurrentItem({ name: "", price: "", quantity: "" }); 
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Item Name:
          <input
            type="text"
            name="name"
            value={currentItem.name}
            onChange={handleChange}
            placeholder="Enter item name"
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={currentItem.price}
            onChange={handleChange}
            placeholder="Enter item price"
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={currentItem.quantity}
            onChange={handleChange}
            placeholder="Enter item quantity"
          />
        </label>
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShoppinList;