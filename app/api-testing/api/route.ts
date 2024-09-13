export const dynamic = 'force-dynamic';
interface user {
    id: number,
    name: string
};
export async function GET(request: Request) {
    const data = {message: "hello "}
    return new Response("hello from get ",{
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': 'https://127.0.0.1:3000',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        }
    })
}
export async function POST(request: Request) {
    const data = await request.json();
    console.log(data);
    return Response.json({message: "got your message"});
}