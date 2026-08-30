const projects = [
  {
    number: '01',
    title: 'Wave kinetic equation',
    description:
      'An interactive solver for exploring wave kinetics and calibrating box-trap volumes.',
    meta: 'TypeScript · Scientific computing',
    href: 'https://github.com/matoga/wke',
  },
  {
    number: '02',
    title: 'Two-component GPE solver',
    description:
      'An imaginary-time solver for three-dimensional, two-component quantum gases.',
    meta: 'JavaScript · Numerical methods',
    href: 'https://github.com/matoga/imag-GPE-2-component-solver',
  },
  {
    number: '03',
    title: 'AMOP',
    description:
      'A Wolfram Language package for atomic, molecular and optical physics workflows.',
    meta: 'Wolfram Language · Research tools',
    href: 'https://github.com/matoga/amop',
  },
  {
    number: '04',
    title: 'Raspberry Pi lab logger',
    description:
      'A lightweight temperature and humidity logger built for a Raspberry Pi and Grove sensors.',
    meta: 'Python · Lab infrastructure',
    href: 'https://github.com/matoga/rpi-bec3-log-agent',
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Martin Gazo, home">
          MG<span className="wordmark-dot">.</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="https://github.com/matoga">GitHub ↗</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow">Cambridge, UK · Computational physics</p>
        <h1>
          Martin Gazo
          <span>Physics, computation, and useful tools.</span>
        </h1>
        <div className="hero-footer">
          <p>
            I build numerical tools and interactive software for exploring
            complex physical systems.
          </p>
          <a className="round-link" href="#work" aria-label="View selected work">
            ↓
          </a>
        </div>
      </section>

      <section className="about section-grid" id="about">
        <p className="section-label">01 / About</p>
        <div className="about-copy">
          <p>
            My work sits between theoretical questions and practical software:
            turning equations into tools that make ideas easier to test,
            inspect, and understand.
          </p>
          <p className="muted">
            Current interests include quantum gases, wave kinetics, numerical
            methods, and small, durable research utilities.
          </p>
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-grid section-heading">
          <p className="section-label">02 / Selected work</p>
          <h2>Open-source projects</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <a
              className="project"
              href={project.href}
              key={project.number}
              target="_blank"
              rel="noreferrer"
            >
              <span className="project-number">{project.number}</span>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <span className="project-meta">{project.meta}</span>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer section-grid">
        <p className="section-label">03 / Contact</p>
        <div className="footer-main">
          <p className="footer-kicker">Have a question or an interesting problem?</p>
          <a className="footer-link" href="https://github.com/matoga">
            Find me on GitHub <span aria-hidden="true">↗</span>
          </a>
          <div className="footer-meta">
            <span>Martin Gazo</span>
            <span>Cambridge, UK</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
