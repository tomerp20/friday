import './App.css';
import Avromi  from "./components/Avromi"
import Yarden from './components/Yarden';

import { Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <ul className="list-style">
            <li>
              <Link to="/raziel">Raziel</Link>
            </li>
            <li>
              <Link to="/yarden">Yarden</Link>
            </li>
            <li>
              <Link to="/yaniv">Yaniv</Link>
            </li>
            <li>
              <Link to="/avrumi">Avrumi</Link>
            </li>
            <li>
              <Link to="/aiden">Aiden</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/raziel">Raziel</Route>
          <Route path="/yarden">
            <Yarden />
          </Route>
          <Route path="/yaniv">Yaniv</Route>
          <Route path="/avrumi">Avrumi
          <Avromi/>
          </Route>
          <Route path="/aiden">Aiden</Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
