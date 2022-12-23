import {fetchAll} from "../../libs/postgres.js"
import {GET_USERS,POST_USERS,PUT_USERS} from "./query.js"
const GET =async () => {
  try {
    return await fetchAll(GET_USERS)
  } catch (error) {
    return error
  }
}
const POST =async ({firstname,lastname,fathername,phone,addres,problem}) => {
  try {
    return await fetchAll(POST_USERS,[firstname,lastname,fathername,phone,addres,problem])
  } catch (error) {
    return error
  }
}
const PUT =async ({id}) => {
  try {
    return await fetchAll(PUT_USERS,[id])
  } catch (error) {
    return error
  }
}
export {
  GET,
  POST,
  PUT
}