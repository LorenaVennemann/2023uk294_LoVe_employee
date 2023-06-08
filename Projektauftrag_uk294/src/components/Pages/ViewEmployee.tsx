import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeService from '../Service/EmployeeService';
import { Employee } from '../Types/Employee';

const EmployeeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [employee, setEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    EmployeeService().getEmployeeById(Number(id))
      .then((employee) => {
        setEmployee(employee);
      })
      .catch((error) => {
        console.error(error);
        setEmployee(null);
      });
  }, [id]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{`${employee.first_name} ${employee.last_name}`}</h1>
      <p>Birth Date: {employee.birth_date}</p>
      <p>Gender: {employee.gender}</p>
      <p>Hire Date: {employee.hire_date}</p>
    </div>
  );
};

export default EmployeeDetails;