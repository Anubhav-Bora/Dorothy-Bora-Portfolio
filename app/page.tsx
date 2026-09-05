import resume from "@/data/resume.json";
import { ArrowDown, ArrowUpRight, Check, Download } from "@/components/icons";
import { MotionProvider } from "@/components/motion-provider";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <main id="top">
      <MotionProvider />
      <Navigation />

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">{resume.profile.qualification}</p>
          <h1 id="hero-title">{resume.profile.name}</h1>
          <p className="hero-statement">{resume.profile.summary}</p>
          <div className="hero-principles">
            {resume.skills.slice(0, 3).map((skill) => <span key={skill}>{skill}</span>)}
          </div>
          <div className="hero-actions">
            <a className="button button--primary" href="#work">
              ACADEMIC PROJECTS <ArrowDown size={17} />
            </a>
            <a className="button button--text" href="#experience">
              PROFESSIONAL EXPERIENCE <ArrowDown size={17} />
            </a>
          </div>
        </div>

        <aside className="profile-card" aria-label="KEY SKILLS" data-reveal>
          <div className="profile-card__header">
            <p className="card-label">KEY SKILLS</p>
            <span className="profile-card__index" aria-hidden="true">01 / 07</span>
          </div>
          <div className="skill-stack">
            {resume.skills.map((skill, index) => (
              <div className="skill-stack__item" key={skill}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{skill}</strong>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="metrics-wrap">
        <div className="metrics shell">
          {resume.metrics.map((metric, index) => (
            <div className={`metric reveal-delay-${index}`} key={metric.label} data-reveal>
              <p><strong>{metric.value}</strong></p>
              <small>{metric.label}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell" id="work" aria-labelledby="work-title">
        <div className="section-heading section-heading--single" data-reveal>
          <div>
            <div className="section-label"><p className="section-kicker">ACADEMIC PROJECTS</p><span>01</span></div>
            <h2 id="work-title">ACADEMIC PROJECTS</h2>
          </div>
        </div>

        <div className="case-grid">
          {resume.projects.map((project, index) => (
            <article className={`case-card case-card--${index + 1} reveal-delay-${index}`} key={project.number} data-reveal>
              <div className="case-card__top">
                <span className="case-card__number">{project.number}</span>
                <ArrowUpRight size={24} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.approach.map((item) => <span key={item}>{item}</span>)}
              </div>
              <strong className="case-card__outcome">{project.outcome}</strong>
              {index === 0 && (
                <a
                  href="https://parcelmanager-glimg.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-card__link"
                >
                  Click here for DashBoard <ArrowUpRight size={14} />
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section section--tinted" id="experience" aria-labelledby="experience-title">
        <div className="shell experience-grid">
          <div className="experience-sticky" data-reveal>
            <div className="section-label"><p className="section-kicker">PROFESSIONAL EXPERIENCE</p><span>02</span></div>
            <h2 id="experience-title">PROFESSIONAL EXPERIENCE</h2>
          </div>
          <div className="timeline">
            {resume.experience.map((job, index) => (
              <article className={`timeline-item reveal-delay-${index}`} key={job.role} data-reveal>
                <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="timeline-content">
                  <p className="timeline-period">{job.period}</p>
                  <h3>{job.role}</h3>
                  <p className="timeline-company">{job.company}</p>
                  <ul>
                    {job.highlights.map((highlight) => (
                      <li key={highlight}><Check /><span>{highlight}</span></li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="about" aria-labelledby="qualifications-title">
        <div className="section-heading section-heading--single" data-reveal>
          <div>
            <div className="section-label"><p className="section-kicker">QUALIFICATIONS</p><span>03</span></div>
            <h2 id="qualifications-title">QUALIFICATIONS</h2>
          </div>
        </div>

        <div className="qualification-table" data-reveal>
          <div className="qualification-table__head">
            <span>Degree</span><span>Institute/ University, City</span><span>%/CGPA</span><span>Year</span>
          </div>
          {resume.education.map((item) => (
            <div className="qualification-row" key={`${item.degree}-${item.year}`}>
              <strong>{item.degree}</strong>
              <span>{item.institution}</span>
              <span>{item.score}</span>
              <span>{item.year}</span>
            </div>
          ))}
        </div>

        <div className="profile-grid">
          <section className="profile-block profile-block--dark" data-reveal>
            <p className="card-label">AWARDS &amp; ACHIEVEMENTS</p>
            {resume.recognition.map((item) => (
              <div className="profile-row" key={item.title}>
                <span>✦</span><strong>{item.title}</strong><small>{item.issuer} | {item.year}</small>
              </div>
            ))}
          </section>

          <section className="profile-block reveal-delay-1" data-reveal>
            <p className="card-label">POSITIONS OF RESPONSIBILITY</p>
            {resume.leadership.map((item) => (
              <div className="profile-row" key={item.role}>
                <span>•</span><strong>{item.role}</strong><small>{item.organization} | {item.year}</small>
              </div>
            ))}
          </section>

          <section className="profile-block reveal-delay-2" data-reveal>
            <p className="card-label">CERTIFICATES</p>
            <div className="profile-row">
              <span>✓</span><strong>{resume.certification.title}</strong>
              <small>{resume.certification.issuer} | {resume.certification.year} | {resume.certification.duration}</small>
            </div>
          </section>

          <section className="profile-block profile-block--compact reveal-delay-1" data-reveal>
            <p className="card-label">LANGUAGES</p>
            <div className="word-list">{resume.languages.map((item) => <strong key={item}>{item}</strong>)}</div>
          </section>

          <section className="profile-block profile-block--compact reveal-delay-2" data-reveal>
            <p className="card-label">EXTRA-CURRICULARS</p>
            <div className="word-list">{resume.interests.map((item) => <strong key={item}>{item}</strong>)}</div>
          </section>
        </div>
      </section>

      <section className="closing shell" data-reveal>
        <div>
          <p className="section-kicker">PROFILE SUMMARY</p>
          <h2>{resume.profile.name}</h2>
          <p>{resume.profile.summary}</p>
        </div>
        <div className="closing-actions">
          <img src="/great-lakes-logo.jpeg" alt="Great Lakes Institute of Management" />
          <a className="button button--light" href="/dorothy-bora-resume.docx" download>
            Download Resume <Download size={17} />
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand-name" href="#top">Dorothy Bora<span className="brand-dot">.</span></a>
        <p>PGCM | 2027</p>
      </footer>
    </main>
  );
}
