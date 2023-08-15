import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
export function Studentdel(props) {
    const [student, setStudent] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:8080/api/Student/" + id)
            .then(res => res.json())
            .then((result) => { setStudent(result); }
            );
    }, {});
    const handledelete = (event) => {
        alert(id);
        fetch("http://localhost:8080/api/Student" + id, {
            method: 'Delete'
        })
            .then(res => console.log(res))
        navigate('/');
    }

    return (
        <div>
            <h1>R you sure</h1>
            <label>Id:</label>
            {student.id}<br />
            <label>name:</label>
            {student.name}<br />
            <label>studentPhoneNumbers:</label>
            {student.studentPhoneNumbers}<br />
           
            
            <form>
                <button onClick={handledelete}>Delete</button>
            </form>
        </div>
    );
}
export default Studentdel;