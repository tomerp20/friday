import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <div className="nav">
          <ul className="circle">
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
        </div>
        <div className="content">
          <Switch>
            <Route path="/raziel">
              Raziel
            </Route>
            <Route path="/yarden">
              Yarden
            </Route>
            <Route path="/yaniv">
            Yaniv
            </Route>
            <Route path="/avrumi">
              Avrumi
            </Route>
            <Route path="/aiden">
              Aiden
            </Route>
          </Switch>
        </div>
      </div>
  );
}

export default App;
