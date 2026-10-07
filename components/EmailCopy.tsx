"use client";

import { useEffect, useRef, useState } from "react";
import { copy, site, type Locale } from "@/lib/portfolio";

export function EmailCopy({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const request = useRef(0);
  const t = copy[locale].contact;

  useEffect(() => () => {
    request.current += 1;
    if (timer.current !== null) clearTimeout(timer.current);
  }, []);

  async function handleCopy() {
    const currentRequest = ++request.current;
    if (timer.current !== null) clearTimeout(timer.current);
    setStatus("idle");
    try {
      await navigator.clipboard.writeText(site.email);
      if (currentRequest !== request.current) return;
      setStatus("copied");
      timer.current = setTimeout(() => setStatus("idle"), 2500);
    } catch {
      if (currentRequest !== request.current) return;
      setStatus("failed");
    }
  }

  return (
    <div className="mt-6 grid justify-items-start gap-1">
      <button type="button" className="inline-flex min-h-11 min-w-[8.5rem] cursor-pointer items-center text-left text-[13px] font-semibold lowercase text-copy-secondary underline-offset-[5px] transition-colors duration-180 hover:text-foreground hover:underline" onClick={handleCopy} aria-label={t.copy}>{status === "copied" ? t.copied : t.copy}</button>
      <span className={status === "failed" ? "text-[13px] leading-relaxed text-copy-secondary" : "sr-only"} role="status" aria-live="polite" aria-atomic="true">{status === "copied" ? t.copied : status === "failed" ? t.failed : ""}</span>
    </div>
  );
}
