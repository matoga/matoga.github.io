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
    arxiv: 'https://arxiv.org/abs/2312.09248',
  },
  {
    year: '2025',
    title: 'A universal speed limit for spreading of coherence',
    authors: 'G. Martirosyan, M. Gazo, J. Etrych, S. M. Fischer, S. J. Morris, C. J. Ho, et al.',
    journal: 'Nature 647, 608',
    href: 'https://www.nature.com/articles/s41586-025-09735-z',
    arxiv: 'https://arxiv.org/abs/2410.08204',
  },
  {
    year: '2024',
    title: 'Observation of an inverse turbulent-wave cascade in a driven quantum gas',
    authors: 'A. Karailiev, M. Gazo, M. Gałka, C. Eigen, T. Satoor, Z. Hadzibabic',
    journal: 'Physical Review Letters 133, 243402',
    href: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.133.243402',
    arxiv: 'https://arxiv.org/abs/2405.01537',
  },
  {
    year: '2022',
    title: 'Emergence of isotropy and dynamic scaling in 2D wave turbulence in a homogeneous Bose gas',
    authors: 'M. Gałka, P. Christodoulou, M. Gazo, A. Karailiev, N. Dogra, J. Schmitt, Z. Hadzibabic',
    journal: 'Physical Review Letters 129, 190402',
    href: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.129.190402',
    arxiv: 'https://arxiv.org/abs/2203.09514',
  },
];

const software = [
  {
    name: 'BESee',
    description: 'C#/.NET desktop app for viewing, fitting, and analysing cold-atom absorption images.',
    site: 'https://matoga.github.io/besee/',
    image: '/software/besee.png',
    imageAlt: 'BESee download page showing the absorption-image analysis application',
  },
  {
    name: 'BEC3 Calculator',
    description: 'Web calculators for the Hadzibabic group’s BEC3 experiment, including Feshbach-field and box-trap calibrations.',
    site: 'https://bec3calculator.vercel.app/',
    image: '/software/bec3-calculator.png',
    imageAlt: 'BEC3 Calculator showing atom, field, and unit-conversion panels',
  },
  {
    name: 'BEC3 Status',
    description: 'Live experiment dashboard for lab telemetry, environmental data, images, and oscilloscope traces.',
    site: 'https://bec3status.pages.dev/',
    image: '/software/bec3-status.png',
    imageAlt: 'Dark BEC3 lab status dashboard with image, air, and photodiode panels',
  },
  {
    name: '2D GPE',
    description: 'Browser-based two-dimensional Gross-Pitaevskii equation simulator.',
    site: 'https://web-gpe.vercel.app/',
    image: '/software/web-gpe.png',
    imageAlt: 'Two-dimensional Bose-Einstein condensate simulation interface',
  },
  {
    name: 'Wave kinetic equation solver',
    description: 'Browser-based wave-kinetic-equation solver with box-trap volume calibration.',
    site: 'https://matoga.github.io/wke/',
    github: 'https://github.com/matoga/wke',
    image: '/software/wke.png',
    imageAlt: 'Wave kinetic equation solver showing an initial distribution plot',
  },
  {
    name: 'Two-Component Imaginary Time GPE Solver',
    description: 'Browser-based imaginary-time solver for three-dimensional, two-component quantum gases.',
    site: 'https://imaggpe2comp.vercel.app/',
    github: 'https://github.com/matoga/imag-GPE-2-component-solver',
    image: '/software/two-component-gpe.png',
    imageAlt: 'Two-component GPE simulation showing absorption images and density cuts',
    imagePosition: 'top',
  },
  {
    name: 'BEC2 Calculator',
    description:
      'Web calculator for the Hadzibabic group’s earlier BEC2 experiment, covering 2D physics and trap calibrations, from pre-AI times.',
    site: 'https://bec2calculator.netlify.app/',
    image: '/software/bec2-calculator.png',
    imageAlt: 'BEC2 dynamic calculator showing 2D physics, calibration, and unit-conversion panels',
  },
  {
    name: 'AMOP Wolfram Package',
    description: 'Wolfram Language package for atomic, molecular, and optical physics calculations.',
    github: 'https://github.com/matoga/amop',
    image: '/software/amop.png',
    imageAlt: 'GitHub repository for the AMOP Wolfram Language package',
  },
  {
    name: 'Wolfram Autosave',
    description: 'Wolfram Language package that periodically saves a hidden backup of the current notebook.',
    github: 'https://github.com/matoga/wolfram-autosave',
    image: '/software/wolfram-autosave.png',
    imageAlt: 'GitHub repository for the Wolfram Autosave package',
  },
];

