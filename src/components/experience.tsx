import { Experience as ExperienceType } from "@/types/shared";
import React from "react";

interface ExperienceItem extends ExperienceType {
  id: string;
}

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "6d31da73-591c-46da-b6c5-3f589c042b6d",
    period: "2022 - Present",
    position: "Founder",
    company: "Nobasi Software",
    description:
      "Started a company to build software that contributes to society. Developing solutions for public and private administrations using advanced technologies and best practices.",
  },
  {
    id: "7d4abfd6-28f0-4fdc-a881-df8c2aa37a7a",
    period: "2020 - 2021",
    position: "Software developer intern",
    company: "Ice Queen Spa",
    description:
      "My role as a software developer was to help manage/maintain their exsiting website for their SPA business, implement internal tools that helped with booking, managing, and scheduling customer appointments.",
  },
];

export const Experiences: React.FC = () => (
  <>
    <ol className="relative border-s-2 border-border">
      {EXPERIENCE_ITEMS.map((item) => (
        <Experience
          key={item.id}
          period={item.period}
          position={item.position}
          company={item.company}
          description={item.description}
        />
      ))}
    </ol>
  </>
);

export const Experience: React.FC<ExperienceType> = ({
  period,
  position,
  company,
  description,
}) => {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute size-3 bg-muted rounded-full mt-1.5 -start-1.5 border-2 border-border"></div>
      <time className="mb-1 text-sm font-normal leading-none text-muted-foreground font-geist-mono">
        {period}
      </time>
      <h3 className="text-lg font-semibold tracking-normal">{position}</h3>
      <small className="muted">{company}</small>
      <p className="[&:not(:first-child)]:mt-0 mb-4 text-base font-normal text-foreground">
        {description}
      </p>
    </li>
  );
};
