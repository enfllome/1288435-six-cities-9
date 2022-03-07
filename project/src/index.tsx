import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { comments } from './mocks/comments';
import { offers } from './mocks/offers';


ReactDOM.render(
  <React.StrictMode>
    <App comments={comments} offers={offers}/>
  </React.StrictMode>,
  document.getElementById('root'));
