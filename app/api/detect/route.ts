import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { image } = await request.json();

    if (!image) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    // Call your Python backend
    const backendUrl =
      process.env.PYTHON_BACKEND_URL || "http://localhost:8000";

    const response = await fetch(`${backendUrl}/detect`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image }),
    });

    if (!response.ok) {
      throw new Error(`Backend error: ${response.status}`);
    }

    const emotionProbs = await response.json();

    return NextResponse.json(emotionProbs);
  } catch (error) {
    console.error("Emotion detection error:", error);
    return NextResponse.json(
      { error: "Failed to detect emotions" },
      { status: 500 }
    );
  }
}
