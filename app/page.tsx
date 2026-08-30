const publications = [
  {
    year: '2026',
    title: 'Weak wave turbulence as a precursor to universal coarsening in a homogeneous Bose gas',
    authors: 'S. M. Fischer, M. Gazo, S. J. Morris, N. Maslov, H. Zhang, J. Etrych, et al.',
    journal: 'arXiv:2605.22906',
    href: 'https://arxiv.org/abs/2605.22906',
  },
  {
    year: '2026',
    title: 'Observation of Vinen turbulence during far-from-equilibrium Bose-Einstein condensation',
    authors: 'S. J. Morris, M. Gazo, S. M. Fischer, H. Zhang, C. J. Ho, N. R. Cooper, et al.',
    journal: 'arXiv:2604.28191',
    href: 'https://arxiv.org/abs/2604.28191',
  },
  {
    year: '2026',
    title: 'A nonequilibrium equation of state for a turbulent 2D Bose gas',
    authors: 'Y. Jiang, N. Maslov, A. Karailiev, C. Eigen, M. Gazo, Z. Hadzibabic',
    journal: 'arXiv:2602.06131',
    href: 'https://arxiv.org/abs/2602.06131',
  },
  {
    year: '2025',
    title: 'Universal coarsening in a homogeneous two-dimensional Bose gas',
    authors: 'M. Gazo, A. Karailiev, T. Satoor, C. Eigen, M. Gałka, Z. Hadzibabic',
    journal: 'Science 389, 802',
    href: 'https://doi.org/10.1126/science.ado3487',
  },
  {
    year: '2025',
    title: 'A universal speed limit for spreading of coherence',
    authors: 'G. Martirosyan, M. Gazo, J. Etrych, S. M. Fischer, S. J. Morris, C. J. Ho, et al.',
    journal: 'Nature 647, 608',
    href: 'https://www.nature.com/articles/s41586-025-09735-z',
  },
  {
    year: '2024',
    title: 'Observation of an inverse turbulent-wave cascade in a driven quantum gas',
    authors: 'A. Karailiev, M. Gazo, M. Gałka, C. Eigen, T. Satoor, Z. Hadzibabic',
    journal: 'Physical Review Letters 133, 243402',
    href: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.133.243402',
  },
  {
    year: '2022',
    title: 'Emergence of isotropy and dynamic scaling in 2D wave turbulence in a homogeneous Bose gas',
    authors: 'M. Gałka, P. Christodoulou, M. Gazo, A. Karailiev, N. Dogra, J. Schmitt, Z. Hadzibabic',
    journal: 'Physical Review Letters 129, 190402',
    href: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.129.190402',
  },
];

const software = [
  {
    name: 'Wave kinetic equation',
    description: 'Interactive wave-kinetic-equation solver with box-trap volume calibration.',
    site: 'https://matoga.github.io/wke/',
    github: 'https://github.com/matoga/wke',
  },
  {
    name: '2D GPE',
    description: 'Browser-based two-dimensional Gross-Pitaevskii equation simulator.',
    site: 'https://web-gpe.vercel.app/',
    github: 'https://github.com/matoga/WebGPE',
  },
  {
    name: 'Two-component GPE solver',
    description: 'Imaginary-time solver for three-dimensional, two-component quantum gases.',
    github: 'https://github.com/matoga/imag-GPE-2-component-solver',
  },
  {
    name: 'BESee',
    description: 'Desktop application for loading, fitting, and analysing cold-atom absorption images.',
    site: 'https://matoga.github.io/besee/',
    github: 'https://github.com/matoga/besee',
  },
  {
    name: 'BEC3 Calculator',
    description: 'Web calculators for the BEC3 experiment, including Feshbach-field and box-trap calibrations.',
    site: 'https://bec3calculator.vercel.app/',
    github: 'https://github.com/matoga/bec3-calc',
  },
  {
    name: 'BEC3 Status',
    description: 'Live experiment dashboard for lab telemetry, environmental data, images, and oscilloscope traces.',
    site: 'https://bec3status.pages.dev/',
    github: 'https://github.com/matoga/bec3-lab-logger',
  },
  {
    name: 'AMOP',
    description: 'Wolfram Language package for atomic, molecular, and optical physics calculations.',
    github: 'https://github.com/matoga/amop',
  },
];

