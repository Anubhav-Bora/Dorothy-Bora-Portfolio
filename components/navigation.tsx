"use client";

import { useEffect, useState } from "react";
import { Download } from "./icons";
const links = [
  { href: "#work", label: "ACADEMIC PROJECTS" },
  { href: "#experience", label: "PROFESSIONAL EXPERIENCE" },
  { href: "#about", label: "QUALIFICATIONS" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("work");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = ["work", "experience", "about"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0, 0.15, 0.35] },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
      <div className="reading-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
      <nav className="nav shell" aria-label="ACADEMIC PROJECTS | PROFESSIONAL EXPERIENCE | QUALIFICATIONS">
        <a className="brand-name" href="#top" aria-label="Dorothy Bora">
          Dorothy Bora<span className="brand-dot">.</span>
        </a>
        <div className="nav-links">
          {links.map((link) => {
            const id = link.href.slice(1);
            return (
              <a href={link.href} key={link.href} className={active === id ? "is-active" : ""}>
                {link.label}
              </a>
            );
          })}
        </div>
        <a className="nav-resume" href="/resume.pdf" download>
          Download Resume <Download size={15} />
        </a>
      </nav>
    </header>
  );
}
