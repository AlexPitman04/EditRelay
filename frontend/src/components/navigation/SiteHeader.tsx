import { useState } from "react";
import "./SiteHeader.css";
import AppLink from "./AppLink";
import Brand from "./Brand";

const navigationLinks = [
  { label: "How it works", path: "/how-it-works" },
  { label: "Browse editors", path: "/editors" },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Brand />
      <button
        className="menu"
        type="button"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>
      <nav className={isMenuOpen ? "open" : ""} aria-label="Primary navigation">
        {navigationLinks.map(({ label, path }) => (
          <AppLink key={path} href={path}>
            {label}
          </AppLink>
        ))}
        <AppLink href="/login" className="button quiet">
          Log in
        </AppLink>
        <AppLink href="/signup" className="button primary">
          Get started →
        </AppLink>
      </nav>
    </header>
  );
}
