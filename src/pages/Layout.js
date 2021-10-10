import EchoLogo from '../assets/images/logo-white.svg';
import SVG from '../components/svg';

// eslint-disable-next-line react/prop-types
const Layout = ({ children, toggleEchoIndexModal, toggleAboutModal }) => (
  <>
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <SVG svgImage={EchoLogo} className="nav-logo" />
        </a>

        <button style={{ background: 'none', border: 'none' }} type="button" className="navbar-item mobile-echo-button" onClick={toggleEchoIndexModal}>
          ECHO INDEX
        </button>

        <button
          type="button"
          // role="button"
          className="navbar-burger boxy-outline"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={toggleAboutModal}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start navbar-center">
          {/* <span className="button modal-button" data-target="about-modal">Open modal</span> */}

          <button style={{ background: 'none', border: 'none' }} type="button" className="navbar-item" onClick={toggleEchoIndexModal}>
            ECHO INDEX
          </button>

        </div>

        <div className="navbar-end">
          <button style={{ background: 'none' }} type="button" className="navbar-item padded-about boxy-outline" onClick={toggleAboutModal}>
            ABOUT
          </button>
        </div>
      </div>
    </nav>
    <main>{children}</main>
  </>
);

export default Layout;
