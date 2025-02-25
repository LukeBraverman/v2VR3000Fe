import { NextRequest, NextResponse } from "next/server";
import { fetchFromSpringBoot } from "@/lib/apiClient";

export async function GET(req: NextRequest) {
    console.log('Reached server');

    // Get query parameters from the request URL
    const { searchParams } = new URL(req.url);
    const fileName = searchParams.get("fileName");

    if (!fileName) {
        return NextResponse.json({ error: "Missing fileName parameter" }, { status: 400 });
    }

    try {
        const data = await fetchFromSpringBoot(`/getVideoLink?fileName=${fileName}`);
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to get video link" }, { status: 500 });
    }
}
