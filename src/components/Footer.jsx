import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials, payments, deliveryInfo } from "../utils/data";
import "./Footer.css";
import Wave from 'react-wavify';
import FullScreenSection from "../pages/FullScreenSection";
export default function Footer() {
  return (

    <>
      <Wave fill='#495e57'
        paused={false}
        style={{ display: 'flex', marginBottom: '-100px' }}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
      />
      <FullScreenSection
        justifyContent="center"
        alignItems="start"
        isDarkBackground
        backgroundColor="#495E57"
        minHeight="10vh"
        zIndex="100">

        <footer className="footer">
          <div className="footer-inner container">
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <span className="logo-icon">🍋</span>
                <span>Little Lemon</span>
              </Link>
              <p className="footer-tagline">
                Mediterranean cuisine in the heart of Hong Kong.
              </p>
            </div>
            <div className="footer-nav">
              <h4>Navigation</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/reservation">Reservations</Link></li>
                <li><Link to="/order-online">Ordering</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Contact & delivery</h4>
              <ul>
                {deliveryInfo.map((d) => (
                  <li key={d.id}>
                    <strong>{d.name}</strong> — {d.Tel}
                    <br />
                    <span className="footer-address">{d.detailAdd}, {d.district}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-social">
              <h4>Follow us</h4>
              <div className="social-links">
                {socials.map((s) => (
                  <a
                    key={s.url}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.icon?.iconName || "Social link"}
                  >
                    <FontAwesomeIcon icon={s.icon} />
                  </a>
                ))}
              </div>
            </div>
            <div className="footer-payments">
              <h4>We accept</h4>
              <ul>
                {payments.map((p) => (
                  <li key={p.id}>
                    <FontAwesomeIcon icon={p.icon} /> {p.account}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-bottom container">
            <p>© {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
          </div>
        </footer>
      </FullScreenSection>

    </>
  );
}
