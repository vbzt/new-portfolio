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
    <div className="email-copy">
      <button type="button" className="button button--quiet" onClick={handleCopy}>{t.copy} <ArrowUpRight /></button>
      <span className="email-copy__feedback" role="status" aria-live="polite">{feedback}</span>
    </div>
  );
}
