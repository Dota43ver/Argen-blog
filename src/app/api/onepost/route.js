import prisma from "@/utils/connect";
import {
    NextResponse
} from "next/server";
import {
    getAuthSession
} from "@/utils/auth";

export const GET = async (req) => {


    const query = {
        take: 1,
        orderBy: {
            createdAt: 'desc',
        },
    }

    try {
        const posts = await prisma.post.findMany(query);


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