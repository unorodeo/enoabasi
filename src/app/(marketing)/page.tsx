import {
  CarIcon,
  MusicIcon,
  PackageCheckIcon,
  SwatchBookIcon,
  TreesIcon,
} from "lucide-react";

import { Experiences } from "@/components/experience";
import { HR } from "@/components/ui/hr";
import { Projects } from "@/components/project";
import { Section } from "@/components/ui/section";

export default function Home() {
  return (
    <>
      <Section>
        <div className="md:w-4/6">
          <p>
            I am a software developer and maker based in Abuja with +6 years of
            experience.
          </p>
          <p>
            My journey spans crafting software that is not only profitable but
            contributes to society. I use software as a means of solving
            problems in the digital and real world.
          </p>
          <p>
            When I am not tinkering on my computer I enjoy site seeing around
            Abuja
            <span className="inline-flex items-baseline justify-center mx-1">
              <TreesIcon className="size-4 text-muted-foreground" />
            </span>
            , Catching up on the car space
            <span className="inline-flex items-baseline justify-center mx-1">
              <CarIcon className="size-4 text-muted-foreground" />
            </span>
            , Art explorations
            <span className="inline-flex items-baseline justify-center mx-1">
              <SwatchBookIcon className="size-4 text-muted-foreground" />
            </span>
            ,Music
            <span className="inline-flex items-baseline justify-center mx-1">
              <MusicIcon className="size-4 text-muted-foreground" />
            </span>
            , and building open-source software
            <span className="inline-flex items-baseline justify-center mx-1">
              <PackageCheckIcon className="size-4 text-muted-foreground" />
            </span>
            .
          </p>
        </div>
      </Section>
      <Section>
        <HR>Projects</HR>
      </Section>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Projects />
        </div>
      </Section>
      <Section>
        <HR>Experiences</HR>
      </Section>
      <Section>
        <div className="md:w-4/6">
          <Experiences />
        </div>
      </Section>
    </>
  );
}
