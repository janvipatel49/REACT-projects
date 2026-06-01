import React, { useState, useMemo } from "react";
import "./App.css";

export default function DataTableCRUD() {
  const [data, setData] = useState([
    { id: 1, name: "janvi", age: 18, city: "Surat" },
    { id: 2, name: "honey", age: 26, city: "Ahmedabad" },
  ]);

  const [form, setForm] = useState({ id: null, name: "", age: "", city: "" });
  const [search, setSearch] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: "name", direction: "asc" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.id === null) {
      const newItem = { ...form, id: Date.now() };
      setData([...data, newItem]);
    } else {
      setData(data.map((item) => (item.id === form.id ? form : item)));
    }

    setForm({ id: null, name: "", age: "", city: "" });
  };

  const handleEdit = (item) => {
    setForm(item);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // derive unique cities for filter options
  const cityOptions = useMemo(() => {
    const setC = new Set(data.map((d) => d.city));
    return ["", ...Array.from(setC)];
  }, [data]);

  // filtered by search and selected city
  const visibleData = useMemo(() => {
    return data.filter((item) => {
      const matchesSearch =
        item.name.toString().toLowerCase().includes(search.toLowerCase()) ||
        item.city.toString().toLowerCase().includes(search.toLowerCase());
      const matchesCity = filterCity ? item.city === filterCity : true;
      return matchesSearch && matchesCity;
    });
  }, [data, search, filterCity]);

  const sortedData = useMemo(() => {
    let sortable = [...visibleData];

    if (sortConfig.key) {
      sortable.sort((a, b) => {
        const av = a[sortConfig.key];
        const bv = b[sortConfig.key];
        if (av < bv) return sortConfig.direction === "asc" ? -1 : 1;
        if (av > bv) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return sortable;
  }, [visibleData, sortConfig]);

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const clearFilter = () => setFilterCity("");

  return (
    <div className="page-wrap p-10 max-w-6xl mx-auto">
      <h1 className="page-title">Redux</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="form-grid">
        <input
          type="text"
          placeholder="Enter Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="input"
          required
        />

        <input
          type="number"
          placeholder="Enter Age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
          className="input"
          required
        />

        <input
          type="text"
          placeholder="Enter City"
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
          className="input"
          required
        />

        <button type="submit" className="btn-primary">
          {form.id === null ? "Add" : "Update"}
        </button>
      </form>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by Name or City..."
          className="input search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="controls-right">
          <div className="btn-group">
            <button
              onClick={() => setShowFilter((s) => !s)}
              className="btn-outline"
              aria-expanded={showFilter}
            >
              Filter
            </button>

            <button
              onClick={() => setShowSort((s) => !s)}
              className="btn-outline"
              aria-expanded={showSort}
            >
              Sort
            </button>
          </div>

          {/* Filter panel */}
          {showFilter && (
            <div className="panel filter-panel">
              <label className="panel-row">
                <span>City</span>
                <select
                  value={filterCity}
                  onChange={(e) => setFilterCity(e.target.value)}
                >
                  <option value="">All Cities</option>
                  {cityOptions
                    .filter(Boolean)
                    .map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                </select>
              </label>
              <div className="panel-actions">
                <button onClick={() => setShowFilter(false)} className="btn-sm">
                  Apply
                </button>
                <button onClick={clearFilter} className="btn-sm muted">
                  Clear
                </button>
              </div>
            </div>
          )}

          {/* Sort panel */}
          {showSort && (
            <div className="panel sort-panel">
              <label className="panel-row">
                <span>Sort by</span>
                <select
                  value={sortConfig.key}
                  onChange={(e) => setSortConfig({ ...sortConfig, key: e.target.value })}
                >
                  <option value="name">Name</option>
                  <option value="age">Age</option>
                  <option value="city">City</option>
                </select>
              </label>
              <div className="panel-row">
                <span>Direction</span>
                <button
                  onClick={() =>
                    setSortConfig({ ...sortConfig, direction: sortConfig.direction === "asc" ? "desc" : "asc" })
                  }
                  className="btn-sm"
                >
                  {sortConfig.direction === "asc" ? "Ascending ⬆️" : "Descending ⬇️"}
                </button>
              </div>
              <div className="panel-actions">
                <button onClick={() => setShowSort(false)} className="btn-sm">
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="data-table card">
        <table className="table">
          <thead>
            <tr>
              {["name", "age", "city"].map((key) => (
                <th
                  key={key}
                  onClick={() => requestSort(key)}
                  className="th"
                >
                  {key.toUpperCase()}{" "}
                  {sortConfig.key === key && (sortConfig.direction === "asc" ? "⬆️" : "⬇️")}
                </th>
              ))}
              <th className="th">Actions</th>
            </tr>
          </thead>

          <tbody>
            {sortedData.map((item) => (
              <tr key={item.id} className="tr">
                <td className="td">{item.name}</td>
                <td className="td">{item.age}</td>
                <td className="td">{item.city}</td>
                <td className="td actions">
                  <button onClick={() => handleEdit(item)} className="btn-edit">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="btn-delete">
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {sortedData.length === 0 && (
              <tr>
                <td colSpan="4" className="no-data">
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
