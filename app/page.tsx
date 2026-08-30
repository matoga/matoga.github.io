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

const papers = [
  {
    year: '2026',
    venue: 'arXiv',
    title:
      'Weak wave turbulence as a precursor to universal coarsening in a homogeneous Bose gas',
    authors:
      'S. M. Fischer, M. Gazo, S. J. Morris, N. Maslov, H. Zhang, J. Etrych, et al.',
    href: 'https://arxiv.org/abs/2605.22906',
  },
  {
    year: '2026',
    venue: 'arXiv',
    title:
      'Observation of Vinen turbulence during far-from-equilibrium Bose–Einstein condensation',
    authors:
      'S. J. Morris, M. Gazo, S. M. Fischer, H. Zhang, C. J. Ho, N. R. Cooper, et al.',
    href: 'https://arxiv.org/abs/2604.28191',
  },
  {
    year: '2026',
    venue: 'arXiv',
    title: 'A nonequilibrium equation of state for a turbulent 2D Bose gas',
    authors:
      'Y. Jiang, N. Maslov, A. Karailiev, C. Eigen, M. Gazo, Z. Hadzibabic',
    href: 'https://arxiv.org/abs/2602.06131',
  },
  {
    year: '2025',
    venue: 'Science',
    title: 'Universal coarsening in a homogeneous two-dimensional Bose gas',
    authors:
      'M. Gazo, A. Karailiev, T. Satoor, C. Eigen, M. Gałka, Z. Hadzibabic',
    href: 'https://doi.org/10.1126/science.ado3487',
  },
  {
    year: '2025',
    venue: 'Nature',
    title: 'A universal speed limit for spreading of coherence',
    authors:
      'G. Martirosyan, M. Gazo, J. Etrych, S. M. Fischer, S. J. Morris, C. J. Ho, et al.',
    href: 'https://www.nature.com/articles/s41586-025-09735-z',
  },
  {
    year: '2024',
    venue: 'Phys. Rev. Lett.',
    title: 'Observation of an inverse turbulent-wave cascade in a driven quantum gas',
    authors:
      'A. Karailiev, M. Gazo, M. Gałka, C. Eigen, T. Satoor, Z. Hadzibabic',
    href: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.133.243402',
  },
  {
    year: '2022',
    venue: 'Phys. Rev. Lett.',
    title:
      'Emergence of isotropy and dynamic scaling in 2D wave turbulence in a homogeneous Bose gas',
    authors:
      'M. Gałka, P. Christodoulou, M. Gazo, A. Karailiev, N. Dogra, J. Schmitt, Z. Hadzibabic',
    href: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.129.190402',
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
          <a href="#papers">Papers</a>
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

      <section className="papers" id="papers">
        <div className="section-grid section-heading papers-heading">
          <p className="section-label">03 / Papers</p>
          <div className="papers-title">
            <h2>Selected publications</h2>
            <p>
              Experimental studies of turbulence, universal dynamics, and the
              emergence of order in homogeneous quantum gases.
            </p>
            <div className="papers-links">
              <a
                href="https://scholar.google.com/citations?user=YmTW0ekAAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar ↗
              </a>
              <a
                href="https://www.zh.phy.cam.ac.uk/Publications.html"
                target="_blank"
                rel="noreferrer"
              >
                Cambridge group publications ↗
              </a>
            </div>
          </div>
        </div>
        <ol className="paper-list">
          {papers.map((paper, index) => (
            <li key={paper.href}>
              <a
                className="paper"
                href={paper.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="paper-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="paper-main">
                  <h3>{paper.title}</h3>
                  <p>{paper.authors}</p>
                </div>
                <div className="paper-citation">
                  <span>{paper.venue}</span>
                  <span>{paper.year}</span>
                </div>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <footer className="footer section-grid">
        <p className="section-label">04 / Contact</p>
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
