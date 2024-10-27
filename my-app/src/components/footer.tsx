import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row">

          {/* Logo and Description */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">BlogName</h5>
            <p>
              Bringing you the latest insights, trends, and stories in the world of [Topic].
              Stay tuned and stay informed!
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-2 mb-4">
            <h5 className="text-uppercase mb-3">Explore</h5>
            <ul className="list-unstyled">
              <li><Link href="/about" className="text-light">About</Link></li>
              <li><Link href="/categories" className="text-light">Categories</Link></li>
              <li><Link href="/contact" className="text-light">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-light">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-light">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">Recent Posts</h5>
            <ul className="list-unstyled">
              <li><Link href="/post-1" className="text-light">Understanding [Topic] Trends</Link></li>
              <li><Link href="/post-2" className="text-light">Top 10 Tips for [Topic]</Link></li>
              <li><Link href="/post-3" className="text-light">How to Get Started with [Topic]</Link></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">Subscribe to Our Newsletter</h5>
            <form>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-label="Email"
                  required
                />
                <button className="btn btn-primary" type="submit">Subscribe</button>
              </div>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="col-md-2 mb-4">
            <h5 className="text-uppercase mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" className="text-light" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" className="text-light" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-light" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-light" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://github.com" className="text-light" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Contact Information */}
        <div className="row mt-4">
          <div className="col-md-6 mb-4">
            <h5 className="text-uppercase mb-3">Contact Us</h5>
            <p>Email: <a href="mailto:info@blogname.com" className="text-light">info@blogname.com</a></p>
            <p>Phone: <span className="text-light">+1 (123) 456-7890</span></p>
          </div>

          {/* Copyright */}
          <div className="col-md-6 mb-4 text-md-end">
            <h5 className="text-uppercase mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link href="/sitemap" className="text-light">Sitemap</Link></li>
              <li><Link href="/feedback" className="text-light">Feedback</Link></li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-4">
          <small>&copy; {new Date().getFullYear()} Create By Riveen_Official🦂. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
