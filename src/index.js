import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';


import Layout from './layout/layout';
import Home from './home/home';

const App = () =>{
  return(
    <div>
      <Layout>
        <BrowserRouter>
          <Route path='/' exact component={Home}/>
        </BrowserRouter>
      </Layout>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

