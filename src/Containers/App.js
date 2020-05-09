import React, { Component } from 'react';
import Home from './Homecontents/Homecontents';
import Header from '../Components/Header/Header'
import Post from './Post/Post';
import Blog from './Blog/Blog';
import Layout from '../Components/Layout/Layout'
import classes from './App.css';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Register from './Auth/Auth';


class App extends Component {
 
  render() {       
    return (
      <BrowserRouter>
          <div>
            	<Header />
              <Layout>
                  <Route path="/" exact component={Home} />
                  {/* <Route path="/contact" exact component={Contact} /> */}
                <Switch>
                  <Route path="/register" exact component={Register} />
                  <Route path="/blog" exact component={Blog} />
                  <Route path="/blog/:id" component={Post} />
                </Switch>
              </Layout>
              
          </div>
      </BrowserRouter>
          );
  }

}

export default App;
