// fx.js — page effects. One requestAnimationFrame loop; each effect only runs while its section is on screen.
// Hero: huge name drifting behind the portrait + colour-reveal trail (home2).  Curated: pinned scroll stage (cp1).
// Sidelines: tilted polaroids drifting sideways (sideline).  Gallery: greyscale -> colour carousel (about1).
(function () {
    'use strict';
    const RM = matchMedia('(prefers-reduced-motion:reduce)').matches, COARSE = matchMedia('(hover:none)').matches;
    const clamp = (v, a, b) => Math.min(b, Math.max(a, v)), $1 = (r, s) => r.querySelector(s), $$ = (r, s) => [...r.querySelectorAll(s)];
    let items = [], raf = 0, last = 0, mx = 0, my = 0, tx = 0, ty = 0, ptrAt = -1e9, resizers = [];
    const io = new IntersectionObserver(es => es.forEach(e => { const it = e.target._fx; if (it) it.vis = e.isIntersecting }), { rootMargin: '120px' });
    addEventListener('pointermove', e => { tx = e.clientX / innerWidth - .5; ty = e.clientY / innerHeight - .5; if (e.pointerType === 'mouse') ptrAt = performance.now() }, { passive: true });
    addEventListener('resize', () => resizers.forEach(f => f()));
    const reg = (el, tick) => { const it = { el, tick, vis: false }; el._fx = it; items.push(it); io.observe(el); return it };
    function loop(t) {
        raf = requestAnimationFrame(loop);
        const dt = Math.min(.25, (t - last) / 1000); last = t;   // real elapsed time: drift / momentum speed never depends on frame rate
        mx += (tx - mx) * Math.min(1, dt * 5); my += (ty - my) * Math.min(1, dt * 5);
        for (const it of items) if (it.vis && it.el.isConnected) it.tick(dt, t);
    }

    /* ---------- HERO ---------- */
    function initHero() {
        const h = document.getElementById('hero2'); if (!h) return;
        const start = () => { const l = document.getElementById('ld'); if (l && !l.classList.contains('go')) return setTimeout(start, 120); h.classList.add('play') }; start();
        if (RM) h.classList.add('rm');
        const rows = $$(h, '.bgrow').map((r, i) => ({ tr: r.firstElementChild, dir: i === 1 ? 1 : -1, sp: [34, 46][i] || 34, x: 0, w: 1 }));
        const measure = () => rows.forEach((o, i) => { o.w = o.tr.scrollWidth / 4; o.x = o.dir < 0 ? -o.w * ((i * .31) % 1) : -o.w * (1 - ((i * .27) % 1)) });
        measure(); resizers.push(measure);
        const port = $1(h, '.hportrait'), cv = $1(port, 'canvas'), img = $1(port, 'img');
        const ctx = cv.getContext('2d'), trail = document.createElement('canvas'), tc = trail.getContext('2d');
        let W = 2, H = 2, S = 1, px = -1, py = -1, auto = false, spr = null, SR = 1;
        const col = new Image(); col.src = img.currentSrc || img.src;
        const size = () => { const r = port.getBoundingClientRect(); S = Math.min(1.5, devicePixelRatio || 1); W = cv.width = trail.width = Math.max(2, Math.round(r.width * S)); H = cv.height = trail.height = Math.max(2, Math.round(r.height * S)); spr = null };
        size(); resizers.push(size);
        const mkSprite = () => { SR = W * .13; spr = document.createElement('canvas'); spr.width = spr.height = Math.ceil(SR * 2); const sc = spr.getContext('2d'), g = sc.createRadialGradient(SR, SR, 0, SR, SR, SR); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(.55, 'rgba(255,255,255,.6)'); g.addColorStop(1, 'rgba(255,255,255,0)'); sc.fillStyle = g; sc.fillRect(0, 0, spr.width, spr.height) };   // one pre-rendered soft dab, reused (cheap)
        const dab = (x, y) => { if (!spr) mkSprite(); tc.drawImage(spr, x - SR, y - SR) };
        const stroke = (x, y) => { if (px < 0) dab(x, y); else { const d = Math.hypot(x - px, y - py), n = Math.min(10, Math.max(1, Math.ceil(d / (W * .04)))); for (let i = 1; i <= n; i++) dab(px + (x - px) * i / n, py + (y - py) * i / n) } px = x; py = y };
        h.addEventListener('pointermove', e => { const r = port.getBoundingClientRect(); stroke((e.clientX - r.left) * S, (e.clientY - r.top) * S) }, { passive: true });
        h.addEventListener('pointerleave', () => { px = -1 });
        reg(h, (dt, t) => {
            if (!RM) rows.forEach(o => {
                o.x += o.dir * o.sp * dt; if (o.dir < 0 && o.x <= -o.w) o.x += o.w; if (o.dir > 0 && o.x >= 0) o.x -= o.w;
                o.tr.style.transform = `translate3d(${o.x.toFixed(1)}px,0,0)`;   // constant drift: nothing (hover, pointer) changes its speed
            });
            port.style.setProperty('--px', (-mx * 14).toFixed(1) + 'px'); port.style.setProperty('--py', (-my * 8).toFixed(1) + 'px');
            if (RM) return;
            const idle = t - ptrAt > 1600;                                        // no mouse: the reveal wanders on its own (touch / idle)
            if (idle !== auto) { auto = idle; px = -1 }
            if (idle) { const k = t / 1000; stroke(W * (.5 + .34 * Math.sin(k * .8)), H * (.42 + .3 * Math.sin(k * .55 + 1.3))) }
            tc.globalCompositeOperation = 'destination-out'; tc.fillStyle = 'rgba(0,0,0,.05)'; tc.fillRect(0, 0, W, H); tc.globalCompositeOperation = 'source-over';
            ctx.globalCompositeOperation = 'source-over'; ctx.clearRect(0, 0, W, H); ctx.drawImage(trail, 0, 0);
            ctx.globalCompositeOperation = 'source-in'; if (col.complete && col.naturalWidth) ctx.drawImage(col, 0, 0, W, H);
        });
    }

    /* ---------- CURATED PROJECTS (pinned, scroll-linked) ---------- */
    function initCurated() {
        const s = document.getElementById('cps'); if (!s) return;
        const its = $$(s, '.cps-item'), infos = $$(s, '.cps-info>div'), btns = $$(s, '.cps-nav button'), stage = $1(s, '.cps-stage');
        let act = -1, hov = -1;
        const set = i => {
            if (i === act) return; act = i;
            its.forEach((e, k) => { e.classList.toggle('on', k === i); e.classList.toggle('past', k < i); e.tabIndex = k === i ? 0 : -1 });
            infos.forEach((e, k) => e.classList.toggle('on', k === i));
            btns.forEach((b, k) => b.toggleAttribute('aria-current', k === i));
        };
        btns.forEach((b, k) => {
            b.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') hov = k });
            b.addEventListener('pointerleave', () => { hov = -1 });
            b.addEventListener('click', () => { const r = s.getBoundingClientRect(), total = r.height - innerHeight; scrollTo({ top: scrollY + r.top + total * ((k + .5) / its.length), behavior: RM ? 'auto' : 'smooth' }) });
        });
        stage.addEventListener('pointermove', e => { const v = $1(stage, '.cps-item.on .vp'); if (!v) return; const r = stage.getBoundingClientRect(); v.style.transform = `translate(${e.clientX - r.left - 50}px,${e.clientY - r.top - 18}px)` }, { passive: true });
        reg(s, () => {
            const r = s.getBoundingClientRect(), total = Math.max(1, r.height - innerHeight), p = clamp(-r.top / total, 0, 1);
            s.style.setProperty('--p', p.toFixed(3)); s.style.setProperty('--bar', p > .985 ? 0 : 1);
            set(hov >= 0 ? hov : Math.min(its.length - 1, Math.floor(p * its.length)));
            stage.style.setProperty('--tx', mx.toFixed(3)); stage.style.setProperty('--ty', my.toFixed(3));
        });
    }

    /* ---------- SIDELINES ---------- */
    function initSidelines() {
        const w = document.querySelector('.slx'); if (!w) return;
        const tr = w.firstElementChild, cards = [...tr.children];
        let x = 0, one = 1, cen = [], sp = 1, drag = null;
        const measure = () => { one = tr.scrollWidth / 3; cen = cards.map(c => c.offsetLeft + c.offsetWidth / 2) };
        measure(); resizers.push(measure);
        w.addEventListener('pointerdown', e => { drag = { x0: e.clientX, xs: x }; try { w.setPointerCapture(e.pointerId) } catch (_) { } w.classList.add('drag') });
        w.addEventListener('pointermove', e => { if (drag) x = drag.xs + (e.clientX - drag.x0) });
        const up = () => { drag = null; w.classList.remove('drag') }; w.addEventListener('pointerup', up); w.addEventListener('pointercancel', up);
        reg(w, dt => {
            sp += ((w.matches(':hover') ? .45 : 1) - sp) * Math.min(1, dt * 4);   // slows (never stops) under the pointer
            if (!drag && !RM) x -= 70 * sp * dt;
            while (x <= -one) x += one; while (x > 0) x -= one;
            tr.style.transform = `translate3d(${x.toFixed(1)}px,0,0)`;
            const vc = innerWidth / 2, rng = innerWidth * .26;                      // the card nearest the centre grows and straightens
            for (let i = 0; i < cards.length; i++) { const f = 1 - clamp(Math.abs(cen[i] + x - vc) / rng, 0, 1); cards[i].style.setProperty('--f', (f * f * (3 - 2 * f)).toFixed(3)) }
        });
    }

    /* ---------- ABOUT GALLERY: drag carousel with momentum ---------- */
    function initGallery() {
        const g = document.querySelector('.gal'); if (!g) return;
        const v = $1(g, '.galv'), tr = $1(g, '.galt'), cards = $$(g, '.gi'), hint = $1(g, '.gdrag');
        let x = 0, min = 0, vel = 0, drag = null, cen = [];
        const measure = () => { min = Math.min(0, v.clientWidth - tr.scrollWidth); cen = cards.map(c => c.offsetLeft + c.offsetWidth / 2); x = clamp(x, min, 0) };
        measure(); resizers.push(measure);
        const step = () => cards[0].offsetWidth + (parseFloat(getComputedStyle(tr).columnGap) || 16);
        v.addEventListener('pointerdown', e => { drag = { x0: e.clientX, xs: x, lx: e.clientX, lt: performance.now() }; vel = 0; try { v.setPointerCapture(e.pointerId) } catch (_) { } v.classList.add('drag') });
        v.addEventListener('pointermove', e => {
            if (hint) { const r = v.getBoundingClientRect(); hint.style.transform = `translate(${e.clientX - r.left - 40}px,${e.clientY - r.top - 18}px)` }
            if (!drag) return;
            const now = performance.now(), dx = e.clientX - drag.lx; let nx = drag.xs + (e.clientX - drag.x0);
            if (nx > 0) nx *= .45; else if (nx < min) nx = min + (nx - min) * .45;     // rubber band at both ends
            x = nx; vel = .8 * vel + .2 * (dx / Math.max(1, now - drag.lt) * 1000); drag.lx = e.clientX; drag.lt = now;
        });
        const up = () => { drag = null; v.classList.remove('drag') }; v.addEventListener('pointerup', up); v.addEventListener('pointercancel', up);
        v.addEventListener('keydown', e => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); x = clamp(x + (e.key === 'ArrowRight' ? -1 : 1) * step(), min, 0); vel = 0 } });
        reg(g, dt => {
            if (!drag) {
                if (Math.abs(vel) > 8) { x += vel * dt; vel *= Math.pow(.06, dt) } else vel = 0;       // momentum with friction
                if (x > 0) { x += (0 - x) * Math.min(1, dt * 10); vel = 0 } else if (x < min) { x += (min - x) * Math.min(1, dt * 10); vel = 0 }
            }
            tr.style.transform = `translate3d(${x.toFixed(1)}px,0,0)`;
            if (COARSE) { const c = v.clientWidth / 2; let best = 0, bd = 1e9; for (let i = 0; i < cards.length; i++) { const d = Math.abs(cen[i] + x - c); if (d < bd) { bd = d; best = i } } cards.forEach((el, i) => el.classList.toggle('on', i === best)) }
        });
    }

    /* ---------- WORK ROWS ---------- */
    function initWork() {
        $$(document, '.pr .im2').forEach(a => {
            const v = $1(a, '.vp');
            a.addEventListener('pointermove', e => { const r = a.getBoundingClientRect(); a.style.setProperty('--tx', ((e.clientX - r.left) / r.width - .5).toFixed(3)); a.style.setProperty('--ty', ((e.clientY - r.top) / r.height - .5).toFixed(3)); if (v) v.style.transform = `translate(${e.clientX - r.left - 50}px,${e.clientY - r.top - 18}px)` }, { passive: true });
            a.addEventListener('pointerleave', () => { a.style.setProperty('--tx', 0); a.style.setProperty('--ty', 0) });
        });
    }

    window.fxInit = function () { items = []; resizers = []; initHero(); initCurated(); initSidelines(); initGallery(); initWork(); if (!raf) raf = requestAnimationFrame(loop) };
})();
