import { useEffect } from 'react';

type IconKind =
  | 'book'
  | 'scope'
  | 'users'
  | 'research'
  | 'calendar'
  | 'mentor'
  | 'diamond'
  | 'lounge'
  | 'screen'
  | 'clock'
  | 'instagram'
  | 'facebook'
  | 'whatsapp'
  | 'mail'
  | 'phone'
  | 'location';

const leagueShortName = 'LEFS';
const leagueName = 'Liga de Endodontia da Faculdade Soberana';
const heroPhoto = new URL('../IMG_9895.jpg', import.meta.url).href;
const practicePhoto = new URL('../IMG_9893.jpg', import.meta.url).href;

const activities: Array<{ title: string; description: string; icon: IconKind }> = [
  {
    title: 'Estudos dirigidos',
    description: 'Discussão de casos, revisões e encontros para aprofundar os fundamentos da Endodontia.',
    icon: 'book',
  },
  {
    title: 'Microscopia e tecnologia',
    description: 'Contato com recursos modernos para leitura clínica, precisão técnica e atualização constante.',
    icon: 'scope',
  },
  {
    title: 'Vivência colaborativa',
    description: 'Troca entre alunos, professores e convidados em uma rotina que fortalece a formação prática.',
    icon: 'users',
  },
  {
    title: 'Pesquisa científica',
    description: 'Projetos que estimulam produção acadêmica, investigação e protagonismo em ciência.',
    icon: 'research',
  },
  {
    title: 'Agenda ativa',
    description: 'Workshops, palestras, extensão e ações especiais para manter a liga em movimento o ano inteiro.',
    icon: 'calendar',
  },
];

const differentials: Array<{ title: string; icon: IconKind }> = [
  { title: 'Mentoria especializada', icon: 'mentor' },
  { title: 'Estrutura moderna', icon: 'diamond' },
  { title: 'Ambiente acolhedor', icon: 'lounge' },
  { title: 'Conteúdo digital', icon: 'screen' },
  { title: 'Organização ágil', icon: 'clock' },
];

const gallery = [
  {
    eyebrow: 'Aulas',
    title: 'Discussão de casos clínicos',
    captionA: 'TEORIA',
    captionB: 'IMERSÃO',
    tone: 'clinical',
  },
  {
    eyebrow: 'Prática',
    title: 'Treinos e demonstrações',
    captionA: 'TÉCNICA',
    captionB: 'EVOLUÇÃO',
    tone: 'warm',
  },
];

