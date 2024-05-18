import { ThemeProvider } from "./components/ThemeProvider";
import Header from "@/components/Header";
import IntroSection from "@/components/IntroSection";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import GetInTouch from "./components/GetInTouch";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <IntroSection />
      <SkillsSection />
      <PortfolioSection />
      <GetInTouch />
      <ScrollToTopButton />
    </ThemeProvider>
  );
}

export default App;
