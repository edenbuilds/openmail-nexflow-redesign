export default function Home() {
  return (
    <>
      <div className="banner">
        Building an agent startup? €500 in credit. <a href="/startups">Apply now →</a>
      </div>
      <header>
        <div className="container header-inner">
          <a href="/" className="logo">
            <img src="/assets/openmail-wordmark-white.png" alt="openmail" />
          </a>
          <nav className="nav">
            <a href="https://docs.openmail.sh" target="_blank" rel="noreferrer">Docs</a>
            <a href="#pricing">Pricing</a>
            <a href="#features">Features</a>
            <a href="https://docs.openmail.sh" target="_blank" rel="noreferrer">Blog</a>
          </nav>
          <a href="https://console.openmail.sh/signup" className="btn btn-primary">Start for free</a>
        </div>
      </header>

      <main>
        <section className="hero dither">
          <div className="container">
            <h1>The email inbox built<br />for AI agents.</h1>
            <p>An address of its own, so your agent can sign up for services, talk to people and institutions, and read email the way you do.</p>
            <div className="hero-actions">
              <a href="https://console.openmail.sh/signup" className="btn btn-primary">Start for free</a>
              <a href="#quickstart" className="btn btn-secondary">Copy agent setup</a>
            </div>
          </div>
        </section>

        <div className="logo-strip">
          <div className="container">
            <p>Works with</p>
            <div className="logos">
              <img src="/assets/vinted.svg" alt="Vinted" />
              <img src="/assets/adobe.svg" alt="Adobe" />
              <img src="/assets/pipedrive.svg" alt="Pipedrive" />
              <img src="/assets/twilio.svg" alt="Twilio" />
              <img src="/assets/openclaw.png" alt="OpenClaw" />
              <img src="/assets/hermes.png" alt="Hermes" />
              <img src="/assets/claude-code.svg" alt="Claude Code" />
            </div>
          </div>
        </div>

        <section id="features">
          <div className="container">
            <div className="section-header">
              <h2>Designed for agents from the ground up.</h2>
              <p>Email APIs were built to blast. OpenMail is built for the reply.</p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Instant replies</h3>
                <p>Replies reach your agent over a webhook or WebSocket. Nothing polls.</p>
              </div>
              <div className="feature-card">
                <h3>Sender rules</h3>
                <p>Allow or block by address or domain. Keep each inbox clean and intentional.</p>
              </div>
              <div className="feature-card">
                <h3>One inbox per agent</h3>
                <p>Dedicated address and scoped keys. Isolation so one agent cannot reach another.</p>
              </div>
              <div className="feature-card">
                <h3>LLM-ready attachments</h3>
                <p>PDF, CSV, images, DOCX, and JSON parsed to text. Ready for your model.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="code-section" id="quickstart">
          <div className="container">
            <div className="section-header">
              <h2>Works with the agents you already use.</h2>
              <p>One command gives OpenClaw, Hermes, or Claude Code an inbox. Or hit the REST API directly.</p>
            </div>
            <pre className="code-block"><code>{`# Install the OpenMail channel plugin
openclaw plugins install clawhub:@openmail/openclaw

# Add the channel with a key from console.openmail.sh
openclaw channels add --channel openmail --api-key om_xxx --mailbox-name support
openclaw gateway restart

# Mail from people wakes the agent; it replies in-thread.`}</code></pre>
            <div style={{ textAlign: 'center', marginTop: 28 }}>
              <a href="https://docs.openmail.sh" className="btn btn-secondary">Read the Docs</a>
            </div>
          </div>
        </section>

        <section id="pricing">
          <div className="container">
            <div className="section-header">
              <h2>Scale your agents, with control.</h2>
              <p>Start free. Upgrade to Pro for €9/month and pay only for the usage you grow into.</p>
            </div>
            <div className="pricing-grid">
              <div className="price-card">
                <div className="plan">Free</div>
                <div className="amount">€0 <span>/mo</span></div>
                <div className="desc">No credit card</div>
                <ul>
                  <li>3 inboxes</li>
                  <li>3,000 emails/month</li>
                  <li>3 GB storage</li>
                </ul>
                <a href="https://console.openmail.sh/signup" className="btn btn-secondary">Start Building</a>
              </div>
              <div className="price-card popular">
                <div className="plan">Pro</div>
                <div className="amount">€9 <span>/mo + usage</span></div>
                <div className="desc">Everything you need to scale</div>
                <ul>
                  <li>10 inboxes, then €1/inbox</li>
                  <li>10,000 emails/month</li>
                  <li>10 GB storage</li>
                  <li>Custom domains</li>
                  <li>No OpenMail footer</li>
                </ul>
                <a href="https://console.openmail.sh/signup" className="btn btn-primary">Start Building</a>
              </div>
              <div className="price-card">
                <div className="plan">Enterprise</div>
                <div className="amount">Custom</div>
                <div className="desc">Security, SLAs, and support</div>
                <ul>
                  <li>Dedicated sending IPs</li>
                  <li>Enterprise SSO</li>
                  <li>Priority support + 1hr SLA</li>
                  <li>Volume discounts</li>
                </ul>
                <a href="https://www.cal.eu/jokubas/15min" className="btn btn-secondary">Talk to Us</a>
              </div>
            </div>
          </div>
        </section>

        <section className="dither dither-cta">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 30, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 14 }}>
              Every AI agent deserves its own inbox.
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: 26 }}>No commitment, cancel anytime.</p>
            <a href="https://console.openmail.sh/signup" className="btn btn-primary">Start for free</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div className="copyright">© 2026 OpenMail · UAB All Systems Operational · Vilnius, EU</div>
          <div className="footer-links">
            <a href="https://docs.openmail.sh">Docs</a>
            <a href="/about">About</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}
