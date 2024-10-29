import { NextResponse } from "next/server";
import { products } from "@/app/db";
// export function GET(req, res) {
//     return new Response('Hello World');
// }

// export function GET(req, res) {
//     return NextResponse.json({ name: 'John', age: 25, email: 'John@gmail.com' }, { status: 201 });
// }

export function GET() {
    return NextResponse.json(products, { status: 200 });
}