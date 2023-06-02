import React from 'react';
import './App.css';
import UserLogin from './components/Organisms/Login1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
  
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLogin/>}>
        </Route>
        <Route path="/employee">
        </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
