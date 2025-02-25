import { NextRequest, NextResponse } from "next/server";
import { fetchFromSpringBoot } from "@/lib/apiClient";

export async function DELETE(req: NextRequest) {
    // Extract query parameters from the URL
    const { searchParams } = new URL(req.url);
    const noteId = searchParams.get("noteId");
    const vodId = searchParams.get("vodId");

    if (!noteId || !vodId) {
        return NextResponse.json({ error: "Missing noteId or vodId parameter" }, { status: 400 });
    }

    try {
        // Send the DELETE request to the Spring Boot server
        const response = await fetchFromSpringBoot(`/note/delete?noteId=${noteId}&vodId=${vodId}`, {
            method: "DELETE",
        });

        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete VodNote" }, { status: 500 });
    }
}
