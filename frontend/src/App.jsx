import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import PrismLogo from './img/prism_logo.png';
import Home from './Home';
import Beam from './beam/Beam';
import { CollectionTable } from './CollectionTable';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/"><img className="App-logo" src={PrismLogo} alt="PRISM"/></Link>
          <h3>An alternative view of <a className="App-link" href="https://www.cancerimagingarchive.net/">The Cancer Imaging Archive</a></h3>
        </header>
        <Switch>
          <Route path="/collections">
            <CollectionTable />
          </Route>
          <Route path="/beam">
            <Beam />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
