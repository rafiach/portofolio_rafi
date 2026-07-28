"use client";

import {
  Bilingual,
  useLanguage,
} from "@/providers/language-provider";

export function BilingualText({ text }: { text: Bilingual }) {
  const { language } = useLanguage();
  return <>{text[language]}</>;
}