import React from "react";
import { Formik, Form, Field } from "formik";
import EmployeeService from "../Service/EmployeeService";
import { Employee } from "../Types/Employee";
import { defaultAxiosInstance } from "../Service/Api";

const EmployeeForm = () => {
  const handleSubmit = (values: Employee) => {
    const newEmployee: Employee = {
      ...values,
      id: 0,
    };
    EmployeeService(defaultAxiosInstance)
      .createEmployee(newEmployee)
      .then(() => {
        window.location.href = "/employee";
      });
  };

  return (
    <Formik
    initialValues={{
      first_name: "",
      last_name: "",
      gender: "",
      birth_date: "",
      hire_date: "",
      id: 0,
    }}
    onSubmit={handleSubmit}
  >
      <Form>
        <div>
          <label htmlFor="first_name">First Name:</label>
          <Field name="first_name" type="text" />
        </div>
        <div>
          <label htmlFor="last_name">Last Name:</label>
          <Field name="last_name" type="text" />
        </div>
        <div>
          <label htmlFor="birth_date">Birth Date:</label>
          <Field name="birth_date" type="text" />
        </div>
        <div>
          <label htmlFor="hire_date">Hire Date:</label>
          <Field name="hire_date" type="text" />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <Field name="gender" as="select">
            <option value="">Select:</option>
            <option value="male">M</option>
            <option value="female">F</option>
            <option value="other">Other</option>
          </Field>
        </div>
        <button type="submit">Add Employee</button>
      </Form>
    </Formik>
  );
};

export default EmployeeForm;
