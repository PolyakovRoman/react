import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Main from './componets/Main/Main';
import Blog from './componets/Blog/Blog';
import Nav from './componets/Nav/Nav';
import Messages from './componets/Messages/Messages';
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {
    return (
        <BrowserRouter>
          <div className='app'>
              <Header />
              <section className='app__content-area'>
                  <Nav />
                  <div className='content'>
                      <Route exact path='/' component={Main} />
                      <Route path='/blog' component={Blog} />
                      <Route path='/messages' component={ () => <Messages data={props.messageAndDialogItems} /> } />
                  </div>
              </section>
          </div>
        </BrowserRouter>
    );
}

export default App;