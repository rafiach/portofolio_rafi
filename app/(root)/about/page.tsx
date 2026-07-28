import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import PageContainer from "@/components/common/page-container";
import { Icons } from "@/components/common/icons";
import { aboutConfig } from "@/config/about";
import { pagesConfig } from "@/config/pages";
import { BilingualText } from "@/components/common/bilingual-text";

export const metadata: Metadata = {
  title: pagesConfig.about.metadata.title,
  description: pagesConfig.about.metadata.description,
};

export default function AboutPage() {
  return (
    <PageContainer
      title={pagesConfig.about.title}
      description={pagesConfig.about.description}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-8 md:items-start">
        <div className="md:col-span-1 flex justify-center md:justify-start">
          <div className="relative w-56 aspect-[2/3] md:w-full overflow-hidden rounded-2xl">
            <Image
              src={aboutConfig.photo}
              alt="Prita Ayu Meudea"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-2 space-y-10">
          <div className="space-y-4">
            {aboutConfig.paragraphs.map((text, index) => (
              <p key={index} className="leading-7 text-muted-foreground">
                 <BilingualText text={text} />
              </p>
            ))}
          </div>

          <div>
            <h2 className="font-heading text-2xl mb-4">Education</h2>
            <div className="space-y-4">
              {aboutConfig.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-muted pl-4">
                  <p className="font-medium">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">
                    <BilingualText text={edu.degree}/> · {edu.startYear} - {edu.endYear}
                  </p>
                  {edu.gpa && (
                    <p className="text-sm text-muted-foreground">
                      <BilingualText text={edu.gpa} />
                    </p>
                  )}
                  {edu.description && (
                    <p className="text-sm mt-1"><BilingualText text={edu.description} /></p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl mb-4">Certificates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutConfig.certificates.map((cert, index) =>
                cert.link ? (
                  <Link
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border p-4 transition-colors hover:bg-muted/50"
                  >
                    <p className="font-medium">{cert.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} · {cert.year}
                    </p>
                    <div className="mt-2 flex items-center text-xs text-muted-foreground transition-colors group-hover:text-primary">
                      Press to open <Icons.arrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </Link>
                ) : (
                  <div key={index} className="rounded-xl border p-4">
                    <p className="font-medium">{cert.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}