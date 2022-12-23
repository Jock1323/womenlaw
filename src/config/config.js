import dotenv from "dotenv"
dotenv.config()
const PORT=8080
const pgConfig = {
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  user: process.env.PG_USER,
  host: process.env.PG_HOST
}
export {
  PORT,
  pgConfig
}
