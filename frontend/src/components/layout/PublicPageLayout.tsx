import type { ReactNode } from "react";
import "./PublicPageLayout.css";
import SiteHeader from "../navigation/SiteHeader";

type PublicPageLayoutProps = {
  children: ReactNode;
  eyebrow: string;
  title: string;
};

export default function PublicPageLayout({
  children,
  eyebrow,
  title,
}: PublicPageLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="public-page">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {children}
      </main>
    </>
  );
}
