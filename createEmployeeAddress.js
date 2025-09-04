const db = require("./config/db");

const createEmployeeAddress = async (employeeId, addressDTO) => {
  const { street, house_number, postal_code, city, country } = addressDTO;
  const newAddress = await db.query(
    `
    insert into address(employee_id, street, house_number, postal_code, city, country) 
    values($1, $2, $3, $4, $5, $6)
    `,
    [employeeId, street, house_number, postal_code, city, country]
  );

  return newAddress;
};

module.exports = { createEmployeeAddress };