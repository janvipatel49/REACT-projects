import { useState } from 'react'
import './Search.css'
const Search = () => {

  // Product State
  const [products, setproduct] = useState([
   
  { id: 1, name: "Laptop", price: 55000, available: true },
  { id: 2, name: "Mobile", price: 20000, available: true },
  { id: 3, name: "Keyboard", price: 800, available: true },
  { id: 4, name: "Mouse", price: 500, available: false },
  { id: 5, name: "Monitor", price: 12000, available: true }
]
  );

  // Input States
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Add Product
  const addProduct = () => {

    if (name === "" || price === "") {
      alert("Please enter product details");
      return;
    }

    const newProduct = {
      id:   products.length+1, // unique id
      name: name,
      price: Number(price),
      available: true
    };

    setproduct(prevProducts => [...prevProducts, newProduct]);

    // clear inputs
    setName("");
    setPrice("");
  };

  // ✅ Delete Product
  const deleteProduct = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      setproduct(prevProducts =>
        prevProducts.filter(product => product.id !== id)
      );
    }
  };

  return (
    <div className="app-container">

      <h2>Product Management</h2>

      {/* ADD PRODUCT SECTION */}
      <div className="add-product">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button onClick={addProduct}>Add Product</button>
      </div>

      {/* TABLE */}
      <table>
        <caption>Product List</caption>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Available</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td className="price">₹{product.price}</td>
              <td>
                {product.available ? (
                  <span className="available-yes">In Stock</span>
                ) : (
                  <span className="available-no">Out of Stock</span>
                )}
              </td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default Search;