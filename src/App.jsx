import { useState, useRef, useEffect } from "react";

const NAV_LINKS = ["Home", "Discussion", "Articles", "Reflection", "About"];

const ARTICLES = [
  {
    title:
      "Phishing Attacks Surge 58% in 2024, Targeting Financial Institutions",
    source: "The Hacker News",
    date: "March 12, 2024",
    url: "https://thehackernews.com",
    summary:
      "A new report from Zscaler ThreatLabz reveals a dramatic 58% year-over-year spike in phishing attacks, with financial services, retail, and technology sectors bearing the brunt of malicious campaigns using AI-generated lures.",
    tag: "Report",
  },
  {
    title: "Google and Meta Duped Out of $100 Million in Phishing Scam",
    source: "Forbes",
    date: "April 27, 2017",
    url: "https://www.forbes.com",
    summary:
      "Lithuanian national Evaldas Rimasauskas orchestrated a sophisticated Business Email Compromise (BEC) phishing scheme that tricked two of the world's biggest tech companies into wiring over $100 million to fraudulent bank accounts.",
    tag: "Case Study",
  },
  {
    title: "FBI: Phishing Was the #1 Cybercrime in 2023",
    source: "FBI Internet Crime Report",
    date: "February 2024",
    url: "https://www.ic3.gov",
    summary:
      "The FBI's annual Internet Crime Report ranked phishing as the most reported cybercrime for the fifth consecutive year, with over 298,000 complaints filed in 2023 alone and losses exceeding $18 million.",
    tag: "Statistics",
  },
  {
    title:
      "AI-Powered Phishing Emails Now Nearly Indistinguishable from Real Ones",
    source: "Wired",
    date: "January 2025",
    url: "https://www.wired.com",
    summary:
      "Researchers at IBM and Harvard warn that large language models are enabling threat actors to craft hyper-personalized spear-phishing emails at scale, with detection rates falling to a historic low among corporate employees.",
    tag: "AI Threat",
  },
  {
    title: "Ukraine Conflict Spurs Surge in State-Sponsored Phishing Campaigns",
    source: "Reuters",
    date: "May 3, 2022",
    url: "https://www.reuters.com",
    summary:
      "Google's Threat Analysis Group reported a sharp rise in government-backed phishing operations linked to the Russia-Ukraine war, targeting Ukrainian officials, European governments, and defense organizations with credential-harvesting emails.",
    tag: "Geopolitics",
  },
];

const DISCUSSION_SECTIONS = [
  {
    icon: "🎣",
    title: "What Is Phishing?",
    content: [
      {
        type: "text",
        text: 'Phishing is a type of social engineering cyberattack where an attacker disguises themselves as a trustworthy entity a bank, a tech company, a colleague to deceive victims into revealing sensitive information such as passwords, credit card numbers, or personal identification. The term "phishing" is a deliberate misspelling of "fishing," reflecting how attackers cast wide digital nets hoping victims will take the bait.',
      },
      {
        type: "text",
        text: "Unlike brute-force attacks that target systems directly, phishing exploits the most vulnerable component of any security system: human psychology. Attackers manipulate emotions like urgency, fear, greed, and trust to override rational decision-making.",
      },
    ],
  },
  {
    icon: "📜",
    title: "A Brief History",
    content: [
      {
        type: "text",
        text: "Phishing dates back to the mid-1990s when AOL was the dominant internet provider. Hackers posed as AOL staff to steal user credentials the term 'phishing' first appeared in 1996 in a hacker newsgroup. By the early 2000s, phishing had evolved to target banks and e-commerce sites.",
      },
      {
        type: "text",
        text: "The 2003–2005 era saw the rise of large-scale phishing kits sold on underground forums. The 2010s introduced spear-phishing and whaling (targeting executives). By 2020, COVID-19 became the most exploited phishing lure in history. Today, AI-generated phishing emails are nearly indistinguishable from legitimate communications.",
      },
    ],
  },
  {
    icon: "🕵️",
    title: "Types of Phishing Attacks",
    content: [
      {
        type: "list",
        items: [
          {
            term: "Email Phishing",
            def: "The classic form; mass emails impersonating banks, government agencies, or services like PayPal and Netflix with malicious links or attachments.",
          },
          {
            term: "Spear Phishing",
            def: "Highly targeted attacks customized for a specific individual using personal information gathered from social media or data breaches.",
          },
          {
            term: "Whaling",
            def: 'Targets high-profile executives or decision-makers (the "big fish"), often impersonating legal or regulatory authorities.',
          },
          {
            term: "Smishing (SMS Phishing)",
            def: "Fraudulent text messages urging recipients to click links or call fake numbers.",
          },
          {
            term: "Vishing (Voice Phishing)",
            def: "Phone calls impersonating bank fraud departments, tech support, or government agencies.",
          },
          {
            term: "Clone Phishing",
            def: "A legitimate email is duplicated with malicious links replacing the real ones, then sent from a spoofed address.",
          },
          {
            term: "Pharming",
            def: "DNS manipulation that silently redirects users from real websites to fake look-alike pages without any suspicious link being clicked.",
          },
        ],
      },
    ],
  },
  {
    icon: "⚙️",
    title: "How Phishing Works: A Real Example",
    content: [
      {
        type: "text",
        text: "Consider a spear-phishing attack on a company employee named Maria:",
      },
      {
        type: "steps",
        items: [
          {
            step: "Reconnaissance",
            desc: "The attacker scrapes Maria's LinkedIn profile, learns her company, her manager's name (David), and that she handles invoice payments.",
          },
          {
            step: "Crafting the Lure",
            desc: 'The attacker composes an email appearing to come from "david.smith@company-corp.net" (note: fake domain) saying: "Hi Maria — urgent, please process this vendor invoice by EOD."',
          },
          {
            step: "Delivery",
            desc: "Maria receives the email. The spoofed sender name matches her real manager. The urgency triggers immediate action.",
          },
          {
            step: "Exploitation",
            desc: "The PDF contains a macro that installs a keylogger, or the link leads to a fake Microsoft 365 login page harvesting her credentials.",
          },
          {
            step: "Exfiltration",
            desc: "Within hours, the attacker logs into company systems using Maria's stolen credentials, pivoting to financial accounts or sensitive data.",
          },
        ],
      },
      {
        type: "text",
        text: "This entire chain can unfold in under 24 hours, and the attacker never needed to touch a single firewall.",
      },
    ],
  },
  {
    icon: "🛡️",
    title: "How to Protect Yourself",
    content: [
      {
        type: "list",
        items: [
          {
            term: "Verify Sender Addresses",
            def: 'Always check the full email address, not just the display name. "Apple Support" can hide "noreply@apple-security-update.xyz."',
          },
          {
            term: "Never Click Unsolicited Links",
            def: "Go directly to websites by typing URLs in your browser instead of clicking email links.",
          },
          {
            term: "Enable MFA",
            def: "Even if credentials are stolen, Multi-Factor Authentication prevents unauthorized access.",
          },
          {
            term: "Check for HTTPS — But Don't Trust It Blindly",
            def: "Phishing sites increasingly use SSL certificates to appear legitimate.",
          },
          {
            term: "Use Anti-Phishing Extensions",
            def: "Tools like Google Safe Browsing and built-in browser warnings flag known phishing domains.",
          },
          {
            term: "Security Awareness Training",
            def: "Regular phishing simulations at organizations reduce successful attack rates by up to 70%.",
          },
          {
            term: "Report Suspicious Emails",
            def: "Forward phishing attempts to your IT department or to phishing@reportphishing.anti-phishing.org.",
          },
        ],
      },
    ],
  },
];

function ParticleNetwork() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const W = window.innerWidth;
      const H = window.innerHeight;

      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.scale(dpr, dpr);

      canvas._W = W;
      canvas._H = H;
    }
    resize();
    window.addEventListener("resize", resize);

    function Particle() {
      const W = canvas._W || canvas.width;
      const H = canvas._H || canvas.height;
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.r = Math.random() * 1.5 + 0.5;
      this.opacity = Math.random() * 0.5 + 0.3;
    }

    const isMobile = window.innerWidth < 700;
    const count = isMobile ? 55 : 110;
    for (let i = 0; i < count; i++) particles.push(new Particle());

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    function draw() {
      const W = canvas._W || canvas.width;
      const H = canvas._H || canvas.height;
      const { x: mx, y: my } = mouseRef.current;
      ctx.clearRect(0, 0, W, H);

      const maxDist = 130,
        mouseDist = 180;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        // Mouse repulsion
        const mdx = mx - p.x,
          mdy = my - p.y;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < mouseDist) {
          const force = ((mouseDist - md) / mouseDist) * 0.6;
          p.x -= mdx * force * 0.02;
          p.y -= mdy * force * 0.02;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,255,136,${p.opacity})`;
        ctx.fill();

        // Lines between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x,
            dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.2;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0,255,136,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Lines to mouse cursor
        const md2 = Math.sqrt((mx - p.x) ** 2 + (my - p.y) ** 2);
        if (md2 < mouseDist) {
          const alpha2 = (1 - md2 / mouseDist) * 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mx, my);
          ctx.strokeStyle = `rgba(0,229,255,${alpha2})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
