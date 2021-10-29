import './App.css';
import Yaniv from './components/yaniv';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Efraim from "./components/efraim"
import Yarden from './components/Yarden';
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
            Yarden
          </Route>
          <Route path="/yaniv">
           <Yaniv />
          </Route>
          <Route path="/avrumi">
            Avrumi
          </Route>
          <Route path="/aiden">
            <Efraim />
            <Yarden />
          </Route>
          <Route path="/yaniv">Yaniv</Route>
          <Route path="/avrumi">Avrumi</Route>
          <Route path="/aiden">Aiden</Route>
        </Switch>
      </div>
    </div>
  );
}
 
export default App;
