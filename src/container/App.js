import React, {PropTypes} from 'react'
import HomePage  from './homeContainer';
import NewsContainer from "./newsContainer";
import sourceContainer from "./sourceContainer";
import popularMovies from "./popularMovies";
import moviesDetails from "./moviesDetails";
import Header from '../components/Header'
// import routes from '../routes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

/* eslint react/prop-types: 0 */
class App extends React.Component {

  render() {
    console.log("inside app")

    return (
      <div>
          <div>
               <Router>
                <Switch>
                  <div>
                    <Header />
                    <Route path="/" exact component={HomePage} />
                    <Route path="/news" exact component={NewsContainer} />
                    <Route path="/news/:source" component={sourceContainer}/>
                    <Route path="/movies" exact component={popularMovies} />
                    <Route path="/movies/:movID" exact component={moviesDetails} />
                  </div>
                  </Switch>
                </Router>

            </div>

      </div>
    )
  }
}

export default App