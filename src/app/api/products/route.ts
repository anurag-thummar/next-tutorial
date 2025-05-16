import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET all products
export async function GET() {
  console.log('🔍 GET /api/products hit');
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY id');
    console.log('DB returned', result.rows.length, 'rows');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


// POST a new product
export async function POST(request: NextRequest) {
  try {
    const { name, description, price } = await request.json();
    const result = await pool.query(
      'INSERT INTO products(name, description, price) VALUES($1, $2, $3) RETURNING *',
      [name, description, price]
    );
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.error();
  }
}