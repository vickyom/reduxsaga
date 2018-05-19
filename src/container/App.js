import React, {PropTypes} from 'react'
import HomePage  from '../components/Home';
import NewsContainer from "./newsContainer";
import sourceContainer from "./sourceContainer";
import popularMovies from "./popularMovies";
import Header from '../components/Header'
// import routes from '../routes';  
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
class App extends React.Component {  
  render() {
    console.log("inside app")
   console.log(this.props.children);
    return (
      <div className="container-fluid">
          <div>
               <Router>
                <Switch>
                  <div>
                    <Header />
                    <Route path="/" exact component={HomePage} />
                    <Route path="/news" exact component={NewsContainer} />
                    <Route path="/news/:source" component={sourceContainer}/>
                    <Route path="/movies" exact component={popularMovies} />
                  </div>
                  </Switch>
                </Router>
                
            </div>
       
      </div>
    )
  }
}

export default App