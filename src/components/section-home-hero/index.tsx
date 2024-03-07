import { ContainerPage } from "..";

export function SectionHomeHero() {
  return (
    <ContainerPage className="md:!max-w-[90%] lg:!max-w-[80%] relative">
      <h2 className="font-semibold text-sm md:text-lg">
        Graphic Designer | Video Editor
      </h2>

      <h1 className="font-extrabold text-4xl md:text-6xl grid tracking-wide">
        <span>Abibo</span>
        <span>Mamudo</span>
      </h1>

      <p className="md:text-justify mt-4">
        I am a creative professional with experience in graphic design and video
        editing. I have proficiency in software such as Adobe Premiere Pro,
        Final Cut Pro, DaVinci Resolve, Photoshop, Illustrator and InDesign. I
        create original and creative designs for a variety of platforms,
        including print and digital. I also have experience in video editing for
        different formats, such as commercials, promotional videos,
        institutional videos, content for social networks, etc.
      </p>
    </ContainerPage>
  );
}
