import { Response } from 'express';
import { Request } from 'express';
import * as userService from '../services/usuario.service';

export async function get_usuarios(req: Request, res: Response){

    const usuarios = await userService.get_usuarios();
    res.json(usuarios);
};