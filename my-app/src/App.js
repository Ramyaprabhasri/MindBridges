import './App.css';
import './index.css';
import { useState } from 'react';

function App() {
  const [formData, setData] = useState({
    name:'',
    email:'',
    phone: '',
    dob:'',
  })
  const [submittedData, setSubmittedData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const { name, email, phone, dob } = formData;
    if (!name || !email || !phone || !dob) {
      alert("Please fill all the required fields.");
      return;
    }
    if(editIndex!==null){
      const updatedData = [...submittedData];
      updatedData[editIndex]=formData;
      setSubmittedData(updatedData);
      setEditIndex(null);
    }
    else{
      setSubmittedData([...submittedData,formData]);
    }
    setData({name:'',email:'',phone:'',dob:''});

  };
  const handleEdit = (index) =>{
    setData(submittedData[index]);
    setEditIndex(index);
  }
  const handleDelete = (index) =>{
    const updatedData = [...submittedData];
    updatedData.splice(index,1);
    setSubmittedData(updatedData);
  }
  return (
    <div className="form-container">
    <h1>Employee Details Form</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required  />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange}  required  />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" value={formData.phone} onChange={handleChange}  required />
      </div>

      <div className="form-group">
        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" value={formData.dob} onChange={handleChange} required  />
      </div>

      <button className="submit-btn" id="submit-btn" type="submit">Submit</button>
    </form>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Date of Birth</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {submittedData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.dob}</td>
              <td>               
                 <button onClick={() => handleEdit(index)}>Edit</button>
              <br></br> <br></br>
              <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
  );
}

export default App;
