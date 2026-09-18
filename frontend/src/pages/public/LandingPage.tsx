import AppLink from "../../components/navigation/AppLink";
import "./LandingPage.css";
import SiteHeader from "../../components/navigation/SiteHeader";

export default function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main className="landing">
        <section className="hero-copy">
          <p className="eyebrow">The edit, relayed</p>
          <h1>Your next great video starts with the right editor.</h1>
          <p>
            Connect with skilled video editors who can bring every brief, story,
            and deadline to life.
          </p>
          <div className="actions">
            <AppLink href="/signup" className="button primary">
              Find an editor →
            </AppLink>
            <AppLink href="/how-it-works" className="text-link">
              How it works ↗
            </AppLink>
          </div>
        </section>
        <section className="hero-art" aria-label="Video editing workspace">
          <div className="video-window">
            <div className="window-dots">● ● ●</div>
            <div className="video-frame">
              <b>
                MAKE IT
                <br />
                MEMORABLE.
              </b>
              <span>▶</span>
            </div>
            <div className="timeline">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="float-card available">
            <em>J</em>
            <div>
              <strong>Jordan is available</strong>
              <small>Short-form specialist</small>
            </div>
            ✓
          </div>
          <div className="float-card matched">
            ✦{" "}
            <div>
              <strong>Project matched</strong>
              <small>3 editors shortlisted</small>
            </div>
          </div>
        </section>
        <footer className="trust">
          BUILT FOR CREATORS <i /> POWERED BY EDITORS
        </footer>
      </main>
    </>
  );
}
