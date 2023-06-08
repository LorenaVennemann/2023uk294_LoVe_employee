import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import EmployeeService from "../Service/EmployeeService";
import { Employee } from "../Types/Employee";


const EmployeeList = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    EmployeeService().getAllEmployees().then((data) => {
      setEmployees(data);
    });
  }, []);

  const handleDelete = (id: number) => {
    EmployeeService().deleteEmployee(id).then(() => {
      setEmployees((prevEmployees) => prevEmployees.filter((e) => e.id !== id));
    });
  };
  return (
    <>
      <h1>Employee List</h1>
      <Link to="/employee/create">Add Employee</Link>
      <div className="employee-list">
        {employees.map((employee: Employee & { id?: number }) => (
          <Card key={employee.id}> {
          };
            <div style={{ display: "flex", float: "left", width: "100px", height: "100px"  }}>
                <img src="https://media.istockphoto.com/id/666545204/de/vektor/standard-platzhalter-profil-icon.jpg?s=612x612&w=0&k=20&c=REFVSS5uJBPCRm5rcDaOpJ3Behqj4A9cD6kx1ONjaDk=" alt={`${employee.first_name} ${employee.last_name}`} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h2>{`${employee.first_name} ${employee.last_name}`}</h2>
                <p>{`ID: ${employee.id}`}</p>
                <p>{`Gender: ${employee.gender}`}</p>
                <div className="actions">
                <Link to={`/employee/${employee.id}/edit`}>Edit</Link>
                <br />
                <Link to={`/employee/${employee.id}/view`}>View</Link>
                <br />
                  <button onClick={() => handleDelete(employee.id)}>Delete</button>
                </div>
              </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default EmployeeList;