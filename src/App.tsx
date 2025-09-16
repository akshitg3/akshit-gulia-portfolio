import Intro from "./components/intro";
import Header from "./components/header.tsx";
import Skills from "./components/skills.tsx";
import Experience from "./components/experience.tsx";
import Projects from "./components/projects.tsx";
import Footer from "./components/footer.tsx";

function App() {
  return (
    <div className={`font-inter h-auto text-gray-950 relative pt-28 sm:pt-36`}>
      <Header />
      <main className="flex flex-col items-center px-4">
        <Intro />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
