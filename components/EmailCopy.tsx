"use client";

import { useState } from "react";
import { copy, site, type Locale } from "@/lib/portfolio";
import { ArrowUpRight } from "./Icons";

export function EmailCopy({ locale }: { locale: Locale }) {
  const [feedback, setFeedback] = useState("");
  const t = copy[locale].contact;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setFeedback(t.copied);
    } catch {
      setFeedback(t.failed);
    }
    window.setTimeout(() => setFeedback(""), 2500);
  }

  return (
    <div className="mt-6 flex items-center gap-[15px]">
      <button type="button" className="inline-flex min-h-[46px] cursor-pointer items-center justify-center gap-6 rounded-[10px] border border-control bg-surface px-[19px] py-3 text-[13px] font-bold text-foreground transition-[background,border-color,transform] duration-180 hover:-translate-y-[2px] hover:border-accent hover:bg-accent-soft" onClick={handleCopy}>{t.copy} <ArrowUpRight /></button>
      <span className="text-[13px] text-copy-secondary" role="status" aria-live="polite">{feedback}</span>
    </div>
  );
}
