import React, { useState } from 'react';

const FashionStore = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Silk Designer Saree', category: 'Ethnic Wear', price: 4999, stock: 12, image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400' },
    { id: 2, name: 'Tailored Velvet Blazer', category: 'Formal', price: 6899, stock: 8, image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=400' },
    { id: 3, name: 'Embroidered Kurta Set', category: 'Ethnic Wear', price: 2999, stock: 20, image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400' }
  ]);

  const [formData, setFormData] = useState({ id: null, name: '', category: '', price: '', stock: '', image: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  // Stats Calculations
  const totalProducts = products.length;
  const totalValue = products.reduce((acc, curr) => acc + (Number(curr.price) * (Number(curr.stock) || 1)), 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;

    if (isEditing) {
      setProducts(products.map(p => (p.id === formData.id ? { ...formData, price: Number(formData.price), stock: Number(formData.stock) || 1 } : p)));
    } else {
      setProducts([...products, { ...formData, id: Date.now(), price: Number(formData.price), stock: Number(formData.stock) || 1 }]);
    }

    closeDrawer();
  };

  const handleEdit = (product) => {
    setFormData(product);
    setIsEditing(true);
    setIsDrawerOpen(true);
  };

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const openDrawerForNew = () => {
    setFormData({ id: null, name: '', category: '', price: '', stock: '', image: '' });
    setIsEditing(false);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setFormData({ id: null, name: '', category: '', price: '', stock: '', image: '' });
  };

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased">
      
      {/* Top Navbar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center text-white font-black text-lg">F</div>
            <span className="font-bold text-xl tracking-tight">FASHION<span className="text-indigo-600">HUB</span></span>
          </div>

          <button
            onClick={openDrawerForNew}
            className="bg-black hover:bg-gray-800 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all shadow-sm flex items-center gap-2"
          >
            <span>+</span> Add New Product
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        
        {/* Analytics Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Total Items</p>
              <h3 className="text-3xl font-extrabold text-gray-900 mt-1">{totalProducts}</h3>
            </div>
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl">📦</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Inventory Value</p>
              <h3 className="text-3xl font-extrabold text-gray-900 mt-1">₹{totalValue.toLocaleString('en-IN')}</h3>
            </div>
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-xl">₹</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Active Categories</p>
              <h3 className="text-3xl font-extrabold text-gray-900 mt-1">
                {[...new Set(products.map(p => p.category))].length}
              </h3>
            </div>
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center font-bold text-xl">🏷️</div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 border-b border-gray-200 pb-4 overflow-x-auto">
          {['all', 'ethnic', 'formal', 'casual'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === tab 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
              <div>
                <div className="relative h-56 bg-gray-100 overflow-hidden">
                  <img
                    src={item.image || 'https://via.placeholder.com/400'}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                    Qty: {item.stock || 1}
                  </span>
                </div>

                <div className="p-5">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{item.category || 'General'}</span>
                  <h4 className="text-lg font-bold text-gray-900 mt-1">{item.name}</h4>
                  <p className="text-xl font-black text-gray-900 mt-3">₹{Number(item.price).toLocaleString('en-IN')}</p>
                </div>
              </div>

              <div className="p-5 pt-0 flex gap-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold rounded-xl transition-colors"
                >
                  Edit Item
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-4 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-bold rounded-xl transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Product Table View */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-5 border-b border-gray-100">
            <h3 className="font-bold text-gray-900">Inventory Detailed Table</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-gray-400 uppercase text-[11px] font-bold tracking-wider">
                <tr>
                  <th className="p-4">Product</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Stock</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredProducts.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="p-4 font-semibold text-gray-900 flex items-center gap-3">
                      <img src={item.image} alt="" className="w-10 h-10 rounded-lg object-cover" />
                      {item.name}
                    </td>
                    <td className="p-4">{item.category}</td>
                    <td className="p-4 font-bold text-gray-900">₹{item.price}</td>
                    <td className="p-4">{item.stock || 1} units</td>
                    <td className="p-4 text-right space-x-2">
                      <button onClick={() => handleEdit(item)} className="text-indigo-600 font-bold hover:underline">Edit</button>
                      <button onClick={() => handleDelete(item.id)} className="text-rose-600 font-bold hover:underline">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* Slide-over Drawer for Form */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={closeDrawer} />
          
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl p-6 flex flex-col justify-between z-10">
            <div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-6">
                <h3 className="text-lg font-bold text-gray-900">
                  {isEditing ? 'Edit Product' : 'Add New Fashion Item'}
                </h3>
                <button onClick={closeDrawer} className="text-gray-400 hover:text-gray-600 text-xl font-bold">✕</button>
              </div>

              <form id="productForm" onSubmit={handleSubmit} className="space-y-4 text-sm">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Product Title</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Silk Saree"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Category</label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    placeholder="e.g. Ethnic Wear"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Price (₹)</label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="2999"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Stock Qty</label>
                    <input
                      type="number"
                      name="stock"
                      value={formData.stock}
                      onChange={handleInputChange}
                      placeholder="10"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Image URL</label>
                  <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="https://..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </form>
            </div>

            <div className="border-t border-gray-100 pt-4 flex gap-3">
              <button
                type="button"
                onClick={closeDrawer}
                className="flex-1 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="productForm"
                className="flex-1 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800"
              >
                {isEditing ? 'Save Changes' : 'Create Product'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default FashionStore;