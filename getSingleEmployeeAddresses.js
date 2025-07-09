const db = require("./config/db");

const getSingleEmployeeAddresses = async (employeeId) => {
  const result = await db.query(
    `
        SELECT emp.id, adr.street, adr.house_number, adr.postal_code, adr.city, adr.country
        FROM employee emp
        JOIN address adr ON emp.id = adr.employee_id
        WHERE emp.id = $1`,
    [employeeId]
  );
  return result.rows;
};
module.exports = { getSingleEmployeeAddresses };