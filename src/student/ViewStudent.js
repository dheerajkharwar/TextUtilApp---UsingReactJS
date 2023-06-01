import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewStudent() {
    const [student, setStudent] = useState({
        name: "",
        age: "",
        city: ""
    })
    const {id} = useParams();
    useEffect(()=>{
        loadStudent()
    },[])
    const loadStudent = async ()=>{
        const result = await axios.get(`http://localhost:8080/student/${id}`)
        setStudent(result.data)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Student Details</h2>
                    <div className="card">
                        <div className="card-header">
                            Details of student id : {student.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Name:</b>
                                    {student.name}
                                </li>
                                <li className="list-group-item">
                                    <b>Age:</b>
                                    {student.age}
                                </li>
                                <li className="list-group-item">
                                    <b>City:</b>
                                    {student.city}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-primary m-2' to={"/"}>Back to Home</Link>
                </div>
            </div>
        </div>
    )
}
