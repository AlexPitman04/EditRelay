import { useEffect, useState, type ComponentType } from "react";
import "./components/ui/shared.css";
import LandingPage from "./pages/public/LandingPage";
import HowItWorksPage from "./pages/public/HowItWorksPage";
import BrowseEditorsPage from "./pages/public/BrowseEditorsPage";
import SignUpPage from "./pages/public/SignUpPage";
import LoginPage from "./pages/public/LoginPage";
import ChooseAccountTypePage from "./pages/onboarding/ChooseAccountTypePage";
import CreatorBasicDetailsPage from "./pages/onboarding/CreatorBasicDetailsPage";
import CreatorProfilePage from "./pages/onboarding/CreatorProfilePage";
import CreatorCompletePage from "./pages/onboarding/CreatorCompletePage";
import EditorBasicDetailsPage from "./pages/onboarding/EditorBasicDetailsPage";
import EditorSkillsPage from "./pages/onboarding/EditorSkillsPage";
import EditorPortfolioPage from "./pages/onboarding/EditorPortfolioPage";
import EditorAvailabilityPage from "./pages/onboarding/EditorAvailabilityPage";
import EditorPayoutSetupPage from "./pages/onboarding/EditorPayoutSetupPage";
import EditorCompletePage from "./pages/onboarding/EditorCompletePage";
import NotFoundPage from "./pages/NotFoundPage";

const routes: Record<string, ComponentType> = {
  "/": LandingPage,
  "/how-it-works": HowItWorksPage,
  "/editors": BrowseEditorsPage,
  "/signup": SignUpPage,
  "/login": LoginPage,
  "/onboarding/account-type": ChooseAccountTypePage,
  "/onboarding/creator/0": CreatorBasicDetailsPage,
  "/onboarding/creator/1": CreatorProfilePage,
  "/onboarding/creator/2": CreatorCompletePage,
  "/onboarding/editor/0": EditorBasicDetailsPage,
  "/onboarding/editor/1": EditorSkillsPage,
  "/onboarding/editor/2": EditorPortfolioPage,
  "/onboarding/editor/3": EditorAvailabilityPage,
  "/onboarding/editor/4": EditorPayoutSetupPage,
  "/onboarding/editor/5": EditorCompletePage,
};

export default function App() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const update = () => setPath(window.location.pathname);
    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
  }, []);
  const Page = routes[path] ?? NotFoundPage;
  return <Page />;
}
