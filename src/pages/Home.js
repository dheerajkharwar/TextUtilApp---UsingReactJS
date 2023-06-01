import React, { useEffect, useState } from 'react'
import axios from "axios";
import {Link} from "react-router-dom"

export default function Home(props) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get("http://localhost:8080/student");
    setStudents(result.data);
  }
  const deleteStudent = async (id) =>{
    await axios.delete(`http://localhost:8080/student/${id}`);
    loadStudents();
  }
  return (
    <div>
      <div className="container">
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
              <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">City</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {
                students.map((student, index)=>(
                  <tr  key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.city}</td>
                  <td><Link type="button" className="btn btn-primary mx-2 px-3 py-1" to={`/viewStudent/${student.id}`}>View</Link>
                  <Link type="button" className="btn btn-outline-primary mx-2 px-3 py-1" to={`/editStudent/${student.id}`}>Edit</Link>
                  <button type="button" className="btn btn-outline-danger mx-2 px-2 py-1" onClick={()=>deleteStudent(student.id)}>Delete</button></td>
                </tr>
                ))
              }  
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
