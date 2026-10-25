// ===== Nike × Adidas × Puma — framed editorial case study + interactive UI prototype =====
const NAP = {
    desc: 'An independent competitive UX study exploring how Nike, Adidas, and Puma differentiate themselves through positioning, pricing, audience, and brand experience.',
    question: 'How might sportswear shopping become more personalized and easier to navigate?',
    brands: [
        { name: 'Nike', tag: 'Performance × Aspiration', text: 'Premium positioning focused on innovation, athletes and emotional storytelling.', audience: 'Athletes · Fitness enthusiasts · Sneaker enthusiasts', strength: 'Brand power + innovation', price: 'Premium', img: 'assets/images/nap/nike.jpg', alt: 'Nike Dunk Low sneaker in navy and white' },
        { name: 'Adidas', tag: 'Sport × Culture', text: 'Blends performance with fashion, streetwear and lifestyle.', audience: 'Athletes · Gen Z · Sneaker enthusiasts', strength: 'Sport + cultural relevance', price: 'Premium / Mid-premium', img: 'assets/images/nap/adidas.jpg', alt: 'Yellow suede Adidas Samba sneaker' },
        { name: 'Puma', tag: 'Sport × Style × Accessibility', text: 'Combines sportswear, fashion and a more accessible price proposition.', audience: 'Young consumers · Casual athletes · Style-conscious shoppers', strength: 'Value + sportstyle', price: 'Mid-premium', img: 'assets/images/nap/puma.jpg', alt: 'Grey suede Puma Speedcat sneaker' }
    ],
    compare: [['Performance', 5, 4, 4], ['Lifestyle', 4, 5, 4], ['Accessibility', 2, 3, 4], ['Brand storytelling', 5, 5, 3]],
    insights: [
        { h: 'Too much choice', p: 'Sportswear platforms offer hundreds of products, categories and filters.', b: 'More choice doesn’t always mean easier choice.' },
        { h: 'Users shop by purpose', p: 'People often know what they want to <em>do</em>, but not which technical specs they need.', b: '“I want shoes for running.” is easier than “I need X cushioning and Y stability.”' },
        { h: 'Confidence matters', p: 'Users need to understand <em>why</em> a product is right for them, not just what the features are.', b: 'Why this one?' }
    ],
    today: ['Category', 'Subcategory', 'Filters', 'Hundreds of products', 'Decision'],
    proposed: ['Goal', 'Preferences', 'Personalized recommendations', 'Simple comparison', 'Decision']
};

