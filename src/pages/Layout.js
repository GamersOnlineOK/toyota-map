/* eslint-disable jsx-a11y/anchor-is-valid */
// import { NavLink } from 'react-router-dom';
// import * as Routes from '../constants/routes';

// Logo
// Echo index title and link to description modal
// About button link to about modal\
// Location title
// Weeks dropdown selector
// Property selector
// Property description with close button
// Investor logo
// Color leyend with what is this link (this link should open the property description,
//     the scale will probably be dinamyc

import { ReactComponent as EchoLogo } from '../assets/images/logo-white.svg';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <>
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <EchoLogo />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start navbar-center">
          <a className="navbar-item">
            ECHO INDEX
          </a>

        </div>

        <div className="navbar-end">
          <a className="navbar-item padded-about boxy-outline">
            ABOUT
          </a>
        </div>
      </div>
    </nav>
    <main>{children}</main>
  </>
);

export default Layout;
