// Traducciones (español / English / norsk) y menú de navegación en móvil.
(function () {
  var I18N = {
    en: {
      'title': 'Bastián Olea Díaz — Portfolio',
      'description': 'Portfolio of Bastián Olea Díaz: Data Science, data analysis and visualization.',
      'menu.open': 'Open menu',
      'menu.close': 'Close menu',
      'aria.langs': 'Languages',
      'aria.main': 'Main',
      'aria.linkedin': 'Bastián Olea Díaz on LinkedIn',
      'aria.github': 'Bastián Olea Díaz on GitHub',
      'nav.about': 'About me',
      'nav.projects': 'Personal Projects',
      'nav.skills': 'Skills',
      'nav.contact': 'Contact',
      'proj.trade': 'Chile’s Foreign Trade',
      'hello': 'Hi, I’m ',
      'p1': 'I am a Computer and Information Engineer who chose to focus my career on the world of data. I am passionate about Data Science and analytics, especially the possibility of turning data into knowledge, identifying patterns and uncovering relevant information. To do so, I rely on tools such as statistics, exploratory analysis, machine learning and data visualization.',
      'p2': 'In this portfolio you will find a selection of projects I have developed on my own to put my skills into practice and expand my technical experience. I invite you to explore them and get to know me a little better. I hope you enjoy them!',
      'tip.series.t': 'Time series',
      'tip.series.d': 'Time series are used to analyze how a variable evolves over time and to forecast what comes next.',
      'tip.graph.t': 'Graph',
      'tip.graph.d': 'Graphs are used to represent relationships between entities and uncover communities or key nodes.',
      'tip.net.t': 'Neural network',
      'tip.net.d': 'Neural networks are used to learn complex patterns in data and make predictions.',
      'tip.reg.t': 'Regression',
      'tip.reg.d': 'Regression is used to model the relationship between variables and estimate trends.',
      'tip.donut.t': 'Donut chart',
      'tip.donut.d': 'Donut charts are used to show how a total is split across categories.',
      'tip.hist.t': 'Histogram',
      'tip.hist.d': 'Histograms are used to see how the values of a variable are distributed.',
      'tip.clust.t': 'Clustering',
      'tip.clust.d': 'Clustering is used to group similar data and discover segments without predefined labels.',
      'title.skills': 'Skills — Bastián Olea Díaz',
      'description.skills': 'Skills of Bastián Olea Díaz: languages, data platforms, analytics, machine learning, AI and visualization.',
      'hb.back': 'Home',
      'hb.title': 'Skills',
      'hb.c1': 'Languages & Tools',
      'hb.c2': 'Data Platforms',
      'hb.c3': 'Analytics & Data Science',
      'hb.c4': 'Machine Learning',
      'hb.c5': 'AI & Cloud',
      'hb.c6': 'Visualization',
      'hb.c7': 'Data Quality & Governance',
      'hb.c8': 'Languages',
      'hb.a1': 'Exploratory and statistical analysis',
      'hb.a2': 'Hypothesis testing',
      'hb.a3': 'Causal inference (difference-in-differences)',
      'hb.a4': 'A/B experiment design and analysis',
      'hb.a5': 'Anomaly detection',
      'hb.a6': 'Drift monitoring',
      'hb.a7': 'Graph analytics (communities, centrality, similarity, embeddings)',
      'hb.m1': 'Supervised learning',
      'hb.m1d': '— linear and logistic regression, decision trees, Random Forest, gradient boosting, SVM, KNN',
      'hb.m2': 'Unsupervised',
      'hb.m3': 'Time series forecasting',
      'hb.m4': 'Temporal validation and model evaluation',
      'hb.m5': 'Deep learning (TensorFlow)',
      'hb.m6': 'NLP',
      'hb.i2': 'Generative AI and RAG systems',
      'hb.i4': 'Model deployment on Cloud Run',
      'hb.v2': 'Dashboards and KPIs for business teams.',
      'hb.q1': 'Data profiling',
      'hb.q2': 'Completeness, consistency and volume validation',
      'hb.q3': 'Data asset inventory and documentation',
      'hb.l1': 'Spanish',
      'hb.l1d': '— native',
      'hb.l2': 'English',
      'hb.l2d': '— advanced, written and spoken',
      'hb.l3': 'Academic year completed in Miami, USA.'
    },
    no: {
      'title': 'Bastián Olea Díaz — Portefølje',
      'description': 'Porteføljen til Bastián Olea Díaz: Data Science, dataanalyse og visualisering.',
      'menu.open': 'Åpne meny',
      'menu.close': 'Lukk meny',
      'aria.langs': 'Språk',
      'aria.main': 'Hovedmeny',
      'aria.linkedin': 'Bastián Olea Díaz på LinkedIn',
      'aria.github': 'Bastián Olea Díaz på GitHub',
      'nav.about': 'Om meg',
      'nav.projects': 'Personlige prosjekter',
      'nav.skills': 'Ferdigheter',
      'nav.contact': 'Kontakt',
      'proj.trade': 'Chiles utenrikshandel',
      'hello': 'Hei, jeg er ',
      'p1': 'Jeg er ingeniør i datateknikk og informatikk, og jeg har valgt å rette karrieren min mot dataenes verden. Jeg brenner for Data Science og analyse, særlig muligheten til å gjøre data om til kunnskap, finne mønstre og avdekke relevant informasjon. For å få til dette bruker jeg verktøy som statistikk, utforskende analyse, maskinlæring og datavisualisering.',
      'p2': 'I denne porteføljen finner du et utvalg prosjekter jeg har utviklet på egen hånd for å sette ferdighetene mine ut i praksis og utvide min tekniske erfaring. Jeg inviterer deg til å utforske dem og bli litt bedre kjent med meg. Jeg håper du liker dem!',
      'tip.series.t': 'Tidsserie',
      'tip.series.d': 'Tidsserier brukes til å analysere hvordan en variabel utvikler seg over tid og til å lage prognoser.',
      'tip.graph.t': 'Graf',
      'tip.graph.d': 'Grafer brukes til å vise relasjoner mellom enheter og avdekke fellesskap eller sentrale noder.',
      'tip.net.t': 'Nevralt nettverk',
      'tip.net.d': 'Nevrale nettverk brukes til å lære komplekse mønstre i data og gjøre prediksjoner.',
      'tip.reg.t': 'Regresjon',
      'tip.reg.d': 'Regresjon brukes til å modellere forholdet mellom variabler og anslå trender.',
      'tip.donut.t': 'Smultringdiagram',
      'tip.donut.d': 'Smultringdiagrammer brukes til å vise hvordan en helhet fordeler seg på kategorier.',
      'tip.hist.t': 'Histogram',
      'tip.hist.d': 'Histogrammer brukes til å se hvordan verdiene til en variabel er fordelt.',
      'tip.clust.t': 'Klyngeanalyse',
      'tip.clust.d': 'Klyngeanalyse brukes til å gruppere like data og oppdage segmenter uten forhåndsdefinerte etiketter.',
      'title.skills': 'Ferdigheter — Bastián Olea Díaz',
      'description.skills': 'Ferdighetene til Bastián Olea Díaz: språk, dataplattformer, analyse, maskinlæring, KI og visualisering.',
      'hb.back': 'Hjem',
      'hb.title': 'Ferdigheter',
      'hb.c1': 'Språk og verktøy',
      'hb.c2': 'Dataplattformer',
      'hb.c3': 'Analyse og datavitenskap',
      'hb.c4': 'Maskinlæring',
      'hb.c5': 'KI og sky',
      'hb.c6': 'Visualisering',
      'hb.c7': 'Datakvalitet og datastyring',
      'hb.c8': 'Språk',
      'hb.a1': 'Utforskende og statistisk analyse',
      'hb.a2': 'Hypotesetesting',
      'hb.a3': 'Kausal inferens (differanse-i-differanser)',
      'hb.a4': 'Design og analyse av A/B-eksperimenter',
      'hb.a5': 'Avviksdeteksjon',
      'hb.a6': 'Overvåking av drift',
      'hb.a7': 'Grafanalyse (fellesskap, sentralitet, likhet, embeddings)',
      'hb.m1': 'Veiledet læring',
      'hb.m1d': '— lineær og logistisk regresjon, beslutningstrær, Random Forest, gradient boosting, SVM, KNN',
      'hb.m2': 'Ikke-veiledet',
      'hb.m3': 'Prognoser for tidsserier',
      'hb.m4': 'Tidsbasert validering og modellevaluering',
      'hb.m5': 'Dyp læring (TensorFlow)',
      'hb.m6': 'NLP',
      'hb.i2': 'Generativ KI og RAG-systemer',
      'hb.i4': 'Utrulling av modeller på Cloud Run',
      'hb.v2': 'Dashbord og nøkkeltall for forretningsteam.',
      'hb.q1': 'Dataprofilering',
      'hb.q2': 'Validering av kompletthet, konsistens og volum',
      'hb.q3': 'Kartlegging og dokumentasjon av dataressurser',
      'hb.l1': 'Spansk',
      'hb.l1d': '— morsmål',
      'hb.l2': 'Engelsk',
      'hb.l2d': '— avansert, skriftlig og muntlig',
      'hb.l3': 'Ett studieår gjennomført i Miami, USA.'
    }
  };

  var root = document.documentElement;
  var textNodes = document.querySelectorAll('[data-i18n]');
  var ariaNodes = document.querySelectorAll('[data-i18n-aria]');
  var langLinks = document.querySelectorAll('.lang .cl-a[lang]');
  var metaDesc = document.querySelector('meta[name="description"]');

  // El español sale del propio HTML, así el texto original vive en un solo lugar.
  var page = root.getAttribute('data-page');
  var TITLE = page ? 'title.' + page : 'title';
  var DESC = page ? 'description.' + page : 'description';
  var ES = {
    'menu.open': 'Abrir menú',
    'menu.close': 'Cerrar menú'
  };
  ES[TITLE] = document.title;
  ES[DESC] = metaDesc ? metaDesc.getAttribute('content') : '';
  textNodes.forEach(function (n) { ES[n.getAttribute('data-i18n')] = n.textContent; });
  ariaNodes.forEach(function (n) { ES[n.getAttribute('data-i18n-aria')] = n.getAttribute('aria-label'); });

  var current = 'es';
  function dict(code) {
    return code === 'es' ? ES : Object.assign({}, ES, I18N[code]);
  }
  function t(key) { return dict(current)[key]; }

  function apply(code) {
    var d = dict(code);
    textNodes.forEach(function (n) {
      var v = d[n.getAttribute('data-i18n')];
      if (v != null) n.textContent = v;
    });
    ariaNodes.forEach(function (n) {
      var v = d[n.getAttribute('data-i18n-aria')];
      if (v != null) n.setAttribute('aria-label', v);
    });
    document.title = d[TITLE];
    if (metaDesc) metaDesc.setAttribute('content', d[DESC]);
    root.setAttribute('lang', code);
    langLinks.forEach(function (a) {
      if (a.getAttribute('lang') === code) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
    current = code;
    syncMenuLabel();
  }

  var fading = null;
  function setLang(code, animate) {
    if (!I18N[code] && code !== 'es') return;
    if (!animate) { apply(code); return; }
    root.classList.add('i18n-out');
    clearTimeout(fading);
    fading = setTimeout(function () {
      apply(code);
      root.classList.remove('i18n-out');
    }, 320);
  }

  function store(code) {
    try { localStorage.setItem('lang', code); } catch (e) {}
  }
  function stored() {
    try { return localStorage.getItem('lang'); } catch (e) { return null; }
  }

  langLinks.forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var code = a.getAttribute('lang');
      if (code === current) return;
      setLang(code, true);
      store(code);
      if (history.replaceState) {
        history.replaceState(null, '', code === 'es' ? location.pathname + location.search : '#' + code);
      }
    });
  });

  // ---- Menú móvil ----
  var btn = document.querySelector('.menu-btn');
  var panel = document.getElementById('menu-movil');
  var iconOpen = btn ? btn.querySelector('[data-icon="open"]') : null;
  var iconClose = btn ? btn.querySelector('[data-icon="close"]') : null;

  function syncMenuLabel() {
    if (!btn || !panel) return;
    btn.setAttribute('aria-label', panel.hidden ? t('menu.open') : t('menu.close'));
  }

  function setOpen(open) {
    panel.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
    iconOpen.hidden = open;
    iconClose.hidden = !open;
    syncMenuLabel();
  }

  if (btn && panel) {
    btn.addEventListener('click', function () {
      setOpen(panel.hidden);
    });

    panel.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });

    document.addEventListener('click', function (e) {
      if (!panel.hidden && !panel.contains(e.target) && !btn.contains(e.target)) setOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) {
        setOpen(false);
        btn.focus();
      }
    });

    var wide = window.matchMedia('(min-width: 1025px)');
    wide.addEventListener('change', function (e) {
      if (e.matches) setOpen(false);
    });
  }

  // Idioma inicial: el de la URL (#en, #no), luego el guardado, si no español.
  var fromHash = location.hash.replace('#', '');
  var initial = (fromHash === 'en' || fromHash === 'no' || fromHash === 'es') ? fromHash : stored();
  if (initial && initial !== 'es' && I18N[initial]) apply(initial);
})();
