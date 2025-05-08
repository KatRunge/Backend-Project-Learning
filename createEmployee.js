const db = require("./config/db");

const createEmployee = async (employeeDTO) => {
  const { id, name, position, age, nationality, gender } = employeeDTO;
  const newEmployee = await db.query(
    `
insert into employee(id, name, position, age, nationality, gender) 
values($1, $2, $3, $4, $5, $6)
    `,
    [id, name, position, age, nationality, gender]
  );

  return newEmployee;
};

module.exports = { createEmployee };
