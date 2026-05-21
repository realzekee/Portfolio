import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SkillsStack } from "./components/SkillsStack";
import { Terminal } from "./components/Terminal";
import { Projects } from "./components/Projects";
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
          // Fallback basic data if API limit hit
          setProfile({ name: "Zeke", bio: "Software Developer" });
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
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="w-8 h-8 border-4 border-zinc-800 border-t-cyan-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-50 font-sans selection:bg-cyan-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero githubUser={profile} />
        <SkillsStack />
        <Terminal githubUser={profile} />
        {repos.length > 0 && <Projects repos={repos} />}
        <Contact />
      </main>
      <Footer />
      <RgbController />
    </div>
  );
}
