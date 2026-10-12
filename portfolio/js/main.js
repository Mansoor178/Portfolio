const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)], RM = matchMedia('(prefers-reduced-motion:reduce)').matches;
const img = p => p.img
    ? `<img src="${p.img}" alt="${p.name} — ${p.title}" loading="lazy">`
    : `[IMAGE: ${p.name} — add real asset]`;
const card = p => `<a class="card rv" href="#/work/${p.id}" aria-label="${p.name}: ${p.title}"><div class="im" style="background:${p.tone}">${img(p)}</div><div class="cap">${p.name}</div><span class="vp">View Project ↗</span></a>`;
const connect = (cls = 'rv', resume = false) => `<section class="conn conn--page ${cls}"><div class="cg"><p class="ghost" aria-hidden="true">LET’S CONNECT</p><div class="cname">${ME.name}</div></div><div class="ci ci--one"><h4>Contact me:</h4><div class="cline"><div class="cl-left"><a class="crow" href="mailto:${ME.email}"><span aria-hidden="true">✉️</span>${ME.email}</a>${resume ? `<a class="crow" href="${ME.resume}" target="_blank" rel="noopener"><span aria-hidden="true">📄</span>Resume</a>` : ''}</div><a class="crow" href="tel:${ME.phone}"><span aria-hidden="true">📞</span>${ME.phone}</a></div></div></section>`;
const conn = connect();
const R = {
    '/': () => `<section class="hero"><h1 class="rv in">${ME.brand}</h1><div class="n rv in">${ME.name}</div><div class="r rv in">${ME.role}</div><a class="pill rv in" href="#/work">Skip to Work <i>↗</i></a></section>
<section class="about about--portrait">
    <p class="ghost rv" aria-hidden="true">ABOUT</p>
    <div class="photo rv"><img src="assets/images/portrait.png" alt="Mansoor Shaikh saluting at the camera">
    </div>
</section><p class="bio rv">${ME.bio}</p>
<section class="wrap"><div class="h rv"><span>Curated Projects</span></div><p class="sub rv">Selected work.</p></section>
<div class="grid">${P.map(card).join('')}</div>
<div class="center"><a class="pill rv" href="#/work">View all work <i>↗</i></a></div>
<section class="origin rv"><div class="origin-bg${ORIGIN_BG_ROTATE ? ' origin-bg--rot' : ''}" role="img" aria-label="Background image placeholder">${ORIGIN_BG ? `<img src="${ORIGIN_BG}" alt="">` : '[BACKGROUND IMAGE — set ORIGIN_BG in js/data.js]'}</div><div class="photo" data-p=".05" style="justify-self:center"><img src="assets/images/origin.png" alt="Mansoor in profile with his riding helmet on his back"></div><div class="t"><h3>My Origin Story</h3><p>"Who loves their job anyway, right?" - what I told myself  before I learnt about UI/UX design.</p><a class="pill" href="#/about">Read a bit more about me <i>↗</i></a></div></section>
<section class="wrap" style="margin-top:100px"><div class="h rv"><span>The Sidelines</span></div><p class="sub rv">Things I enjoy besides design work.</p><div class="side rv" aria-label="Sketches"><div class="track">${[0, 1, 2].map(k => ['sideline1.jpg.png', 'sideline2.jpg', 'sideline3.jpg', 'sideline4.jpg', 'sideline5.jpg', 'sideline6.jpg'].map((f, i) => `<div${k ? ' aria-hidden="true"' : ''}><img src="assets/images/${f}" alt="${k ? '' : 'Sketch ' + (i + 1)}"></div>`).join('')).join('')}</div></div></section>
${conn}`,
    '/about': () => `<section class="about about--overlap"><p class="ghost" aria-hidden="true">ABOUT</p></section>
<section class="ab rv"><div class="cut"><img src="assets/images/portrait2.png" alt="Mansoor Shaikh seated, cutout portrait"></div><div class="tx"><div class="story">${ABOUT_TEXT.map(t => `<p>${t}</p>`).join('')}</div><h4>EDUCATION</h4>${EDUCATION.map(t => `<p>${t}</p>`).join('')}</div></section>
<section class="feat rv"><div class="ph2"><img src="assets/images/feature.jpg" alt="Mansoor on stage at a college event"></div></section>
<p class="cap2 rv">${ABOUT_CAPTION}</p>
<section class="clw rv"><div class="cl" role="group" aria-label="Photo collage">${[[.1, 9.5, 19.6], [11.5, 22.9, 32.3], [30.1, .5, 24.9], [52.4, 5.9, 33], [75.4, 34.5, 24], [39, 50.7, 28.3], [3.5, 59.8, 22.5]].map((c, i) => `<div style="left:${c[0]}%;top:${c[1]}%;width:${c[2]}%;z-index:${i % 3}"><img src="assets/images/photo${i + 1}.jpg" alt="Photo ${i + 1}" loading="lazy"></div>`).join('')}</div></section>
<p class="bio rv" style="padding-bottom:30px">${ABOUT_CLOSING}</p><div class="center" style="margin:0 0 110px"><a class="pill rv" href="#/contact">Get in touch with me <i>↗</i></a></div>
<section class="wrap"><div class="h rv"><span>Check out some of my work</span></div></section><div class="grid" style="margin-top:30px">${P.map(card).join('')}</div><div class="center"><a class="pill rv" href="#/work">View all work <i>↗</i></a></div>`,
    '/work': () => `<section class="about" style="height:clamp(300px,45vw,480px)"><p class="ghost" aria-hidden="true">PROJECTS</p></section>
${P.map(p => `<article class="pr rv"><a class="im2" href="#/work/${p.id}" aria-label="${p.name}"><div class="im" style="background:${p.tone}">${img(p)}</div></a><div><h3>${p.name}</h3><div class="m">${[p.year, ...p.tags].filter(Boolean).join(' · ')}</div><p>${p.title}</p><a class="pill" href="#/work/${p.id}">View Full Project <i>↗</i></a></div></article>`).join('')}`,
    '/contact': () => connect('rv in', true)
};
const para = a => a.map(t => `<p>${t}</p>`).join('');
const heading = t => `<h3 class="cs-h"><span>${t}</span></h3>`;
function caseStudy(c) {
    const r = c.research, d = c.define;
    const rv = r.video
        ? `<div class="im vid rv" style="--ar:${r.videoRatio || '16/9'};background:#000"><video src="${r.video}" poster="${r.poster || ''}" autoplay muted loop playsinline controls preload="metadata" aria-label="Research video"></video></div>`
        : `<div class="rph rv" style="--ar:16/9">[VIDEO — nsresearch.mp4 was not uploaded yet. Add the file to assets/video/ and set research.video in js/data.js]</div>`;
    const proto = c.prototyping.map(g => `<article class="proto rv${g.h > g.w ? ' proto--tall' : ''}"><div class="pm">${g.video ? `<video src="${g.video}" width="${g.w}" height="${g.h}" autoplay muted loop playsinline preload="metadata" aria-label="${g.alt}"></video>` : `<img src="${g.src}" width="${g.w}" height="${g.h}" alt="${g.alt}" loading="lazy" data-remote>`}</div><div class="pt"><h4>${g.title}</h4>${para(g.text)}</div></article>`).join('');
    return `<section class="cs-sec rv">${heading('Overview')}${para(c.overview)}</section>
<section class="cs-sec rv">${heading('Research')}<div class="stat"><b>${r.stat}</b><span>${r.statLabel}</span></div>${para(r.body)}<p class="src">${r.source}</p><h4>${r.subhead}</h4>${para(r.paras)}${rv}</section>
<section class="cs-sec rv">${heading('Define')}<h4 class="first">${d.title}</h4><p class="lead">${d.stakeholdersLead}</p><div class="who">${d.stakeholders.map(s => `<figure><img src="${s.img}" alt="${s.name} illustration" loading="lazy"><figcaption>${s.name}</figcaption></figure>`).join('')}</div><p class="lead">${d.insightsLead}</p><div class="ins">${d.insights.map((t, i) => `<div><b>${i + 1}</b><p>${t}</p></div>`).join('')}</div></section>
<section class="cs-sec">${heading('Prototyping')}${proto}<p class="close rv">${c.prototypingClose}</p></section>
<section class="cs-sec rv">${heading('Reflecting')}<h4 class="first">${c.reflecting.title}</h4><div class="refl">${c.reflecting.items.map(i => `<div><h5>${i.title}</h5><p>${i.text}</p></div>`).join('')}</div></section>`;
}
const stackItem = x => `<div class="sm rv">${x.type === 'video' ? `<video src="${x.src}" width="${x.w}" height="${x.h}" autoplay muted loop playsinline preload="metadata" aria-label="${x.alt || ''}"></video>` : `<img src="${x.src}" width="${x.w}" height="${x.h}" alt="${x.alt || ''}" loading="lazy">`}</div>`;
// media-stack project page (Spotify Sync): small meta block, then one continuous column of images/videos in the order given in data.js
const fxMedia = x => x.video ? `<video src="${x.video}" width="${x.w}" height="${x.h}" autoplay muted loop playsinline preload="metadata" aria-label="${x.alt || ''}"></video>` : `<img src="${x.src}" width="${x.w}" height="${x.h}" alt="${x.alt || ''}" loading="lazy">`;
const featureBlock = (x, flip) => `<section class="fx rv${flip ? ' flip' : ''}" style="--bg:${x.bg};--fg:${x.fg}"><figure class="fxm">${fxMedia(x)}</figure><div class="fxt">${x.title ? `<h3>${x.title}</h3>` : ''}<p>${x.text}</p></div></section>`;
function stackPage(p, nx) {
    const m = p.meta || {}, rows = [['Date', m.date], ['Role', m.role], ['Type', m.type], ['Tools', m.tools]].filter(r => r[1]);
    let k = 0;
    return `<div class="det stackpage" style="padding-top:130px"><h1 class="rv in">${p.name}</h1><h2 class="rv in">${p.title}</h2><ul class="tags rv in">${p.year ? `<li>${p.year}</li>` : ''}${p.tags.map(t => `<li>${t}</li>`).join('')}</ul>${rows.length ? `<ul class="pmeta rv in">${rows.map(r => `<li>${r[0]}: ${r[1]}</li>`).join('')}</ul>` : ''}<div class="stack">${p.media.map(x => x.type === 'feature' ? featureBlock(x, k++ % 2) : stackItem(x)).join('')}</div><a class="nx rv" href="#/work/${nx.id}"><small>Next project</small><span>${nx.name}</span></a></div>`
}
function proj(id) {
    const i = P.findIndex(p => p.id === id); if (i < 0) return null; const p = P[i], nx = P[(i + 1) % P.length];
    if (p.media) return stackPage(p, nx);
    const hero = p.video
        ? `<div class="im vid rv" style="--ar:${p.videoRatio || '16/9'};background:#000"><video src="${p.video}" poster="${p.poster || ''}" autoplay muted loop playsinline controls preload="metadata" aria-label="${p.name} prototype walkthrough"></video></div>`
        : `<div class="im rv" style="background:${p.tone}">${img(p)}</div>`;
    const body = p.case ? caseStudy(p.case) : `<div class="ph rv"><b>Overview</b>[CASE STUDY TEXT — copy from the ${p.name} page on merylroberts.framer.website]</div><div class="ph rv"><b>Process</b>[CASE STUDY SECTIONS + GALLERY]</div><div class="ph rv"><b>Outcome</b>[CASE STUDY OUTCOME]</div>`;
    return `<div class="det${p.case ? ' cs' : ''}" style="padding-top:130px"><h1 class="rv in">${p.name}</h1><h2 class="rv in">${p.title}</h2><ul class="tags rv in">${p.year ? `<li>${p.year}</li>` : ''}${p.tags.map(t => `<li>${t}</li>`).join('')}</ul>${hero}
${body}
<a class="nx rv" href="#/work/${nx.id}"><small>Next project</small><span>${nx.name}</span></a></div>`
}
// remote GIFs: if one cannot load (offline / blocked), show a clear labelled placeholder instead of a broken image
function gifFallback() {
    $$('img[data-remote]').forEach(im => {
        const f = () => { if (!im.isConnected) return; const d = document.createElement('div'); d.className = 'rph'; d.style.setProperty('--ar', `${im.getAttribute('width')}/${im.getAttribute('height')}`); d.textContent = '[GIF could not load. It is hosted on framerusercontent.com and needs an internet connection]'; im.replaceWith(d) };
        im.addEventListener('error', f); if (im.complete && !im.naturalWidth) f()
    })
}
let busy = 0;
function render() {
    const h = location.hash.replace(/^#/, '') || '/', m = h.match(/^\/work\/(.+)$/), html = (m && proj(m[1])) || (R[h] ? R[h]() : R['/']());
    $$('nav .l a').forEach(a => a.classList.toggle('on', h.startsWith('/' + a.dataset.r))); const app = $('#app');
    app.innerHTML = html; scrollTo(0, 0); app.classList.add('pre'); requestAnimationFrame(() => requestAnimationFrame(() => { app.classList.remove('pre'); watch(); titles() })); bind()
}
function go() { if (busy) return; busy = 1; const a = $('#app'); a.classList.add('out'); setTimeout(() => { render(); a.classList.remove('out'); busy = 0 }, RM ? 0 : 420) }
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: .12 });
let ready = 0; const tio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('play'); tio.unobserve(e.target) } }), { threshold: .2 });
function split(el) { const t = el.textContent; let n = 0; el.dataset.s = 1; el.classList.add('tt'); el.innerHTML = `<span class="sr">${t}</span><span aria-hidden="true">${t.split(' ').map(w => `<span class="w">${[...w].map(c => `<span class="ch" style="--i:${n++}">${c}</span>`).join('')}</span>`).join(' ')}</span>` }
function titles() { $$('.ghost,.hero h1,.det h1,.h>span').forEach(el => { if (!el.dataset.s) split(el); if (ready && !el.classList.contains('play')) tio.observe(el) }) }
function watch() { $$('.rv:not(.in)').forEach((el, i) => { el.style.transitionDelay = (i % 3) * .08 + 's'; io.observe(el) }) }
function bind() { gifFallback(); $$('.card').forEach(c => { const v = c.querySelector('.vp'); c.addEventListener('mousemove', e => { const r = c.getBoundingClientRect(); v.style.transform = `translate(${e.clientX - r.left - 50}px,${e.clientY - r.top - 18}px)` }) }) }
let tk = 0; addEventListener('scroll', () => { if (RM || tk) return; tk = 1; requestAnimationFrame(() => { $$('[data-p]').forEach(el => { const r = el.getBoundingClientRect(); el.style.transform = `translateY(${(r.top + r.height / 2 - innerHeight / 2) * -el.dataset.p}px)` }); tk = 0 }) }, { passive: true });
document.addEventListener('click', e => { const a = e.target.closest('a[href^="#/"]'); if (a && a.getAttribute('href') === location.hash) { e.preventDefault() } });
addEventListener('hashchange', go);
$('#logo').textContent = ME.brand; $('#ldt').textContent = ME.brand;
let seen = 0; try { seen = sessionStorage.getItem('ld') } catch (e) { }
render();
if (seen || RM) { ready = 1; $('#ld').classList.add('go'); titles() } else { setTimeout(() => { $('#ld').classList.add('go'); try { sessionStorage.setItem('ld', 1) } catch (e) { } setTimeout(() => { ready = 1; titles() }, 450) }, 1500) }

