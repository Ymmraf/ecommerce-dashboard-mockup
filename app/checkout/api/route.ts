import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const requestData = await request.json()
    console.log(requestData)
    return NextResponse.json({requestData})
}