import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <div className="nav-brand">
            <a href="index.html" target="_blank" rel="noopener noreferrer">
              <img src={logo} alt="SDG SF Logo" className="nav-logo" width="150" />
            </a>
          </div>
          <div className="spacer">
            <ul className="menu">
              <li><a href="News.html">News</a></li>
              <li><a href="support.html">Support</a></li>
              <li><a href="blog2.html">Blog</a></li>
              <li><a href="developers.html">Developers</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <div className="news-container">
          {/* Featured Article */}
          <section className="featured-article">
            <div className="featured-content">
              <span className="category-tag">Cloud &amp; Data Center</span>
              <h1>Breaking Barriers in Accelerated Computing and Generative AI</h1>
              <p className="article-summary">Explore the groundbreaking advancements the NVIDIA Blackwell architecture brings to generative AI and accelerated computing. Building upon generations of NVIDIA technologies, NVIDIA Blackwell defines the next chapter in generative AI with unparalleled performance, efficiency, and scale.</p>
              <a href="blog.html" className="read-more-btn">Read Blog</a>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <div className="page-footer-wrapper">
          <div className="page-footer">
            <div className="page-footer_links">
              <div className="page-footer-link-set set-3">
                <div className="page-footer-link-set-title">Team Information</div>
                <ul className="page-footer-link-list">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Future Initiatives</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Developer Resources</a></li>
                </ul>
              </div>
              <div className="page-footer-link-set set-3">
                <div className="page-footer-link-set-title">Technology Areas</div>
                <ul className="page-footer-link-list">
                  <li><a href="#">Artificial Intelligence (AI)</a></li>
                  <li><a href="#">Extended Reality (XR)</a></li>
                  <li><a href="#">Quantum Computing</a></li>
                  <li><a href="#">Connectivity and Networking</a></li>
                  <li><a href="#">Biotechnology and Health</a></li>
                  <li><a href="#">High-Performance Computing (HPC)</a></li>
                  <li><a href="#">Sustainability and Energy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-content">
          <div className="social-media">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="footer-copyright">
          <p>&copy; 2025 SPRYZEN team.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