// ── Glitch Text ──────────────────────────────────────────────────────────────
function GlitchText({ text }) {
  return (
    <span className="glitch-text" data-text={text}>
      {text}
    </span>
  );
}

// ── NavBar ───────────────────────────────────────────────────────────────────
function NavBar({ active, setActive }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (link) => {
    setActive(link);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="nav-bar">
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => handleNav("Home")}>
          <span className="logo-bracket">[</span>
          PHISH<span className="logo-accent">PEACE</span>
          <span className="logo-bracket">]</span>
        </button>
        <ul className="nav-links-desktop">
          {NAV_LINKS.map((link, i) => (
            <li key={link}>
              <button
                className={`nav-link ${active === link ? "nav-link-active" : ""}`}
                onClick={() => handleNav(link)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? "ham-open" : ""}></span>
          <span className={menuOpen ? "ham-open" : ""}></span>
          <span className={menuOpen ? "ham-open" : ""}></span>
        </button>
      </div>
      {menuOpen && (
        <ul className="nav-mobile-menu">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                className={`nav-link-mobile ${active === link ? "nav-link-active" : ""}`}
                onClick={() => handleNav(link)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

// ── Footer ───────────────────────────────────────────────────────────────────
function Footer({ setActive }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="logo-bracket">[</span>PHISH
          <span className="logo-accent">PEACE</span>
          <span className="logo-bracket">]</span>
          <p>
            A cybersecurity awareness project focused on understanding and
            preventing phishing attacks.
          </p>
        </div>
        <div className="footer-links">
          <span className="footer-links-title">Navigation</span>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              className="footer-link"
              onClick={() => {
                setActive(link);
                window.scrollTo({ top: 0 });
              }}
            >
              {link}
            </button>
          ))}
        </div>
        <div className="footer-note">
          <span className="footer-links-title">Topic</span>
          <p>Phishing — Social Engineering & Cyber Deception</p>
          <p style={{ marginTop: "0.5rem" }}>Created for Academic Purposes</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 PhishPeace — Cybersecurity Awareness Project</span>
        <span className="footer-tag">// STAY VIGILANT. STAY SAFE.</span>
      </div>
    </footer>
  );
}

function useCountUp(target, duration = 2000, trigger = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    setCount(0); // ← reset to 0 before starting
    let start = 0;
    const steps = 60;
    const stepTime = duration / steps;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration, trigger]); // ← trigger in deps

  return count;
}

function AnimatedStat({ num, label, trigger }) {
  // ← add trigger prop
  const isB = num.includes("B");
  const isPercent = num.includes("%");
  const isDollar = num.startsWith("$");
  const isM = num.includes("M");

  const rawNum = parseFloat(num.replace(/[^0-9.]/g, ""));
  const count = useCountUp(rawNum, 2000, trigger); // ← pass trigger

  let display = "";
  if (isB) display = `${count.toFixed(1)}B`;
  else if (isPercent) display = `${Math.round(count)}%`;
  else if (isDollar && isM) display = `$${count.toFixed(1)}M`;
  else display = Math.round(count).toString();

  return (
    <div className="stat-card">
      <span className="stat-num">{display}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
// ── Home Page ────────────────────────────────────────────────────────────────
function HomePage({ setActive, booting }) {
  return (
    <div className="page">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-badge">⚠ CYBERSECURITY AWARENESS PROJECT</div>
        <h1 className="hero-title">
          <GlitchText text="PHISHING" />
          <br />
          <span className="hero-sub">The Art of Digital Deception</span>
        </h1>
        <p className="hero-desc">
          Phishing is one of the oldest and most effective cyberattacks in
          existence. By exploiting human trust rather than technical
          vulnerabilities, attackers trick individuals into surrendering
          passwords, financial data, and sensitive information with devastating
          consequences.
        </p>
        <div className="hero-stats">
          {[
            { num: "3.4B", label: "Phishing emails sent daily" },
            { num: "36%", label: "Of data breaches involve phishing" },
            { num: "$17.7M", label: "Avg. annual cost per organization" },
          ].map(({ num, label }) => (
            <AnimatedStat
              key={num}
              num={num}
              label={label}
              trigger={!booting}
            />
          ))}
        </div>
        <div className="hero-btns">
          <button
            className="btn-primary"
            onClick={() => setActive("Discussion")}
          >
            Explore Topic →
          </button>
          <button
            className="btn-secondary"
            onClick={() => setActive("Articles")}
          >
            Read Articles
          </button>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="section">
        <h2 className="section-title">Topic Overview</h2>
        <div className="card-grid-3">
          {[
            {
              icon: "🎣",
              title: "What It Is",
              body: "A social engineering attack that impersonates trusted entities to steal sensitive data through deceptive messages, links, and attachments.",
            },
            {
              icon: "⚠️",
              title: "Why It's Dangerous",
              body: "Phishing bypasses all technical defenses by targeting humans. No firewall, antivirus, or encryption can fully patch human psychology.",
            },
            {
              icon: "🛡️",
              title: "How to Stay Safe",
              body: "Awareness, MFA, vigilant email habits, and security training are your strongest shields against phishing attacks.",
            },
          ].map(({ icon, title, body }) => (
            <div className="summary-card" key={title}>
              <span className="summary-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <h2 className="section-title">Evolution of Phishing</h2>
        <div className="timeline">
          {[
            {
              year: "1996",
              event:
                'Term "phishing" coined in AOL hacker newsgroups; criminals posed as AOL staff to steal credentials.',
            },
            {
              year: "2003",
              event:
                "First large-scale bank phishing campaigns emerge, targeting PayPal and eBay users worldwide.",
            },
            {
              year: "2011",
              event:
                "Spear-phishing attacks hit RSA Security and major US defense contractors, compromising SecurID tokens.",
            },
            {
              year: "2016",
              event:
                "John Podesta's email phished via a fake Google security alert, influencing the US presidential election.",
            },
            {
              year: "2020",
              event:
                "COVID-19 becomes the most exploited phishing lure in history; WHO and CDC impersonated globally.",
            },
            {
              year: "2024",
              event:
                "AI-generated phishing emails become nearly undetectable, with LLMs enabling personalized attacks at scale.",
            },
          ].map(({ year, event }) => (
            <div className="timeline-item" key={year}>
              <div className="timeline-year">{year}</div>
              <div className="timeline-line">
                <span className="timeline-dot"></span>
              </div>
              <div className="timeline-event">{event}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Tips */}
      <section className="section">
        <h2 className="section-title">Quick Protection Tips</h2>
        <div className="tips-grid">
          {[
            {
              icon: "🔍",
              tip: "Always verify sender email addresses not just display names.",
            },
            {
              icon: "🔐",
              tip: "Enable Multi-Factor Authentication on all important accounts.",
            },
            {
              icon: "🚫",
              tip: "Never click links in unsolicited emails navigate directly.",
            },
            {
              icon: "📞",
              tip: "Call back using official numbers if asked to act urgently.",
            },
            {
              icon: "🔄",
              tip: "Keep software and browsers updated to patch security holes.",
            },
            {
              icon: "🎓",
              tip: "Participate in security awareness training at your organization.",
            },
          ].map(({ icon, tip }) => (
            <div className="tip-card" key={tip}>
              <span className="tip-icon">{icon}</span>
              <p>{tip}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ── Discussion Page ──────────────────────────────────────────────────────────
function DiscussionPage() {
  const [open, setOpen] = useState(0);

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-tag"></div>
        <h1 className="page-title">
          Deep Dive: <span className="accent">Phishing</span>
        </h1>
        <p className="page-intro">
          A comprehensive breakdown of phishing its mechanics, history,
          variants, real-world examples, and how to defend against it.
        </p>
      </div>

      {/* Accordion */}
      <div className="accordion">
        {DISCUSSION_SECTIONS.map((sec, i) => (
          <div
            key={i}
            className={`accordion-item ${open === i ? "acc-open" : ""}`}
          >
            <button
              className="acc-header"
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <span className="acc-icon">{sec.icon}</span>
              <span className="acc-title">{sec.title}</span>
              <span className="acc-chevron">{open === i ? "▲" : "▼"}</span>
            </button>
            {open === i && (
              <div className="acc-body">
                {sec.content.map((block, bi) => {
                  if (block.type === "text") {
                    return (
                      <p key={bi} className="disc-text">
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === "list") {
                    return (
                      <div key={bi} className="disc-list">
                        {block.items.map(({ term, def }) => (
                          <div key={term} className="disc-list-item">
                            <span className="disc-term">{term}</span>
                            <span className="disc-def">{def}</span>
                          </div>
                        ))}
                      </div>
                    );
                  }
                  if (block.type === "steps") {
                    return (
                      <div key={bi} className="disc-steps">
                        {block.items.map(({ step, desc }, si) => (
                          <div key={step} className="disc-step">
                            <div className="disc-step-num">{si + 1}</div>
                            <div>
                              <strong className="disc-step-title">
                                {step}
                              </strong>
                              <p className="disc-step-desc">{desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Phishing Email Anatomy */}
      <section className="section">
        <h2 className="section-title">Anatomy of a Phishing Email</h2>
        <p
          style={{
            color: "var(--text-dim)",
            fontSize: "0.9rem",
            marginBottom: "1.5rem",
          }}
        >
          Real phishing emails use multiple psychological tricks simultaneously.
          Here's how to spot them:
        </p>
        <div className="email-mock">
          <div className="email-titlebar">
            <div className="email-dots">
              <span style={{ background: "#ff5f57" }}></span>
              <span style={{ background: "#ffbd2e" }}></span>
              <span style={{ background: "#28c840" }}></span>
            </div>
            <span className="email-titlebar-text">📧 Inbox — Mail Client</span>
          </div>
          <div className="email-body">
            <div className="email-field">
              <span className="ef-label">From:</span>
              <span className="ef-danger">security@paypa1-alerts.com</span>
              <span className="ef-tag ef-red">⚠ SPOOFED DOMAIN</span>
            </div>
            <div className="email-field">
              <span className="ef-label">To:</span>
              <span className="ef-value">you@youremail.com</span>
            </div>
            <div className="email-field">
              <span className="ef-label">Subject:</span>
              <span className="ef-danger">
                URGENT: Your account has been suspended
              </span>
              <span className="ef-tag ef-orange">⚠ URGENCY TRIGGER</span>
            </div>
            <div className="email-hr"></div>
            <div className="email-content">
              <p>Dear Valued Customer,</p>
              <p>
                We have detected <strong>unusual activity</strong> on your
                PayPal account. Your account has been{" "}
                <strong>temporarily limited</strong>.{" "}
                <span className="ef-tag ef-orange">⚠ FEAR TRIGGER</span>
              </p>
              <p>
                Please verify your identity <strong>within 24 hours</strong> to
                avoid permanent suspension.{" "}
                <span className="ef-tag ef-orange">⚠ FALSE DEADLINE</span>
              </p>
              <p>
                <span className="ef-link">
                  🔗 Click here to verify your account →
                </span>{" "}
                <span className="ef-tag ef-red">⚠ MALICIOUS LINK</span>
              </p>
              <p className="email-sig">
                Best regards,
                <br />
                PayPal Security Team
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Nigerian Prince Email — Real World Example */}
      <section className="section">
        <h2 className="section-title">
          A Classic Example: The Nigerian Prince
        </h2>
        <p
          style={{
            color: "var(--text-dim)",
            fontSize: "0.9rem",
            marginBottom: "1.5rem",
          }}
        >
          One of the oldest and most infamous phishing emails in history the
          "Nigerian Prince" scam. Despite being obvious to most, it still tricks
          thousands of people every year.
        </p>
        <div className="email-mock">
          <div className="email-titlebar">
            <div className="email-dots">
              <span style={{ background: "#ff5f57" }}></span>
              <span style={{ background: "#ffbd2e" }}></span>
              <span style={{ background: "#28c840" }}></span>
            </div>
            <span className="email-titlebar-text">📧 Inbox — Mail Client</span>
          </div>
          <div className="email-body">
            <div className="email-field">
              <span className="ef-label">From:</span>
              <span className="ef-danger">
                prince.adewale@totally-real-nigeria.com
              </span>
              <span className="ef-tag ef-red">⚠ FAKE DOMAIN</span>
            </div>
            <div className="email-field">
              <span className="ef-label">To:</span>
              <span className="ef-value">davekirt7@gmail.com</span>
            </div>
            <div className="email-field">
              <span className="ef-label">Subject:</span>
              <span className="ef-danger">
                URGENT CONFIDENTIAL: $10,000,000 Transfer. Need Your Help Dear
                Friend
              </span>
              <span className="ef-tag ef-orange">
                ⚠ URGENCY + GREED TRIGGER
              </span>
            </div>
            <div className="email-hr"></div>
            <div className="email-content">
              <p>Dear Beloved Friend,</p>
              <p>
                I am <strong>Prince Adewale Okonkwo of Nigeria</strong>.{" "}
                <span className="ef-tag ef-orange">⚠ FAKE AUTHORITY</span>
              </p>
              <p>
                My late father the King has left{" "}
                <strong>$10,000,000 USD</strong> in a secret account. I need
                ONLY your{" "}
                <strong>bank details, SSN, and mother's maiden name</strong> to
                transfer this fortune. You keep <strong>40%</strong> dear
                friend.{" "}
                <span className="ef-tag ef-red">⚠ REQUESTS SENSITIVE DATA</span>
              </p>
              <p>
                Please reply with urgency. God bless you abundantly.{" "}
                <span className="ef-tag ef-orange">⚠ FALSE URGENCY</span>
              </p>
              <p className="email-sig">
                — H.R.H Prince Adewale Okonkwo III 👑
                <br />
                <span style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>
                  Kingdom of Nigeria, Royal Treasury Division
                </span>
              </p>
            </div>

            {/* Why it works */}
            <div
              style={{
                marginTop: "1rem",
                padding: "0.75rem",
                background: "var(--surface2)",
                borderRadius: "6px",
                borderLeft: "2px solid var(--green-dk)",
              }}
            >
              <div
                style={{
                  fontSize: "0.72rem",
                  fontFamily: "var(--mono)",
                  color: "var(--green)",
                  letterSpacing: "1px",
                  marginBottom: "0.5rem",
                }}
              >
                // WHY THIS STILL WORKS IN {new Date().getFullYear()}
              </div>
              {[
                {
                  tag: "GREED",
                  desc: "Promise of life-changing money overrides rational thinking.",
                },
                {
                  tag: "URGENCY",
                  desc: "Pressure to act fast prevents victims from verifying the claim.",
                },
                {
                  tag: "AUTHORITY",
                  desc: "Royal title creates false legitimacy and trust.",
                },
                {
                  tag: "ADVANCE FEE",
                  desc: "Victims pay small 'processing fees' expecting millions in return.",
                },
              ].map(({ tag, desc }) => (
                <div
                  key={tag}
                  style={{
                    display: "flex",
                    gap: "0.6rem",
                    marginBottom: "0.35rem",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontFamily: "var(--mono)",
                      color: "#ff4444",
                      background: "rgba(255,68,68,0.1)",
                      border: "1px solid rgba(255,68,68,0.25)",
                      padding: "1px 6px",
                      borderRadius: "3px",
                      whiteSpace: "nowrap",
                      alignSelf: "flex-start",
                    }}
                  >
                    {tag}
                  </span>
                  <span
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--text-dim)",
                      lineHeight: 1.6,
                    }}
                  >
                    {desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Articles Page ────────────────────────────────────────────────────────────
function ArticlesPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="page-tag"></div>
        <h1 className="page-title">
          News & <span className="accent">Research</span>
        </h1>
        <p className="page-intro">
          Curated articles and reports from trusted cybersecurity sources
          documenting the evolving phishing landscape.
        </p>
      </div>

      <div className="articles-grid">
        {ARTICLES.map((a, i) => (
          <article className="article-card" key={i}>
            <div className="article-top">
              <span className="article-tag">{a.tag}</span>
              <span className="article-num">
                #{String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="article-title">{a.title}</h3>
            <p className="article-summary">{a.summary}</p>
            <div className="article-meta">
              <span>📰 {a.source}</span>
              <span>🗓 {a.date}</span>
            </div>
            <a
              className="article-link"
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Source →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

// ── Reflection Page ──────────────────────────────────────────────────────────
function ReflectionPage() {
  const paragraphs = [
    {
      num: "01",
      title: "What Studying Phishing Taught Me",
      text: "Before I began researching this topic, I thought phishing was simply about fake emails and obvious scams, the kind you can spot from a mile away. But diving deeper revealed something far more unsettling: modern phishing is a sophisticated psychological discipline. Attackers don't just send random spam; they study their targets, mirror their language, and weaponize emotions like urgency and fear. The realization that some of the world's largest corporations like Google and Meta among them have fallen victim to phishing schemes humbled me. It made me understand that technical knowledge alone doesn't protect you; emotional awareness does. Learning to pause, question, and verify before acting on any digital request is a skill I now treat as essential as any technical literacy.",
    },
    {
      num: "02",
      title: "The Human Element in Cybersecurity",
      text: "One of the most striking insights from this study is how phishing exposes the profound gap between technological advancement and human vulnerability. We build firewalls, encryption protocols, and AI-powered threat detection, yet a single well-crafted email bypasses all of it by targeting the person sitting at the keyboard. This forces me to reconsider what 'security' truly means. True security isn't just about the tools we deploy; it's about the culture we build around awareness, skepticism, and shared responsibility. Organizations that invest in regular phishing simulations and employee education consistently report fewer successful attacks, proving that informed humans are the strongest firewall we have. This shift in perspective from technology-first to people-first, feels like one of the most important lessons cybersecurity has to offer.",
    },
    {
      num: "03",
      title: "Looking Forward: AI and the Evolving Threat",
      text: "Perhaps the most alarming development I encountered was the rise of AI-generated phishing. Large language models can now craft hyper-personalized, grammatically perfect, emotionally calibrated phishing messages at industrial scale eliminating the spelling errors and awkward phrasing that once served as red flags. This arms race between attackers leveraging AI and defenders scrambling to keep up raises a difficult question: can we ever truly 'solve' phishing? My reflection is that we cannot eliminate it entirely, but we can make societies resilient to it. Digital literacy, teaching people of all ages to think critically about what they see online must become as fundamental as reading and writing. The responsibility doesn't only fall on IT departments; it falls on educators, governments, and each of us as individuals navigating an increasingly deceptive digital world.",
    },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-tag"></div>
        <h1 className="page-title">
          Personal <span className="accent">Reflection</span>
        </h1>
        <p className="page-intro">
          Three paragraphs reflecting on the study of phishing, what it
          revealed, why it matters, and what it means for the future.
        </p>
      </div>

      <div className="reflection-quote">
        "The weakest link in any security system is the human being."
        <span className="quote-attr">
          — Kevin Mitnick, former FBI Most Wanted hacker & cybersecurity author
        </span>
      </div>

      <div className="reflection-list">
        {paragraphs.map(({ num, title, text }) => (
          <div className="reflection-item" key={num}>
            <div className="reflection-num">{num}</div>
            <div className="reflection-body">
              <h3 className="reflection-title">{title}</h3>
              <p className="reflection-text">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── About Page ───────────────────────────────────────────────────────────────
function AboutPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="page-tag"></div>
        <h1 className="page-title">
          About <span className="accent">Me</span>
        </h1>
        <p className="page-intro">
          The person behind this cybersecurity awareness project.
        </p>
      </div>

      <div className="about-grid">
        {/* Avatar column */}
        <div className="about-avatar-col">
          <div className="about-avatar">
            <div className="avatar-inner">
              <img src="/me.jpg" alt="Profile photo" className="avatar-photo" />
            </div>
            <div className="avatar-ring"></div>
          </div>
          <div className="status-badge">
            <span className="status-dot"></span> Student · Researcher
          </div>
          <div className="about-skills">
            {["Programmer", "Research", "Web Dev", "IT Studies"].map((s) => (
              <span className="skill-tag" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Content column */}
        <div className="about-content">
          <div className="about-intro-block">
            <h2 className="about-heading">Hello, I'm Kirt Dave Galgo</h2>
            <p>
              I'm a student passionate about understanding the digital threats
              that shape our connected world. This website was created as part
              of an academic exploration of cybersecurity topics with a specific
              focus on phishing, one of the most persistent and human-centered
              threats in the field.
            </p>
            <p>
              My interest in cybersecurity grew from a simple realization:
              technology is only as secure as the people who use it. That
              intersection of psychology and technology fascinates me, and
              phishing sits right at the heart of it.
            </p>
          </div>

          <div className="about-details">
            {[
              {
                label: "📚 Field of Study",
                value: "Information Technology",
              },
              {
                label: "🎯 Focus Area",
                value: "Web Development / Automation",
              },
              {
                label: "💡 Interests",
                value: "Network Security, Ethical Hacking, Digital Technology",
              },
              { label: "🌐 Location", value: "Philippines" },
              {
                label: "🎓 Project Type",
                value: "Academic Cybersecurity Awareness Website",
              },
            ].map(({ label, value }) => (
              <div className="detail-row" key={label}>
                <span className="detail-label">{label}</span>
                <span className="detail-value">{value}</span>
              </div>
            ))}
          </div>

          <div className="about-mission">
            <h3>Why This Topic?</h3>
            <p>
              Phishing was chosen because it represents something unique in
              cybersecurity it is not a failure of machines but a failure of
              trust. By studying how attackers exploit human psychology, we gain
              insight into not just how to defend ourselves digitally, but how
              to think more critically in every aspect of life. Awareness is the
              first and most powerful line of defense, and this project is my
              contribution to building that awareness.
            </p>
          </div>

          <div className="about-contact-note">
            <span className="contact-icon">💬</span>
            <p>
              This site was built as a class project exploring cybersecurity
              topics. All information is sourced from reputable security
              organizations and news outlets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
function LoadingScreen({ onDone }) {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState("email"); // "email" | "scan" | "blocked" | "boot"
  const [scanLines, setScanLines] = useState([]);
  const [bootLines, setBootLines] = useState([]);
  const [typedSubject, setTypedSubject] = useState("");
  const [typedBody, setTypedBody] = useState("");
  const [progress, setProgress] = useState(0);

  const subject =
    "URGENT CONFIDENTIAL: $10,000,000 Transfer. Need Your Help Dear Friend";
  const body = [
    "Dear Beloved Friend,",
    "",
    "I am Prince Adewale Okonkwo of Nigeria. My late father",
    "the King has left $10,000,000 USD in a secret account.",
    "I need ONLY your bank details, SSN, and mother maiden",
    "name to transfer this fortune. You keep 40% dear friend.",
    "",
    "Please reply with urgency. God bless you abundantly.",
    "",
    "— H.R.H Prince Adewale Okonkwo III 👑",
  ];

  // Phase 1: Type the subject line
  useEffect(() => {
    if (phase !== "email") return;
    let i = 0;
    const timer = setInterval(() => {
      setTypedSubject(subject.slice(0, i + 1));
      i++;
      if (i >= subject.length) {
        clearInterval(timer);
        // Start typing body after subject done
        let bi = 0;
        let lineIndex = 0;
        let charIndex = 0;
        const bodyTimer = setInterval(() => {
          const currentLine = body[lineIndex];
          if (charIndex <= currentLine.length) {
            setTypedBody(
              body.slice(0, lineIndex).join("\n") +
                "\n" +
                currentLine.slice(0, charIndex),
            );
            charIndex++;
          } else {
            lineIndex++;
            charIndex = 0;
            if (lineIndex >= body.length) {
              clearInterval(bodyTimer);
              setTimeout(() => setPhase("scan"), 800);
            }
          }
          bi++;
        }, 22);
      }
    }, 28);
    return () => clearInterval(timer);
  }, [phase]);

  // Phase 2: Scan lines appear
  useEffect(() => {
    if (phase !== "scan") return;
    const lines = [
      { text: "> INCOMING EMAIL DETECTED...", color: "#c8ffd6", delay: 0 },
      {
        text: "> SCANNING SENDER: prince.adewale@totally-real-nigeria.com",
        color: "#ffbe00",
        delay: 350,
      },
      {
        text: "> DOMAIN AGE: 3 days  ⚠ SUSPICIOUS",
        color: "#ffbe00",
        delay: 700,
      },
      { text: "> ANALYZING SUBJECT LINE...", color: "#c8ffd6", delay: 1050 },
      {
        text: "> DETECTED: ALL CAPS + EXCESSIVE MONEY PROMISES",
        color: "#ff4444",
        delay: 1400,
      },
      {
        text: "> CHECKING CONTENT... NIGERIAN PRINCE PROTOCOL v4.2",
        color: "#ff4444",
        delay: 1750,
      },
      {
        text: "> THREAT LEVEL: 😂 MAXIMUM ABSURDITY",
        color: "#ff4444",
        delay: 2100,
      },
      {
        text: "> VERDICT: THIS IS OBVIOUSLY FAKE LOL",
        color: "#ff4444",
        delay: 2450,
      },
    ];

    lines.forEach(({ text, color, delay }) => {
      setTimeout(() => {
        setScanLines((prev) => [...prev, { text, color }]);
        setProgress(
          Math.round(
            ((lines.findIndex((l) => l.text === text) + 1) / lines.length) * 70,
          ),
        );
      }, delay);
    });

    setTimeout(() => setPhase("blocked"), 2900);
  }, [phase]);

  // Phase 3: BLOCKED flash then boot
  useEffect(() => {
    if (phase !== "blocked") return;
    setProgress(80);
    setTimeout(() => setPhase("boot"), 1800);
  }, [phase]);

  // Phase 4: Boot lines
  useEffect(() => {
    if (phase !== "boot") return;
    const lines = [
      {
        text: "> THREAT NEUTRALIZED. PRINCE ADEWALE HAS BEEN DENIED.",
        color: "#00ff88",
        delay: 0,
      },
      {
        text: "> YOUR $10,000,000 IS SAFE (it was never real anyway).",
        color: "#4d7a5e",
        delay: 400,
      },
      { text: "> LOADING PHISHPEACE...", color: "#00ff88", delay: 800 },
      { text: "> ALL SYSTEMS NOMINAL", color: "#00ff88", delay: 1100 },
    ];

    lines.forEach(({ text, color, delay }) => {
      setTimeout(() => {
        setBootLines((prev) => [...prev, { text, color }]);
        setProgress(
          80 +
            Math.round(
              ((lines.findIndex((l) => l.text === text) + 1) / lines.length) *
                20,
            ),
        );
      }, delay);
    });

    setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 700);
    }, 2200);
  }, [phase]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#030a06",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Share Tech Mono', monospace",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.7s ease",
        padding: "1rem",
      }}
    >
      {/* Scanlines overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,100,0.015) 2px, rgba(0,255,100,0.015) 4px)",
        }}
      />

      {/* Logo */}
      <div
        style={{
          fontSize: "clamp(1.2rem, 4vw, 1.9rem)",
          color: "#00ff88",
          letterSpacing: "6px",
          fontWeight: "bold",
          marginBottom: "1.5rem",
          textShadow: "0 0 30px #00ff88",
        }}
      >
        [PHISH<span style={{ color: "#00e5ff" }}>PEACE</span>]
      </div>

      {/* Main box */}
      <div
        style={{
          width: "min(600px, 95vw)",
          background: "#071210",
          border: `1px solid ${phase === "blocked" ? "rgba(255,68,68,0.6)" : "#163024"}`,
          borderRadius: "8px",
          overflow: "hidden",
          transition: "border-color 0.3s ease",
          boxShadow:
            phase === "blocked" ? "0 0 40px rgba(255,68,68,0.2)" : "none",
        }}
      >
        {/* Titlebar */}
        <div
          style={{
            background: "#081208",
            borderBottom: "1px solid #163024",
            padding: "0.5rem 1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
          }}
        >
          {["#ff5f57", "#ffbd2e", "#28c840"].map((c) => (
            <span
              key={c}
              style={{
                width: 11,
                height: 11,
                borderRadius: "50%",
                background: c,
                display: "inline-block",
              }}
            />
          ))}
          <span
            style={{
              fontSize: "0.7rem",
              color: "#4d7a5e",
              marginLeft: "0.4rem",
              letterSpacing: "1px",
            }}
          >
            {phase === "email" || phase === "scan"
              ? "📧 inbox — 1 new message"
              : phase === "blocked"
                ? "🚫 threat_blocked.sh"
                : "phishpeace — boot.sh"}
          </span>
        </div>

        <div style={{ padding: "1rem 1.25rem", minHeight: "220px" }}>
          {/* Phase: Email display */}
          {(phase === "email" || phase === "scan") && (
            <div>
              {/* Email header */}
              <div
                style={{
                  borderBottom: "1px solid #163024",
                  paddingBottom: "0.6rem",
                  marginBottom: "0.75rem",
                }}
              >
                <div style={{ fontSize: "0.7rem", marginBottom: "0.25rem" }}>
                  <span style={{ color: "#4d7a5e" }}>FROM: </span>
                  <span style={{ color: "#ffbe00" }}>
                    prince.adewale@totally-real-nigeria.com
                  </span>
                </div>
                <div style={{ fontSize: "0.7rem", marginBottom: "0.25rem" }}>
                  <span style={{ color: "#4d7a5e" }}>TO: </span>
                  <span style={{ color: "#c8ffd6" }}>davekirt7@gmail.com</span>
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: "#4d7a5e" }}>SUBJ: </span>
                  <span style={{ color: "#ffbe00" }}>{typedSubject}</span>
                  {phase === "email" &&
                    typedSubject.length < subject.length && (
                      <span
                        style={{
                          background: "#ffbe00",
                          width: "8px",
                          height: "14px",
                          display: "inline-block",
                          verticalAlign: "middle",
                          animation: "blink 0.8s step-end infinite",
                        }}
                      />
                    )}
                </div>
              </div>

              {/* Email body */}
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#c8ffd6",
                  lineHeight: "1.8",
                  whiteSpace: "pre-wrap",
                  minHeight: "100px",
                }}
              >
                {typedBody}
                {phase === "email" && typedSubject.length >= subject.length && (
                  <span
                    style={{
                      background: "#c8ffd6",
                      width: "7px",
                      height: "13px",
                      display: "inline-block",
                      verticalAlign: "middle",
                      animation: "blink 0.8s step-end infinite",
                    }}
                  />
                )}
              </div>

              {/* Scan lines appearing over email */}
              {phase === "scan" && scanLines.length > 0 && (
                <div
                  style={{
                    marginTop: "0.75rem",
                    borderTop: "1px solid #163024",
                    paddingTop: "0.75rem",
                  }}
                >
                  {scanLines.map((line, i) => (
                    <div
                      key={i}
                      style={{
                        fontSize: "0.72rem",
                        color: line.color,
                        lineHeight: "1.9",
                        animation: "fadeIn 0.3s ease",
                      }}
                    >
                      {line.text}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Phase: BLOCKED */}
          {phase === "blocked" && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "200px",
                gap: "1rem",
                animation: "fadeIn 0.3s ease",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2.5rem, 8vw, 4rem)",
                  fontWeight: "900",
                  color: "#ff4444",
                  letterSpacing: "8px",
                  border: "3px solid #ff4444",
                  padding: "0.3rem 1.5rem",
                  borderRadius: "4px",
                  textShadow: "0 0 30px rgba(255,68,68,0.8)",
                  boxShadow: "0 0 40px rgba(255,68,68,0.2)",
                  animation: "stampIn 0.3s ease",
                }}
              >
                BLOCKED
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#ff4444",
                  letterSpacing: "2px",
                  textAlign: "center",
                }}
              >
                ⚠ PHISHING ATTEMPT DETECTED
              </div>
              <div
                style={{
                  fontSize: "0.68rem",
                  color: "#4d7a5e",
                  textAlign: "center",
                  lineHeight: "1.8",
                  maxWidth: "340px",
                }}
              >
                Sorry Prince Adewale — your $10M offer
                <br />
                has been <span style={{ color: "#ff4444" }}>DENIED</span> 😂
                <br />
                <span style={{ color: "#2a4a35" }}>
                  Better luck next time (please don't try again)
                </span>
              </div>
            </div>
          )}

          {/* Phase: Boot */}
          {phase === "boot" && (
            <div>
              {bootLines.map((line, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: "0.78rem",
                    color: line.color,
                    lineHeight: "2",
                    animation: "fadeIn 0.3s ease",
                  }}
                >
                  {line.text}
                  {i === bootLines.length - 1 && (
                    <span
                      style={{
                        background: line.color,
                        width: "8px",
                        height: "14px",
                        display: "inline-block",
                        verticalAlign: "middle",
                        marginLeft: "4px",
                        animation: "blink 1s step-end infinite",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: "min(600px, 95vw)",
          height: "2px",
          background: "#163024",
          marginTop: "1rem",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            background:
              phase === "blocked"
                ? "#ff4444"
                : phase === "boot"
                  ? "#00ff88"
                  : "#00e5ff",
            boxShadow: `0 0 8px ${phase === "blocked" ? "#ff4444" : phase === "boot" ? "#00ff88" : "#00e5ff"}`,
            width: `${progress}%`,
            transition: "width 0.4s ease, background 0.3s ease",
          }}
        />
      </div>
      <div
        style={{
          fontSize: "0.65rem",
          color: "#4d7a5e",
          marginTop: "0.4rem",
          letterSpacing: "1px",
        }}
      >
        {phase === "email"
          ? "READING SUSPICIOUS EMAIL..."
          : phase === "scan"
            ? "ANALYZING THREAT..."
            : phase === "blocked"
              ? "THREAT NEUTRALIZED"
              : "LAUNCHING PHISHPEACE..."}
      </div>

      <style>{`
        @keyframes stampIn {
          from { opacity: 0; transform: scale(1.5) rotate(-3deg); }
          to   { opacity: 1; transform: scale(1) rotate(-3deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export function ToastNotification() {
  const [visible, setVisible] = useState(false);
  const [animClass, setAnimClass] = useState(""); // "" | "show" | "hide"
  const autoRef = useRef(null);

  const showToast = () => {
    clearTimeout(autoRef.current);
    setVisible(true);
    // Force a reflow cycle so the transition fires after mount
    requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnimClass("show")),
    );
    autoRef.current = setTimeout(hideToast, 6000);
  };

  const hideToast = () => {
    clearTimeout(autoRef.current);
    setAnimClass("hide");
    setTimeout(() => setVisible(false), 400);
  };

  useEffect(() => {
    const timer = setTimeout(showToast, 20000);
    return () => {
      clearTimeout(timer);
      clearTimeout(autoRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes toast-drain {
          from { transform: scaleX(1); }
          to   { transform: scaleX(0); }
        }
        .toast-notify {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 9998;
          width: min(340px, 90vw);
          background: #0b1d15;
          border: 1px solid rgba(255,68,68,0.35);
          border-left: 3px solid #ff4444;
          border-radius: 8px;
          padding: 0.85rem 1rem;
          font-family: var(--mono);
          box-shadow: 0 8px 24px rgba(0,0,0,0.45);
          transform: translateX(120%);
          opacity: 0;
          transition: transform 0.38s cubic-bezier(0.22,1,0.36,1), opacity 0.28s ease;
          overflow: hidden;
        }
        .toast-notify.show { transform: translateX(0); opacity: 1; }
        .toast-notify.hide { transform: translateX(120%); opacity: 0; }

        .toast-bar-fill {
          height: 2px;
          background: #ff4444;
          transform-origin: left;
          animation: none;
        }
        .toast-notify.show .toast-bar-fill {
          animation: toast-drain 6s linear forwards;
        }
        @keyframes toast-dot-blink {
          0%,100% { opacity:1; } 50% { opacity:0.25; }
        }
        .toast-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #ff4444; box-shadow: 0 0 5px #ff4444;
          display: inline-block;
          animation: toast-dot-blink 1.4s ease-in-out infinite;
        }
      `}</style>

      <div className={`toast-notify ${animClass}`}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              fontSize: "0.68rem",
              letterSpacing: "2px",
              color: "#ff4444",
              fontWeight: 700,
            }}
          >
            <span className="toast-dot" />
            THREAT DETECTED
          </div>
          <button
            onClick={hideToast}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#4d7a5e",
              fontSize: "14px",
            }}
          >
            ✕
          </button>
        </div>

        <div
          style={{
            fontSize: "0.82rem",
            color: "#c8ffd6",
            lineHeight: 1.5,
            marginBottom: "0.5rem",
          }}
        >
          <strong style={{ color: "#ff4444" }}>Phishing attempt blocked</strong>
          <span
            style={{
              display: "block",
              fontSize: "0.7rem",
              color: "#4d7a5e",
              marginTop: 2,
            }}
          >
            Suspicious link intercepted from unknown sender
          </span>
        </div>

        <div
          style={{
            background: "#071210",
            borderRadius: 4,
            padding: "0.45rem 0.65rem",
            fontSize: "0.68rem",
            color: "#4d7a5e",
            lineHeight: 1.9,
            marginBottom: "0.7rem",
          }}
        >
          <span style={{ color: "#00ff88" }}>SOURCE:</span>{" "}
          security@paypa1-alerts.com
          <br />
          <span style={{ color: "#00ff88" }}>TYPE:</span> Credential Harvesting
          <br />
          <span style={{ color: "#00ff88" }}>STATUS:</span>{" "}
          <span style={{ color: "#ff4444" }}>BLOCKED ✓</span>
        </div>

        <div
          style={{
            height: 2,
            background: "#163024",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <div className="toast-bar-fill" />
        </div>
      </div>
    </>
  );
}
// ── App Root ─────────────────────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState("Home");
  const [booting, setBooting] = useState(true);
  const [showLoader, setShowLoader] = useState(true); // controls DOM presence

  const pages = {
    Home: <HomePage setActive={setActive} booting={booting} />,
    Discussion: <DiscussionPage />,
    Articles: <ArticlesPage />,
    Reflection: <ReflectionPage />,
    About: <AboutPage />,
  };

  return (
    <>
      {showLoader && (
        <LoadingScreen
          onDone={() => {
            setBooting(false); // start counters
            setTimeout(() => setShowLoader(false), 700); // remove from DOM after fade
          }}
        />
      )}
      <ParticleNetwork />
      <ToastNotification />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          opacity: booting ? 0 : 1, // ← fade the site in
          transition: "opacity 0.6s ease", // ← smooth fade
          overflow: "visible",
        }}
      >
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@400;500;600;700&family=Exo+2:ital,wght@0,300;0,400;0,600;0,800;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg:        #030a06;
          --bg2:       #071210;
          --surface:   #0b1d15;
          --surface2:  #0f2319;
          --border:    #163024;
          --green:     #00ff88;
          --green-dim: #00cc6a;
          --green-dk:  #004d28;
          --accent:    #00e5ff;
          --warn:      #ffbe00;
          --danger:    #ff4444;
          --text:      #c8ffd6;
          --text-dim:  #4d7a5e;
          --mono: 'Share Tech Mono', monospace;
          --head: 'Rajdhani', sans-serif;
          --body: 'Exo 2', sans-serif;
          --radius: 8px;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--body);
          min-height: 100vh;
          line-height: 1.6;
          background-image:
            radial-gradient(ellipse 90% 45% at 50% -10%, #003d2255 0%, transparent 60%);
        }

        /* Scanlines */
        body::after {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 9999;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,255,100,0.012) 2px,
            rgba(0,255,100,0.012) 4px
          );
        }

        button { font-family: var(--body); cursor: pointer; }
        a { text-decoration: none; }
        img { max-width: 100%; }

        /* ══ NAV ════════════════════════════════════════════════════════════ */
        .nav-bar {
          position: sticky;
          top: 0;
          z-index: 200;
          background: rgba(3,10,6,0.93);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 2px 24px rgba(0,255,136,0.06);
        }
        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.25rem;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .nav-logo {
          background: none;
          border: none;
          font-family: var(--mono);
          font-size: 1.1rem;
          color: var(--green);
          letter-spacing: 2px;
          text-shadow: 0 0 14px var(--green);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .logo-bracket { color: var(--text-dim); }
        .logo-accent  { color: var(--accent); text-shadow: 0 0 10px var(--accent); }

        .nav-links-desktop {
          display: flex;
          list-style: none;
          gap: 2px;
        }
        .nav-link {
          background: none;
          border: none;
          font-family: var(--head);
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: var(--text-dim);
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .nav-link:hover { color: var(--green); background: rgba(0,255,136,0.06); }
        .nav-link-active { color: var(--green) !important; background: rgba(0,255,136,0.1) !important; }


        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 6px;
          flex-shrink: 0;
        }
        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--green);
          border-radius: 2px;
          transition: transform 0.2s, opacity 0.2s;
        }

        .nav-mobile-menu {
          list-style: none;
          background: var(--bg2);
          border-top: 1px solid var(--border);
          padding: 0.5rem 1rem 1rem;
        }
        .nav-link-mobile {
          background: none;
          border: none;
          font-family: var(--head);
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-dim);
          padding: 0.65rem 0.75rem;
          width: 100%;
          text-align: left;
          border-radius: 4px;
          display: block;
        }
        .nav-link-mobile:hover,
        .nav-link-mobile.nav-link-active { color: var(--green); background: rgba(0,255,136,0.07); }

        @media (max-width: 700px) {
          .nav-links-desktop { display: none; }
          .hamburger { display: flex; }
        }

        /* ══ PAGE WRAPPER ═══════════════════════════════════════════════════ */
        .page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2.5rem 1.25rem 4rem;
        }
        .page-header { margin-bottom: 2.5rem; }
        .page-tag {
          font-family: var(--mono);
          font-size: 0.72rem;
          letter-spacing: 2.5px;
          color: var(--accent);
          margin-bottom: 0.6rem;
        }
        .page-title {
          font-family: var(--head);
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 700;
          color: var(--text);
          letter-spacing: 2px;
          text-transform: uppercase;
          line-height: 1.1;
          margin-bottom: 0.85rem;
        }
        .accent { color: var(--green); text-shadow: 0 0 18px rgba(0,255,136,0.35); }
        .page-intro {
          font-size: 0.97rem;
          color: var(--text-dim);
          line-height: 1.75;
          max-width: 700px;
        }

        /* Shared section */
        .section { margin-top: 3.5rem; }
        .section-title {
          font-family: var(--head);
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text);
          margin-bottom: 1.75rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .section-title::before {
          content: '';
          display: inline-block;
          width: 28px;
          height: 2px;
          background: var(--green);
          box-shadow: 0 0 8px var(--green);
          flex-shrink: 0;
        }

        /* ══ HOME — HERO ════════════════════════════════════════════════════ */
        .hero-section {
          text-align: center;
          padding: 3.5rem 0 2rem;
        }
        .hero-badge {
          display: inline-block;
          font-family: var(--mono);
          font-size: 0.68rem;
          letter-spacing: 3px;
          color: var(--accent);
          border: 1px solid rgba(0,229,255,0.4);
          padding: 0.3rem 1rem;
          border-radius: 2px;
          margin-bottom: 1.5rem;
          text-shadow: 0 0 8px var(--accent);
        }
        .hero-title {
          font-family: var(--head);
          font-size: clamp(3.5rem, 12vw, 7.5rem);
          font-weight: 700;
          line-height: 1;
          color: var(--green);
          text-shadow: 0 0 40px rgba(0,255,136,0.5), 0 0 80px rgba(0,255,136,0.15);
          letter-spacing: 5px;
          margin-bottom: 0.4rem;
        }
        .hero-sub {
          font-size: clamp(0.85rem, 2.5vw, 1.2rem);
          color: var(--text-dim);
          font-weight: 300;
          letter-spacing: 3px;
          text-transform: uppercase;
        }
        .hero-desc {
          max-width: 640px;
          margin: 1.75rem auto;
          font-size: 1rem;
          color: var(--text);
          opacity: 0.75;
          line-height: 1.85;
        }
        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin: 2rem 0;
        }
        .stat-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.1rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          min-width: 140px;
          flex: 1;
          max-width: 200px;
        }
        .stat-num {
          font-family: var(--mono);
          font-size: 1.7rem;
          color: var(--green);
          text-shadow: 0 0 14px var(--green);
          font-weight: bold;
        }
        .stat-label {
          font-size: 0.72rem;
          color: var(--text-dim);
          text-align: center;
          letter-spacing: 0.3px;
          line-height: 1.4;
        }
        .hero-btns {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }
        .btn-primary {
          background: var(--green);
          color: #030a06;
          border: none;
          padding: 0.7rem 1.75rem;
          font-family: var(--head);
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          border-radius: 4px;
          transition: all 0.2s;
          box-shadow: 0 0 20px rgba(0,255,136,0.3);
        }
        .btn-primary:hover {
          background: var(--green-dim);
          box-shadow: 0 0 32px rgba(0,255,136,0.5);
          transform: translateY(-2px);
        }
        .btn-secondary {
          background: transparent;
          color: var(--green);
          border: 1px solid var(--green);
          padding: 0.7rem 1.75rem;
          font-family: var(--head);
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          border-radius: 4px;
          transition: all 0.2s;
        }
        .btn-secondary:hover {
          background: rgba(0,255,136,0.08);
          box-shadow: 0 0 16px rgba(0,255,136,0.15);
        }

        /* summary cards */
        .card-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .summary-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.5rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .summary-card:hover {
          border-color: var(--green-dk);
          box-shadow: 0 4px 24px rgba(0,255,136,0.07);
        }
        .summary-icon { font-size: 1.6rem; display: block; margin-bottom: 0.65rem; }
        .summary-card h3 {
          font-family: var(--head);
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--green);
          margin-bottom: 0.5rem;
        }
        .summary-card p { font-size: 0.88rem; color: var(--text-dim); line-height: 1.7; }

        /* timeline */
        .timeline {
          border-left: 2px solid var(--border);
          margin-left: 0.75rem;
          padding-left: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .timeline-item {
          display: grid;
          grid-template-columns: 58px 1fr;
          gap: 0.75rem;
          align-items: flex-start;
          padding: 0.85rem 0;
          position: relative;
        }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -1.97rem;
          top: 1.1rem;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 8px var(--green);
          border: 2px solid var(--bg);
        }
        .timeline-year {
          font-family: var(--mono);
          font-size: 0.82rem;
          color: var(--green);
          text-shadow: 0 0 6px var(--green);
          padding-top: 2px;
        }
        .timeline-line { display: none; }
        .timeline-dot { display: none; }
        .timeline-event { font-size: 0.9rem; color: var(--text); opacity: 0.78; line-height: 1.6; }

        /* tips */
        .tips-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .tip-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.1rem 1.25rem;
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          transition: border-color 0.2s;
        }
        .tip-card:hover { border-color: var(--green-dk); }
        .tip-icon { font-size: 1.2rem; flex-shrink: 0; margin-top: 2px; }
        .tip-card p { font-size: 0.86rem; color: var(--text-dim); line-height: 1.65; }

        /* ══ DISCUSSION ═════════════════════════════════════════════════════ */
        .accordion { display: flex; flex-direction: column; gap: 0.6rem; }
        .accordion-item {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .acc-open {
          border-color: var(--green-dk);
          box-shadow: 0 0 20px rgba(0,255,136,0.06);
        }
        .acc-header {
          width: 100%;
          background: none;
          border: none;
          padding: 1.1rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-align: left;
        }
        .acc-icon { font-size: 1.2rem; flex-shrink: 0; }
        .acc-title {
          flex: 1;
          font-family: var(--head);
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text);
        }
        .acc-chevron { font-family: var(--mono); font-size: 0.65rem; color: var(--green); flex-shrink: 0; }
        .acc-body {
          padding: 0 1.25rem 1.4rem;
          border-top: 1px solid var(--border);
        }
        .disc-text {
          font-size: 0.93rem;
          color: var(--text);
          opacity: 0.82;
          line-height: 1.85;
          margin-top: 1rem;
        }
        .disc-list { margin-top: 1rem; display: flex; flex-direction: column; gap: 0.6rem; }
        .disc-list-item {
          display: flex;
          gap: 0.75rem;
          align-items: baseline;
          padding: 0.6rem 0.75rem;
          background: var(--surface2);
          border-radius: 4px;
          border-left: 2px solid var(--green-dk);
          flex-wrap: wrap;
        }
        .disc-term {
          font-family: var(--head);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: var(--green);
          text-transform: uppercase;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .disc-def { font-size: 0.88rem; color: var(--text-dim); line-height: 1.6; }
        .disc-steps { display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1rem; }
        .disc-step {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 0.75rem;
          background: var(--surface2);
          border-radius: 6px;
          border: 1px solid var(--border);
        }
        .disc-step-num {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--green-dk);
          color: var(--green);
          font-family: var(--mono);
          font-size: 0.78rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 0 8px rgba(0,255,136,0.15);
        }
        .disc-step-title {
          font-family: var(--head);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: var(--green);
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.3rem;
        }
        .disc-step-desc { font-size: 0.86rem; color: var(--text-dim); line-height: 1.6; margin: 0; }

        /* Email mock */
        .email-mock {
          background: #0a1a10;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          max-width: 680px;
          box-shadow: 0 0 40px rgba(0,0,0,0.5), 0 0 30px rgba(0,255,136,0.04);
        }
        .email-titlebar {
          background: #081208;
          border-bottom: 1px solid var(--border);
          padding: 0.55rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .email-dots { display: flex; gap: 6px; }
        .email-dots span { width: 11px; height: 11px; border-radius: 50%; }
        .email-titlebar-text { font-family: var(--mono); font-size: 0.7rem; color: var(--text-dim); }
        .email-body { padding: 1.1rem 1.25rem; }
        .email-field {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.4rem 0.5rem;
          margin-bottom: 0.4rem;
          font-family: var(--mono);
          font-size: 0.8rem;
        }
        .ef-label { color: var(--text-dim); min-width: 56px; }
        .ef-value { color: var(--text); }
        .ef-danger { color: var(--danger); text-shadow: 0 0 5px rgba(255,68,68,0.4); }
        .ef-tag {
          font-size: 0.64rem;
          padding: 1px 6px;
          border-radius: 3px;
          font-weight: 700;
          letter-spacing: 0.3px;
          white-space: nowrap;
        }
        .ef-red { background: rgba(255,68,68,0.12); color: var(--danger); border: 1px solid rgba(255,68,68,0.25); }
        .ef-orange { background: rgba(255,190,0,0.1); color: var(--warn); border: 1px solid rgba(255,190,0,0.25); }
        .email-hr { height: 1px; background: var(--border); margin: 0.75rem 0; }
        .email-content { font-size: 0.87rem; line-height: 1.8; color: var(--text); opacity: 0.85; }
        .email-content p { margin-bottom: 0.5rem; }
        .ef-link { color: var(--accent); text-decoration: underline; }
        .email-sig { color: var(--text-dim); margin-top: 0.75rem; font-size: 0.82rem; line-height: 1.5; }

        /* ══ ARTICLES ═══════════════════════════════════════════════════════ */
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.1rem;
        }
        .article-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .article-card:hover {
          border-color: var(--green-dk);
          transform: translateY(-3px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 16px rgba(0,255,136,0.05);
        }
        .article-top { display: flex; justify-content: space-between; align-items: center; }
        .article-tag {
          font-family: var(--mono);
          font-size: 0.66rem;
          letter-spacing: 1px;
          color: var(--accent);
          background: rgba(0,229,255,0.07);
          border: 1px solid rgba(0,229,255,0.18);
          padding: 2px 8px;
          border-radius: 3px;
          text-transform: uppercase;
        }
        .article-num { font-family: var(--mono); font-size: 0.7rem; color: var(--text-dim); }
        .article-title {
          font-family: var(--head);
          font-size: 0.98rem;
          font-weight: 700;
          color: var(--text);
          line-height: 1.45;
        }
        .article-summary { font-size: 0.84rem; color: var(--text-dim); line-height: 1.7; flex: 1; }
        .article-meta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          font-family: var(--mono);
          font-size: 0.7rem;
          color: var(--text-dim);
        }
        .article-link {
          display: inline-block;
          font-family: var(--head);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--green);
          border-top: 1px solid var(--border);
          padding-top: 0.7rem;
          transition: color 0.2s, letter-spacing 0.2s;
        }
        .article-link:hover { color: var(--accent); letter-spacing: 2px; }

        /* ══ REFLECTION ═════════════════════════════════════════════════════ */
        .reflection-quote {
          font-family: var(--mono);
          font-size: 0.95rem;
          color: var(--green);
          border-left: 3px solid var(--green);
          padding: 1.1rem 1.4rem;
          background: rgba(0,255,136,0.03);
          border-radius: 0 var(--radius) var(--radius) 0;
          margin-bottom: 2.5rem;
          line-height: 1.75;
          text-shadow: 0 0 8px rgba(0,255,136,0.2);
        }
        .quote-attr {
          display: block;
          font-size: 0.72rem;
          color: var(--text-dim);
          margin-top: 0.5rem;
          font-style: italic;
        }
        .reflection-list { display: flex; flex-direction: column; gap: 2rem; }
        .reflection-item {
          display: grid;
          grid-template-columns: 60px 1fr;
          gap: 1.5rem;
          align-items: flex-start;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.5rem;
        }
        .reflection-num {
          font-family: var(--mono);
          font-size: 2rem;
          font-weight: 700;
          color: var(--green-dk);
          text-shadow: 0 0 16px var(--green-dk);
          line-height: 1;
          padding-top: 4px;
        }
        .reflection-title {
          font-family: var(--head);
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--green);
          margin-bottom: 0.65rem;
        }
        .reflection-text {
          font-size: 0.93rem;
          color: var(--text);
          opacity: 0.82;
          line-height: 1.9;
        }

        /* ══ ABOUT ══════════════════════════════════════════════════════════ */
        .about-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 3rem;
          align-items: flex-start;
        }
        .about-avatar-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          position: sticky;
          top: 80px;
        }
        .about-avatar {
          position: relative;
          width: 140px;
          height: 140px;
          flex-shrink: 0;
        }
        .avatar-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--surface);
          border: 2px solid var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 32px rgba(0,255,136,0.2);
          overflow: hidden;
        }
        .avatar-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 75%;
          border-radius: 50%;
          display: block;
        }
        .avatar-ring {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 1px dashed var(--green-dk);
          animation: spin 14s linear infinite;
          pointer-events: none;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .status-badge {
          font-family: var(--mono);
          font-size: 0.7rem;
          color: var(--text-dim);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .status-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 6px var(--green);
          animation: blink 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity: 0.3; } }
        .about-skills { display: flex; flex-direction: column; gap: 0.4rem; width: 100%; }
        .skill-tag {
          font-family: var(--mono);
          font-size: 0.65rem;
          letter-spacing: 1px;
          text-align: center;
          color: var(--text-dim);
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 3px;
          padding: 3px 0;
          text-transform: uppercase;
        }

        .about-heading {
          font-family: var(--head);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 0.85rem;
          letter-spacing: 0.5px;
        }
        .about-intro-block p {
          font-size: 0.93rem;
          line-height: 1.85;
          color: var(--text);
          opacity: 0.8;
          margin-bottom: 0.65rem;
        }
        .about-details {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.1rem 1.25rem;
          margin: 1.75rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }
        .detail-row {
          display: flex;
          gap: 1rem;
          align-items: baseline;
          flex-wrap: wrap;
          padding-bottom: 0.6rem;
          border-bottom: 1px solid var(--border);
        }
        .detail-row:last-child { border-bottom: none; padding-bottom: 0; }
        .detail-label {
          font-family: var(--mono);
          font-size: 0.75rem;
          color: var(--text-dim);
          min-width: 175px;
          flex-shrink: 0;
        }
        .detail-value { font-size: 0.88rem; color: var(--text); }
        .about-mission {
          background: rgba(0,255,136,0.03);
          border: 1px solid var(--green-dk);
          border-radius: var(--radius);
          padding: 1.25rem;
          margin-bottom: 1.25rem;
        }
        .about-mission h3 {
          font-family: var(--head);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--green);
          margin-bottom: 0.65rem;
        }
        .about-mission p { font-size: 0.9rem; color: var(--text); opacity: 0.78; line-height: 1.85; }
        .about-contact-note {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1rem 1.25rem;
        }
        .contact-icon { font-size: 1.1rem; flex-shrink: 0; margin-top: 2px; }
        .about-contact-note p { font-size: 0.85rem; color: var(--text-dim); line-height: 1.65; }

        /* ══ FOOTER ═════════════════════════════════════════════════════════ */
        .footer {
          border-top: 1px solid var(--border);
          background: var(--bg2);
          margin-top: 5rem;
        }
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2.5rem 1.25rem;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem;
        }
        .footer-brand .nav-logo,
        .footer-brand {
          font-family: var(--mono);
          font-size: 1.05rem;
          color: var(--green);
          letter-spacing: 2px;
          text-shadow: 0 0 10px var(--green);
          border: none;
          background: none;
          padding: 0;
          margin-bottom: 0.75rem;
          display: block;
        }
        .footer-brand p { font-size: 0.82rem; color: var(--text-dim); line-height: 1.65; }
        .footer-links { display: flex; flex-direction: column; gap: 0.4rem; }
        .footer-links-title {
          font-family: var(--mono);
          font-size: 0.68rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.4rem;
        }
        .footer-link {
          background: none;
          border: none;
          font-family: var(--body);
          font-size: 0.84rem;
          color: var(--text-dim);
          text-align: left;
          padding: 0;
          transition: color 0.2s;
        }
        .footer-link:hover { color: var(--green); }
        .footer-note p { font-size: 0.82rem; color: var(--text-dim); line-height: 1.7; }
        .footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 1.25rem;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          font-family: var(--mono);
          font-size: 0.7rem;
          color: var(--text-dim);
        }
        .footer-tag { color: var(--green); opacity: 0.6; }

        /* ══ GLITCH ═════════════════════════════════════════════════════════ */
        .glitch-text {
          position: relative;
          display: inline-block;
          color: var(--green);
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          color: var(--green);
        }
        .glitch-text::before {
          color: var(--accent);
          animation: glitch1 5s infinite;
          clip-path: polygon(0 30%, 100% 30%, 100% 50%, 0 50%);
        }
        .glitch-text::after {
          color: #ff0055;
          animation: glitch2 5s infinite;
          clip-path: polygon(0 60%, 100% 60%, 100% 75%, 0 75%);
        }
        @keyframes glitch1 {
          0%,88%,100% { transform: none; opacity: 0; }
          89% { transform: translateX(-4px); opacity: 0.9; }
          91% { transform: translateX(3px); opacity: 0.9; }
          93% { transform: none; opacity: 0; }
        }
        @keyframes glitch2 {
          0%,91%,100% { transform: none; opacity: 0; }
          92% { transform: translateX(5px); opacity: 0.7; }
          95% { transform: translateX(-3px); opacity: 0.7; }
          97% { transform: none; opacity: 0; }
        }

        /* ══ RESPONSIVE ═════════════════════════════════════════════════════ */

        /* Tablet: ≤ 900px */
        @media (max-width: 900px) {
          .card-grid-3 { grid-template-columns: repeat(2, 1fr); }
          .tips-grid { grid-template-columns: repeat(2, 1fr); }
          .articles-grid { grid-template-columns: 1fr; }
          .about-grid { grid-template-columns: 1fr; }
          .about-avatar-col {
            position: static;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 1.25rem;
          }
          .about-skills { flex-direction: row; flex-wrap: wrap; gap: 0.4rem; }
          .skill-tag { padding: 3px 8px; }
          .footer-inner { grid-template-columns: 1fr 1fr; }
          .footer-note { grid-column: 1 / -1; }
        }

        /* Mobile: ≤ 600px */
        @media (max-width: 600px) {
          .page { padding: 1.75rem 1rem 3rem; }
          .hero-section { padding: 2rem 0 1rem; }
          .hero-stats { gap: 0.6rem; }
          .stat-card { min-width: 110px; padding: 0.85rem 1rem; }
          .stat-num { font-size: 1.4rem; }
          .hero-btns { flex-direction: column; align-items: center; }
          .btn-primary, .btn-secondary { width: 100%; max-width: 280px; text-align: center; }
          .card-grid-3 { grid-template-columns: 1fr; }
          .tips-grid { grid-template-columns: 1fr; }
          .timeline-item { grid-template-columns: 44px 1fr; }
          .acc-title { font-size: 0.82rem; }
          .disc-list-item { flex-direction: column; gap: 0.25rem; }
          .email-field { font-size: 0.73rem; }
          .reflection-item { grid-template-columns: 1fr; gap: 0.75rem; }
          .reflection-num { font-size: 1.2rem; }
          .about-avatar-col { flex-direction: column; align-items: flex-start; }
          .about-avatar { width: 90px; height: 90px; }
          .avatar-initials { font-size: 1.6rem; }
          .detail-label { min-width: unset; width: 100%; }
          .footer-inner { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; align-items: flex-start; gap: 0.25rem; }
          .section-title { font-size: 1.05rem; }
          .page-title { font-size: clamp(1.6rem, 8vw, 2.5rem); }
        }

        /* Extra small: ≤ 380px */
        @media (max-width: 380px) {
          .hero-title { font-size: 3rem; }
          .stat-card { flex: 0 0 calc(50% - 0.4rem); max-width: none; }
        }
      `}</style>

        <NavBar active={active} setActive={setActive} />
        {pages[active]}
        <Footer setActive={setActive} />
      </div>
    </>
  );
}
