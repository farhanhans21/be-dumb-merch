"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const prisma = (0, client_1.PrismaClient)();
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
// app.listen(port, async () => {
//   try {
//     await prisma.$connect();
//     console.log(`successfully connected`);
//     console.log(`Server is listening at port ${port}`);
//   } catch (error) {
//     console.error('failed to connect',error);
//   }
// });
