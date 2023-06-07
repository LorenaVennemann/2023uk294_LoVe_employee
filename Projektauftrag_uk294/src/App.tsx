import React from 'react';
import './App.css';
import UserLogin from './components/Organisms/Login1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@mui/icons-material';
import EmployeeList from './components/Organisms/EmployeeList';



function App() {
  return (
  
     <BrowserRouter>
      <Routes>
      <Route  path="/" element={<Home></Home>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/employee" element={<EmployeeList/>}></Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;