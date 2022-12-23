import express from "express"
import { PORT } from "./config/config.js"
import allData from "./modules/index.js"
import {errorHandlerMiddleware} from "./middlewares/errorHandlerMiddleware.js"
const app = express();
app.use(express.json());
app.use(allData)

app.use(errorHandlerMiddleware)

app.listen(PORT,console.log('hello from the server'))