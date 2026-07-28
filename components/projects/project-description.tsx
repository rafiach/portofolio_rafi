import React from "react";

import { BilingualText } from "@/components/common/bilingual-text";
import { Bilingual } from "@/providers/language-provider";

const ProjectDescription: React.FC<{
  paragraphs: Bilingual[];
  bullets: Bilingual[];
}> = ({ paragraphs, bullets }) => {
  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p className="mb-4" key={index}>
          <BilingualText text={paragraph} />
        </p>
      ))}
      <ul className="list-disc pl-6 mt-4">
        {bullets.map((bullet, index) => (
          <li key={index}>
            <BilingualText text={bullet} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDescription;