const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/vod";

export const fetchFromSpringBoot = async (endpoint: string, options: RequestInit = {}) => {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...(options.headers || {}),
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};
