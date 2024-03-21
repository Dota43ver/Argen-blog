import prisma from "@/utils/connect";
import {
    NextResponse
} from "next/server";
import {
    getAuthSession
} from "@/utils/auth";

export const GET = async (req) => {
    try {
        const mostViewedPosts = await prisma.post.findMany({
            take: 4,
            orderBy: {
                views: 'desc',
            },

        });

        return new NextResponse(JSON.stringify({
            posts: mostViewedPosts
        }), {
            status: 200
        });
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({
            message: "algo salio mal!"
        }), {
            status: 500
        });
    }
};