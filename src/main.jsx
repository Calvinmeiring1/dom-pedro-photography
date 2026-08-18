import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowDown, ArrowRight, Instagram, Mail, Menu, X, Camera, Phone } from "lucide-react";
import "./styles.css";

const images = {
  hero: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=88",
  boudoir: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=1000&q=88",
  wedding: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=88",
  family: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1000&q=88",
  portrait: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=88",
  dom_pedro: "/dom-pedro.jpg",
  detail: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=88",
  couple: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=88",
  family2: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1000&q=88",
  boudoir2: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=88"
};

const navItems = [
  ["Home", "home"],
  ["Boudoir", "boudoir"],
  ["Weddings", "weddings"],
  ["Family", "family"],
  ["About", "about"],
  ["Contact", "contact"]
];

function App() {
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const go = (id) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const portfolio = [
    ["Boudoir", images.boudoir2, "Boudoir"],
    ["Weddings", images.couple, "Weddings"],
    ["Family", images.family2, "Family"],
    ["Boudoir", images.portrait, "Boudoir"],
    ["Weddings", images.detail, "Weddings"],
    ["Family", images.family, "Family"]
  ];

  const shown = filter === "All" ? portfolio : portfolio.filter(x => x[0] === filter);

  return (
    <div>
      <header className="nav">
        <button className="brand" onClick={() => go("home")}>
          <img src="/logo.png" alt="Dom Pedro Photography" style={{ height: "40px", width: "auto" }} />
        </button>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => go(id)}>{label}</button>
          ))}
          <button className="nav-cta" onClick={() => go("contact")}>Enquire</button>
        </nav>
        <button className="menu" aria-label="Open menu" onClick={() => setMenu(!menu)}>
          {menu ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </header>

      <main>
        <section id="home" className="hero">
          <img src={images.hero} alt="Editorial portrait" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow light">BOUDOIR • WEDDINGS • FAMILY</p>
            <h1>Photographs<br/><i>that feel like you.</i></h1>
            <p className="hero-copy">Intimate, honest imagery for the moments you never want to forget.</p>
            <button className="outline-btn" onClick={() => go("portfolio")}>Explore the work <ArrowDown size={17}/></button>
          </div>
          <div className="hero-scroll">SCROLL TO EXPLORE <ArrowDown size={15}/></div>
        </section>

        <section className="intro section">
          <div>
            <p className="eyebrow">DOM PEDRO PHOTOGRAPHY</p>
            <h2>Beautifully<br/><i>unposed.</i></h2>
          </div>
          <div className="intro-copy">
            <p>Photography should feel less like a photoshoot and more like a memory in the making.</p>
            <p>From intimate boudoir sessions to full wedding days and the beautiful chaos of family life, I create photographs with warmth, movement and soul.</p>
            <button className="text-btn" onClick={() => go("about")}>Meet the photographer <ArrowRight size={16}/></button>
          </div>
        </section>

        <section id="portfolio" className="portfolio section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED STORIES</p>
              <h2>A glimpse into<br/><i>the gallery.</i></h2>
            </div>
            <div className="filters">
              {["All","Boudoir","Weddings","Family"].map(x =>
                <button className={filter === x ? "active" : ""} key={x} onClick={() => setFilter(x)}>{x}</button>
              )}
            </div>
          </div>
          <div className="gallery">
            {shown.map(([type, src], i) => (
              <figure className={"gallery-item item-" + i} key={src}>
                <img src={src} alt={`${type} photography`} loading="lazy"/>
                <figcaption><span>{type}</span><span>View story ↗</span></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="boudoir" className="feature section">
          <div className="feature-image"><img src={images.boudoir} alt="Boudoir portrait" loading="lazy"/></div>
          <div className="feature-copy">
            <p className="eyebrow">01 / BOUDOIR</p>
            <h2>For the woman<br/><i>becoming.</i></h2>
            <p>A boudoir session is a little rebellion against waiting for the “right” body, the “right” time, or the next version of yourself.</p>
            <p>Come exactly as you are. I’ll guide you through every pose, creating imagery that feels powerful, feminine and completely yours.</p>
            <button className="text-btn" onClick={() => go("contact")}>Enquire about boudoir <ArrowRight size={16}/></button>
          </div>
        </section>

        <section id="weddings" className="feature section reverse">
          <div className="feature-image"><img src={images.wedding} alt="Wedding couple" loading="lazy"/></div>
          <div className="feature-copy">
            <p className="eyebrow">02 / WEDDINGS</p>
            <h2>Your day,<br/><i>honestly told.</i></h2>
            <p>Big moments, tiny glances, happy tears, wild dance floors and all the in-between. Your wedding gallery should bring you right back to how it felt.</p>
            <button className="text-btn" onClick={() => go("contact")}>Wedding enquiries <ArrowRight size={16}/></button>
          </div>
        </section>

        <section id="family" className="feature section">
          <div className="feature-image"><img src={images.family} alt="Family outdoors" loading="lazy"/></div>
          <div className="feature-copy">
            <p className="eyebrow">03 / FAMILY</p>
            <h2>The ordinary<br/><i>is extraordinary.</i></h2>
            <p>Families change quickly. These sessions are relaxed, playful and focused on connection rather than perfect smiles.</p>
            <button className="text-btn" onClick={() => go("contact")}>Plan a family session <ArrowRight size={16}/></button>
          </div>
        </section>

        <section id="about" className="about section">
          <div className="about-image"><img src={images.dom_pedro} alt="Photographer portrait" loading="lazy"/></div>
          <div className="about-copy">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>Hi, I'm<br/><i>Dom Pedro.</i></h2>
            <p>I’m a people photographer drawn to honest connection, beautiful light and the stories hiding in the details.</p>
            <p>My approach is calm, encouraging and gently guided. You don’t need to know how to pose. That’s my job. You just need to show up as yourself.</p>
            <div className="stats">
              <div><strong>300+</strong><span>Sessions</span></div>
              <div><strong>10+</strong><span>Years creating</span></div>
              <div><strong>100%</strong><span>You, authentically</span></div>
            </div>
          </div>
        </section>

        <section className="quote">
          <Camera size={25}/>
          <blockquote>“The photographs are beautiful because they feel like <i>us</i>, not a version of us trying to pose.”</blockquote>
          <span>A DOM PEDRO COUPLE</span>
        </section>

        <section id="contact" className="contact section">
          <div className="contact-head">
            <p className="eyebrow">LET'S MAKE SOMETHING BEAUTIFUL</p>
            <h2>Your story<br/><i>starts here.</i></h2>
            <p>Tell me a little about what you’re planning and I’ll be in touch with next steps, availability and session details.</p>
          </div>
          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Thank you! Please email hello@dompedrophotography.com or WhatsApp +27 68 633 0172 to complete your enquiry."); }}>
            <div className="two"><label>Name<input required placeholder="Your name"/></label><label>Email<input required type="email" placeholder="you@example.com"/></label></div>
            <div className="two"><label>I'm interested in<select defaultValue="Boudoir"><option>Boudoir</option><option>Wedding</option><option>Family</option></select></label><label>Preferred date<input type="date"/></label></div>
            <label>Tell me about your session<textarea rows="5" placeholder="A few details about what you have in mind..."/></label>
            <button className="dark-btn" type="submit">Send enquiry <ArrowRight size={17}/></button>
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-brand">DOM PEDRO<br/><i>PHOTOGRAPHY</i></div>
        <div className="footer-links">
          <button onClick={() => go("boudoir")}>Boudoir</button>
          <button onClick={() => go("weddings")}>Weddings</button>
          <button onClick={() => go("family")}>Family</button>
          <button onClick={() => go("contact")}>Contact</button>
        </div>
        <div className="footer-social">
          <a href="https://www.instagram.com/dompedro_photography?igsh=NDh0d3d4Mjl4eWdn&igsi=NDh0d3d4Mjl4eWdn" target="_blank" rel="noreferrer"><Instagram size={19}/></a>
          <a href="mailto:hello@dompedrophotography.com"><Mail size={19}/></a>
          <a href="tel:+27686330172"><Phone size={19}/></a>
        </div>
        <div className="copyright">© {new Date().getFullYear()} Dom Pedro Photography. All rights reserved.</div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);