// Prototype data. Attribute values are 0–1; match = 60 + 40 × average of the priorities you pick.
const NAP_ACTS = {
    running: { label: 'Running', noun: 'running', items: [
        { b: 'Nike', n: 'Pegasus', price: 140, best: 'Best for everyday running', a: { comfort: .8, performance: .75, style: .7, budget: .6 } },
        { b: 'Adidas', n: 'Supernova', price: 150, best: 'Best for comfort-first runs', a: { comfort: .725, performance: .7, style: .65, budget: .5 } },
        { b: 'Puma', n: 'Velocity Nitro', price: 120, best: 'Best for speed on a budget', a: { comfort: .65, performance: .8, style: .75, budget: .85 } }] },
    training: { label: 'Training', noun: 'training', items: [
        { b: 'Nike', n: 'Metcon', price: 150, best: 'Best for heavy gym sessions', a: { comfort: .6, performance: .85, style: .7, budget: .5 } },
        { b: 'Adidas', n: 'Dropset', price: 140, best: 'Best for stable lifting', a: { comfort: .65, performance: .8, style: .65, budget: .6 } },
        { b: 'Puma', n: 'Fuse', price: 110, best: 'Best for everyday workouts', a: { comfort: .7, performance: .7, style: .75, budget: .85 } }] },
    football: { label: 'Football', noun: 'football', items: [
        { b: 'Nike', n: 'Mercurial Vapor', price: 90, best: 'Best for speed on the wing', a: { comfort: .65, performance: .85, style: .8, budget: .5 } },
        { b: 'Adidas', n: 'Predator', price: 90, best: 'Best for control and passing', a: { comfort: .7, performance: .8, style: .85, budget: .55 } },
        { b: 'Puma', n: 'Future', price: 70, best: 'Best for value on matchday', a: { comfort: .75, performance: .75, style: .7, budget: .85 } }] },
    everyday: { label: 'Everyday', noun: 'everyday', items: [
        { b: 'Nike', n: 'Air Max 90', price: 130, best: 'Best for all-day cushioning', a: { comfort: .8, performance: .5, style: .85, budget: .6 } },
        { b: 'Adidas', n: 'Samba OG', price: 100, best: 'Best for street style', a: { comfort: .7, performance: .45, style: .9, budget: .75 } },
        { b: 'Puma', n: 'Suede Classic', price: 75, best: 'Best for easy, low-cost style', a: { comfort: .65, performance: .4, style: .8, budget: .9 } }] }
};
const NAP_PRI = { comfort: 'Comfort', performance: 'Performance', style: 'Style', budget: 'Budget' };
const NAP_WHY = {
    comfort: n => `Comfortable, versatile and suited to your ${n} goals.`,
    performance: n => `Responsive and built to perform for ${n}.`,
    style: n => `A standout look that still handles ${n}.`,
    budget: n => `Strong value for ${n} without overspending.`
};
const NAP_ICON = {
    running: '<ellipse cx="12" cy="12" rx="9" ry="5.5"/><ellipse cx="12" cy="12" rx="5" ry="2.4"/>',
    training: '<path d="M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12"/>',
    football: '<circle cx="12" cy="12" r="9"/><path d="M12 8l3.5 2.5-1.3 4h-4.4l-1.3-4zM12 3v5M3.5 10l5 .5M20.5 10l-5 .5M7 19l2.8-4.5M17 19l-2.8-4.5"/>',
    everyday: '<path d="M3 16v-3l5-1 3 2 4 1 5 1v3H3zM3 19h18"/>'
};
const NAP_TABS = ['<path d="M4 11l8-7 8 7v9H4z"/>', '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4-4"/>', '<path d="M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z"/>', '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-5 15-5 16 0"/>'];
const napSrc = p => (window.__IMG && window.__IMG[p]) || p;
const napSlug = n => n.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const napShoe = (b, n, cls) => `<img class="${cls}" src="${napSrc('assets/images/nap/shoe-' + napSlug(n) + '.jpg')}" data-fb="${napSrc('assets/images/nap/shoe-' + b.toLowerCase() + '.jpg')}" alt="${b} ${n} shoe" loading="lazy" decoding="async">`;
const napSvg = (d, s = 16) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const napDots = n => `<span class="dots" role="img" aria-label="${n} out of 5">${[1, 2, 3, 4, 5].map(i => `<i${i <= n ? ' class="on"' : ''}></i>`).join('')}</span>`;
const napLabel = t => `<p class="lb">${t}</p>`;
const napShell = (n, title, sub, body) => `<div class="phw"><div class="phone"><div class="sb"><span>9:41</span><span class="sbd"><i></i><i></i><i></i></span></div><div class="pbody"><p class="plb">SPORTSWEAR / 0${n}</p><h5>${title}</h5>${sub ? `<p class="psub" data-sub="${n}">${sub}</p>` : ''}${body}</div><div class="tabs">${NAP_TABS.map((t, i) => `<span class="${i === 1 ? 'on' : ''}">${napSvg(t, 14)}</span>`).join('')}</div></div></div>`;

