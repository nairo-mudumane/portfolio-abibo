import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { APP_LINKS } from "@/database/app-links";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";

export default function Mobile() {
  const currentPath = usePathname();

  const isActive = (href: string) => href === currentPath;

  return (
    <div className="md:hidden w-max max-w-full ml-auto">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image
            alt="bars icons"
            src="/icons/bars.svg"
            width={32}
            height={32}
          />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>Abibo Mamudo</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {APP_LINKS.map(({ label, link }, index) => (
            <DropdownMenuItem key={index}>
              <a
                href={link}
                className={clsx("font-bold", isActive(link) ? "active" : "")}
              >
                {label}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
