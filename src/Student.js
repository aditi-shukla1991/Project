import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
{/*import Cardemployee from './Cardemployee';*/}
export function Student() {
    const [student, setStudent] = useState({});
    const { id } = useParams()
    useEffect(() => {
        fetch("http://localhost:8080/api/students")
            .then(res => res.json())
            .then((result) => { setStudent(result); }
            );
    }, {});
    return (
        <div><h1>hello</h1><label>Id:</label>
            {student.studentId}<br />
            <label>name:</label>
            {student.studentName}<br />
            <label>studentPhoneNumbers:</label>
            {student.studentPhoneNumbers}<br />
           
          {/*  <Cardemployee    key={id} myEmp={employee}/>8*/}
        </div>
    );
}
export default Student;