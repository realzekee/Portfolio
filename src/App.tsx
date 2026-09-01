import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { SkillsStack } from "./components/SkillsStack";
import { Terminal } from "./components/Terminal";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { RgbController } from "./components/RgbController";

const GITHUB_USERNAME = "realzekee";

export default function App() {
  const [profile, setProfile] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`)
        ]);

        if (profileRes.ok && reposRes.ok) {
          const profileData = await profileRes.json();
          const reposData = await reposRes.json();
          
          setProfile(profileData);
          setRepos(reposData);
        } else {
          console.error("Failed to fetch Github data", profileRes.status, reposRes.status);
          setProfile({ name: "Zeke", bio: "Full-Stack Software Engineer" });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white font-mono gap-4">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        <span className="text-xs uppercase tracking-widest text-zinc-500">INITIALIZING DEVELOPER WORKSPACE...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20 selection:text-white relative">
      <Navbar />
      <main>
        <Hero githubUser={profile} />
        {/* Coding & Repositories as Primary Showcase */}
        <Projects repos={repos} />
        {/* Technical Capabilities & Software Disciplines */}
        <SkillsStack />
        <Terminal githubUser={profile} />
        {/* Direct Contact & Inquiries */}
        <Contact />
      </main>
      <Footer />
      <RgbController />
    </div>
  );
}
