import AppLink from "../../components/navigation/AppLink";
import "./ChooseAccountTypePage.css";
import Brand from "../../components/navigation/Brand";

export default function ChooseAccountTypePage() {
  return (
    <main className="choice">
      <header className="setup-header">
        <Brand />
        <AppLink href="/">Exit setup</AppLink>
      </header>
      <section>
        <p className="eyebrow">Welcome to EditRelay</p>
        <h1>How will you use EditRelay?</h1>
        <p className="intro">
          Choose the path that matches what you are here to create.
        </p>
        <div className="cards">
          <AppLink href="/onboarding/creator/0" className="choice-card">
            <i>◒</i>
            <h2>I’m a creator</h2>
            <p>I need an editor to help bring my videos to life.</p>
            <b>Set up creator profile →</b>
          </AppLink>
          <AppLink href="/onboarding/editor/0" className="choice-card">
            <i>✦</i>
            <h2>I’m an editor</h2>
            <p>I want to showcase my skills and find great projects.</p>
            <b>Set up editor profile →</b>
          </AppLink>
        </div>
      </section>
    </main>
  );
}
