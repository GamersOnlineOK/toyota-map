import { NavLink } from 'react-router-dom';
import * as Routes from '../constants/routes';
import { ReactComponent as EchoLogo } from '../assets/images/logo-white.svg';

export default function IntroPage() {
  return (
    <>
      <div style={{ height: '100vh' }} className="container default-background">
        <div style={{ height: '100vh' }} className="columns is-vcentered">
          <div className="column is-half">
            <div className="is-centered has-text-centered is-halfheight">
              <EchoLogo style={{ display: 'inline-block', marginBottom: '10px' }} />
              <p style={{ padding: '60px' }} className="intro-p has-text-centered is-2">
                UN Environment Assembly concludes with an urgent call for action
                to solve planetary emergencies”
                {' '}
                <br />
                <br />
                Introducing Echo Index, un proyecto para medir el estado de salud
                de los lugares y el efecto en la vida humana, en tiempo real.
              </p>
              <NavLink to={Routes.MAP_PAGE}>
                <button className="intro-button" type="button">ENTER</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
