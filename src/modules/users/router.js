import { Router } from "express";
import { checkParamsMiddleware, userValidateMiddleware } from "../../middlewares/validationMiddleware.js";
import { getUsers,postUsers,putUsers } from "./controller.js";

const route = Router()
route.get("/users/get",getUsers)
route.post("/users/post",userValidateMiddleware,postUsers)
route.put("/users/checked/:id",checkParamsMiddleware,putUsers)

export default route