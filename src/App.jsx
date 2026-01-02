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
          <div className="logo">microknots</div>
          <div className="nav-links">
            <a href="#products">Products</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#enterprise">Enterprise</a>
            <a href="#customers">Customers</a>
            <a href="#resources">Resources</a>
            <a href="#contact" className="nav-cta-primary">Book a Demo →</a>
            <a href="#login" className="nav-login">Log In</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">AI FOR THE ENTERPRISE</div>
          <h1 className="hero-title">
            Full-Stack AI Solutions
          </h1>
          <p className="hero-description">
            Outcomes delivered with world-class data, models, agents, and deployment.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Book a Demo →</a>
            <a href="#build" className="btn btn-secondary">Build AI →</a>
          </div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="main-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <div className="content-item">
                <h2>Fine-Tuning and RLHF</h2>
                <p>Adapt best-in-class foundation models to your business and your specific data to build sustainable, successful AI programs and data from your enterprise.</p>
              </div>
              <div className="content-item">
                <h2>Foundation Models</h2>
                <p>Microknots partners or integrates with all of the leading AI models, from open-source to closed-source, including Google, Meta, Cohere, and more.</p>
              </div>
              <div className="content-item">
                <h2>Enterprise Data</h2>
                <p>Microknots' Data Engine enables you to integrate your enterprise data into the fold of these models, providing the base for long-term strategic differentiation.</p>
              </div>
              <div className="partners-label">
                GENERATIVE AI PROVIDERS WE PARTNER WITH:
              </div>
            </div>
            <div className="content-visual">
              <div className="isometric-container">
                {/* Base Layer - Microknots Data Engine */}
                <div className="layer base-layer">
                  <div className="block base-block">
                    <div className="block-face front">
                      <div className="block-label">MICROKNOTS DATA ENGINE</div>
                    </div>
                    <div className="block-face top"></div>
                    <div className="block-face right"></div>
                  </div>
                </div>

                {/* Middle Layer - Generative and Foundation Models */}
                <div className="layer middle-layer">
                  <div className="block middle-block">
                    <div className="block-face front">
                      <div className="block-label">GENERATIVE AND FOUNDATION MODELS</div>
                    </div>
                    <div className="block-face top"></div>
                    <div className="block-face right"></div>
                  </div>
                  <div className="block rlhf-block">
                    <div className="block-face front">
                      <div className="block-label">RLHF</div>
                    </div>
                    <div className="block-face top"></div>
                    <div className="block-face right"></div>
                  </div>
                </div>

                {/* Foundation Models Layer */}
                <div className="layer models-layer">
                  <div className="model-block" data-model="claude">
                    <div className="block-face front">
                      <div className="block-label">CLAUDE 3.5</div>
                    </div>
                    <div className="block-face top"></div>
                    <div className="block-face right"></div>
                  </div>
                  <div className="model-block" data-model="llama">
                    <div className="block-face front">
                      <div className="block-label">LLAMA-3.1</div>
                    </div>
                    <div className="block-face top"></div>
                    <div className="block-face right"></div>
                  </div>
                  <div className="model-block" data-model="gpt">
                    <div className="block-face front">
                      <div className="block-label">GPT-4o</div>
                    </div>
                    <div className="block-face top"></div>
                    <div className="block-face right"></div>
                  </div>
                  <div className="model-block" data-model="cohere">
                    <div className="block-face front">
                      <div className="block-label">COHERE RERANK</div>
                    </div>
                    <div className="block-face top"></div>
                    <div className="block-face right"></div>
                  </div>
                  <div className="model-block" data-model="gemini">
                    <div className="block-face front">
                      <div className="block-label">GEMINI 1.5 PRO</div>
                    </div>
                    <div className="block-face top"></div>
                    <div className="block-face right"></div>
                  </div>
                  <div className="model-block" data-model="mistral">
                    <div className="block-face front">
                      <div className="block-label">MISTRAL LARGE 2</div>
                    </div>
                    <div className="block-face top"></div>
                    <div className="block-face right"></div>
                  </div>
                </div>

                {/* Industry App Pillars */}
                <div className="layer pillars-layer">
                  <div className="pillar" data-industry="marketing">
                    <div className="pillar-connectors">
                      <div className="connector-cube"></div>
                      <div className="connector-cube"></div>
                    </div>
                    <div className="pillar-block">
                      <div className="block-face front">
                        <div className="pillar-label-top">APP</div>
                        <div className="pillar-label-side">MARKETING</div>
                      </div>
                      <div className="block-face top"></div>
                      <div className="block-face right"></div>
                    </div>
                  </div>
                  <div className="pillar" data-industry="financial">
                    <div className="pillar-connectors">
                      <div className="connector-cube"></div>
                      <div className="connector-cube"></div>
                    </div>
                    <div className="pillar-block">
                      <div className="block-face front">
                        <div className="pillar-label-top">APP</div>
                        <div className="pillar-label-side">FINANCIAL SERVICES</div>
                      </div>
                      <div className="block-face top"></div>
                      <div className="block-face right"></div>
                    </div>
                  </div>
                  <div className="pillar" data-industry="insurance">
                    <div className="pillar-connectors">
                      <div className="connector-cube"></div>
                      <div className="connector-cube"></div>
                    </div>
                    <div className="pillar-block">
                      <div className="block-face front">
                        <div className="pillar-label-top">APP</div>
                        <div className="pillar-label-side">INSURANCE</div>
                      </div>
                      <div className="block-face top"></div>
                      <div className="block-face right"></div>
                    </div>
                  </div>
                  <div className="pillar" data-industry="retail">
                    <div className="pillar-connectors">
                      <div className="connector-cube"></div>
                      <div className="connector-cube"></div>
                    </div>
                    <div className="pillar-block">
                      <div className="block-face front">
                        <div className="pillar-label-top">APP</div>
                        <div className="pillar-label-side">RETAIL</div>
                      </div>
                      <div className="block-face top"></div>
                      <div className="block-face right"></div>
                    </div>
                  </div>
                  <div className="pillar" data-industry="ecommerce">
                    <div className="pillar-connectors">
                      <div className="connector-cube"></div>
                      <div className="connector-cube"></div>
                    </div>
                    <div className="pillar-block">
                      <div className="block-face front">
                        <div className="pillar-label-top">APP</div>
                        <div className="pillar-label-side">E-COMMERCE</div>
                      </div>
                      <div className="block-face top"></div>
                      <div className="block-face right"></div>
                    </div>
                  </div>
                  <div className="pillar" data-industry="legal">
                    <div className="pillar-connectors">
                      <div className="connector-cube"></div>
                    </div>
                    <div className="pillar-block">
                      <div className="block-face front">
                        <div className="pillar-label-top">APP</div>
                        <div className="pillar-label-side">LEGAL</div>
                      </div>
                      <div className="block-face top"></div>
                      <div className="block-face right"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="container">
          <div className="section-badge">BUILD AI</div>
          <h2 className="section-title">Powering Enterprise AI</h2>
          <p className="section-subtitle">
            Next Generation AI powered by world-class data, models, and infrastructure.
          </p>
          
          {/* Orion Data Engine */}
          <div className="product-cards">
            <div className="product-card">
              <h3>Orion Data Engine</h3>
              <p>Microknots' flagship data engine empowers companies to integrate, model, and analyze enterprise data in real time. Orion bridges structured and unstructured data, enabling organizations to deploy AI efficiently—without overhauling their existing systems.</p>
              <ul className="product-features">
                <li>99% uptime reliability</li>
                <li>47% operational time savings</li>
                <li>Streamlined data flow across systems</li>
                <li>Custom AI models optimized for business performance</li>
              </ul>
              <div className="card-buttons">
                <a href="#contact" className="btn btn-primary">Book a Demo →</a>
                <a href="#build" className="btn btn-secondary">Learn More →</a>
              </div>
            </div>

            <div className="product-card">
              <h3>Data Labeling & Annotation</h3>
              <p>Human-in-the-loop services to train and validate machine learning and vision models with accuracy. Our expert annotators deliver high-quality labeled datasets that power production-grade AI systems.</p>
              <ul className="product-features">
                <li>Expert human annotators</li>
                <li>Multi-modal data support (text, image, video)</li>
                <li>Quality assurance and validation</li>
                <li>Scalable annotation pipelines</li>
              </ul>
              <div className="card-buttons">
                <a href="#contact" className="btn btn-primary">Book a Demo →</a>
                <a href="#build" className="btn btn-secondary">Learn More →</a>
              </div>
            </div>

            <div className="product-card">
              <h3>Model Evaluation & Safety</h3>
              <p>Comprehensive evaluation frameworks to assess model performance, safety, and alignment. We help organizations deploy AI systems with confidence through rigorous testing and validation.</p>
              <ul className="product-features">
                <li>Automated evaluation pipelines</li>
                <li>Safety and alignment testing</li>
                <li>Performance benchmarking</li>
                <li>Custom evaluation metrics</li>
              </ul>
              <div className="card-buttons">
                <a href="#contact" className="btn btn-primary">Book a Demo →</a>
                <a href="#build" className="btn btn-secondary">Learn More →</a>
              </div>
            </div>

            <div className="product-card">
              <h3>RLHF & Fine-Tuning</h3>
              <p>Adapt best-in-class foundation models to your business and specific data. Our RLHF and fine-tuning services build sustainable, successful AI programs tailored to your enterprise needs.</p>
              <ul className="product-features">
                <li>Custom model fine-tuning</li>
                <li>Reinforcement Learning from Human Feedback</li>
                <li>Domain-specific adaptation</li>
                <li>Continuous model improvement</li>
              </ul>
              <div className="card-buttons">
                <a href="#contact" className="btn btn-primary">Book a Demo →</a>
                <a href="#build" className="btn btn-secondary">Learn More →</a>
              </div>
            </div>

            <div className="product-card">
              <h3>AI Agent Development</h3>
              <p>Build reliable AI agents that learn your unique enterprise context and skills to improve outcomes. Deploy intelligent automation that understands your business processes and adapts over time.</p>
              <ul className="product-features">
                <li>Enterprise context learning</li>
                <li>Multi-agent orchestration</li>
                <li>Continuous skill improvement</li>
                <li>Production-ready deployment</li>
              </ul>
              <div className="card-buttons">
                <a href="#contact" className="btn btn-primary">Book a Demo →</a>
                <a href="#build" className="btn btn-secondary">Learn More →</a>
              </div>
            </div>

            <div className="product-card">
              <h3>Cloud Infrastructure & Deployment</h3>
              <p>Scalable IaaS and PaaS architectures that reduce cost, boost performance, and support global deployment. From cloud migration to AI model serving, we build infrastructure that scales.</p>
              <ul className="product-features">
                <li>Multi-cloud deployment</li>
                <li>Auto-scaling infrastructure</li>
                <li>Cost optimization</li>
                <li>Global edge deployment</li>
              </ul>
              <div className="card-buttons">
                <a href="#contact" className="btn btn-primary">Book a Demo →</a>
                <a href="#build" className="btn btn-secondary">Learn More →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="capabilities-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">OUR CAPABILITIES</div>
            <h2 className="section-title">Core Capabilities</h2>
            <p className="section-subtitle">
              Comprehensive technology solutions designed to transform your business
            </p>
          </div>
          <div className="capabilities-grid">
            <div className="capability-card">
              <h3>Web & Mobile Development</h3>
              <p>High-performance web and mobile platforms with modern frameworks and responsive design principles.</p>
            </div>
            <div className="capability-card">
              <h3>Data Analysis & Business Intelligence</h3>
              <p>Turning raw data into real-time insights through analytics dashboards, visualization, and automation pipelines.</p>
            </div>
            <div className="capability-card">
              <h3>System Integration & API Development</h3>
              <p>Creating secure, reliable integrations that unify disconnected systems into seamless, efficient workflows.</p>
            </div>
            <div className="capability-card">
              <h3>Cloud Infrastructure</h3>
              <p>Implementing scalable IaaS and PaaS architectures that reduce cost, boost performance, and support global deployment.</p>
            </div>
            <div className="capability-card">
              <h3>Data Labeling & Annotation</h3>
              <p>Human-in-the-loop services to train and validate machine learning and vision models with accuracy.</p>
            </div>
            <div className="capability-card">
              <h3>LLM Fine-Tuning & Model Enhancement</h3>
              <p>Customizing large language models (LLMs) for enterprise use — improving accuracy, domain understanding, and contextual reasoning.</p>
            </div>
            <div className="capability-card">
              <h3>Project Management & Support</h3>
              <p>End-to-end oversight that ensures timely delivery, quality control, and post-launch optimization.</p>
            </div>
            <div className="capability-card">
              <h3>Consulting & Staffing</h3>
              <p>Technical consulting and talent placement for AI, engineering, and digital transformation projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success" className="success-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Client Success Stories</h2>
            <p className="section-subtitle">
              Real results from real partnerships
            </p>
          </div>
          <div className="stories-grid">
            <div className="story-card">
              <div className="story-tag">eDiscovery Modernization</div>
              <h3>IPRO Tech LLC</h3>
              <p>When IPRO's expansion led to fragmented systems and high operational costs, Microknots delivered a streamlined infrastructure that reduced inefficiencies, improved collaboration, and accelerated product delivery.</p>
              <div className="story-results">
                <div className="result-item">
                  <strong>Faster Updates</strong>
                  <span>Accelerated delivery cycles</span>
                </div>
                <div className="result-item">
                  <strong>Fewer Issues</strong>
                  <span>Improved system stability</span>
                </div>
              </div>
            </div>
            <div className="story-card">
              <div className="story-tag">Cloud Transformation</div>
              <h3>X1 Company</h3>
              <p>Facing slow updates and high server costs, X1 partnered with Microknots to migrate from on-premise infrastructure to cloud-based IaaS.</p>
              <div className="story-results">
                <div className="result-item">
                  <strong>Scalable Growth</strong>
                  <span>Future-ready architecture</span>
                </div>
                <div className="result-item">
                  <strong>Reduced Expenses</strong>
                  <span>Lower operational costs</span>
                </div>
              </div>
            </div>
            <div className="story-card">
              <div className="story-tag">Orion AI Deployment</div>
              <h3>Aurelo Data</h3>
              <p>Microknots collaborated with Aurelo Data to deploy enterprise-level AI using the Orion Data Engine. The solution integrated multi-source data, automated pipelines, and predictive analytics.</p>
              <div className="story-results">
                <div className="result-item">
                  <strong>Exponential Gains</strong>
                  <span>Operational efficiency</span>
                </div>
                <div className="result-item">
                  <strong>Faster Decisions</strong>
                  <span>Real-time insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <p className="partners-text">
            Microknots works with Generative AI Companies, U.S. Government Agencies & Enterprises
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h4>PRODUCTS</h4>
              <ul>
                <li><a href="#orion">Orion Data Engine</a></li>
                <li><a href="#data-labeling">Data Labeling</a></li>
                <li><a href="#evaluation">Evaluation</a></li>
                <li><a href="#rlhf">RLHF</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>COMPANY</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#press">Press</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>RESOURCES</h4>
              <ul>
                <li><a href="#docs">Documentation</a></li>
                <li><a href="#api">API Reference</a></li>
                <li><a href="#guides">Guides</a></li>
                <li><a href="#support">Support</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>GOVERNMENT</h4>
              <ul>
                <li><a href="#public-sector">Public Sector</a></li>
                <li><a href="#defense">Defense</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>FOLLOW US</h4>
              <div className="social-links">
                <a href="#twitter">X</a>
                <a href="#linkedin">LinkedIn</a>
                <a href="#github">GitHub</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-contact">
              <p><strong>Address:</strong> 1135 Kildare Farm Road, Cary, NC 27511</p>
              <p><strong>Phone:</strong> <a href="tel:+14435384373">+1 (443) 538-4373</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@microknots.com">info@microknots.com</a></p>
              <p><strong>UEI:</strong> JQ9FVXFD3ND5 | <strong>CAGE:</strong> 17BF1</p>
            </div>
            <div className="footer-legal">
              <p>Copyright © {new Date().getFullYear()} Microknots. All rights reserved.</p>
              <p><a href="#terms">Terms of Use & Privacy Policy</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
