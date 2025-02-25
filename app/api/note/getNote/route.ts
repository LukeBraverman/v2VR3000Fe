import { NextRequest, NextResponse } from "next/server";
import { fetchFromSpringBoot } from "@/lib/apiClient"; // Make sure this function is present in lib/apiClient

export async function GET(req: NextRequest) {
    // Extract query parameters
    const { searchParams } = new URL(req.url);
    const noteId = searchParams.get("noteId");
    const vodId = searchParams.get("vodId");

    if (!noteId || !vodId) {
        return NextResponse.json({ error: "Missing noteId or vodId parameter" }, { status: 400 });
    }

    try {
        const data = await fetchFromSpringBoot(`/note/get?noteId=${noteId}&vodId=${vodId}`);
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch VodNote" }, { status: 500 });
    }
}
