import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">Microknots</div>
          <div className="nav-links">
            <a href="#capabilities">Capabilities</a>
            <a href="#orion">Orion</a>
            <a href="#success">Success Stories</a>
            <a href="#contact" className="nav-cta">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Engineering Intelligence for the Modern Enterprise</div>
          <h1 className="hero-title">
            Building the Intelligent
            <span className="gradient-text"> Infrastructure</span>
            <br />of Tomorrow
          </h1>
          <p className="hero-description">
            We help businesses innovate faster, scale efficiently, and operate with precision 
            through secure, high-quality technology solutions. Combining craftsmanship with 
            technical depth to modernize operations and unlock the power of data.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get Started</a>
            <a href="#capabilities" className="btn btn-secondary">Explore Services</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">99%</div>
              <div className="stat-label">Uptime Reliability</div>
            </div>
            <div className="stat">
              <div className="stat-number">47%</div>
              <div className="stat-label">Time Savings</div>
            </div>
            <div className="stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
          </div>
        </div>
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="capabilities" className="capabilities">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Capabilities</h2>
            <p className="section-subtitle">
              Comprehensive technology solutions designed to transform your business
            </p>
          </div>
          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="capability-icon">🌐</div>
              <h3>Web & Mobile Development</h3>
              <p>High-performance web and mobile platforms with modern frameworks and responsive design principles.</p>
            </div>
            <div className="capability-card">
              <div className="capability-icon">📊</div>
              <h3>Data Analysis & BI</h3>
              <p>Turning raw data into real-time insights through analytics dashboards, visualization, and automation pipelines.</p>
            </div>
            <div className="capability-card">
              <div className="capability-icon">🔗</div>
              <h3>System Integration & APIs</h3>
              <p>Secure, reliable integrations that unify disconnected systems into seamless, efficient workflows.</p>
            </div>
            <div className="capability-card">
              <div className="capability-icon">☁️</div>
              <h3>Cloud Infrastructure</h3>
              <p>Scalable IaaS and PaaS architectures that reduce cost, boost performance, and support global deployment.</p>
            </div>
            <div className="capability-card">
              <div className="capability-icon">🏷️</div>
              <h3>Data Labeling & Annotation</h3>
              <p>Human-in-the-loop services to train and validate machine learning and vision models with accuracy.</p>
            </div>
            <div className="capability-card">
              <div className="capability-icon">🤖</div>
              <h3>LLM Fine-Tuning</h3>
              <p>Customizing large language models for enterprise use — improving accuracy, domain understanding, and contextual reasoning.</p>
            </div>
            <div className="capability-card">
              <div className="capability-icon">📋</div>
              <h3>Project Management</h3>
              <p>End-to-end oversight that ensures timely delivery, quality control, and post-launch optimization.</p>
            </div>
            <div className="capability-card">
              <div className="capability-icon">💼</div>
              <h3>Consulting & Staffing</h3>
              <p>Technical consulting and talent placement for AI, engineering, and digital transformation projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Orion Data Engine */}
      <section id="orion" className="orion">
        <div className="container">
          <div className="orion-content">
            <div className="orion-text">
              <div className="section-badge">Flagship Product</div>
              <h2 className="section-title">The Orion Data Engine</h2>
              <p className="orion-description">
                Empower your company to integrate, model, and analyze enterprise data in real time. 
                Orion bridges structured and unstructured data, enabling organizations to deploy AI 
                efficiently—without overhauling their existing systems.
              </p>
              <p className="orion-description">
                Built with scalability and automation in mind, Orion helps teams move beyond 
                experimentation into measurable, production-grade AI.
              </p>
              <div className="orion-features">
                <div className="orion-feature">
                  <div className="feature-check">✓</div>
                  <div>
                    <strong>99% uptime reliability</strong>
                    <p>Enterprise-grade infrastructure</p>
                  </div>
                </div>
                <div className="orion-feature">
                  <div className="feature-check">✓</div>
                  <div>
                    <strong>47% operational time savings</strong>
                    <p>Automated workflows and pipelines</p>
                  </div>
                </div>
                <div className="orion-feature">
                  <div className="feature-check">✓</div>
                  <div>
                    <strong>Streamlined data flow</strong>
                    <p>Unified systems and integrations</p>
                  </div>
                </div>
                <div className="orion-feature">
                  <div className="feature-check">✓</div>
                  <div>
                    <strong>Custom AI models</strong>
                    <p>Optimized for business performance</p>
                  </div>
                </div>
              </div>
              <a href="#contact" className="btn btn-primary">Learn More About Orion</a>
            </div>
            <div className="orion-visual">
              <div className="orion-card">
                <div className="orion-card-header">
                  <div className="card-dot"></div>
                  <div className="card-dot"></div>
                  <div className="card-dot"></div>
                </div>
                <div className="orion-card-content">
                  <div className="data-visualization">
                    <div className="data-stream stream-1"></div>
                    <div className="data-stream stream-2"></div>
                    <div className="data-stream stream-3"></div>
                    <div className="data-node node-1"></div>
                    <div className="data-node node-2"></div>
                    <div className="data-node node-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section id="success" className="success-stories">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Client Success Stories</h2>
            <p className="section-subtitle">
              Real results from real partnerships
            </p>
          </div>
          <div className="stories-grid">
            <div className="story-card">
              <div className="story-header">
                <div className="story-logo">IPRO</div>
                <div className="story-tag">eDiscovery Modernization</div>
              </div>
              <h3>IPRO Tech LLC</h3>
              <p>
                When IPRO's expansion led to fragmented systems and high operational costs, 
                Microknots delivered a streamlined infrastructure that reduced inefficiencies, 
                improved collaboration, and accelerated product delivery.
              </p>
              <div className="story-results">
                <div className="result-item">
                  <strong>Faster Updates</strong>
                  <span>Accelerated delivery cycles</span>
                </div>
                <div className="result-item">
                  <strong>Fewer Issues</strong>
                  <span>Improved system stability</span>
                </div>
                <div className="result-item">
                  <strong>Market Competitive</strong>
                  <span>Enhanced positioning</span>
                </div>
              </div>
            </div>
            <div className="story-card">
              <div className="story-header">
                <div className="story-logo">X1</div>
                <div className="story-tag">Cloud Transformation</div>
              </div>
              <h3>X1 Company</h3>
              <p>
                Facing slow updates and high server costs, X1 partnered with Microknots to 
                migrate from on-premise infrastructure to cloud-based IaaS.
              </p>
              <div className="story-results">
                <div className="result-item">
                  <strong>Scalable Growth</strong>
                  <span>Future-ready architecture</span>
                </div>
                <div className="result-item">
                  <strong>Reduced Expenses</strong>
                  <span>Lower operational costs</span>
                </div>
                <div className="result-item">
                  <strong>Simplified Maintenance</strong>
                  <span>Streamlined operations</span>
                </div>
              </div>
            </div>
            <div className="story-card">
              <div className="story-header">
                <div className="story-logo">AURELO</div>
                <div className="story-tag">Orion AI Deployment</div>
              </div>
              <h3>Aurelo Data</h3>
              <p>
                Microknots collaborated with Aurelo Data to deploy enterprise-level AI using 
                the Orion Data Engine. The solution integrated multi-source data, automated 
                pipelines, and predictive analytics.
              </p>
              <div className="story-results">
                <div className="result-item">
                  <strong>Exponential Gains</strong>
                  <span>Operational efficiency</span>
                </div>
                <div className="result-item">
                  <strong>Faster Decisions</strong>
                  <span>Real-time insights</span>
                </div>
                <div className="result-item">
                  <strong>AI-Powered</strong>
                  <span>Production-grade deployment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Microknots */}
      <section className="why-microknots">
        <div className="container">
          <div className="why-content">
            <div className="why-text">
              <h2 className="section-title">Why Microknots</h2>
              <p className="why-description">
                Businesses choose Microknots because we don't just deliver technology — 
                we deliver transformation. Our approach is rooted in technical rigor, design 
                precision, and measurable business outcomes.
              </p>
              <p className="why-description">
                Each solution is custom-built to fit the client's strategic vision, blending 
                modern engineering with AI-driven intelligence. We believe the future belongs 
                to companies that adapt quickly.
              </p>
              <div className="why-values">
                <div className="value-item">
                  <h4>Scale Effortlessly</h4>
                  <p>Systems designed to grow with your business</p>
                </div>
                <div className="value-item">
                  <h4>Automate Intelligently</h4>
                  <p>AI-driven workflows that enhance productivity</p>
                </div>
                <div className="value-item">
                  <h4>Evolve Continuously</h4>
                  <p>Future-ready solutions that adapt to change</p>
                </div>
              </div>
            </div>
            <div className="why-visual">
              <div className="value-card">
                <div className="value-icon">🚀</div>
                <h4>Innovation Partner</h4>
                <p>More than software — we're your innovation partner</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h4>Measurable Outcomes</h4>
                <p>Every solution delivers tangible business value</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🔒</div>
                <h4>Enterprise Security</h4>
                <p>Secure, compliant, and production-ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-brand">
                <h3>Microknots</h3>
                <p>Engineering Intelligence for the Modern Enterprise</p>
                <p className="footer-tagline">
                  We empower businesses to make smarter decisions, scale confidently, 
                  and evolve continuously in an AI-driven world.
                </p>
              </div>
              <div className="footer-contact">
                <h4>Contact Information</h4>
                <div className="contact-info">
                  <p><strong>Address:</strong> 1135 Kildare Farm Road, Cary, NC 27511</p>
                  <p><strong>Phone:</strong> <a href="tel:+14435384373">+1 (443) 538-4373</a></p>
                  <p><strong>Email:</strong> <a href="mailto:info@microknots.com">info@microknots.com</a></p>
                </div>
                <div className="company-codes">
                  <p><strong>UEI:</strong> JQ9FVXFD3ND5</p>
                  <p><strong>CAGE Code:</strong> 17BF1</p>
                  <p><strong>NAICS:</strong> 541511, 541512, 541519, 541612, 518210</p>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Microknots. All rights reserved.</p>
              <p className="footer-promise">
                Creating connected, adaptive, and efficient systems that define the future of digital enterprise.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
