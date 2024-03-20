import prisma from "@/utils/connect";
import {
    NextResponse
} from "next/server";
import {
    getAuthSession
} from "@/utils/auth";

export const GET = async (req) => {
    // Se asume que los parámetros de búsqueda ya no son necesarios para esta consulta específica.

    const query = {
        take: 1, // Limitamos los resultados a sólo 1, el más reciente.
        orderBy: {
            createdAt: 'desc', // Ordenamos por fecha de creación de manera descendente.
        },
    }

    try {
        const posts = await prisma.post.findMany(query);

        // Como sólo solicitamos el último post, no es necesario contar todos los posts.
        return new NextResponse(JSON.stringify({
            posts
        }, {
            status: 200
        }));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({
                message: "algo salio mal!"
            }, {
                status: 500
            })
        );
    }
};