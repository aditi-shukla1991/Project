import React from 'react';
import { useState, useEffect } from "react";

export function ListEmp(props) {
    const [employees, setEmployee] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5020/api/Employee")
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            );
    }, []);
    return (
        <div>
            <h2>Employees Data...</h2>
            <h3><a href ={'/empcreate/'}>Employeecreate</a></h3>
            <table> <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                 </tr>
            </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.department}</td>
                            <td> <a href={'/emp/' + emp.id}>display</a></td>
                            <td> <a href={'/empedit/' + emp.id}>Edit</a></td>
                            <td> <a href={'/empdelete/' + emp.id}>delete</a></td>
                            
                        </tr>
                    ))}
                </tbody></table></div>
    );
}