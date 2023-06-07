import React, { useEffect } from 'react';

import EmployeeService, { headers } from '../Service/EmployeeService';
import { useNavigate } from 'react-router-dom';
import { defaultAxiosInstance } from '../Service/Api';
import { Button, TextField } from '@mui/material';
import { Employee } from '../Types/Employee';

const UserLogin = () => {
  const [data, setData] = React.useState([]);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    EmployeeService().getAllEmployees()
      .then((employees) => setData(employees));
  }, []);

  const handleLogin = () => {
    if (email && password) {
      console.log(`Email: ${email}, Password: ${password}, access Token: ${headers.Authorization}`);
      setIsLoggedIn(true);
      navigate("/employee", {replace: true});
      EmployeeService(defaultAxiosInstance).getAllEmployees();
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
          {data.map((employee: Employee) => (
            <div key={employee.id}></div>
          ))}
        </>
      )}
      {isLoggedIn && <div></div>}
    </div>
  );
};

export default UserLogin;