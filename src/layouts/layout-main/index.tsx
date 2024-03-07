import React from "react";
import { LayoutMainProps } from "./@types";
import { Header } from "@/components";

export default function LayoutMain({ children }: LayoutMainProps) {
  return (
    <section>
      <Header />

      <main>{children}</main>
    </section>
  );
}
