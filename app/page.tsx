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
    description: 'Interactive numerical solver for wave kinetics in box-trap geometries.',
    href: 'https://github.com/matoga/wke',
  },
  {
    name: 'Two-component GPE solver',
    description: 'Imaginary-time solver for three-dimensional, two-component quantum gases.',
    href: 'https://github.com/matoga/imag-GPE-2-component-solver',
  },
  {
    name: 'AMOP',
    description: 'Wolfram Language package for atomic, molecular, and optical physics calculations.',
    href: 'https://github.com/matoga/amop',
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
              <li key={project.href}>
                <a href={project.href} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
                <p>{project.description}</p>
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
