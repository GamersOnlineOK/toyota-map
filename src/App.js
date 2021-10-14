import './App.css';
import {
  Route, Switch, BrowserRouter,
} from 'react-router-dom';
import * as Routes from './constants/routes';
import history from './helpers/history';
import IntroPage from './pages/IntroPage';
import MapPage from './pages/MapPage';
import MapPreview from './pages/MapPreview';

export default function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path={Routes.MAP_PREVIEW} component={MapPreview} />
        <Route path={Routes.MAP_PAGE} component={MapPage} />
        <Route path={Routes.HOME} component={IntroPage} />
      </Switch>
    </BrowserRouter>
  );
}
