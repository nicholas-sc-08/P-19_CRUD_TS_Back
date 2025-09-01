import express from "express";
import { Request } from "express";
import { Response } from "express";

const app = express();

app.get(`/`, (req: Request, res: Response) : void => {

    res.send(`Backend com TypeScript + PNPM funcionando!`);
});

app.listen(3000, () => console.log(`Servidor rodando na 3000`));