function napPage(p, nx) {
    const N = NAP;
    const brands = N.brands.map((b, i) => `<article class="bc rv" style="--d:${i * 90}ms"><div class="bi"><img src="${b.img}" alt="${b.alt}" loading="lazy" decoding="async"></div><div class="bt"><h4>${b.name}</h4><p class="bg">${b.tag}</p><p class="bdesc">${b.text}</p><dl><div><dt>Audience</dt><dd>${b.audience}</dd></div><div><dt>Strength</dt><dd>${b.strength}</dd></div><div><dt>Price</dt><dd>${b.price}</dd></div></dl></div></article>`).join('');
    const cmp = `<div class="cmp rv" role="table" aria-label="Brand comparison"><div class="cr cr--h" role="row"><span></span>${N.brands.map(b => `<span role="columnheader">${b.name}</span>`).join('')}</div>${N.compare.map(r => `<div class="cr" role="row"><span role="rowheader">${r[0]}</span>${[1, 2, 3].map(i => `<span role="cell">${napDots(r[i])}</span>`).join('')}</div>`).join('')}</div>`;
    const ins = N.insights.map((i, k) => `<article class="ic rv" style="--d:${k * 90}ms"><span class="icn">0${k + 1}</span><h4>${i.h}</h4><p>${i.p}</p><b>${i.b}</b></article>`).join('');
    const flow = (arr, cls) => `<ol class="fl ${cls}">${arr.map((t, i) => `<li style="--i:${i}"><span>${t}</span></li>`).join('')}</ol>`;
    const phones = napShell(1, 'Choose your activity', '', '<div class="opts" data-k="act"></div>')
        + napShell(2, 'Tell us what matters', 'Pick up to two', '<div class="opts" data-k="pri"></div>')
        + napShell(3, 'Recommended for you', '', '<div class="recs" data-k="recs"></div>')
        + napShell(4, 'Compare', '', '<div class="cmpu" data-k="cmp"></div>');

    return `<div class="nap2"><div class="det ndet"><h1 class="rv in">Rethinking sportswear discovery</h1><h2 class="rv in">Nike × Adidas × Puma — a competitive UX study</h2><ul class="tags rv in">${p.tags.map(t => `<li>${t}</li>`).join('')}</ul></div><div class="nf">
<header class="nh"><div class="nhl"><p class="ntl rv in">${p.tags.join(' · ')}</p><h1 class="rv in">Nike × Adidas × Puma</h1><h2 class="rv in">Rethinking sportswear discovery</h2><p class="dsc rv in">${N.desc}</p></div>
<div class="hcol rv in"><img class="h1i" src="assets/images/nap/hero-main.jpg" alt="Footballer in an Adidas shirt holding a purple Adidas boot against a violet backdrop"><img class="h2i" src="assets/images/nap/hero-2.jpg" alt="Footballer in a Nike kit holding a gold Nike boot"><img class="h3i" src="assets/images/nap/hero-3.jpg" alt="Footballer in a Puma tracksuit holding a Puma boot"></div></header>

<section class="ns ns--dark ns--q"><div class="in-w qg"><div class="rv">${napLabel('01 / THE QUESTION')}<p class="bigq">${N.question.replace('personalized', '<em>personalized</em>')}</p></div><p class="qside rv">I compared the three brands through the lens of positioning, price, audience and shopping experience — looking for a useful UX opportunity rather than a full market report.</p></div></section>

<section class="ns ns--cream"><div class="in-w">${napLabel('02 / COMPETITORS')}<h3 class="hd rv">Three brands.<br><em>Three strategies.</em></h3>
<div class="brands">${brands}</div>${cmp}</div></section>

<section class="ns ns--beige"><div class="in-w">${napLabel('03 / WHAT I FOUND')}<div class="insights">${ins}</div>
<div class="key rv">${napLabel('KEY INSIGHT')}<p>Make discovery about the <em>user’s goal</em>, not the product catalog.</p><p class="nsm">Users don’t need more products. They need better guidance.</p></div></div></section>

<section class="ns ns--dark"><div class="in-w">${napLabel('04 / OPPORTUNITY')}<h3 class="hd rv">From browsing<br>to <em>guidance.</em></h3>
<div class="ba rv"><div class="bx bx--t"><small>Today</small>${flow(N.today, 'fl--t')}</div><span class="arr" aria-hidden="true">→</span><div class="bx bx--p"><small>Proposed</small>${flow(N.proposed, 'fl--p')}</div></div>
<div class="cpt rv"><small>The concept</small><p>A personalized sportswear discovery experience that asks a few simple questions and recommends relevant products.</p></div></div></section>

<section class="ns ns--lite"><div class="in-w"><div class="uih"><div>${napLabel('05 / UI CONCEPT')}<h3 class="hd rv">A smarter way<br>to find your <em>gear.</em></h3></div><div class="uis rv"><p>Conceptual UI — independent visual identity, designed to demonstrate the discovery experience rather than recreate an ecommerce platform.</p><span class="hint"><i></i>Interactive — tap an option to update every screen</span></div></div>
<div class="phones rv" id="napPhones">${phones}</div><p class="fine">Products, prices and match scores are illustrative. <button type="button" class="rs" id="napReset">Reset</button></p></div></section>

<section class="ns ns--dark ns--end"><div class="in-w"><div class="tk">${napLabel('06 / TAKEAWAY')}<div class="tkg"><div class="tkl rv"><p>The competitive analysis revealed that Nike, Adidas and Puma already have strong products and powerful brands.</p><p>The opportunity is to improve what happens between:</p><p class="ngp">“I need sportswear”</p><span class="ga" aria-hidden="true">↓</span><p class="ngp">“I know what to buy.”</p><p>The proposed experience shifts sportswear shopping from a product-first journey to a goal-first journey.</p></div>
<div class="tkr rv">${napLabel('FINAL THOUGHT')}<p class="fin">Don’t make users search for the right product. <em>Help them discover it.</em></p><p class="lbm">Less browsing. More relevance.</p></div></div></div></div></section></div>
<a class="nx rv" href="#/work/${nx.id}"><small>Next project</small><span>${nx.name}</span></a></div>`;
}

