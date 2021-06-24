import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { createBrowserHistory } from 'history';
import App from './App';
import {CookiesProvider} from "react-cookie";
// import './App.css';
import reportWebVitals from './reportWebVitals';
// import { createHash } from 'crypto';
// import Login from './Shared/Login';
// const history = createBrowserHistory();
// const [loginstateclick,setLoginStateClick] = useState(false)

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <App/>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
