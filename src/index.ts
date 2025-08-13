import * as dotenv from "dotenv";
import { HTTPAdapter } from "./adapters/http/protocol.js";
import { Server } from "http";

dotenv.config();

const server = new Server(HTTPAdapter);
server.start();