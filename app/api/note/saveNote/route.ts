import { NextRequest, NextResponse } from "next/server";
import { fetchFromSpringBoot } from "@/lib/apiClient";

export async function POST(req: NextRequest) {
    try {
        // Read the request body
        const body = await req.json();

        // Send the request to your Spring Boot server
        const response = await fetchFromSpringBoot("/note/save", {
            method: "POST",
            body: JSON.stringify(body),
        });

        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to save VodNote" }, { status: 500 });
    }
}
