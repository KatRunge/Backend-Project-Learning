const db = require("./config/db");

const getEmployees = async () => {
    // TODO: add necessary rows
  const result = await db.query(`
    SELECT emp.id, emp.name, emp.position, emp.age, emp.nationality, emp.gender, adr.street, adr.house_number, adr.postal_code, adr.city, adr.country FROM employee emp 
    JOIN address adr on emp.id=adr.employee_id`);
  return result.rows;
};

module.exports = { getEmployees };
