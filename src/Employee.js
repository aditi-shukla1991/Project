import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cardemployee from './Cardemployee';
export function Employee() {
    const [employee, setEmployee] = useState({});
    const { id } = useParams()
    useEffect(() => {
        fetch("http://localhost:5020/api/Employee/" + id)
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            );
    }, {});
    return (
        <div><h1>hello</h1><label>Id:</label>
            {employee.id}<br />
            <label>name:</label>
            {employee.name}<br />
            <label>Email:</label>
            {employee.email}<br />
            <label>Department:</label>
            {employee.department}<br />
            <Cardemployee    key={id} myEmp={employee}/>
        </div>
    );
}
export default Employee;