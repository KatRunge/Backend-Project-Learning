import React, { useEffect, useState } from "react";
import { getAllEmployees } from "../../clients/employeesApiClient";

export const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const employees = await getAllEmployees();
      setEmployees(employees);
    };
    fetchEmployees();
  }, []);
  
  return (
    <>
      {employees.map((employee: any) => (
        <div key={employee.id}>
          <h3>{employee.name}</h3>
          <p>Position: {employee.position}</p>
          <p>Age: {employee.age}</p>
        </div>
      ))}
      <div>Employees List Component</div>
    </>
  );
};
