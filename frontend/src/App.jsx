import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import PrismLogo from './img/prism_logo.png';
import Home from './Home';
import { CollectionTable } from './CollectionTable';
import Collection from './Collection';
import CSVTable from './CSVTable';
import CohortBuilder from 'prism-react-components/dist/CohortBuilder';
import 'prism-react-components/dist/CohortBuilder.css';
import { ApiFetch, fallbackFetch } from './ApiFetch'

function App() {
  return (
    <Router>
      <ApiFetch.Provider value={fallbackFetch}>
        <div className="App">
          <header className="App-header">
            <Link to="/"><img className="App-logo" src={PrismLogo} alt="PRISM"/></Link>
            <h3>An alternative view of <a className="App-link" href="https://www.cancerimagingarchive.net/">The Cancer Imaging Archive</a></h3>
          </header>
          <Switch>
            <Route path="/test">
              <CSVTable file="/csvs/nationwidechildrens.csv" />
            </Route>
            <Route path="/collections/:id">
              <Collection />
            </Route>
            <Route path="/collections">
              <CollectionTable />
            </Route>
            <Route path="/beam">
              <CohortBuilder />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </div>
      </ApiFetch.Provider>
    </Router>
  );
}

export default App;
