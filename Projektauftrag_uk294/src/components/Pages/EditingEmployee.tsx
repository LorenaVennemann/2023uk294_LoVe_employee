import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { Employee } from "../Types/Employee";
import { defaultAxiosInstance } from "../Service/Api";
import EmployeeService from "../Service/EmployeeService";

const EditEmployee = () => {
  const { id } = useParams<{ id: string }>();
  const [employee, setEmployee] = useState<Employee>({
    id: 0,
    first_name: "",
    last_name: "",
    gender: "",
    birth_date: "",
    hire_date: "",
  });

  useEffect(() => {
    EmployeeService().getEmployeeById(Number(id)).then((data) => {
      setEmployee(data);
    });
  }, [id]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    EmployeeService(defaultAxiosInstance).updateEmployee(employee).then(() => {
      alert("Employee updated!");
    });
  };

  return (
    <>
      <h1>Edit Employee</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="First Name"
            name="first_name"
            value={employee.first_name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <TextField
            label="Last Name"
            name="last_name"
            value={employee.last_name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <TextField
            label="Gender"
            name="gender"
            value={employee.gender}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <TextField
            label="Birth Date"
            name="birth_date"
            value={employee.birth_date}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <TextField
            label="Hire Date"
            name="hire_date"
            value={employee.hire_date}
            onChange={handleInputChange}
          />
        </div>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </form>
    </>
  );
};

export default EditEmployee;
