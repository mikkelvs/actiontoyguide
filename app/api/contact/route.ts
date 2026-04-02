import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  honeypot: z.string().optional(), // spam trap
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    console.log("Parsed data:", parsed, process.env.CONTACT_TO_EMAIL); // Debug log
    if (!parsed.success) {
      return Response.json({ error: "Invalid input" }, { status: 400 });
    }

    const { name, email, message, honeypot } = parsed.data;

    // 🛑 Honeypot check
    if (honeypot) {
      return Response.json({ ok: true }); // silently ignore bots
    }

    await resend.emails.send({
      from: "Action Toy Guide Contact Form <noreply@actiontoyguide.com>",
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}

        ${message}
      `,
    });
    console.log("Email sent successfully"); // Debug log
    return Response.json({ ok: true });
  } catch (err) {
    return Response.json(
      { error: `Server error: ${(err as Error).message}` },
      { status: 500 },
    );
  }
}
