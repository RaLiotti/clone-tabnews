import database from "../../../../infra/database.js";

async function status(req, res) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result);
  res.status(200).json({ status: "eu vou ser um bom profissional!" });
}

export default status;
