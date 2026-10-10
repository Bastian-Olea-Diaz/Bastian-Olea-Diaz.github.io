// Pronóstico en vivo: lee resumen.json, que el pipeline de pronostico_comercio_chile publica cada mes en
// GitHub Pages bajo este mismo dominio, y dibuja el indicador de la portada (#en-vivo-pill) y el capítulo
// "En vivo" de la página del proyecto (#en-vivo-app). Los textos fijos se traducen con main.js; los que
// dependen de los datos se arman aquí y se vuelven a dibujar cuando cambia el idioma.
(function () {
  var pill = document.getElementById('en-vivo-pill');
  var app = document.getElementById('en-vivo-app');
  if (!pill && !app) return;

  var URL_DATA = '/pronostico_comercio_chile/resumen.json';
  var SCHEMA = 1;
  var LOCALES = { es: 'es-CL', en: 'en-US', no: 'nb-NO' };
  var STR = {
    es: {
      live: 'En vivo',
      dataUntil: 'Datos hasta {m}',
      nextUpdate: 'Próxima actualización: fines de {m}',
      status: { normal: 'Funcionando con normalidad', aviso: 'Funcionando, con cambios en los datos', alerta: 'En revisión' },
      flows: { exportaciones: 'Exportaciones', importaciones: 'Importaciones' },
      flowsLabel: 'Flujo de comercio',
      forecastFor: 'Pronóstico para {m}',
      usdM: 'US$ {v} millones',
      usdMShort: 'US$ {v} M',
      band: 'Rango habitual: US$ {a} a {b} millones',
      observed: 'Observado',
      forecast: 'Pronóstico',
      bandLabel: 'Error típico',
      chartTitle: '{f}: últimos 24 meses y pronóstico a 3 meses, en millones de dólares',
      chartSummary: '{f} observadas hasta {m1} y pronóstico para {m2}, {m3} y {m4}.',
      trackTitle: '¿Acertó el modelo?',
      track: 'El modelo le ganó al método simple en {k} de {n} meses evaluados en vivo.',
      trackEmpty: 'El historial en vivo comienza con el dato de {m}, que Aduanas publicará a fines de {p}. Cada mes se agregará aquí lo que el modelo pronosticó frente a lo que realmente pasó.',
      backtest: 'En pruebas con datos históricos, el error promedio por producto y país fue {a}, frente a {b} del método simple (repetir el promedio de los últimos 3 meses).',
      trackCols: ['Mes', 'Pronóstico', 'Observado', 'Error del modelo', 'Error del método simple'],
      better: 'Mejor que el método simple',
      worse: 'Peor que el método simple',
      topTitle: 'Lo que se espera el próximo mes',
      topCols: ['Producto', 'Pronóstico', 'Frente al promedio reciente'],
      tableToggle: 'Ver los datos del gráfico',
      tableCols: ['Mes', 'Tipo', 'Valor (US$ millones)'],
      links: { tablero: 'Tablero interactivo', api: 'API de pronósticos', codigo: 'Código del sistema' },
      error: 'No se pudieron cargar los datos en vivo en este momento. Puedes verlos directamente en el repositorio del sistema.',
      pill: 'Pronóstico de exportaciones para {m}: US$ {v} millones',
      pillAria: 'Ver el pronóstico en vivo en la página del proyecto'
    },
    en: {
      live: 'Live',
      dataUntil: 'Data through {m}',
      nextUpdate: 'Next update: late {m}',
      status: { normal: 'Running normally', aviso: 'Running, with changes in the data', alerta: 'Under review' },
      flows: { exportaciones: 'Exports', importaciones: 'Imports' },
      flowsLabel: 'Trade flow',
      forecastFor: 'Forecast for {m}',
      usdM: 'US$ {v} million',
      usdMShort: 'US$ {v} M',
      band: 'Usual range: US$ {a} to {b} million',
      observed: 'Observed',
      forecast: 'Forecast',
      bandLabel: 'Typical error',
      chartTitle: '{f}: last 24 months and 3-month forecast, in millions of dollars',
      chartSummary: '{f} observed through {m1} and forecast for {m2}, {m3} and {m4}.',
      trackTitle: 'Did the model get it right?',
      track: 'The model beat the simple method in {k} of {n} months evaluated live.',
      trackEmpty: 'The live track record starts with the {m} data, which Customs will publish in late {p}. Each month, what the model forecast will be added here next to what actually happened.',
      backtest: 'In tests on historical data, the average error per product and country was {a}, versus {b} for the simple method (repeating the average of the last 3 months).',
      trackCols: ['Month', 'Forecast', 'Observed', 'Model error', 'Simple method error'],
      better: 'Better than the simple method',
      worse: 'Worse than the simple method',
      topTitle: 'What to expect next month',
      topCols: ['Product', 'Forecast', 'Versus recent average'],
      tableToggle: 'Show the chart data',
      tableCols: ['Month', 'Type', 'Value (US$ million)'],
      links: { tablero: 'Interactive dashboard', api: 'Forecast API', codigo: 'System source code' },
      error: 'The live data could not be loaded right now. You can see it directly in the system repository.',
      pill: 'Export forecast for {m}: US$ {v} million',
      pillAria: 'See the live forecast on the project page'
    },
    no: {
      live: 'Direkte',
      dataUntil: 'Data til og med {m}',
      nextUpdate: 'Neste oppdatering: slutten av {m}',
      status: { normal: 'Fungerer normalt', aviso: 'Fungerer, med endringer i dataene', alerta: 'Under gjennomgang' },
      flows: { exportaciones: 'Eksport', importaciones: 'Import' },
      flowsLabel: 'Handelsstrøm',
      forecastFor: 'Prognose for {m}',
      usdM: '{v} millioner US$',
      usdMShort: '{v} mill. US$',
      band: 'Vanlig spenn: {a} til {b} millioner US$',
      observed: 'Observert',
      forecast: 'Prognose',
      bandLabel: 'Typisk feil',
      chartTitle: '{f}: siste 24 måneder og prognose for 3 måneder, i millioner dollar',
      chartSummary: '{f} observert til og med {m1} og prognose for {m2}, {m3} og {m4}.',
      trackTitle: 'Traff modellen?',
      track: 'Modellen slo den enkle metoden i {k} av {n} måneder evaluert direkte.',
      trackEmpty: 'Den direkte historikken starter med dataene for {m}, som tollvesenet publiserer i slutten av {p}. Hver måned legges det til her hva modellen spådde, sammen med hva som faktisk skjedde.',
      backtest: 'I tester på historiske data var gjennomsnittlig feil per produkt og land {a}, mot {b} for den enkle metoden (å gjenta gjennomsnittet av de siste 3 månedene).',
      trackCols: ['Måned', 'Prognose', 'Observert', 'Modellens feil', 'Den enkle metodens feil'],
      better: 'Bedre enn den enkle metoden',
      worse: 'Dårligere enn den enkle metoden',
      topTitle: 'Hva som ventes neste måned',
      topCols: ['Produkt', 'Prognose', 'Mot nylig gjennomsnitt'],
      tableToggle: 'Vis dataene i grafen',
      tableCols: ['Måned', 'Type', 'Verdi (millioner US$)'],
      links: { tablero: 'Interaktivt dashbord', api: 'Prognose-API', codigo: 'Kildekoden til systemet' },
      error: 'De direkte dataene kunne ikke lastes inn akkurat nå. Du kan se dem direkte i systemets kodelager.',
      pill: 'Eksportprognose for {m}: {v} millioner US$',
      pillAria: 'Se den direkte prognosen på prosjektsiden'
    }
  };

  var root = document.documentElement;
  var data = null;
  var flow = 'exportaciones';

  // ------------------------------------------------------------------ utilidades
  function lang() {
    var l = root.getAttribute('lang');
    return STR[l] ? l : 'es';
  }
  function s() { return STR[lang()]; }
  function fill(text, vars) {
    return text.replace(/\{(\w+)\}/g, function (_, k) { return vars[k] != null ? vars[k] : ''; });
  }
  function num(v, digits) {
    return new Intl.NumberFormat(LOCALES[lang()], { maximumFractionDigits: digits || 0, minimumFractionDigits: digits || 0 }).format(v);
  }
  function pct(v, signed) {
    return new Intl.NumberFormat(LOCALES[lang()], { style: 'percent', maximumFractionDigits: 1, minimumFractionDigits: 1,
      signDisplay: signed ? 'exceptZero' : 'auto' }).format(v);
  }
  function millions(v) { return num(v / 1e6); }
  function monthDate(ym) {
    var p = ym.split('-');
    return new Date(Date.UTC(+p[0], +p[1] - 1, 1));
  }
  function month(ym, opts) {
    return new Intl.DateTimeFormat(LOCALES[lang()], Object.assign({ month: 'long', year: 'numeric', timeZone: 'UTC' }, opts || {}))
      .format(monthDate(ym));
  }
  function cap(text) { return text.charAt(0).toUpperCase() + text.slice(1); }
  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    for (var k in attrs || {}) {
      if (k === 'text') n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
    (children || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  var SVG = 'http://www.w3.org/2000/svg';
  function svg(tag, attrs) {
    var n = document.createElementNS(SVG, tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }

  // ------------------------------------------------------------------ portada
  function renderPill() {
    if (!pill || !data) return;
    var f = data.flujos.exportaciones.pronostico[0];
    pill.querySelector('.live-k').textContent = s().live;
    pill.querySelector('.live-t').textContent = fill(s().pill, { m: month(f.mes), v: millions(f.valor) });
    pill.setAttribute('aria-label', s().pillAria + ': ' + pill.querySelector('.live-t').textContent);
    pill.setAttribute('data-estado', data.estado);
    pill.hidden = false;
  }

  // ------------------------------------------------------------------ capítulo
  function chart(f, width) {
    var hist = f.historia, fc = f.pronostico, err = f.error_tipico || 0;
    // se dibuja al ancho real: los textos conservan su tamaño en pantallas chicas
    var W = Math.max(280, Math.round(width)), H = W < 520 ? 230 : 300, L = 50, R = 12, T = 14, B = 30;
    var months = hist.map(function (d) { return d.mes; }).concat(fc.map(function (d) { return d.mes; }));
    var values = hist.map(function (d) { return d.valor; }).concat(fc.map(function (d) { return d.valor * (1 + err); }),
      fc.map(function (d) { return d.valor * (1 - err); }));
    var lo = Math.min.apply(null, values), hi = Math.max.apply(null, values), pad = (hi - lo) * 0.12;
    lo = Math.max(0, lo - pad); hi = hi + pad;
    function x(i) { return L + i * (W - L - R) / (months.length - 1); }
    function y(v) { return T + (hi - v) * (H - T - B) / (hi - lo); }

    var box = el('div', { 'class': 'lv-chart' });
    var g = svg('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img', focusable: 'false' });
    var n = hist.length;
    g.setAttribute('aria-label', fill(s().chartSummary, { f: s().flows[flow], m1: month(hist[n - 1].mes),
      m2: month(fc[0].mes), m3: month(fc[1].mes), m4: month(fc[2].mes) }));

    // grilla y eje Y en millones (4 líneas recesivas)
    for (var k = 0; k <= 3; k++) {
      var v = lo + (hi - lo) * k / 3, yy = y(v);
      g.appendChild(svg('line', { x1: L, x2: W - R, y1: yy, y2: yy, 'class': 'lv-grid' }));
      var t = svg('text', { x: L - 8, y: yy + 4, 'class': 'lv-axis', 'text-anchor': 'end' });
      t.textContent = num(v / 1e6);
      g.appendChild(t);
    }
    // eje X: el último mes observado y uno cada 6 meses hacia atrás (los meses pronosticados ya tienen sus puntos)
    var every = W < 520 ? 12 : 6;
    months.forEach(function (m, i) {
      if (i >= n || (n - 1 - i) % every !== 0) return;
      var t = svg('text', { x: x(i), y: H - 10, 'class': 'lv-axis', 'text-anchor': 'middle' });
      t.textContent = month(m, { month: 'short', year: '2-digit' });
      g.appendChild(t);
    });

    // banda de error típico del pronóstico, anclada en el último valor observado
    if (err) {
      var up = [[x(n - 1), y(hist[n - 1].valor)]], down = [];
      fc.forEach(function (d, i) { up.push([x(n + i), y(d.valor * (1 + err))]); down.unshift([x(n + i), y(d.valor * (1 - err))]); });
      var pts = up.concat(down, [[x(n - 1), y(hist[n - 1].valor)]]).map(function (p) { return p.join(','); }).join(' ');
      g.appendChild(svg('polygon', { points: pts, 'class': 'lv-band' }));
    }
    g.appendChild(svg('polyline', { points: hist.map(function (d, i) { return x(i) + ',' + y(d.valor); }).join(' '), 'class': 'lv-obs' }));
    var fpts = [[x(n - 1), y(hist[n - 1].valor)]].concat(fc.map(function (d, i) { return [x(n + i), y(d.valor)]; }));
    g.appendChild(svg('polyline', { points: fpts.map(function (p) { return p.join(','); }).join(' '), 'class': 'lv-fc' }));
    fc.forEach(function (d, i) { g.appendChild(svg('circle', { cx: x(n + i), cy: y(d.valor), r: 4.5, 'class': 'lv-dot' })); });
    g.appendChild(svg('line', { x1: x(n - 1), x2: x(n - 1), y1: T, y2: H - B, 'class': 'lv-now' }));

    // tooltip: el mes más cercano al puntero
    var cross = svg('line', { y1: T, y2: H - B, 'class': 'lv-cross' });
    cross.style.display = 'none';
    g.appendChild(cross);
    var tip = el('div', { 'class': 'lv-tip', 'aria-hidden': 'true' });
    tip.hidden = true;
    g.addEventListener('pointermove', function (e) {
      var r = g.getBoundingClientRect();
      var px = (e.clientX - r.left) * W / r.width;
      var i = Math.max(0, Math.min(months.length - 1, Math.round((px - L) * (months.length - 1) / (W - L - R))));
      var isFc = i >= n, d = isFc ? fc[i - n] : hist[i];
      cross.setAttribute('x1', x(i)); cross.setAttribute('x2', x(i)); cross.style.display = '';
      tip.innerHTML = '';
      tip.appendChild(el('strong', { text: cap(month(d.mes)) }));
      tip.appendChild(el('span', { text: (isFc ? s().forecast : s().observed) + ': ' + fill(s().usdMShort, { v: millions(d.valor) }) }));
      if (isFc && err) tip.appendChild(el('span', { 'class': 'lv-tip-sub', text: fill(s().band, {
        a: millions(d.valor * (1 - err)), b: millions(d.valor * (1 + err)) }) }));
      tip.hidden = false;
      tip.style.left = (x(i) / W * 100) + '%';
      tip.style.top = (y(d.valor) / H * 100) + '%';
    });
    g.addEventListener('pointerleave', function () { tip.hidden = true; cross.style.display = 'none'; });
    box.appendChild(g);
    box.appendChild(tip);

    var legend = el('ul', { 'class': 'lv-legend' }, [
      el('li', { 'class': 'k-obs', text: s().observed }), el('li', { 'class': 'k-fc', text: s().forecast }),
      err ? el('li', { 'class': 'k-band', text: s().bandLabel + ' ±' + pct(err) }) : null
    ]);
    return el('figure', { 'class': 'lv-fig' }, [legend, box]);
  }

  function dataTable(f) {
    var rows = f.historia.map(function (d) { return [cap(month(d.mes)), s().observed, millions(d.valor)]; })
      .concat(f.pronostico.map(function (d) { return [cap(month(d.mes)), s().forecast, millions(d.valor)]; }));
    return table(s().tableCols, rows, 'lv-table');
  }

  function table(cols, rows, cls) {
    return el('table', { 'class': cls }, [
      el('thead', {}, [el('tr', {}, cols.map(function (c) { return el('th', { scope: 'col', text: c }); }))]),
      el('tbody', {}, rows.map(function (r) { return el('tr', {}, r.map(function (c) { return el('td', { text: c }); })); }))
    ]);
  }

  function renderApp() {
    if (!app || !data) return;
    var S = s(), f = data.flujos[flow];
    app.innerHTML = '';

    // estado y fechas
    app.appendChild(el('div', { 'class': 'lv-status', 'data-estado': data.estado }, [
      el('span', { 'class': 'lv-badge meta', text: S.live }),
      el('span', { 'class': 'lv-state', text: S.status[data.estado] || S.status.normal }),
      el('span', { 'class': 'lv-dates', text: fill(S.dataUntil, { m: month(data.datos_hasta) }) + ' · ' +
        fill(S.nextUpdate, { m: month(data.proxima_actualizacion, { year: 'numeric', month: 'long' }) }) })
    ]));

    // selector de flujo
    var tabs = el('div', { 'class': 'lv-tabs', role: 'group', 'aria-label': S.flowsLabel });
    ['exportaciones', 'importaciones'].forEach(function (k) {
      var b = el('button', { type: 'button', 'class': 'lv-tab', 'aria-pressed': String(k === flow), text: S.flows[k] });
      b.addEventListener('click', function () { if (flow !== k) { flow = k; renderApp(); app.querySelector('.lv-tab[aria-pressed="true"]').focus(); } });
      tabs.appendChild(b);
    });
    app.appendChild(tabs);

    // los tres próximos meses
    var err = f.error_tipico;
    app.appendChild(el('div', { 'class': 'lv-stats' }, f.pronostico.map(function (d) {
      return el('div', { 'class': 'lv-stat' }, [
        el('p', { 'class': 'meta', text: fill(S.forecastFor, { m: month(d.mes) }) }),
        el('p', { 'class': 'lv-num', text: fill(S.usdM, { v: millions(d.valor) }) }),
        err ? el('p', { 'class': 'lv-range', text: fill(S.band, { a: millions(d.valor * (1 - err)), b: millions(d.valor * (1 + err)) }) }) : null
      ]);
    })));

    app.appendChild(el('p', { 'class': 'lv-chart-t', text: fill(S.chartTitle, { f: S.flows[flow] }) }));
    app.appendChild(chart(f, chartWidth()));
    var det = el('details', { 'class': 'lv-details' }, [el('summary', { text: S.tableToggle }), dataTable(f)]);
    app.appendChild(det);

    // historial de aciertos
    var r = f.resumen;
    var track = el('div', { 'class': 'lv-block' }, [el('h3', { 'class': 'lv-h', text: S.trackTitle })]);
    if (f.aciertos.length) {
      track.appendChild(el('p', { 'class': 'lv-lead', text: fill(S.track, { k: r.meses_gana, n: r.meses_evaluados }) }));
      var rows = f.aciertos.slice().reverse().map(function (a) {
        return [cap(month(a.mes)), fill(S.usdMShort, { v: millions(a.pronosticado) }), fill(S.usdMShort, { v: millions(a.observado) }),
          pct(a.error_modelo), pct(a.error_media_movil)];
      });
      var t = table(S.trackCols, rows, 'lv-table lv-track');
      f.aciertos.slice().reverse().forEach(function (a, i) {
        var row = t.tBodies[0].rows[i];
        row.setAttribute('data-gana', String(a.gana));
        row.cells[3].setAttribute('title', a.gana ? S.better : S.worse);
      });
      track.appendChild(t);
    } else {
      track.appendChild(el('p', { 'class': 'lv-lead', text: fill(S.trackEmpty, {
        m: month(data.proximo_dato), p: month(data.proxima_actualizacion) }) }));
    }
    track.appendChild(el('p', { 'class': 'lv-note', text: fill(S.backtest, {
      a: pct(r.error_modelo_backtest), b: pct(r.error_media_movil_backtest) }) }));
    app.appendChild(track);

    // productos destacados
    var top = el('div', { 'class': 'lv-block' }, [el('h3', { 'class': 'lv-h', text: S.topTitle })]);
    top.appendChild(table(S.topCols, f.destacados.map(function (d) {
      return [d.producto, fill(S.usdMShort, { v: millions(d.valor) }), d.variacion == null ? '—' : pct(d.variacion, true)];
    }), 'lv-table lv-top'));
    app.appendChild(top);

    // enlaces
    var links = el('ul', { 'class': 'lv-links' });
    ['tablero', 'api', 'codigo'].forEach(function (k) {
      var href = data.enlaces[k];
      if (href) links.appendChild(el('li', {}, [el('a', { href: href, target: '_blank', rel: 'noopener', text: S.links[k] })]));
    });
    app.appendChild(links);
    app.setAttribute('aria-busy', 'false');
  }

  function chartWidth() {
    var cs = getComputedStyle(app);
    return app.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
  }

  function renderError() {
    if (!app) return;
    app.innerHTML = '';
    app.appendChild(el('p', { 'class': 'lv-lead', text: s().error }));
    app.appendChild(el('ul', { 'class': 'lv-links' }, [el('li', {}, [el('a', {
      href: 'https://github.com/Bastian-Olea-Diaz/pronostico_comercio_chile', target: '_blank', rel: 'noopener',
      text: s().links.codigo })])]));
    app.setAttribute('aria-busy', 'false');
  }

  function render() {
    if (data) { renderPill(); renderApp(); } else if (failed) { renderError(); }
  }

  // ------------------------------------------------------------------ carga
  var failed = false;
  fetch(URL_DATA, { cache: 'no-cache' })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (d) {
      if (d.esquema !== SCHEMA) throw new Error('esquema ' + d.esquema);
      data = d;
      render();
    })
    .catch(function () { failed = true; render(); });

  // al cambiar el ancho de la ventana el gráfico se vuelve a dibujar (solo si cambió el ancho del panel)
  var lastWidth = 0, resizing = null;
  window.addEventListener('resize', function () {
    clearTimeout(resizing);
    resizing = setTimeout(function () {
      if (!app || !data) return;
      var w = Math.round(chartWidth());
      if (Math.abs(w - lastWidth) > 24) { lastWidth = w; renderApp(); }
    }, 200);
  });

  // main.js cambia el atributo lang al elegir idioma: se vuelven a armar los textos generados
  new MutationObserver(render).observe(root, { attributes: true, attributeFilter: ['lang'] });
})();
