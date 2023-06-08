import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { Employee } from '../Types/Employee';
import login from '../Service/LoginService';
import { defaultAxiosInstance } from '../Service/Api';
import EmployeeService from '../Service/EmployeeService';
import { Token } from '@mui/icons-material';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
 //   EmployeeService().getAllEmployees()
   //    .then((employees) => setEmployees(employees));
  }, []);

  const handleLogin = async () => {
    if (email && password) {
      console.log(`Email: ${email}, Password: ${password}`);
      const accessToken = await login().loginUser(email, password);
      console.log(`Access Token: ${accessToken}`);
      localStorage.setItem("accessToken", accessToken); 
      setIsLoggedIn(true);
      navigate('/employee', { replace: true });
    }
  };

  return (
    <div>
      {!isLoggedIn && (
        <>
          <h1>Welcome</h1>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
          {employees.map((employee) => (
            <div key={employee.id}></div>
          ))}
        </>
      )}
    </div>
  );
};

export default UserLogin;
