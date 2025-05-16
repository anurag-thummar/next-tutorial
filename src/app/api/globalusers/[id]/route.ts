// src\app\api\globalusers\[id]\route.ts

// GET user specific data
import { NextResponse } from "next/server";
import { user } from "@/app/utils/db";

export function GET(request: Request, { params }: { params: { id: string } }) {
  const foundUser = user.find((u) => u.id === parseInt(params.id));
  if (!foundUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(foundUser, { status: 200 });
}

// UPDATE[PUT] user specific data
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const payload = await request.json();
  const userId = parseInt(params.id);
  const index = user.findIndex((u) => u.id === userId);

  if (index === -1) {
    return NextResponse.json(
      { result: "User not found", success: false },
      { status: 404 }
    );
  }

  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: "Missing data", success: false },
      { status: 400 }
    );
  }

  // Simulate update
  user[index] = { id: userId, ...payload };

  return NextResponse.json(
    { result: user[index], success: true },
    { status: 200 }
  );
}



export function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  if (id) {
    return NextResponse.json(
      { result: "User deleted", success: true },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { result: "Internal error", success: false },
      { status: 500 }
    );
  }
}

