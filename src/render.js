import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addPost} from './redux/state.js';
import { changePost } from './redux/state.js';

export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} changePost={changePost}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
