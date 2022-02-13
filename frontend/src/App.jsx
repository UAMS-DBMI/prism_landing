import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import PrismLogo from './img/prism_logo.png';
import Home from './Home';
import CollectionTable from 'prism-react-components/dist/CollectionTable';
import CohortBuilder from 'prism-react-components/dist/CohortBuilder';
import CollectionLanding from 'prism-react-components/dist/CollectionLanding';
import { ApiFetch, fallbackFetch } from './ApiFetch'

function App() {
  return (
    <Router>
      <ApiFetch.Provider value={fallbackFetch}>
        <div className="App">
          <header className="App-header">
            <Link to="/"><img className="App-logo" src={PrismLogo} alt="PRISM"/></Link>
            <h5 className="mt-3">An alternative view of <a className="App-link" href="https://www.cancerimagingarchive.net/">The Cancer Imaging Archive</a></h5>
          </header>
          <Switch>
            <Route path="/collection/:collection_slug"
                   render={props => (
                      <CollectionLanding collection_slug={props.match.params.collection_slug} />
                    )}
            />
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
