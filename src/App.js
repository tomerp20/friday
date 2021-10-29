import './App.css';
<<<<<<< HEAD
import Raziel  from './components/Raziel'
=======
import Yaniv from './components/yaniv';
>>>>>>> 9cf265ae210737141de6ee1d41f01a64213cc0af
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
<<<<<<< HEAD
=======
import Efraim from "./components/efraim"
>>>>>>> 9cf265ae210737141de6ee1d41f01a64213cc0af
import Yarden from './components/Yarden';
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
        <Switch>
          <Route path="/raziel">
           <Raziel />
          </Route>
          <Route path="/raziel">Raziel</Route>
          <Route path="/yarden">
            <Yarden />
          </Route>
          <Route path="/yaniv">
           <Yaniv />
          </Route>
          <Route path="/avrumi">
            Avrumi
          </Route>
          <Route path="/aiden">
            <Efraim />
          </Route>
          <Route path="/yaniv">Yaniv</Route>
          <Route path="/avrumi">Avrumi</Route>
          <Route path="/aiden">Aiden</Route>
        </Switch>
      </div>
  );
}
 
export default App;