const highlights = [
  {
    journal: 'Science',
    year: '2025',
    note: 'First author',
    title: 'Universal coarsening in a homogeneous two-dimensional Bose gas',
    summary:
      'A two-dimensional Bose gas driven far from equilibrium and released from several very different disordered states thermalises along a single, shared path. Once initial-state-dependent effects are accounted for, we found experimentally that the dynamics follow the scaling predicted by the theory of far-from-equilibrium Bose-gas dynamics: coarsening at long lengthscales and weak-wave turbulence at short scales. We also show how these initial-state effects matter for any study of universality far from equilibrium.',
    image: '/publications/science-coarsening.png',
    imageAlt: 'Optical tables and vacuum apparatus used to study a two-dimensional quantum gas',
    secondaryImage: '/publications/2dcoarse.png',
    secondaryImageAlt: 'Momentum-space distributions converging during coarsening',
    paper: 'https://doi.org/10.1126/science.ado3487',
    story:
      'https://www.phy.cam.ac.uk/news/ultracold-atoms-reveal-universal-rules-far-from-equilibrium/',
    primaryLinks: [
      { label: 'Science', href: 'https://doi.org/10.1126/science.ado3487' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2312.09248' },
    ],
    coverageLinks: [
      {
        label: 'Cavendish Press Release',
        href: 'https://www.phy.cam.ac.uk/news/ultracold-atoms-reveal-universal-rules-far-from-equilibrium/',
      },
    ],
  },
  {
    journal: 'Nature',
    year: '2025',
    note: 'Co-author',
    title: 'A universal speed limit for spreading of coherence',
    summary:
      'When a disordered Bose gas starts to condense, coherence first grows faster if the atoms interact more strongly. At larger distances, that advantage disappears. We found a universal upper rate set only by Planck\'s constant and the atom\'s mass, placing a fundamental limit on how quickly long-range quantum order can form.',
    image: '/publications/nature-coherence.png',
    imageAlt: 'Ultracold atom experiment illuminated by green laser light',
    secondaryImage: '/publications/Speedlimit.jpg',
    secondaryImageAlt: 'Illustration of the universal speed limit for spreading coherence',
    paper: 'https://www.nature.com/articles/s41586-025-09735-z',
    story: 'https://www.phy.cam.ac.uk/news/a-speed-limit-for-spreading-of-coherence/',
    primaryLinks: [
      { label: 'Nature', href: 'https://www.nature.com/articles/s41586-025-09735-z' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2410.08204' },
    ],
    coverageLinks: [
      {
        label: 'Cavendish Press Release',
        href: 'https://www.phy.cam.ac.uk/news/a-speed-limit-for-spreading-of-coherence/',
      },
      {
        label: 'Physics Today',
        href: 'https://doi.org/10.1063/pt.ed9c465bbb',
      },
      {
        label: 'CavMag',
        href: 'https://cavmag.phy.cam.ac.uk/cavmag-35/how-fast-can-quantum-coherence-spread/index.html',
      },
    ],
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
          <a href="#software">software projects</a>
        </nav>
      </header>

      <main>
        <section className="intro" id="about">
          <div className="intro-layout">
            <div>
              <h1>Martin Gazo</h1>
              <p className="role">
                Researcher in experimental quantum physics at the University of Cambridge
              </p>

              <div className="intro-copy">
                <p>
                  I recently finished working in the{' '}
                  <a href="https://www.zh.phy.cam.ac.uk/" target="_blank" rel="noreferrer">
                    Quantum Many-Body Dynamics group
                  </a>{' '}
                  led by Zoran Hadzibabic. My work concerned far-from-equilibrium dynamics,
                  turbulence, and universal behaviour in homogeneous quantum gases. I am now
                  looking for work outside academia.
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
                  href="https://www.linkedin.com/in/martin-ga%C5%BEo-26ab07177/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="profile-photo"
              src="/martin-gazo.jpeg"
              alt="Portrait of Martin Gazo"
              width={256}
              height={256}
            />
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
                <div className="highlight-images highlight-carousel">
                  <a
                    className="highlight-image"
                    href={highlight.story}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Read the Cambridge story about ${highlight.title}`}
                  >
                    {/* The source images are already sized for this layout. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={highlight.image} alt={highlight.imageAlt} width={1000} height={660} />
                  </a>
                  {highlight.secondaryImage && (
                    <a
                      className="highlight-image"
                      href={highlight.story}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Read the Cambridge story about ${highlight.title}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={highlight.secondaryImage}
                        alt={highlight.secondaryImageAlt}
                        width={1000}
                        height={660}
                      />
                    </a>
                  )}
                </div>
                <div className="highlight-copy">
                  <p className="highlight-meta">
                    {highlight.journal}, {highlight.year} <span>{highlight.note}</span>
                  </p>
                  <h3>
                    <a href={highlight.paper} target="_blank" rel="noreferrer">
                      {highlight.title}
                    </a>
                  </h3>
                  <p>{highlight.summary}</p>
                  <div className="highlight-links">
                    <p className="highlight-links-row highlight-links-primary">
                      {highlight.primaryLinks.map((link, index) => (
                        <span key={link.href}>
                          {index > 0 && <span className="highlight-links-sep"> · </span>}
                          <a href={link.href} target="_blank" rel="noreferrer">
                            {link.label}
                          </a>
                        </span>
                      ))}
                    </p>
                    {highlight.coverageLinks.length > 0 && (
                      <p className="highlight-links-row highlight-links-coverage">
                        <span className="highlight-links-label">Coverage: </span>
                        {highlight.coverageLinks.map((link, index) => (
                          <span key={link.href}>
                            {index > 0 && <span className="highlight-links-sep"> · </span>}
                            <a href={link.href} target="_blank" rel="noreferrer">
                              {link.label}
                            </a>
                          </span>
                        ))}
                      </p>
                    )}
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
                  <p className="journal">
                    {publication.journal}
                    {publication.arxiv && (
                      <>
                        {' · '}
                        <a href={publication.arxiv} target="_blank" rel="noreferrer">
                          arXiv
                        </a>
                      </>
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section" id="software">
          <div className="section-title-row">
            <h2>Software projects</h2>
            <a
              className="section-link"
              href="https://github.com/matoga"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <p className="section-subtitle">
            Small and larger projects or tools that might be worth sharing.
          </p>

          <ul className="software-list">
            {software.map((project) => (
              <li key={project.name}>
                <a
                  className="software-image"
                  href={project.site ?? project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width={1200}
                    height={800}
                    style={{ objectPosition: project.imagePosition ?? 'center' }}
                  />
                </a>
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
                      Open
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}
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
