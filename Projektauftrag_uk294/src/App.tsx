import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/Pages/EmployeeList';
import UserLogin from './components/Pages/Login1';
import EditingEmployee from './components/Pages/EditingEmployee';
import EmployeeDetails from './components/Pages/ViewEmployee';
import EmployeeAdd from './components/Pages/AddEmployee';




function App() {
  return (
  
     <BrowserRouter>
      <Routes>
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/employee" element={<EmployeeList/>}></Route>
        <Route path="/employee/:id/edit" element={<EditingEmployee />} />
        <Route path="/employee/:id/view" element={<EmployeeDetails />} />
        <Route path="/employee/create" element={<EmployeeAdd/>}></Route>
      </Routes> 
    </BrowserRouter>
   
  );
}

export default App;