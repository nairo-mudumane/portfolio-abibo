import React from "react";
import { LayoutMainProps } from "./@types";
import { Header } from "@/components";
import clsx from "clsx";

export default function LayoutMain({
  children,
  className,
  ...props
}: LayoutMainProps) {
  return (
    <div {...props} className={clsx(className, "min-h-screen")}>
      <Header />

      <main>{children}</main>
    </div>
  );
}
