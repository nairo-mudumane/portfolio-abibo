"use client";

import clsx from "clsx";
import { APP_LINKS } from "@/database/app-links";
import { usePathname } from "next/navigation";
import { StyledHeader } from "./styles";
import Mobile from "./mobile";
import { ContainerPage } from "..";

export function Header() {
  const currentPath = usePathname();

  const isActive = (href: string) => href === currentPath;

  return (
    <StyledHeader className="py-4">
      <ContainerPage>
        <Mobile />

        <ul className="hidden md:flex w-max max-w-full ml-auto py-8 px-10 gap-8 items-center justify-between">
          {APP_LINKS.map(({ label, link }, index) => (
            <li key={index}>
              <a
                href={link}
                className={clsx("font-bold", isActive(link) ? "active" : "")}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ContainerPage>
    </StyledHeader>
  );
}