// ---- interactive prototype ----
function napInit(root) {
    const S = { act: 'running', pri: ['comfort'], focus: 0 };
    const $ = s => root.querySelector(s);
    const rank = () => {
        const a = NAP_ACTS[S.act];
        const pr = S.pri.length ? S.pri : ['comfort'];
        return a.items.map(it => ({ ...it, m: Math.round(60 + 40 * pr.reduce((t, k) => t + it.a[k], 0) / pr.length), top: pr.slice().sort((x, y) => it.a[y] - it.a[x])[0] })).sort((x, y) => y.m - x.m);
    };
    const render = () => {
        const a = NAP_ACTS[S.act], list = rank();
        $('[data-k=act]').innerHTML = Object.entries(NAP_ACTS).map(([k, v]) => `<button type="button" class="opt${S.act === k ? ' sel' : ''}" data-act="${k}" aria-pressed="${S.act === k}"><span class="th">${napSvg(NAP_ICON[k], 15)}<img src="assets/images/nap/act-${k}.jpg" alt="" onerror="this.remove()"></span><span class="ot">${v.label}</span><span class="rd"></span></button>`).join('');
        $('[data-k=pri]').innerHTML = Object.entries(NAP_PRI).map(([k, v]) => `<button type="button" class="opt${S.pri.includes(k) ? ' sel' : ''}" data-pri="${k}" aria-pressed="${S.pri.includes(k)}"><span class="ot">${v}</span><span class="ck">${S.pri.includes(k) ? napSvg('<path d="M5 12l5 5 9-10"/>', 12) : ''}</span></button>`).join('');
        $('[data-k=recs]').innerHTML = `<p class="psub">${a.label} · ${(S.pri.length ? S.pri : ['comfort']).map(k => NAP_PRI[k]).join(' + ')}</p>` + list.map((r, i) => `<button type="button" class="rc${i === S.focus ? ' open' : ''}" data-f="${i}" aria-expanded="${i === S.focus}"><span class="rt">${napShoe(r.b, r.n, 'shoe')}<span class="rtn"><small>${r.b}</small><b>${r.n}</b></span><span class="pc">${r.m}%<em>match</em></span></span><span class="mb"><i style="width:${r.m}%"></i></span><span class="rx"><span class="nrm"><span>${r.best}</span><span>$${r.price}</span></span><span class="rw">${NAP_WHY[r.top](a.noun)}</span></span></button>`).join('');
        const rows = [['comfort', 'Comfort'], ['performance', 'Performance'], ['style', 'Style']];
        const best = k => Math.max(...list.map(r => r.a[k]));
        const minP = Math.min(...list.map(r => r.price));
        $('[data-k=cmp]').innerHTML = `<div class="nch">${list.map((r, i) => `<span class="${i === S.focus ? 'f' : ''}" data-f="${i}">${napShoe(r.b, r.n, 'shoe2')}<small>${r.b}</small>${r.n.split(' ')[0]}</span>`).join('')}</div>`
            + rows.map(([k, l]) => `<div class="cu"><small${S.pri.includes(k) ? ' class="pk"' : ''}>${l}</small><div>${list.map((r, i) => `<span class="${r.a[k] === best(k) ? 'bst' : ''}${i === S.focus ? ' f' : ''}">${napDots(Math.round(r.a[k] * 5))}</span>`).join('')}</div></div>`).join('')
            + `<div class="cu"><small${S.pri.includes('budget') ? ' class="pk"' : ''}>Price</small><div>${list.map((r, i) => `<span class="npr${r.price === minP ? ' bst' : ''}${i === S.focus ? ' f' : ''}">$${r.price}</span>`).join('')}</div></div>`
            + `<p class="ncta">${list[S.focus].b} ${list[S.focus].n} · ${list[S.focus].m}% match</p>`;
    };
    const fb = () => root.querySelectorAll('img[data-fb]').forEach(im => { im.onerror = () => { im.onerror = null; im.src = im.dataset.fb; }; if (im.complete && !im.naturalWidth) im.onerror(); });
    root.addEventListener('click', e => {
        const t = e.target.closest('button,[data-f]'); if (!t || !root.contains(t)) return;
        if (t.dataset.act) { S.act = t.dataset.act; S.focus = 0; }
        else if (t.dataset.pri) { const k = t.dataset.pri, i = S.pri.indexOf(k); if (i > -1) { if (S.pri.length > 1) S.pri.splice(i, 1); } else { S.pri.push(k); if (S.pri.length > 2) S.pri.shift(); } S.focus = 0; }
        else if (t.dataset.f !== undefined) { S.focus = +t.dataset.f; }
        else if (t.id === 'napReset') { S.act = 'running'; S.pri = ['comfort']; S.focus = 0; }
        else return;
        render(); fb();
    });
    render(); fb();
}
new MutationObserver(() => {
    const el = document.querySelector('.nap2:not([data-i])');
    if (el) { el.dataset.i = 1; napInit(el); }
}).observe(document.getElementById('app'), { childList: true, subtree: true });
