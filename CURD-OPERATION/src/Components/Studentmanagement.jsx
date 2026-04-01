import { useState } from "react";
import "./StudentManagement.css";

const StudentManagement = () => {
  const [data, setData] = useState([
    { id: 1, fname: "Mark", lname: "Wood", age: 20 },
    { id: 2, fname: "Virat", lname: "Kohli", age: 25 },
    { id: 3, fname: "Rohit", lname: "Sharma", age: 29 },
  ]);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (!fname || !lname || !age) {
      alert("All fields required");
      return;
    }

    if (editId === null) {
      const newData = {
        id: data.length + 1,
        fname,
        lname,
        age,
      };
      setData([...data, newData]);
    } else {
      const updated = data.map((item) =>
        item.id === editId ? { ...item, fname, lname, age } : item
      );
      setData(updated);
      setEditId(null);
    }

    clearForm();
  };

  const handleEdit = (item) => {
    setFname(item.fname);
    setLname(item.lname);
    setAge(item.age);
    setEditId(item.id);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const clearForm = () => {
    setFname("");
    setLname("");
    setAge("");
    setEditId(null);
  };

  return (
    <div className="container">
      <h2>Student Management</h2>

      <div className="form">
        <input
          type="text"
          placeholder="First Name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button className="update" onClick={handleSubmit}>
          {editId === null ? "Add" : "Update"}
        </button>

        <button className="clear" onClick={clearForm}>
          Clear
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.age}</td>
              <td>
                <button className="edit" onClick={() => handleEdit(item)}>
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => handleDelete(item.id)}
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

export default StudentManagement;