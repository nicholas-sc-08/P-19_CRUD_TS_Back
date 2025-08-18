import express, { Express, Request, Response } from 'express';

export class HTTPAdapter {

    private app: Express;

    constructor() {

        this.app = express(),
        this.setup_routes
    }

    private setup_routes() {

        this.app.get(`/`, (req: Request, res: Response) => {

            res.send(`servidor ts rodando com sucesso`);
        });
    }

    public listen(port: number): void {

        this.app.listen(port, () => console.log(`server running at: ${port}`));
    }
}