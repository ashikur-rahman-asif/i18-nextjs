"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { join } from "path";
import { ChangeEvent, useTransition } from "react";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      const pathWithoutLocale = pathname.replace(localActive, "");
      router.replace(join("/", nextLocale, pathWithoutLocale));
    });
  };
  return (
    <label className="border-2 rounded">
      <p className="sr-only">change language</p>
      <select
        defaultValue={localActive}
        className="bg-transparent py-2"
        onChange={onSelectChange}
        disabled={isPending}>
        <option value="en">English</option>
        <option value="pt">Português</option>
      </select>
    </label>
  );
}
