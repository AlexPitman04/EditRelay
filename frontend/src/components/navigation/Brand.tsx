import AppLink from "./AppLink";

export default function Brand() {
  return (
    <AppLink href="/" className="brand" aria-label="EditRelay home">
      <span aria-hidden="true">◈</span>
      EDITRELAY
    </AppLink>
  );
}
