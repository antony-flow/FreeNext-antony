import { NextResponse } from "next/server";

interface list {
    txt: string;
    id: number;
    done: boolean;
  }

export async function GET(req: Request){
    const initiallist: list[] = [
        {
          txt: "rahul",
          id: 1,
          done: false,
        },
        {
          txt: "karan",
          id: 2,
          done: false,
        },
      ];
      return Response.json({initiallist},{
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        }
    });

}