import { HTTPAdapter } from "./adapters/http/protocol.js";

export class Server {

    private adapter: HTTPAdapter;

    constructor(adapter: new () => HTTPAdapter) {

        this.adapter = new adapter();
    }

    public start(): void {

        const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
        this.adapter.listen(port);
    }
}