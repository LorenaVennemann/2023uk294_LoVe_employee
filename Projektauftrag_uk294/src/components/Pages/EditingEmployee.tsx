import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { Employee } from "../Types/Employee";
import { defaultAxiosInstance } from "../Service/Api";
import EmployeeService from "../Service/EmployeeService";

const EditEmployee = () => {
  const { id } = useParams<{ id: string }>();
  const [initialValues, setInitialValues] = useState<Employee>({
    id: 0,
    first_name: "",
    last_name: "",
    gender: "",
    birth_date: "",
    hire_date: "",
  });

  useEffect(() => {
    EmployeeService().getEmployeeById(Number(id)).then((data) => {
      setInitialValues(data);
    });
  }, [id]);

  const handleSubmit = (values: Employee) => {
    EmployeeService(defaultAxiosInstance).updateEmployee(values).then(() => {
      alert("Employee updated!");
    });
  };

  return (
    <>
      <h1>Edit Employee</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label htmlFor="first_name">First Name:</label>
            <Field name="first_name" as={TextField} label="First Name" />
          </div>
          <div>
            <label htmlFor="last_name">Last Name:</label>
            <Field name="last_name" as={TextField} label="Last Name" />
          </div>
          <div>
            <label htmlFor="gender">Gender:</label>
            <Field name="gender" as={TextField} label="Gender" />
          </div>
          <div>
            <label htmlFor="birth_date">Birth Date:</label>
            <Field name="birth_date" as={TextField} label="Birth Date" />
          </div>
          <div>
            <label htmlFor="hire_date">Hire Date:</label>
            <Field name="hire_date" as={TextField} label="Hire Date" />
          </div>
          <Button variant="contained" type="submit">
            Save
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default EditEmployee;
