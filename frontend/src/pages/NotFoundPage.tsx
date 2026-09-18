import AppLink from "../components/navigation/AppLink";
import PublicPageLayout from "../components/layout/PublicPageLayout";

export default function NotFoundPage() {
  return (
    <PublicPageLayout eyebrow="404" title="That page is not on the timeline.">
      <AppLink href="/" className="button primary">
        Back home →
      </AppLink>
    </PublicPageLayout>
  );
}