function Icon({ kind }: { kind: IconKind }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (kind) {
    case 'book':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M4.5 6.5C4.5 5.4 5.4 4.5 6.5 4.5H19.5V18.5H7C5.6 18.5 4.5 17.4 4.5 16V6.5Z" />
          <path {...common} d="M7 18.5C5.6 18.5 4.5 17.4 4.5 16C4.5 14.6 5.6 13.5 7 13.5H19.5" />
          <path {...common} d="M8 7.5H15.5" />
          <path {...common} d="M8 10.5H13.5" />
        </svg>
      );
    case 'scope':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle {...common} cx="10" cy="10" r="4.5" />
          <path {...common} d="M13.5 13.5L19.5 19.5" />
          <path {...common} d="M16 4.5H19.5V8" />
          <path {...common} d="M8 19.5H4.5V16" />
        </svg>
      );
    case 'users':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle {...common} cx="9" cy="8" r="3" />
          <circle {...common} cx="16.5" cy="9.5" r="2.5" />
          <path {...common} d="M4.5 18.5C4.9 15.8 6.8 14 9.5 14H10.5C13.2 14 15.1 15.8 15.5 18.5" />
          <path {...common} d="M14.5 14.5C16.5 14.8 18 16 18.5 18" />
        </svg>
      );
    case 'research':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M8.5 4.5H15.5" />
          <path {...common} d="M10.5 4.5V8L6 16.5A2 2 0 0 0 7.8 19.5H16.2A2 2 0 0 0 18 16.5L13.5 8V4.5" />
          <path {...common} d="M8.5 13H15.5" />
          <path {...common} d="M9.5 16H14.5" />
        </svg>
      );
    case 'calendar':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect {...common} x="4.5" y="5.5" width="15" height="14" rx="2" />
          <path {...common} d="M8 3.5V7.5" />
          <path {...common} d="M16 3.5V7.5" />
          <path {...common} d="M4.5 10H19.5" />
          <path {...common} d="M8.2 13.2H8.3" />
          <path {...common} d="M12 13.2H12.1" />
          <path {...common} d="M15.8 13.2H15.9" />
        </svg>
      );
    case 'mentor':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle {...common} cx="8" cy="8" r="3" />
          <path {...common} d="M4.5 18.5C4.8 15.7 6.7 14 9.3 14H10.2" />
          <path {...common} d="M15.5 4.5L16.6 6.8L19 7.2L17.2 8.9L17.6 11.3L15.5 10.1L13.4 11.3L13.8 8.9L12 7.2L14.4 6.8L15.5 4.5Z" />
        </svg>
      );
    case 'diamond':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M4.5 9L8 4.5H16L19.5 9L12 19.5L4.5 9Z" />
          <path {...common} d="M8 4.5L12 19.5L16 4.5" />
          <path {...common} d="M4.5 9H19.5" />
        </svg>
      );
    case 'lounge':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M6 12.5V10.5A2 2 0 0 1 8 8.5H16A2 2 0 0 1 18 10.5V12.5" />
          <path {...common} d="M4.5 13.5H19.5V17.5H4.5V13.5Z" />
          <path {...common} d="M6 17.5V19.5" />
          <path {...common} d="M18 17.5V19.5" />
        </svg>
      );
    case 'screen':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect {...common} x="4.5" y="5" width="15" height="11" rx="1.8" />
          <path {...common} d="M9 19H15" />
          <path {...common} d="M12 16V19" />
          <path {...common} d="M11 8.5C11.8 7.8 13.3 7.8 14.1 8.5C15 9.3 15 10.7 14.2 11.5C13.3 12.3 11.8 12.3 11 11.5C10.1 10.7 10.1 9.3 11 8.5Z" />
          <path {...common} d="M12.2 9.1C12.1 10.2 12 10.8 12 11.9" />
        </svg>
      );
    case 'clock':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle {...common} cx="12" cy="12" r="7.5" />
          <path {...common} d="M12 8V12L14.8 13.8" />
          <path {...common} d="M16.8 4.8L18.8 2.8" />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect {...common} x="4.5" y="4.5" width="15" height="15" rx="4" />
          <circle {...common} cx="12" cy="12" r="3.5" />
          <path {...common} d="M16.8 7.2H16.9" />
        </svg>
      );
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M13.5 19.5V12H16L16.5 9.2H13.5V7.8C13.5 6.9 13.8 6.2 15.1 6.2H16.6V3.8C16.3 3.8 15.5 3.7 14.5 3.7C12.2 3.7 10.8 5.1 10.8 7.6V9.2H8.5V12H10.8V19.5" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M12 19.5C16.1 19.5 19.5 16.2 19.5 12C19.5 7.9 16.1 4.5 12 4.5C7.8 4.5 4.5 7.9 4.5 12C4.5 13.4 4.9 14.7 5.6 15.8L5 19L8.3 18.3C9.3 19.1 10.6 19.5 12 19.5Z" />
          <path {...common} d="M9.2 8.7C9 8.2 8.8 8.2 8.4 8.2C8.1 8.2 7.7 8.4 7.5 8.7C7.1 9.2 6.8 9.9 6.8 10.7C6.8 12.3 8 13.8 8.2 14.1C8.4 14.4 10.2 17 13.2 17C14 17 14.6 16.8 15.2 16.5C15.9 16.2 16.4 15.5 16.5 14.8L16.7 13.8C16.8 13.6 16.7 13.4 16.5 13.3L14.3 12.3C14.1 12.2 13.9 12.2 13.7 12.5L12.8 13.6C12.7 13.8 12.4 13.8 12.2 13.7C11.4 13.3 10.1 12.2 9.4 10.9C9.3 10.7 9.3 10.5 9.5 10.3L10.2 9.4C10.3 9.2 10.4 9 10.3 8.8L9.2 8.7Z" />
        </svg>
      );
    case 'mail':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect {...common} x="4.5" y="6.5" width="15" height="11" rx="1.8" />
          <path {...common} d="M5.5 8L12 12.8L18.5 8" />
        </svg>
      );
    case 'phone':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M7.5 5.5L9.7 5C10.2 4.9 10.7 5.1 10.9 5.6L11.9 8C12.1 8.5 12 9.1 11.6 9.4L10.3 10.4C11.1 12.1 12.4 13.4 14.1 14.2L15.1 12.9C15.4 12.5 16 12.4 16.5 12.6L18.9 13.6C19.4 13.8 19.6 14.3 19.5 14.8L19 17C18.9 17.6 18.4 18 17.8 18C10.6 18 6 13.4 6 6.2C6 5.6 6.4 5.1 7 5L7.5 5.5Z" />
        </svg>
      );
    case 'location':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M12 20C15.5 15.8 17.2 12.8 17.2 10.2C17.2 7.3 14.9 5 12 5C9.1 5 6.8 7.3 6.8 10.2C6.8 12.8 8.5 15.8 12 20Z" />
          <circle {...common} cx="12" cy="10.2" r="1.8" />
        </svg>
      );
  }
}

