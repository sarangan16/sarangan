import { useEffect } from "react";

// xray lens - follows cursor, wraps around targets, tours by itself when idle
export default function useLens({ areaRef, clipRef, edgeRef, readRef, getTargets, delay = 1200 }) {
  useEffect(() => {
    const area = areaRef.current;
    const clip = clipRef.current;
    if (!area || !clip) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const N = 72;
    const s = { x: 0, y: 0, w: 0, h: 0, n: 2, vx: 0, vy: 0 };
    let mx = 0;
    let my = 0;
    let last = -1e9;
    let tour = -1;
    let tourAt = 0;
    let raf = 0;
    let count = 0;
    let running = false;
    const t0 = performance.now();

    const rel = (el) => {
      const a = area.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      return { x: r.left - a.left + r.width / 2, y: r.top - a.top + r.height / 2, w: r.width, h: r.height };
    };
    const wrap = (r) => ({ x: r.x, y: r.y, w: r.w + 40, h: r.h + 30, n: 10 });

    const pickTarget = (now) => {
      const targets = getTargets().filter(Boolean);
      const a = area.getBoundingClientRect();

      // nobody moving the mouse, do a little tour
      if (now - last > 2200) {
        if (now - tourAt > 2300) {
          tour = (tour + 1) % (targets.length + 1);
          tourAt = now;
        }
        if (tour < targets.length) return wrap(rel(targets[tour]));
        const t = (now - t0) / 1000;
        return { x: a.width * (0.5 + 0.3 * Math.sin(t * 0.9)), y: a.height * (0.5 + 0.22 * Math.sin(t * 1.3)), w: 170, h: 170, n: 2 };
      }

      for (const el of targets) {
        const r = rel(el);
        if (Math.abs(mx - r.x) < r.w / 2 + 18 && Math.abs(my - r.y) < r.h / 2 + 18) {
          const t = wrap(r);
          t.x += (mx - r.x) * 0.06;
          t.y += (my - r.y) * 0.06;
          return t;
        }
      }
      return { x: mx, y: my, w: 170, h: 170, n: 2 };
    };

    const draw = (T) => {
      const px = s.x;
      const py = s.y;
      s.x += (T.x - s.x) * 0.16;
      s.y += (T.y - s.y) * 0.16;
      s.w += (T.w - s.w) * 0.14;
      s.h += (T.h - s.h) * 0.14;
      s.n += (T.n - s.n) * 0.12;
      s.vx += (s.x - px - s.vx) * 0.25;
      s.vy += (s.y - py - s.vy) * 0.25;

      // stretch in the direction it moves, less when wrapped around something
      const k = Math.min(Math.hypot(s.vx, s.vy) / 30, 0.7) * (s.n < 4 ? 1 : 0.2);
      const ang = Math.atan2(s.vy, s.vx);
      const ca = Math.cos(ang);
      const sa = Math.sin(ang);
      const e = 2 / s.n;

      const clipPts = [];
      const svgPts = [];
      for (let i = 0; i < N; i++) {
        const th = (i / N) * Math.PI * 2;
        const c = Math.cos(th);
        const sn = Math.sin(th);
        // superellipse, n=2 circle, n=10 rounded box
        const x0 = Math.sign(c) * Math.pow(Math.abs(c), e) * (s.w / 2);
        const y0 = Math.sign(sn) * Math.pow(Math.abs(sn), e) * (s.h / 2);
        const u = (x0 * ca + y0 * sa) * (1 + k);
        const v = (-x0 * sa + y0 * ca) / (1 + k * 0.5);
        const x = (s.x + u * ca - v * sa).toFixed(1);
        const y = (s.y + u * sa + v * ca).toFixed(1);
        clipPts.push(`${x}px ${y}px`);
        svgPts.push(`${x},${y}`);
      }
      clip.style.clipPath = `polygon(${clipPts.join(",")})`;
      if (edgeRef.current) edgeRef.current.setAttribute("points", svgPts.join(" "));

      const read = readRef.current;
      if (read) {
        read.style.transform = `translate(${(s.x - s.w / 2 + 12).toFixed(1)}px, ${(s.y + s.h / 2 - 32).toFixed(1)}px)`;
        if (++count % 5 === 0) {
          read.textContent = `X ${Math.round(s.x)}  Y ${Math.round(s.y)}  ·  ${Math.round(s.w)}×${Math.round(s.h)}`;
        }
      }
    };

    const loop = (now) => {
      draw(pickTarget(now));
      raf = requestAnimationFrame(loop);
    };

    const play = () => {
      if (running || reduce) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const pause = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMove = (e) => {
      const a = area.getBoundingClientRect();
      mx = e.clientX - a.left;
      my = e.clientY - a.top;
      last = performance.now();
    };
    const onLeave = () => {
      last = -1e9;
    };

    const a = area.getBoundingClientRect();
    s.x = a.width * 0.4;
    s.y = a.height * 0.5;

    // only run while hero is on screen
    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? play() : pause()));

    const timer = setTimeout(() => {
      if (reduce) {
        const name = getTargets()[0];
        if (!name) return;
        Object.assign(s, wrap(rel(name)));
        draw(s);
        return;
      }
      io.observe(area);
    }, delay);

    area.addEventListener("pointermove", onMove);
    area.addEventListener("pointerdown", onMove);
    area.addEventListener("pointerleave", onLeave);

    return () => {
      clearTimeout(timer);
      pause();
      io.disconnect();
      area.removeEventListener("pointermove", onMove);
      area.removeEventListener("pointerdown", onMove);
      area.removeEventListener("pointerleave", onLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
