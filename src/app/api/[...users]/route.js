// catch all segments

import { NextResponse } from "next/server";

// export async function GET(request, content) {
//   console.log(content);
//   const userDetails = content.params.users;
//   return new Response("all routed catched");
// }


export async function GET(request, content) {
  console.log(content);
  const userDetails = content.params.users;
  return NextResponse.json({result:userDetails},{status:200})
}
