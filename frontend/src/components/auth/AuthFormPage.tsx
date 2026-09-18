import AppLink from "../navigation/AppLink";
import "./AuthFormPage.css";
import SiteHeader from "../navigation/SiteHeader";
import { navigateTo } from "../../lib/navigation";

type AuthFormPageProps = { mode: "login" | "signup" };

export default function AuthFormPage({ mode }: AuthFormPageProps) {
  const isSignUp = mode === "signup";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigateTo(isSignUp ? "/onboarding/account-type" : "/");
  }

  return (
    <>
      <SiteHeader />
      <main className="auth">
        <section className="auth-aside">
          <p className="eyebrow">
            {isSignUp ? "Join EditRelay" : "Welcome back"}
          </p>
          <h1>
            {isSignUp
              ? "Creative work is better together."
              : "Pick up where you left off."}
          </h1>
          <p>
            {isSignUp
              ? "Create your account and we will help you find the right next step."
              : "Log in to manage your projects, profile, and connections."}
          </p>
        </section>
        <section className="auth-card">
          <h2>{isSignUp ? "Create your account" : "Log in to EditRelay"}</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Email address
              <input type="email" placeholder="you@example.com" required />
            </label>
            <label>
              Password
              <input type="password" placeholder="••••••••" required />
            </label>
            {isSignUp && (
              <label className="check">
                <input type="checkbox" required /> I agree to the terms and
                privacy policy
              </label>
            )}
            <button className="button primary" type="submit">
              {isSignUp ? "Continue" : "Log in"} →
            </button>
          </form>
          <p>
            {isSignUp ? "Already have an account?" : "New to EditRelay?"}{" "}
            <AppLink href={isSignUp ? "/login" : "/signup"}>
              {isSignUp ? "Log in" : "Sign up"}
            </AppLink>
          </p>
        </section>
      </main>
    </>
  );
}
