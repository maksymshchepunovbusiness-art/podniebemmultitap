import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-garden.jpg";
import interiorImg from "@/assets/interior.jpg";
import gardenImg from "@/assets/garden.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pod Niebem · Multitap — Cieszyn" },
      { name: "description", content: "Ukryty raj w sercu Cieszyna. 10 kranów, czeskie piwa, ogród i klimat, którego nie zapomnisz." },
      { property: "og:title", content: "Pod Niebem · Multitap — Cieszyn" },
      { property: "og:description", content: "Ukryty raj w sercu Cieszyna. 10 kranów, czeskie piwa, ogród i klimat, którego nie zapomnisz." },
      { property: "og:url", content: "https://podniebemmultitap.lovable.app/" },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["BarOrPub", "LocalBusiness"],
          "@id": "https://podniebemmultitap.lovable.app/#business",
          "name": "Pod Niebem – Multitap",
          "alternateName": "Pod Niebem",
          "url": "https://podniebemmultitap.lovable.app/",
          "image": "https://podniebemmultitap.lovable.app/og-image.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Szeroka 3",
            "addressLocality": "Cieszyn",
            "postalCode": "43-400",
            "addressRegion": "Śląskie",
            "addressCountry": "PL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 49.7491876,
            "longitude": 18.6345334
          },
          "hasMap": "https://www.google.com/maps/place/Pod+Niebem+-+Multitap",
          "sameAs": [
            "https://www.google.com/maps/place/Pod+Niebem+-+Multitap/@49.7489204,18.6323319,14z/data=!4m18!1m8!2m7!1sRestauracje!3m5!2sRestauracja+Zajazd+Trzech+Braci!3s0x471403e39cc743bb:0x4cd965055f3adfb2!4m2!1d18.6358901!2d49.7623585!3m8!1s0x4714035f4516af1d:0x54f94afdc14b75ac!8m2!3d49.7491876!4d18.6345334!9m1!1b1!15sCgtSZXN0YXVyYWNqZVoNIgtyZXN0YXVyYWNqZZIBC2JlZXJfZ2FyZGVumgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ0NFRtUnRUa2hWVldNelVURk9WMW93U1RKaWFUQXdVbnBDUmxsclJSQULgAQD6AQQIABBA!16s%2Fg%2F11kqclk0j4?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
          ],
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
              "opens": "15:00",
              "closes": "23:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Friday",
              "opens": "13:00",
              "closes": "02:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "13:00",
              "closes": "03:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "13:00",
              "closes": "23:00"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": 4.8,
            "reviewCount": 158,
            "bestRating": 5,
            "worstRating": 1
          },
          "priceRange": "$$",
          "servesCuisine": ["Polish", "Czech", "Craft Beer"],
          "paymentAccepted": ["Cash", "Credit Card"],
          "currenciesAccepted": "PLN"
        }),
      },
    ],
  }),
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function LeafSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <path
        d="M100 10 C 60 40, 30 90, 50 160 C 90 130, 140 110, 180 50 C 150 35, 125 22, 100 10 Z"
        fill="currentColor"
        opacity="0.18"
      />
      <path d="M95 30 Q 100 100, 70 150" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
    </svg>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-wide text-cream">
          Pod Niebem <span className="text-brass">·</span> <span className="text-muted-foreground text-sm">Multitap</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#story" className="hover:text-brass transition-colors">Nasza historia</a>
          <a href="#offer" className="hover:text-brass transition-colors">Oferta</a>
          <a href="#garden" className="hover:text-brass transition-colors">Ogród</a>
          <a href="#reviews" className="hover:text-brass transition-colors">Opinie</a>
          <a href="#visit" className="hover:text-brass transition-colors">Kontakt</a>
        </div>
        <a href="#reserve" className="btn-brass px-4 py-2 rounded-sm text-xs uppercase tracking-[0.2em] font-medium">
          Rezerwuj
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[var(--gradient-amber)] mix-blend-soft-light animate-flicker" />
        <div className="absolute inset-0 bg-[var(--gradient-vignette)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-drift">
        <p className="text-brass text-xs uppercase tracking-[0.4em] mb-8 italic font-display">
          Cieszyn · Multitap · Est. <span className="not-italic">∞</span>
        </p>
        <h1 className="font-display text-7xl md:text-9xl lg:text-[10rem] leading-[0.9] text-cream text-balance">
          Pod <em className="text-brass-glow not-italic">Niebem</em>
        </h1>
        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-cream/70">
          Multitap · Cieszyn
        </p>
        <p className="mt-10 text-lg md:text-xl text-cream/80 max-w-2xl mx-auto leading-relaxed text-balance font-light">
          Ukryty raj w sercu miasta. Rzemieślnicze piwa, ciepłe wieczory
          i ogród, który zapiera dech w piersiach.
        </p>
        <p className="mt-2 text-sm italic text-muted-foreground font-display">
          A hidden paradise in the heart of the city.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#reserve" className="btn-brass px-10 py-4 rounded-sm uppercase tracking-[0.25em] text-sm font-medium">
            Zarezerwuj stolik
          </a>
          <a href="#offer" className="btn-ghost-brass px-10 py-4 rounded-sm uppercase tracking-[0.25em] text-sm">
            Zobacz nasze krany
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brass/60 text-xs uppercase tracking-[0.4em] animate-pulse">
        ↓ Wejdź
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="relative py-32 px-6 lg:px-12 overflow-hidden">
      <LeafSVG className="absolute -left-20 top-10 w-96 text-sage" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative">
        <div className="reveal relative">
          <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-[var(--shadow-warm)] relative">
            <img src={interiorImg} alt="Wnętrze baru Pod Niebem" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-card border border-brass/40 px-6 py-5 rounded-sm shadow-[var(--shadow-brass)]">
            <div className="text-brass text-2xl font-display">4.8 <span className="text-brass-glow">★</span></div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">158 opinii</div>
          </div>
        </div>

        <div className="reveal">
          <p className="text-brass text-xs uppercase tracking-[0.4em] mb-6 italic font-display">Nasza historia</p>
          <h2 className="text-5xl md:text-6xl text-cream leading-[1.05] text-balance">
            Niepozorne z zewnątrz. <em className="text-brass-glow">Niezapomniane</em> w środku.
          </h2>
          <p className="mt-3 text-base italic text-muted-foreground font-display">
            Unassuming from the outside. Unforgettable once you're in.
          </p>
          <div className="mt-10 space-y-6 text-cream/80 leading-relaxed text-lg font-light">
            <p>
              Mijasz nas codziennie i pewnie nawet nie wiesz, że istniejemy.
              Otwierasz drzwi — i nagle jesteś gdzie indziej. Ciepłe światło, drewno,
              zieleń, dźwięk nalewanego piwa.
            </p>
            <p>
              A potem ogród. Schowany między kamienicami zakątek, który ludzie
              porównują do raju. Dziesięć kranów z piwem rzemieślniczym i czeskimi
              klasykami. Wino, koktajle, jedzenie, koce na chłodne wieczory.
            </p>
            <p className="text-brass-glow font-display italic text-xl">
              Miejsce na randkę, urodziny, leniwy piątek — i wszystko pomiędzy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const offers = [
  {
    icon: "🍺",
    title: "10 Kranów",
    en: "Ten craft taps",
    body: "Rotująca selekcja piw rzemieślniczych i czeskich klasyków. Zawsze coś nowego do odkrycia.",
  },
  {
    icon: "🌿",
    title: "Sekretny Ogród",
    en: "The secret garden",
    body: "Nasz dziedziniec to najpiękniejszy ogródek piwny w Cieszynie. Zielony, świetlisty, wyjątkowy.",
  },
  {
    icon: "🎂",
    title: "Imprezy Prywatne",
    en: "Private events",
    body: "Urodziny, rezerwacje grupowe — otworzymy lokal tylko dla Ciebie. Nawet w dni zamknięte.",
  },
  {
    icon: "🍽️",
    title: "Jedzenie & Drinki",
    en: "Food & drinks",
    body: "Przekąski, wieczory grillowe, wino z bzu, koktajle i ciepłe koce, gdy robi się chłodno.",
  },
];

