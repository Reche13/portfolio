"use client";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import z from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  company: z.string().optional(),
});

class ApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ApiError";
  }
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });

  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const validation = schema.safeParse(form);

    if (!validation.success) {
      const formatted: any = {};

      validation.error.issues.forEach((issue) => {
        const field = issue.path[0];
        if (field) formatted[field] = issue.message;
      });

      setErrors(formatted);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/send-message", {
        method: "POST",
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data: { message?: string } = await res.json();
        if (data.message) {
          throw new ApiError(data.message);
        } else {
          throw new Error("something went wrong");
        }
      }
      toast.success("Message sent successfully.");
      setForm({
        name: "",
        email: "",
        message: "",
        company: "",
      });
    } catch (error) {
      if (error instanceof ApiError) {
        toast.error(error.message);
        return;
      }
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <input
        type="text"
        name="company"
        className="hidden"
        autoComplete="off"
        value={form.company}
        onChange={handleChange}
      />

      <div className="grid grid-cols-2 gap-5 w-full">
        {/* Name */}
        <div>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className={cn(
              "w-full border bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 outline-none focus:ring-1 focus:ring-zinc-300 dark:focus:ring-zinc-700 shadow-2xs px-4 py-2 rounded-[10px] text-sm font-medium text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-500 dark:placeholder:text-zinc-500",
              errors.name && "ring-1 ring-red-500"
            )}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-0.5 ml-2">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            name="email"
            placeholder="email@example.com"
            value={form.email}
            onChange={handleChange}
            className={cn(
              "w-full border bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 outline-none focus:ring-1 focus:ring-zinc-300 dark:focus:ring-zinc-700 shadow-2xs px-4 py-2 rounded-[10px] text-sm font-medium text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-500 dark:placeholder:text-zinc-500",
              errors.name && "ring-1 ring-red-500"
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-0.5 ml-2">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="mt-5">
        <textarea
          name="message"
          placeholder="Your message..."
          value={form.message}
          onChange={handleChange}
          className={cn(
            "w-full min-h-[100px] field-sizing-content resize-none overflow-hidden border bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 outline-none focus:ring-1 focus:ring-zinc-300 dark:focus:ring-zinc-700 shadow-2xs px-4 py-2 rounded-[10px] text-sm font-medium text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-500 dark:placeholder:text-zinc-500",
            errors.name && "ring-1 ring-red-500"
          )}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs mt-0.5 ml-2">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-5 px-4 py-2 flex items-center gap-2 rounded-[10px] font-medium text-sm bg-zinc-950 dark:bg-zinc-50 dark:text-zinc-900 text-zinc-50 cursor-pointer active:scale-[98%] hover:opacity-90"
      >
        <Send size={18} />
        <span>{loading ? "Sending..." : "Send Message"}</span>
      </button>
    </form>
  );
}
