import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

export async function POST(req) {
  const data = await req.formData();
  const file = data.get('abc');

  if (!file || typeof file === 'string') {
    return NextResponse.json({ message: "No image found", success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filePath = path.join(process.cwd(), 'public', file.name);
  await writeFile(filePath, buffer);

  return NextResponse.json({ message: "File uploaded", success: true, fileUrl: `/public/${file.name}` });
}
