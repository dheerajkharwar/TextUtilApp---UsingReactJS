import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function AddStudent(props) {

  let nevigate = useNavigate()

  const [student, setStudent] = useState({
    name: "",
    age: "",
    city: ""
  })
  const { name, age, city } = student
  const onInputChange = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value })
    
  }

  const handleSubmit =async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/student",student);
    nevigate("/");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Student</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                id="name"
                value={name}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your age"
                name="age"
                id="age"
                value={age}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your city"
                name="city"
                id="city"
                value={city}
                onChange={onInputChange}
              />
            </div>
            <button type="submit" className='btn btn-outline-primary'>Submit</button>
            <Link type="submit" className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

