import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  // Fetch Products
  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/products"
      );
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Add / Update Product
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await axios.put(
          `http://localhost:3000/products/${editId}`,
          form
        );

        alert("Product Updated Successfully!");
      } else {
        await axios.post(
          "http://localhost:3000/products",
          form
        );

        alert("Product Added Successfully!");
      }

      // Reset Form
      setForm({
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
      });

      setEditId(null);

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Product
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3000/products/${id}`
      );

      alert("Product Deleted Successfully!");

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  // Edit Product
  const handleEdit = (product) => {
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      image: product.image,
    });

    setEditId(product.id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛍 Product Management System</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {editId ? "Update Product" : "Add Product"}
        </button>
      </form>

      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        width="100%"
      >
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.length > 0 ? (
            products.map((p) => (
              <tr key={p.id}>
                <td>
                  <img
                    src={p.image?.trim()}
                    alt={p.name}
                    width="80"
                    height="80"
                  />
                </td>

                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>₹{p.price}</td>
                <td>{p.category}</td>

                <td>
                  <button
                    onClick={() => handleEdit(p)}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(p.id)
                    }
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">
                No Products Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagement;