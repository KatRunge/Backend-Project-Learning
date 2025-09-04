const db = require("./config/db");

const getSingleEmployee = async (employeeId) => {
  const result = await db.query(
    `
    SELECT emp.id, emp.name, emp.position, emp.age, emp.nationality, emp.gender
	FROM employee emp 
	WHERE emp.id = $1`,
    [employeeId]
  );
  return result.rows;
};

module.exports = { getSingleEmployee };
