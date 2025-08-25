import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { code } = await req.json();

  const body = {
    script: code,
    language: "java",
    versionIndex: "4", // Java 17
    clientId: process.env.JDOODLE_CLIENT_ID,
    clientSecret: process.env.JDOODLE_CLIENT_SECRET,
  };

  try {
    const res = await fetch("https://api.jdoodle.com/v1/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json({ output: data.output });
  } catch (err) {
    return NextResponse.json({ output: "❌ Error running code" });
  }
}
