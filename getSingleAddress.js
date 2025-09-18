const db = require("./config/db");

const getSingleAddress = async (employeeId, addressId) => {
  const result = await db.query(
    `SELECT emp.id, adr.street, adr.house_number, adr.postal_code, adr.city, adr.country
     FROM employees emp
     JOIN addresses adr ON emp.id = adr.employee_id
     WHERE emp.id = $1 AND adr.id = $2`,
    [employeeId, addressId]
  );

  return result.rows[0];
};

module.exports = {
  getSingleAddress,
};
