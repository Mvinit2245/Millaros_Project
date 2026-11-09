import React from 'react'

function FilterEx() {
   const employees = [
    { id: 1, name: "Vinit", active: true },
    { id: 2, name: "Amit", active: false },
    { id: 3, name: "Neha", active: true }
  ];

  const activeEmployees = employees.filter(
    employee => employee.active
  );

  return (
    <div>
      <h2>Active Employees</h2>

      {activeEmployees.map(employee => (
        <p key={employee.id}>{employee.name}</p>
      ))}
    </div>
  );
}

export default FilterEx