function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    );

    for (const element of elements) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="site-shell">
      <section className="hero-shell" id="home">
        <div className="container">
          <header className="topbar reveal is-visible">
            <a href="#home" className="brand" aria-label={`${leagueShortName} - ${leagueName}`}>
              <img src="/assets/logo.svg" alt="" className="brand-symbol" />
              <div className="brand-text">
                <span className="brand-name">{leagueShortName}</span>
                <span className="brand-title">{leagueName}</span>
                <span className="brand-subtitle">Faculdade Soberana</span>
              </div>
            </a>

            <nav className="nav-menu" aria-label="Navegação principal">
              <a href="#home" className="active">Home</a>
              <a href="#sobre">Sobre nós</a>
              <a href="#atividades">Atividades</a>
              <a href="#tecnologia">Diferenciais</a>
              <a href="#vivencias">Vivências</a>
              <a href="#contato">Contato</a>
            </nav>

            <a href="#contato" className="button button-primary topbar-cta">
              <span className="button-icon"><Icon kind="calendar" /></span>
              Entrar em contato
            </a>
          </header>

          <div className="hero-grid">
            <div className="hero-copy reveal is-visible">
              <span className="eyebrow">Especialistas em formação</span>
              <p className="hero-mini-title">{leagueShortName}</p>
              <h1>ENDODONTIA</h1>

              <div className="hero-divider" aria-hidden="true">
                <span />
                <img src="/assets/logo.svg" alt="" />
                <span />
              </div>

              <p className="hero-description">
                {leagueName} com foco em prática, pesquisa, tecnologia e desenvolvimento
                humano para uma formação forte, atual e visualmente marcante.
              </p>

              <div className="hero-actions">
                <a href="#contato" className="button button-primary">
                  <span className="button-icon"><Icon kind="calendar" /></span>
                  Falar com a liga
                </a>
                <a href="#contato" className="button button-secondary">
                  <span className="button-icon"><Icon kind="whatsapp" /></span>
                  Chamar no WhatsApp
                </a>
              </div>

              <div className="hero-highlights">
                <span>Aulas e discussões clínicas</span>
                <span>Microscopia e tecnologia aplicada</span>
                <span>Pesquisa, extensão e networking</span>
              </div>
            </div>

            <div className="hero-visual reveal is-visible">
              <div className="hero-visual-frame">
                <div className="hero-orbit hero-orbit-one" />
                <div className="hero-orbit hero-orbit-two" />
                <div className="hero-photo-layer">
                  <img src={heroPhoto} alt="Integrante da LEFS em retrato de destaque" />
                </div>

                <div className="hero-visual-overlay">
                  <div className="visual-chip">Membro em destaque</div>
                  <div className="visual-chip visual-chip-alt">Presença e identidade</div>
                </div>

                <div className="hero-visual-logo">
                  <img src="/assets/logo.svg" alt="" />
                  <div>
                    <strong>{leagueShortName}</strong>
                    <span>Formação, presença e identidade visual com rosto real da liga.</span>
                  </div>
                </div>

                <div className="hero-metrics">
                  <article>
                    <strong>05</strong>
                    <span>frentes de atuação</span>
                  </article>
                  <article>
                    <strong>360</strong>
                    <span>graus de experiência acadêmica</span>
                  </article>
                  <article>
                    <strong>01</strong>
                    <span>liga conectando teoria e prática</span>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="showcase-section reveal" id="atividades">
        <div className="container">
          <p className="section-kicker">Nossas frentes</p>
          <h2 className="section-title">Atividades que elevam a formação</h2>

          <div className="activity-grid">
            {activities.map((item, index) => (
              <article
                key={item.title}
                className="activity-card reveal"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="card-icon">
                  <Icon kind={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-band reveal" id="tecnologia">
        <div className="container dark-band-grid">
          <div className="about-panel reveal" id="sobre">
            <p className="section-kicker">Sobre nós</p>
            <h2>Uma liga feita para aprofundar, praticar e conectar.</h2>
            <p>
              A {leagueShortName} une estudantes interessados em Endodontia em uma
              experiência mais sofisticada, organizada e participativa. O objetivo
              é ir além da sala de aula com vivências que reforçam ciência, ética e
              presença profissional.
            </p>
            <p>
              O visual foi refinado para conversar com esse posicionamento: forte
              no impacto, claro na leitura e alinhado a uma identidade premium em
              azul-marinho, dourado e branco.
            </p>
            <a href="#contato" className="button button-ghost">Saiba mais</a>
          </div>

          <div className="differential-panel reveal">
            <p className="section-kicker section-kicker--center">Nossos diferenciais</p>

            <div className="differential-grid">
              {differentials.map((item, index) => (
                <article
                  key={item.title}
                  className="differential-item reveal"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="card-icon card-icon-small">
                    <Icon kind={item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section reveal" id="vivencias">
        <div className="container gallery-layout">
          <div className="gallery-copy reveal">
            <p className="section-kicker">Vivências</p>
            <h2 className="section-title section-title-left">Rotina acadêmica com cara de referência</h2>
            <p>
              A proposta aqui é traduzir o mesmo clima premium da imagem base em um
              contexto de liga: presença visual forte, blocos claros e espaço para
              futuros registros reais de eventos, aulas e atividades práticas.
            </p>
          </div>

          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <article
                key={item.title}
                className={`gallery-card gallery-card--${item.tone} reveal`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="gallery-art">
                  <span className="gallery-eyebrow">{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                </div>
                <div className="gallery-ribbon">
                  <span>{item.captionA}</span>
                  <span>{item.captionB}</span>
                </div>
              </article>
            ))}

            <article className="gallery-photo-card reveal" style={{ transitionDelay: '220ms' }}>
              <div className="gallery-photo-media">
                <img src={practicePhoto} alt="Modelos dentários usados em prática de Endodontia" />
              </div>
              <div className="gallery-photo-copy">
                <span className="gallery-eyebrow gallery-eyebrow-dark">Laboratório</span>
                <h3>Prática real com foco em detalhe técnico</h3>
                <p>
                  A segunda imagem entrou como registro aplicado da área, reforçando
                  o lado manual, clínico e minucioso da Endodontia.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <footer className="site-footer reveal" id="contato">
        <div className="container footer-grid">
          <div className="footer-brand reveal">
            <div className="brand footer-brand-mark">
              <img src="/assets/logo.svg" alt="" className="brand-symbol" />
              <div className="brand-text">
                <span className="brand-name">{leagueShortName}</span>
                <span className="brand-title">{leagueName}</span>
                <span className="brand-subtitle">Faculdade Soberana</span>
              </div>
            </div>
            <p>
              Excelência no que fazemos, cuidado com a formação e identidade forte
              para o crescimento da liga.
            </p>
          </div>

          <div className="footer-column reveal" style={{ transitionDelay: '80ms' }}>
            <h3>Entre em contato</h3>
            <a href="tel:+5511999999999" className="footer-link">
              <span className="footer-link-icon"><Icon kind="phone" /></span>
              (11) 99999-9999
            </a>
            <a href="mailto:lefs.endodontia@soberana.edu.br" className="footer-link">
              <span className="footer-link-icon"><Icon kind="mail" /></span>
              lefs.endodontia@soberana.edu.br
            </a>
            <a href="#contato" className="footer-link">
              <span className="footer-link-icon"><Icon kind="location" /></span>
              Rua das Ligas, 123 - Centro Acadêmico
            </a>
          </div>

          <div className="footer-column reveal" style={{ transitionDelay: '160ms' }}>
            <h3>Horário de encontros</h3>
            <p>Segunda a Sexta</p>
            <p>08h às 18h</p>
            <p>Sábado</p>
            <p>08h às 12h</p>
          </div>

          <div className="footer-column reveal" style={{ transitionDelay: '240ms' }}>
            <h3>Siga-nos</h3>
            <div className="social-row">
              <a href="#contato" className="social-button" aria-label="Instagram">
                <Icon kind="instagram" />
              </a>
              <a href="#contato" className="social-button" aria-label="Facebook">
                <Icon kind="facebook" />
              </a>
              <a href="#contato" className="social-button" aria-label="WhatsApp">
                <Icon kind="whatsapp" />
              </a>
            </div>
            <a href="#contato" className="button button-secondary footer-whatsapp">
              <span className="button-icon"><Icon kind="whatsapp" /></span>
              Fale no WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
