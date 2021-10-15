import EchoLogo from '../assets/images/logo-white.svg';
import SVG from '../components/svg';

// eslint-disable-next-line react/prop-types
const Layout = ({
  children, toggleEchoIndexModal, toggleAboutModal, showAboutModal, showEchoIndexModal,
}) => (
  <>
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item opacity-0 fade-in-delay-1" href="/">
          <SVG svgImage={EchoLogo} className="nav-logo" />
        </a>

        <button style={{ background: 'none', border: 'none' }} type="button" className="opacity-0 fade-in-delay-1 navbar-item mobile-echo-button" onClick={toggleEchoIndexModal}>
          ECHO INDEX
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
          <button style={{ background: 'none', border: 'none' }} type="button" className="opacity-0 fade-in-delay-1 navbar-item" onClick={toggleEchoIndexModal}>
            <div className={`expand-button ${showEchoIndexModal ? 'center-expanded-button' : ''}`} />
            ECHO INDEX
          </button>
        </div>

        <div className="navbar-end">
          <button style={{ background: 'none' }} type="button" className="opacity-0 fade-in-delay-1 navbar-item padded-about boxy-outline" onClick={toggleAboutModal}>
            <div className={`expand-button ${showAboutModal ? 'expanded-button' : ''}`} />
            ABOUT
          </button>
        </div>
      </div>
    </nav>
    <main>{children}</main>
  </>
);

export default Layout;