function Offer() {
  return (
    <section id="offer" className="relative py-32 px-6 lg:px-12 bg-secondary/40 grain">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <p className="text-brass text-xs uppercase tracking-[0.4em] mb-6 italic font-display">Co oferujemy</p>
          <h2 className="text-5xl md:text-6xl text-cream text-balance">
            Wszystko, czego <em className="text-brass-glow">potrzebujesz</em>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((o, i) => (
            <div
              key={o.title}
              className="reveal group relative bg-card border border-border p-8 rounded-sm hover:border-brass/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-warm)]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <LeafSVG className="absolute -top-4 -right-4 w-24 text-sage opacity-30 group-hover:opacity-60 group-hover:rotate-12 transition-all duration-700" />
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{o.icon}</div>
              <h3 className="text-2xl text-cream mb-1">{o.title}</h3>
              <p className="text-xs uppercase tracking-[0.25em] text-brass/70 italic font-display mb-5">{o.en}</p>
              <p className="text-muted-foreground leading-relaxed text-sm font-light">{o.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  { quote: "Jak raj schowany między kamienicami — dokładnie to, czego potrzebowałam w ten ciepły dzień.", author: "Alina D." },
  { quote: "Najpiękniejszy ogród piwny w Cieszynie. Atmosfera zapiera dech w piersiach.", author: "Marcin W." },
  { quote: "Obsługa przyniosła nam koce, żebyśmy nie zmarzli. To takie miejsce.", author: "Krystian K." },
  { quote: "Otworzyli lokal tylko dla naszej grupy w dzień zamknięty. Wyjątkowi.", author: "Patrycja K." },
  { quote: "Karolina, Sandra i Piotrek — uśmiechnięci mimo natłoku, szybcy i serdeczni.", author: "Wiktoria K." },
];

function Reviews() {
  return (
    <section id="reviews" className="relative py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <p className="text-brass text-xs uppercase tracking-[0.4em] mb-6 italic font-display">Opinie</p>
          <h2 className="text-5xl md:text-6xl text-cream text-balance">
            Co mówią <em className="text-brass-glow">goście</em>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <figure
              key={r.author}
              className={`reveal relative bg-card/60 border border-border p-10 rounded-sm hover:border-brass/40 transition-all ${
                i === 0 ? "lg:row-span-2 lg:col-span-1" : ""
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute top-4 left-6 font-display text-brass/40 text-7xl leading-none">"</div>
              <div className="text-brass mb-6 tracking-widest">★ ★ ★ ★ ★</div>
              <blockquote className="font-display italic text-xl md:text-2xl text-cream/90 leading-snug text-balance">
                {r.quote}
              </blockquote>
              <figcaption className="mt-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                — {r.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Garden() {
  return (
    <section id="garden" className="relative py-40 px-6 overflow-hidden grain">
      <div className="absolute inset-0">
        <img src={gardenImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        <div className="absolute inset-0 bg-[var(--gradient-amber)] mix-blend-soft-light" />
      </div>

      <LeafSVG className="absolute top-10 right-10 w-64 text-brass animate-flicker" />
      <LeafSVG className="absolute bottom-20 left-10 w-80 text-sage rotate-180" />

      <div className="relative max-w-3xl mx-auto text-center reveal">
        <p className="text-brass text-xs uppercase tracking-[0.4em] mb-6 italic font-display">Ogród</p>
        <h2 className="font-display text-6xl md:text-8xl text-cream leading-[0.95] text-balance">
          Wyjdź na zewnątrz. <br />
          <em className="text-brass-glow">Odetchnij.</em>
        </h2>
        <p className="mt-6 text-base italic text-muted-foreground font-display">Step outside. Breathe.</p>
        <p className="mt-10 text-xl text-cream/85 leading-relaxed font-light text-balance">
          Nasz ogród to nie zwykły taras — to cel sam w sobie.
          Plac zabaw dla dzieci, miejsce dla grup, cisza od miejskiego zgiełku.
        </p>
      </div>
    </section>
  );
}

function Reserve() {
  const [sent, setSent] = useState(false);
  return (
    <section id="reserve" className="relative py-32 px-6 lg:px-12 bg-secondary/40">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div className="reveal">
          <p className="text-brass text-xs uppercase tracking-[0.4em] mb-6 italic font-display">Wydarzenia</p>
          <h2 className="text-5xl md:text-6xl text-cream leading-[1.05] text-balance">
            Zrób to <em className="text-brass-glow">swoim</em> miejscem.
          </h2>
          <p className="mt-3 text-base italic text-muted-foreground font-display">Make it yours.</p>
          <p className="mt-8 text-lg text-cream/80 leading-relaxed font-light">
            Urodziny? Impreza firmowa? Załatwimy to — nawet w dni, gdy jesteśmy zamknięci.
          </p>
          <p className="mt-6 text-sm text-muted-foreground italic">
            Organizujemy też wieczory karaoke, grille z gościnnymi szefami kuchni i muzykę na żywo.
          </p>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="reveal bg-card border border-border p-8 rounded-sm space-y-5 shadow-[var(--shadow-warm)]"
        >
          {sent ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-2xl text-cream mb-2">Dziękujemy</h3>
              <p className="text-muted-foreground">Odezwiemy się w ciągu 24 godzin.</p>
            </div>
          ) : (
            <>
              <div>
                <label className="block text-xs uppercase tracking-[0.25em] text-brass/80 mb-2">Imię</label>
                <input required maxLength={80} className="w-full bg-input/40 border border-border focus:border-brass outline-none px-4 py-3 rounded-sm text-cream" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.25em] text-brass/80 mb-2">Data</label>
                  <input required type="date" className="w-full bg-input/40 border border-border focus:border-brass outline-none px-4 py-3 rounded-sm text-cream" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.25em] text-brass/80 mb-2">Osób</label>
                  <input required type="number" min={1} max={100} className="w-full bg-input/40 border border-border focus:border-brass outline-none px-4 py-3 rounded-sm text-cream" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.25em] text-brass/80 mb-2">Wiadomość</label>
                <textarea rows={4} maxLength={500} className="w-full bg-input/40 border border-border focus:border-brass outline-none px-4 py-3 rounded-sm text-cream resize-none" />
              </div>
              <button type="submit" className="btn-brass w-full py-4 rounded-sm uppercase tracking-[0.25em] text-sm font-medium">
                Wyślij prośbę
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="relative py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div className="reveal">
          <p className="text-brass text-xs uppercase tracking-[0.4em] mb-6 italic font-display">Znajdź nas</p>
          <h2 className="text-5xl md:text-6xl text-cream leading-[1.05]">
            Cieszyn. <br />
            <em className="text-brass-glow">Pod gołym niebem.</em>
          </h2>

          <div className="mt-12 space-y-6 text-cream/85">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">Adres</div>
              <div className="text-xl font-display">Szeroka 3, 43-400 Cieszyn</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">Godziny</div>
              <div className="font-display text-cream/90 space-y-1 mt-2">
                <div className="flex justify-between gap-8"><span>Poniedziałek</span><span className="text-brass-glow">15:00–23:00</span></div>
                <div className="flex justify-between gap-8"><span>Wtorek</span><span className="text-brass-glow">15:00–23:00</span></div>
                <div className="flex justify-between gap-8"><span>Środa</span><span className="text-brass-glow">15:00–23:00</span></div>
                <div className="flex justify-between gap-8"><span>Czwartek</span><span className="text-brass-glow">15:00–23:00</span></div>
                <div className="flex justify-between gap-8"><span>Piątek</span><span className="text-brass-glow">13:00–02:00</span></div>
                <div className="flex justify-between gap-8"><span>Sobota</span><span className="text-brass-glow">13:00–03:00</span></div>
                <div className="flex justify-between gap-8"><span>Niedziela</span><span className="text-brass-glow">13:00–23:00</span></div>
              </div>
            </div>
              <a href="https://www.google.com/maps/place/Pod+Niebem+-+Multitap/@49.7489204,18.6323319,14z/data=!4m18!1m8!2m7!1sRestauracje!3m5!2sRestauracja+Zajazd+Trzech+Braci!3s0x471403e39cc743bb:0x4cd965055f3adfb2!4m2!1d18.6358901!2d49.7623585!3m8!1s0x4714035f4516af1d:0x54f94afdc14b75ac!8m2!3d49.7491876!4d18.6345334!9m1!1b1!15sCgtSZXN0YXVyYWNqZVoNIgtyZXN0YXVyYWNqZZIBC2JlZXJfZ2FyZGVumgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ0NFRtUnRUa2hWVldNelVURk9WMW93U1RKaWFUQXdVbnBDUmxsclJSQULgAQD6AQQIABBA!16s%2Fg%2F11kqclk0j4?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Google Reviews" className="btn-ghost-brass px-5 h-12 rounded-full grid place-items-center text-xs uppercase tracking-[0.2em]">
                4.8 ★ Google
              </a>
          </div>
        </div>

        <a
          href="https://www.google.com/maps/place/Pod+Niebem+-+Multitap/@49.7489204,18.6323319,14z/data=!4m16!1m8!2m7!1sRestauracje!3m5!2sRestauracja+Zajazd+Trzech+Braci!3s0x471403e39cc743bb:0x4cd965055f3adfb2!4m2!1d18.6358901!2d49.7623585!3m6!1s0x4714035f4516af1d:0x54f94afdc14b75ac!8m2!3d49.7491876!4d18.6345334!15sCgtSZXN0YXVyYWNqZVoNIgtyZXN0YXVyYWNqZZIBC2JlZXJfZ2FyZGVumgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ0NFRtUnRUa2hWVldNelVURk9WMW93U1RKaWFUQXdVbnBDUmxsclJSQULgAQD6AQQIABBA!16s%2Fg%2F11kqclk0j4?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="reveal aspect-square md:aspect-auto rounded-sm overflow-hidden border border-border shadow-[var(--shadow-warm)] relative grain group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-forest to-espresso" />
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: "radial-gradient(circle at 30% 40%, var(--brass) 1px, transparent 1px), radial-gradient(circle at 70% 60%, var(--brass) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📍</div>
              <div className="text-brass-glow font-display text-2xl">Cieszyn</div>
              <div className="text-muted-foreground text-sm uppercase tracking-[0.3em] mt-2">Pod Niebem</div>
              <div className="mt-4 text-xs uppercase tracking-[0.2em] text-brass/70 opacity-0 group-hover:opacity-100 transition-opacity">Otwórz w Google Maps →</div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-display text-2xl text-cream">
            Pod Niebem <span className="text-brass">·</span> Multitap
          </div>
          <p className="text-sm italic text-muted-foreground font-display mt-1">
            Pod gołym niebem. Wśród przyjaciół. <span className="not-italic text-brass/50">·</span> Under the sky. Among friends.
          </p>
        </div>
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          © {new Date().getFullYear()} Pod Niebem · Cieszyn
        </div>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Story />
      <Offer />
      <Reviews />
      <Garden />
      <Reserve />
      <Visit />
      <Footer />
    </main>
  );
}
