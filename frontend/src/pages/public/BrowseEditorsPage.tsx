import PublicPageLayout from "../../components/layout/PublicPageLayout";
import "./BrowseEditorsPage.css";

const editors = [
  ["Jordan Miles", "Short-form & social", "JM"],
  ["Nia Parker", "YouTube & storytelling", "NP"],
  ["Theo James", "Motion & branded content", "TJ"],
];

export default function BrowseEditorsPage() {
  return (
    <PublicPageLayout
      eyebrow="Browse editors"
      title="Find an editor who gets your vision."
    >
      <p className="intro">
        Discover skilled editors ready to help turn your footage into your next
        favourite piece of content.
      </p>
      <div className="cards editors">
        {editors.map(([name, specialty, initials]) => (
          <article className="editor-card" key={name}>
            <div className="avatar">{initials}</div>
            <small className="online">● Available for projects</small>
            <h2>{name}</h2>
            <p>{specialty}</p>
            <button type="button">View profile →</button>
          </article>
        ))}
      </div>
    </PublicPageLayout>
  );
}
