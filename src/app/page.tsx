import { SectionHomeHero } from "@/components";
import LayoutMain from "@/layouts/layout-main";

export default function Home() {
  return (
    <LayoutMain className="bg-base">
      <div className="w-screen min-h-max h-screen overflow-auto flex fixed top-0">
        <section className="bg-primary py-12 pt-32 md:pt-12 md:min-w-[32%] lg:min-w-[40%] hidden md:block relative">
          <div className="hidden bg-white rounded-full w-10 h-[54%] absolute top-[24%] right-[-4%]" />

          <div className=" bg-secondary shadow-lg shadow-white rounded-full p-24  absolute top-[38%] right-[-30%] mr-10" />
        </section>

        <section className="py-12 pt-32 md:pt-12 flex-1 flex items-center justify-center">
          <SectionHomeHero />
        </section>
      </div>
    </LayoutMain>
  );
}
