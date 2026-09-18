import AppLink from "../../components/navigation/AppLink";
import "./HowItWorksPage.css";
import PublicPageLayout from "../../components/layout/PublicPageLayout";

const steps = [
  [
    "01",
    "Share your vision",
    "Tell us what you are making, your style, and your deadline.",
  ],
  ["02", "Meet your match", "Browse editors or receive a tailored shortlist."],
  [
    "03",
    "Make it memorable",
    "Collaborate, review, and publish work you are proud of.",
  ],
];

export default function HowItWorksPage() {
  return (
    <PublicPageLayout
      eyebrow="How it works"
      title="A better way to make better video."
    >
      <div className="cards">
        {steps.map(([number, title, description]) => (
          <article className="info-card" key={number}>
            <span>{number}</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </div>
      <AppLink href="/signup" className="button primary">
        Get started →
      </AppLink>
    </PublicPageLayout>
  );
}
