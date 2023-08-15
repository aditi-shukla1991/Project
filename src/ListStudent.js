import React from 'react';
import { useState, useEffect } from "react";

export function ListStudent(props) {
    const [students, setStudent] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/api/students")
            .then(res => res.json())
            .then((result) => { setStudent(result); }
            );
    }, []);
    return (
        <div>
            <h2>students Data...</h2>
            <h3><a href ={'/studcreate/'}>Studentcreate</a></h3>
            <table> <thead>
                <tr>
                    <th>studentId</th>
                    <th>studentName</th>
                    <th>studentPhoneNumbers</th>
                   
                 </tr>
            </thead>
                <tbody>
                    <h1>hello</h1>
                    {students.map(student => (
                        <tr key={student.studentId}>
                            <td>{student.studentId}</td>
                            <td>{student.studentName}</td>
                            <td>{student.studentPhoneNumbers}</td>
                            
                            <td> <a href={'/student/' + student.id}>display</a></td>
                            <td> <a href={'/studentedit/' +student.id}>Edit</a></td>
                            <td> <a href={'/studentdelete/' + student.id}>delete</a></td>
                            
                        </tr>
                    ))}
                </tbody></table></div>
    );
}