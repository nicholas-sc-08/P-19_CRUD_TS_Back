
import { PrismaClient } from '@prisma/client';

const express = require(`express`);
const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => console.log(`server running at ${port}`));