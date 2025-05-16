// src\app\api\globalusers\route.ts

// export async function GET(request) {
//   return new Response("User, Next.js!");
// }

// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({name:"Anil", age:28, city:'noida'}, {status:200})
// }

// All data get from db file [GET Method]
import { NextResponse } from "next/server";
import { user } from "../../utils/db";

export function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}

//Post data [GET Method]
export async function POST(request) {
  let payload = await request.json();
  console.log(payload.name);
  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json({
      result: "require field not found",
      success: false,
      status: 404,
    });
  }
  return NextResponse.json({
    result: "new user created",
    success: true,
    status: 201,
  });
}

