"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { join } from "path";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type LocaleLink = ComponentProps<"a"> & {
  href: string;
};

export default function LocaleLink({
  href,
  className,
  children,
  ...props
}: LocaleLink) {
  const localActive = useLocale();

  return (
    <Link
      href={join("/", localActive, href)}
      className={twMerge("", className)}
      {...props}>
      {children}
    </Link>
  );
}
