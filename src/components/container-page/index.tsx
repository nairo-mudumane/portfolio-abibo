import clsx from "clsx";
import type { PageContainerProps } from "./@types";

export function ContainerPage({ className, ...props }: PageContainerProps) {
  return (
    <div
      {...props}
      className={clsx(
        "container mx-auto px-5 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]",
        className
      )}
    >
      {props.children}
    </div>
  );
}
