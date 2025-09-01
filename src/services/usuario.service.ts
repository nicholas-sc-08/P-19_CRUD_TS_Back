import prisma from "../prisma/client";
import { IUsuarioCreate } from "../types/usuario.types";

export async function get_usuarios() {

    return prisma.usuarios.findMany();
};

export async function post_usuarios(data: IUsuarioCreate) {

    return prisma.usuarios.create({ data });
};