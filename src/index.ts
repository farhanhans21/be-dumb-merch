import dotenv from "dotenv";
import router from "./router"
import express, { json, urlencoded } from "express";
import {prisma} from "./libs/prisma"
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({extended: true}))
app.use("/api",router)

const port = process.env.PORT || 3000;



app.listen(port, async () => {
  try {
    await prisma.$connect();
    console.log(`successfully connected`);
    console.log(`Server is listening at port ${port}`);
  } catch (error) {
    console.error('failed to connect',error);
    
  }
});