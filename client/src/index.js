import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from './context/ThemeProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Pages/Login';
import Basics from './1-lesson/Bascis';
import {ChatWrap} from './2-lesson/Chat';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Switch>
          <Route exact path="/1-Lesson">
                <Basics />
          </Route>
          <Route exact path="/2-Lesson">
              <ChatWrap name="Janez Novak" />
          </Route>
          <Route exact path="/3-Lesson">
              <ChatWrap name="Brane Oblak" />
          </Route>
          <Route exact path="/">
                <App />
          </Route>
          <Route path="/Login">
              <Login />
          </Route>
          </Switch>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
