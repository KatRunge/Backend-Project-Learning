const db = require("./config/db");

const getEmployee = async () => {
    // TODO: add necessary rows
  const result = await db.query(`
    SELECT emp.id FROM employee emp 
    JOIN address adr on emp.id=adr.employee_id`);
  return result.rows;
};

module.exports = { getEmployee };
