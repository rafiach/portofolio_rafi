import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return new NextResponse("Please configure the env variables", {
      status: 500,
    });
  }

  try {
    const body = await req.json();
    const { name, message, social, email } = body;

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Pesan baru dari ${name} (portfolio contact form)`,
        name,
        email,
        message,
        social,
      }),
    });

    const rawText = await res.text();
    console.log("Status dari Web3Forms:", res.status);
    console.log("Isi mentah dari Web3Forms:", rawText);

    let data;
    try {
      data = JSON.parse(rawText);
    } catch {
      return new NextResponse("Failed to send message (non-JSON response)", {
        status: 500,
      });
    }

    if (!data.success) {
      console.log("Web3Forms error:", data);
      return new NextResponse("Failed to send message", { status: 500 });
    }

    return NextResponse.json("Success!");
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}