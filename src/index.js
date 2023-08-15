import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Home } from './Home';
import { Contactus } from './Contactus';
import { ListStudent } from './ListStudent';
import { ListEmp } from './ListEmp';
import { Nopage } from './Nopage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Student from  './Student';
import reportWebVitals from './reportWebVitals';
import { Studentdel } from './Studentdel';
import { Studentcreate } from './Studentcreate';
import { Studentedit } from './Studentedit';
import {Employee} from './Employee';
import {Employeeedit} from './Employeeedit';
import { Employeedel} from './Employeedel';
import { Employeecreate } from './Employeecreate'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="Home" element={<Home />} />
          <Route path="Contactus" element={<Contactus />} />
          <Route path="ListEmployee" element={<ListEmp />} />
          <Route path="ListStudent" element={<ListStudent />} />
          <Route path="emp/:id" element={<Employee />} />
          <Route path="empedit/:id" element={<Employeeedit />} />
          <Route path="empdelete/:id" element={<Employeedel/>} />
          <Route path="empcreate" element={<Employeecreate/>} />
         
          <Route path="student/:id" element={<Student />} />
          <Route path="studentedit/:id" element={<Studentedit />} />
          <Route path="studentdelete/:id" element={<Studentdel/>} />
          <Route path="studentcreate" element={<Studentcreate/>} />
         

          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
