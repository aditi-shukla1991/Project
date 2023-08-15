import { useState } from "react";
import { useNavigate } from "react-router-dom"
export function Studentcreate(props) {
    const [student, setStudent] = useState({});
    let navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setStudent(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(student);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/Student/", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => r.json()).then((data) => data)
        event.preventDefault();
        navigate('/');
        alert(student);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Id:</label>
            <input
                type="text"
                name="id"
                onChange={handleChange}
            />            <br />
            <label>name:</label>
            <input
                type="text"
                name="name"
                onChange={handleChange}
            />            <br />
            <label>:</label>
            <input
                type="text"
                name="studentPhoneNumber"
                onChange={handleChange}
            />            <br />
           
            <input type="submit" />
        </form>
    );
} 
export default Studentcreate;