import EchoLogo from '../assets/images/logo-white.svg';
import SVG from '../components/svg';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line
const Layout = ({
  children, toggleEchoIndexModal, toggleAboutModal, showAboutModal, showEchoIndexModal,
}) => (
  <div className="main-wrapper">
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item opacity-0 fade-in-delay-1" href="/">
          <SVG svgImage={EchoLogo} className="nav-logo" />
        </a>

        <button style={{ background: 'none', border: 'none', letterSpacing: '4px' }} type="button" className="is-hidden-tablet opacity-0 fade-in-delay-1 navbar-item mobile-echo-button" onClick={toggleEchoIndexModal}>
          ECHO INDEX
          <span className="echo-index-12">12</span>
        </button>

        <button
          type="button"
          className="navbar-burger boxy-outline opacity-0 fade-in-delay-1"
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
          <button style={{ background: 'none', border: 'none', letterSpacing: '4px' }} type="button" className="opacity-0 fade-in-delay-1 navbar-item" onClick={toggleEchoIndexModal}>
            <div className={`center-expand-button ${showEchoIndexModal ? 'center-expanded-button' : 'center-close-button'}`} />
            ECHO INDEX
            <span className="echo-index-12">12</span>
          </button>
        </div>

        <div className="navbar-end">
          <button style={{ background: 'none' }} type="button" className="opacity-0 fade-in-delay-1 navbar-item padded-about boxy-outline" onClick={toggleAboutModal}>
            <div className={`expand-button ${showAboutModal ? 'expanded-button' : 'close-button'}`} />
            ABOUT
          </button>
        </div>
      </div>
    </nav>
    <main>{children}</main>
  </div>
);

export default Layout;
