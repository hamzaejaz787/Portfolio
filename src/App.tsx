import { ThemeProvider } from "./components/ThemeProvider";
import Header from "@/components/Header";
import IntroSection from "@/components/IntroSection";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import GetInTouch from "./components/GetInTouch";
import AboutSection from "./components/AboutSection";
import Experiences from "./components/Experiences";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <IntroSection />
      <AboutSection />
      <Experiences />
      <SkillsSection />
      <PortfolioSection />
      <GetInTouch />
      <ScrollToTopButton />
    </ThemeProvider>
  );
}

export default App;
