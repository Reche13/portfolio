import { NextResponse } from "next/server";
import { Resend } from "resend";
import { Redis } from "@upstash/redis";

const resend = new Resend(process.env.RESEND_API_KEY!);
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message)
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );

    const key = `contact:${ip}:${new Date().toISOString().slice(0, 10)}`;

    const count = await redis.incr(key);
    if (count === 1) {
      await redis.expire(key, 60 * 60 * 24);
    }

    if (count > 3) {
      return NextResponse.json(
        { message: "Rate limit exceeded. Try again tomorrow." },
        { status: 429 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL!,
      subject: `New Contact Message from ${name}`,
      text: `
            Name: ${name}
            Email: ${email}
            Message:
            ${message}
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
