"use client";

import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Card, CardContent } from "@/components/ui/card";
import { SocialLinks } from "@/config/socials";

export default function SocialLinksCard() {
  return (
    <div className="w-full max-w-sm flex flex-col gap-3 mt-5">
      {SocialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer"
        >
          <Card className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
            <CardContent className="flex items-center gap-4 p-4">
              <social.icon className="w-6 h-6 text-muted-foreground shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-medium">{social.name}</p>
                <p className="text-sm text-muted-foreground truncate">
                  {social.username}
                </p>
              </div>
              <Icons.externalLink className="w-4 h-4 text-muted-foreground shrink-0" />
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}