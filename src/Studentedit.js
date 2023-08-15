import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

export function Studentedit(props) {
    const [student, setStudent] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:5020/api/Employee/" + id)
            .then(res => res.json())
            .then((result) => {
                setStudent(result);
            }
            );
    }, {});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setStudent(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(student);
        console.log(JSON.parse(demo));
        fetch("http://localhost:5020/api/Employee/" + id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })
        event.preventDefault();
        navigate('/');

        alert(student);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>code:</label>
            <input
                type="text"
                name="id"
            value={student.id || ""}
            onChange={handleChange}
                    />
            <br />            <label>name:</label>
            <input
                type="text"
                name="name"
                value={student.name || ""}
                onChange={handleChange}
            />
            <br />            <label>studentPhoneNumbers:</label>
            <input
                type="text"
                name="studentPhoneNumbers"
                value={student.studentPhoneNumbers || ""}
                onChange={handleChange}
            />
            
            <input type="submit" />
        </form>
    );
} export default Studentedit;