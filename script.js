const PROFILE = {
  name: "Rizky Nurahman",
  role: "Pengembang perangkat lunak",
  intro: "Saya membuat aplikasi web, API, dan otomasi, dari server Linux sampai sistem trading.",
  about: "rnpproject adalah ruang kerja saya untuk riset, otomasi, dan pengembangan perangkat lunak.",
  photo: "https://avatars.githubusercontent.com/u/143045891?v=4",
  focus: [
    { t: "Web", d: "Aplikasi web, API, dan layanan pendukungnya." },
    { t: "Bot dan otomasi", d: "Bot, skrip, dan alur kerja untuk pekerjaan berulang." },
    { t: "Open source", d: "Kode terbuka dengan lisensi yang jelas." },
    { t: "Riset", d: "Eksperimen dan catatan seputar komputasi kuantum." }
  ],
  stack: ["Python", "TypeScript", "Shell", "FastAPI", "Next.js", "Linux", "Cloudflare", "Vercel"],
  projects: [
    { title: "Algentra Capital", desc: "Platform trading berbasis AI. Core API FastAPI berjalan di Windows Server dengan Supabase PostgreSQL dan Cloudflare Tunnel, sementara klien web disajikan lewat Next.js di Vercel. Mendukung managed copy trading pada MetaTrader 5.", tags: ["Python", "FastAPI", "Next.js", "Supabase"], url: "https://github.com/rnpproject/algentraCapitalProject" },
    { title: "open-vpn-server", desc: "Server VPN untuk mengelola akun OpenVPN, SSH, dan Xray melalui CLI, menu interaktif, atau REST API. Dilengkapi registry SQLite, pengaturan masa aktif, dan pembatasan sesi.", tags: ["Shell", "Python", "FastAPI", "SQLite"], url: "https://github.com/rnpproject/open-vpn-server" },
    { title: "open-vpn-web", desc: "Portal publik untuk membuat akun VPN lewat API server, dengan kuota harian, pembatasan per IP, verifikasi Turnstile, dan portal admin.", tags: ["TypeScript", "Next.js", "Oracle NoSQL", "Vercel"], url: "https://github.com/rnpproject/open-vpn-web" },
    { title: "facebook-tools", desc: "Kumpulan skrip dan bot untuk Facebook, ditulis dengan JavaScript dan Python.", tags: ["JavaScript", "Python"], url: "https://github.com/rnpproject/facebook-tools" }
  ]
};

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeUrl = u => /^https?:\/\//i.test(u) ? u : "";

document.title = PROFILE.name + " – rnpproject";
$("role").textContent = PROFILE.role;
$("name").textContent = PROFILE.name;
$("intro").textContent = PROFILE.intro;
$("aboutText").textContent = PROFILE.about;

const initials = PROFILE.name.split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();
const placeholder = "data:image/svg+xml," + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><rect width="72" height="72" fill="#e4e7e3"/><text x="36" y="45" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="26" fill="#161a17">${initials}</text></svg>`);
const img = $("photo");
img.onerror = () => { img.onerror = null; img.src = placeholder; };
img.src = PROFILE.photo || placeholder;

$("focus").innerHTML = PROFILE.focus.map(f => `<dt>${esc(f.t)}</dt><dd>${esc(f.d)}</dd>`).join("");
$("stack").textContent = PROFILE.stack.join(" · ");

$("projects").innerHTML = PROFILE.projects.map(p => {
  const url = safeUrl(p.url);
  const title = url ? `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(p.title)}</a>` : esc(p.title);
  return `<article class="proj"><h3>${title}</h3><p>${esc(p.desc)}</p><p class="meta">${p.tags.map(esc).join(" · ")}</p></article>`;
}).join("");

$("foot").textContent = `© ${new Date().getFullYear()} ${PROFILE.name}`;