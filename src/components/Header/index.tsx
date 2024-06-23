import { useTranslations } from "next-intl";
import LocaleLink from "../LocaleLink";
import LocaleSwitcher from "../LocaleSwitcher";

export default function Header() {
  const t = useTranslations("Navigation");

  return (
    <header className="p-4">
      <nav className="flex items-center justify-between">
        <div className="flex gap-3">
          <LocaleLink href="/">{t("home")}</LocaleLink>
          <LocaleLink href="/about">{t("about")}</LocaleLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
