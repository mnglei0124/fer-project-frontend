import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("image") as File;

    if (!file) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    // Read the image file as an ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Image = buffer.toString("base64");

    // Determine content type for data URL
    let contentType = "application/octet-stream";
    if (file.type.startsWith("image/")) {
      contentType = file.type;
    }

    const dataUrl = `data:${contentType};base64,${base64Image}`;

    // Call your Python backend
    const backendUrl =
      process.env.PYTHON_BACKEND_URL || "http://localhost:8000";

    const response = await fetch(`${backendUrl}/detect`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: dataUrl }),
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
