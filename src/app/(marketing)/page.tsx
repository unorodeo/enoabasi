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
          <Experiences />
        </Section>
      </Section>
    </>
  );
}

function Hero() {
  return (
    <Section>
      <p>I am a software developer and maker with +5 years of experience.</p>
      <p>
        My journey spans crafting software that is not only profitable but
        contributes to society. I use software as a means of solving problems in
        the digital and real world.
      </p>
      <p>When I am not tinkering on my computer I enjoy &mdash;</p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2 [&_li]:text-xl">
        <li>Site seeing</li>
        <li>Catching up on the car space</li>
        <li>Art</li>
        <li>Music</li>
        <li>Perfume making</li>
      </ul>
    </Section>
  );
}
