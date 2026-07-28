"use client";

import { useLanguage } from "@/providers/language-provider";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="rounded-xl w-14 font-medium"
    >
      {language === "en" ? "EN" : "ID"}
    </Button>
  );
}