// Sidelines slideshow: continuous scroll, eases down to half speed (never stops) while hovered
let mqx = 0, mqs = 1, mqt = 0;
(function mq(t) {
    const tr = document.querySelector('.side>.track'), dt = Math.min(.05, (t - (mqt || t)) / 1000); mqt = t;
    if (tr && !RM) {
        mqs += ((tr.parentElement.matches(':hover') ? .5 : 1) - mqs) * Math.min(1, dt * 5);
        const w = tr.scrollWidth / 3; mqx -= 105 * mqs * dt; while (w && mqx <= -w) mqx += w;
        tr.style.transform = `translate3d(${mqx}px,0,0)`;
    }
    requestAnimationFrame(mq)
})(0);

// Header: hides whenever you scroll down (on every page, every time) and comes back when you move the pointer near the top edge,
// or when a nav link gets keyboard focus. On touch devices (no hover) it also comes back when you scroll up.
const NAV = $('nav'), TOUCH = matchMedia('(hover:none)').matches;
let navHover = false, navLastY = scrollY, navTouchShow = true, navIntentUntil = 0;
const navIntent = () => { navIntentUntil = performance.now() + 1200 };
['wheel', 'touchmove', 'keydown'].forEach(t => addEventListener(t, navIntent, { passive: true }));
addEventListener('mousedown', e => { if (!NAV.contains(e.target)) navIntent() }, { passive: true });   // scrollbar drag / middle-click scroll
function navUpdate() {
    const y = scrollY;
    const user = performance.now() < navIntentUntil;                    // only deliberate scrolling counts, not layout-shift nudges while images load
    const goingDown = user && y > navLastY + 2;
    if (y > navLastY + 2) { if (user) { navHover = false; navTouchShow = false } }   // scrolling down always hides, even if the pointer is still up there
    else if (y < navLastY - 2 && TOUCH && user) navTouchShow = true;
    navLastY = y;
    const keyboard = !!NAV.querySelector(':focus-visible');              // keyboard focus only; a mouse click on a link does not pin the header open
    NAV.classList.toggle('hide', !(y <= 80 || navHover || keyboard || (TOUCH && navTouchShow) || (!goingDown && NAV.matches(':hover'))));   // never hide under the pointer unless you are scrolling
}
addEventListener('scroll', navUpdate, { passive: true });
addEventListener('mousemove', e => {
    if (TOUCH || (!e.movementX && !e.movementY)) return;               // ignore synthetic moves the browser fires after scrolling
    navHover = e.clientY < (NAV.classList.contains('hide') ? 80 : 150); navUpdate();
}, { passive: true });
NAV.addEventListener('click', e => { if (e.detail && document.activeElement) document.activeElement.blur(); navUpdate() });
NAV.addEventListener('focusin', navUpdate); NAV.addEventListener('focusout', () => setTimeout(navUpdate));
addEventListener('hashchange', () => setTimeout(navUpdate, 480));
