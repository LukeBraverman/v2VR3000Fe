import { NextRequest, NextResponse } from "next/server";
import { fetchFromSpringBoot } from "@/lib/apiClient";

export async function PUT(req: NextRequest) {
    try {
        // Parse the JSON body from the request
        const body = await req.json();

        // Send the PUT request to your Spring Boot server
        const response = await fetchFromSpringBoot("/note/update", {
            method: "PUT",
            body: JSON.stringify(body),
        });

        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to update VodNote" }, { status: 500 });
    }
}
