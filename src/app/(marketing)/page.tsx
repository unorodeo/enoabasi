import {
  CarIcon,
  MusicIcon,
  PackageCheckIcon,
  SwatchBookIcon,
  TreesIcon,
} from "lucide-react";

import { Experiences } from "@/components/experience";
import { HR } from "@/components/ui/hr";
import { Section } from "@/components/ui/section";

export default function Home() {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section>
        <HR>Experiences</HR>
        <Section>
          <div className="md:w-4/6">
            <Experiences />
          </div>
        </Section>
      </Section>
    </>
  );
}

function Hero() {
  return (
    <Section>
      <div className="md:w-4/6">
        <p>
          I am a software developer and maker based in Abuja with +6 years of
          experience.
        </p>
        <p>
          My journey spans crafting software that is not only profitable but
          contributes to society. I use software as a means of solving problems
          in the digital and real world.
        </p>
        <p>
          When I am not tinkering on my computer I enjoy site seeing around
          Abuja
          <span className="inline-flex items-baseline justify-center mx-1">
            <TreesIcon className="size-4 text-muted-foreground hover:text-green-500" />
          </span>
          , Catching up on the car space
          <span className="inline-flex items-baseline justify-center mx-1">
            <CarIcon className="size-4 text-muted-foreground hover:text-blue-500" />
          </span>
          , Art explorations
          <span className="inline-flex items-baseline justify-center mx-1">
            <SwatchBookIcon className="size-4 text-muted-foreground hover:text-yellow-500" />
          </span>
          ,Music
          <span className="inline-flex items-baseline justify-center mx-1">
            <MusicIcon className="size-4 text-muted-foreground hover:text-purple-500" />
          </span>
          , and building open-source software
          <span className="inline-flex items-baseline justify-center mx-1">
            <PackageCheckIcon className="size-4 text-muted-foreground hover:text-orange-500" />
          </span>
          .
        </p>
      </div>
    </Section>
  );
}
