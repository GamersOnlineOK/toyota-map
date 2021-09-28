import { NavLink } from 'react-router-dom';
import * as Routes from '../constants/routes';

export default function IntroPage() {
  return (
    <>
      <div className="container default-background">
        <h1 className="title">
          ECHO
        </h1>
        <p className="intro-p">
          UN Environment Assembly concludes with an urgent call for action
          to solve planetary emergencies”
          Introducing Echo Index, un proyecto para medir el estado de salud
          de los lugares y el efecto en la vida humana, en tiempo real.
        </p>
        <NavLink to={Routes.MAP_PAGE}>
          <button className="intro-button" type="button">Enter</button>
        </NavLink>
      </div>
    </>
  );
}
