function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand">
          <img src="/assets/logo.svg" alt="LAE logo" className="brand-symbol" />
          <div className="brand-text">
            <span className="brand-name logo">ENDO EXCELLENCE</span>
            <span className="brand-subtitle texto-menor">ENDODONTIA</span>
          </div>
        </div>
        <nav className="nav-menu menu">
          <a href="#home" className="active">Home</a>
          <a href="#sobre">Sobre nós</a>
          <a href="#tratamentos">Tratamentos</a>
          <a href="#tecnologia">Tecnologia</a>
          <a href="#antes-depois">Antes e depois</a>
          <a href="#contato">Contato</a>
        </nav>
        <button className="cta-button">Agendar Consulta</button>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <span className="eyebrow texto-menor">ESPECIALISTAS EM</span>
          <h1 className="titulo-principal">ENDODONTIA</h1>
          <p>
            Excelência no tratamento de canal com tecnologia e cuidado humanizado.
          </p>
          <div className="hero-actions">
            <button className="primary-button">Agendar Consulta</button>
            <button className="secondary-button">Falar no WhatsApp</button>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-card">
            <p className="hero-card-label">Imagem de destaque</p>
            <p className="photo-hint">Substitua /assets/hero-bg.jpg pela foto real.</p>
          </div>
        </div>
      </section>

      <section className="benefits" id="sobre">
        <h2>Por que fazer parte da LAE?</h2>
        <div className="benefit-grid">
          <article>
            <span>📘</span>
            <h3>Aprofundamento acadêmico</h3>
            <p>Discussões, estudos e pesquisas para a formação além da sala de aula.</p>
          </article>
          <article>
            <span>🛠️</span>
            <h3>Prática e experiência</h3>
            <p>Atividades práticas que fortalecem a jornada profissional.</p>
          </article>
          <article>
            <span>🤝</span>
            <h3>Networking</h3>
            <p>Conexão com professores, alunos e profissionais da área.</p>
          </article>
          <article>
            <span>🔬</span>
            <h3>Pesquisa e inovação</h3>
            <p>Incentivo à produção científica e espírito investigativo.</p>
          </article>
          <article>
            <span>🌍</span>
            <h3>Impacto na comunidade</h3>
            <p>Ações que transformam vidas e geram impacto social.</p>
          </article>
        </div>
      </section>

      <section className="about" id="atividades">
        <div className="about-copy">
          <p className="section-label">Sobre nós</p>
          <h2>União que fortalece</h2>
          <p>
            A LAE reúne estudantes apaixonados por Endodontia, comprometidos com o
            desenvolvimento científico, ético e humano.
          </p>
          <button className="ghost-button">Conheça nossa história</button>
        </div>
        <div className="about-visual">
          <div className="logo-badge">
            <div className="logo-symbol">🦷</div>
            <p>LAE</p>
            <span>Liga Acadêmica de Endodontia</span>
          </div>
        </div>
      </section>

      <section className="activities" id="contato">
        <p className="section-label">Nossas atividades</p>
        <h2>Atividades planejadas</h2>
        <div className="activity-grid">
          <article>
            <h3>Aulas e discussões</h3>
          </article>
          <article>
            <h3>Workshops e treinamentos</h3>
          </article>
          <article>
            <h3>Projetos de pesquisa</h3>
          </article>
          <article>
            <h3>Ações de extensão</h3>
          </article>
          <article>
            <h3>Congressos e palestras</h3>
          </article>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <h3>Entre em contato</h3>
          <p>(11) 99999-9999</p>
          <p>lae.endodontia@faculdade.edu.br</p>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#atividades">Atividades</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
