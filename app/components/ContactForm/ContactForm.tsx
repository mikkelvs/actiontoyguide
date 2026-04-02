"use client";

import { useState } from "react";

const ContactForm = (): React.JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      honeypot: formData.get("company"), // hidden field
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  //   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //     e.preventDefault();
  //     setLoading(true);
  //     setStatus(null);

  //     const form = e.currentTarget;
  //     const formData = new FormData(form);

  //     const data = {
  //       name: formData.get("name"),
  //       email: formData.get("email"),
  //       message: formData.get("message"),
  //       honeypot: formData.get("company"), // hidden field
  //     };

  //     const res = await fetch("/api/contact", {
  //       method: "POST",
  //       body: JSON.stringify(data),
  //     });

  //     setLoading(false);

  //     if (res.ok) {
  //       setStatus("success");
  //       form.reset();
  //     } else {
  //       setStatus("error");
  //     }
  //   }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input name="name" placeholder="Your name" required className="input" />

      <input
        name="email"
        type="email"
        placeholder="Your email"
        required
        className="input"
      />

      <textarea
        name="message"
        placeholder="Your message"
        required
        minLength={10}
        className="input h-32"
      />

      {/* Honeypot (hidden from humans) */}
      <input
        name="company"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <button type="submit" disabled={loading} className="badge cursor-pointer">
        {loading ? "Sending..." : "Send"}
      </button>

      {status === "success" && <p>Message sent!</p>}
      {status === "error" && <p>Something went wrong.</p>}
    </form>
  );
};

export default ContactForm;
