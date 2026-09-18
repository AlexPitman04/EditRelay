import AppLink from "../navigation/AppLink";
import "./OnboardingFlow.css";
import Brand from "../navigation/Brand";

export type AccountType = "creator" | "editor";
type Step = { title: string; description: string };

const stepsByAccountType: Record<AccountType, Step[]> = {
  creator: [
    { title: "Basic details", description: "Tell us a little about yourself." },
    {
      title: "Creator profile",
      description: "Set up the profile editors will see.",
    },
    { title: "Complete", description: "You are ready to find your editor." },
  ],
  editor: [
    { title: "Basic details", description: "Start with the essentials." },
    {
      title: "Skills & specialties",
      description: "Help creators find the right fit.",
    },
    { title: "Portfolio", description: "Show off your best work." },
    {
      title: "Availability",
      description: "Choose when you are available for projects.",
    },
    { title: "Payout setup", description: "Add your payout details securely." },
    {
      title: "Complete",
      description: "Your editor profile is ready to share.",
    },
  ],
};

type OnboardingFlowProps = { accountType: AccountType; stepIndex: number };

export default function OnboardingFlow({
  accountType,
  stepIndex,
}: OnboardingFlowProps) {
  const steps = stepsByAccountType[accountType];
  const step = steps[stepIndex];
  const isComplete = stepIndex === steps.length - 1;
  const previousPath =
    stepIndex === 0
      ? "/onboarding/account-type"
      : `/onboarding/${accountType}/${stepIndex - 1}`;
  const nextPath = isComplete
    ? "/"
    : `/onboarding/${accountType}/${stepIndex + 1}`;

  return (
    <main className="onboarding">
      <header className="setup-header">
        <Brand />
        <span>
          {accountType === "creator" ? "Creator setup" : "Editor setup"}
        </span>
        <AppLink href="/">Save & exit</AppLink>
      </header>
      <div className="setup-layout">
        <aside>
          {steps.map((item, index) => (
            <div
              className={
                index === stepIndex
                  ? "active"
                  : index < stepIndex
                    ? "complete"
                    : ""
              }
              key={item.title}
            >
              <i>{index < stepIndex ? "✓" : index + 1}</i>
              <strong>{item.title}</strong>
            </div>
          ))}
        </aside>
        <section>
          <p className="eyebrow">
            Step {stepIndex + 1} of {steps.length}
          </p>
          <h1>{step.title}</h1>
          <p className="intro">{step.description}</p>
          {isComplete ? (
            <CompletionMessage />
          ) : (
            <SetupFields accountType={accountType} stepIndex={stepIndex} />
          )}
          <footer>
            <AppLink href={previousPath} className="button quiet">
              Back
            </AppLink>
            <AppLink href={nextPath} className="button primary">
              {isComplete ? "Go to home" : "Continue"} →
            </AppLink>
          </footer>
        </section>
      </div>
    </main>
  );
}

function SetupFields({ accountType, stepIndex }: OnboardingFlowProps) {
  const editorFields = [
    [
      "What editing do you specialise in?",
      "e.g. Short-form, YouTube, motion graphics",
    ],
    ["Add a portfolio link", "https://"],
    ["When are you available?", "Select your availability"],
    ["Where should we send payouts?", "Add payout details"],
  ];
  if (stepIndex === 0)
    return (
      <div className="fields">
        <label>
          Full name
          <input placeholder="Your name" />
        </label>
        <label>
          Location
          <input placeholder="City, country" />
        </label>
      </div>
    );
  const [label, placeholder] =
    accountType === "creator"
      ? [
          "What kind of content do you create?",
          "e.g. YouTube, podcasts, short-form social",
        ]
      : editorFields[stepIndex - 1];
  return (
    <div className="fields">
      <label>
        {label}
        <input placeholder={placeholder} />
      </label>
    </div>
  );
}

function CompletionMessage() {
  return (
    <div className="done">
      <b>✓</b>
      <h2>You’re all set.</h2>
      <p>Your EditRelay profile is ready for its next chapter.</p>
    </div>
  );
}