const highlights = [
  {
    journal: 'Science',
    note: 'First author',
    title: 'Universal coarsening in a homogeneous two-dimensional Bose gas',
    summary:
      'We prepared the same two-dimensional quantum gas in several very different disordered states and watched it become ordered. After an initial period, every run followed the same scaling laws. The details of how the gas started stopped mattering. The experiment shows that very different systems far from equilibrium can share the same route towards order.',
    image: '/publications/science-coarsening.png',
    imageAlt: 'Optical tables and vacuum apparatus used to study a two-dimensional quantum gas',
    paper: 'https://doi.org/10.1126/science.ado3487',
    story:
      'https://www.phy.cam.ac.uk/news/ultracold-atoms-reveal-universal-rules-far-from-equilibrium/',
  },
  {
    journal: 'Nature',
    note: 'Co-author',
    title: 'A universal speed limit for spreading of coherence',
    summary:
      'When a disordered quantum gas starts to condense, coherence first grows faster if the atoms interact more strongly. At larger distances, that advantage disappears. We found a universal upper rate set only by Planck\'s constant and the atom\'s mass, placing a fundamental limit on how quickly long-range quantum order can form.',
    image: '/publications/nature-coherence.png',
    imageAlt: 'Ultracold atom experiment illuminated by green laser light',
    paper: 'https://www.nature.com/articles/s41586-025-09735-z',
    story: 'https://www.phy.cam.ac.uk/news/a-speed-limit-for-spreading-of-coherence/',
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="site-name" href="#about">Martin Gazo</a>
        <nav aria-label="Primary navigation">
          <a href="#about">about</a>
          <a href="#publications">publications</a>
          <a href="#software">software</a>
        </nav>
      </header>

      <main>
        <section className="intro" id="about">
          <h1>Martin Gazo</h1>
          <p className="role">
            PhD researcher in experimental quantum physics at the University of Cambridge
          </p>

          <div className="intro-copy">
            <p>
              I am a researcher in the{' '}
              <a href="https://www.zh.phy.cam.ac.uk/" target="_blank" rel="noreferrer">
                Quantum Many-Body Dynamics group
              </a>{' '}
              led by Zoran Hadzibabic. My work concerns far-from-equilibrium dynamics,
              turbulence, and universal behaviour in homogeneous quantum gases.
            </p>
            <p>
              I am finishing my doctorate and leaving academia. I am interested in work
              that combines quantitative reasoning, computation, and difficult technical
              problems.
            </p>
          </div>

          <div className="profile-links" aria-label="External profiles">
            <a
              href="https://scholar.google.com/citations?user=YmTW0ekAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar
            </a>
            <a href="https://github.com/matoga" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.zh.phy.cam.ac.uk/Publications.html"
              target="_blank"
              rel="noreferrer"
            >
              Group publications
            </a>
          </div>
        </section>

        <section className="section" id="publications">
          <div className="section-title-row">
            <h2>Publications</h2>
            <a
              className="section-link"
              href="https://scholar.google.com/citations?user=YmTW0ekAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar
            </a>
          </div>

          <div className="research-highlights">
            {highlights.map((highlight) => (
              <article className="research-highlight" key={highlight.paper}>
                <a
                  className="highlight-image"
                  href={highlight.story}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Read the Cambridge story about ${highlight.title}`}
                >
                  {/* The source images are already sized for this layout. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={highlight.image}
                    alt={highlight.imageAlt}
                    width={1000}
                    height={660}
                  />
                </a>
                <div className="highlight-copy">
                  <p className="highlight-meta">
                    {highlight.journal} <span>{highlight.note}</span>
                  </p>
                  <h3>
                    <a href={highlight.paper} target="_blank" rel="noreferrer">
                      {highlight.title}
                    </a>
                  </h3>
                  <p>{highlight.summary}</p>
                  <div className="highlight-links">
                    <a href={highlight.paper} target="_blank" rel="noreferrer">
                      Paper
                    </a>
                    <a href={highlight.story} target="_blank" rel="noreferrer">
                      Cambridge story
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <h3 className="all-papers-title">All papers</h3>

          <ol className="publication-list">
            {publications.map((publication) => (
              <li key={publication.href}>
                <span className="year">{publication.year}</span>
                <div className="publication">
                  <a
                    className="publication-title"
                    href={publication.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {publication.title}
                  </a>
                  <p>{publication.authors}</p>
                  <p className="journal">{publication.journal}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section" id="software">
          <div className="section-title-row">
            <h2>Software</h2>
            <a
              className="section-link"
              href="https://github.com/matoga"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

          <ul className="software-list">
            {software.map((project) => (
              <li key={project.github}>
                <a
                  className="software-title"
                  href={project.site ?? project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.name}
                </a>
                <p>{project.description}</p>
                <div className="software-links">
                  {project.site && (
                    <a href={project.site} target="_blank" rel="noreferrer">
                      Open app
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <span>Martin Gazo</span>
        <span>Cambridge, UK</span>
      </footer>
    </div>
  );
}
