import React,{useState, useReducer} from 'react';
// import logo from './logo.svg';
import './App.css';
import reportWebVitals from './reportWebVitals';
import {Router, Route, Link} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {useCookies} from "react-cookie";

import { Home } from './Home';
import { About } from './About';
// import { createHash } from 'crypto';
import Login from './Shared/Login';
const history = createBrowserHistory();

type InitialStateType = {
  focus?: string
  session?: string
}
type Action = 
 {type: "user-credential", hash: string} 
| {type: "user-state", focus: string};
const initialState = {
  focus: "",
  session: ""
}
interface InitialContext {
  state: InitialStateType,
  dispatch: React.Dispatch<Action>
}
export const AppContext = React.createContext<InitialContext>({state: initialState, dispatch: () => null});

function App() {
  const [cookies,setCookie] = useCookies(["name","focusfn"]);
  // setCookie('userToken', '', { path: '/' });
  // let initialState = {userToken};
  
  let initialState = {focus: "",session: cookies.userToken}
  const reducer = (state: InitialStateType,action: Action) => {
    switch (action.type) {
      case 'user-state':
        return {...state,focus:action.focus}
      case 'user-credential':
        const expires = new Date();
        expires.setDate(Date.now() + 1000 * 60 * 60 * 24);
        setCookie("userToken",action.hash,{path:'/'})
        // setSession(action.hash);
        console.log(action.hash)
        console.log(cookies.userToken)
      return{...state, session: action.hash}
      }
  }

  const [state,dispatch] = useReducer(reducer,initialState)

  console.log(cookies.userToken)
  console.log(cookies)
  const [loginClick,setLoginClick] = useState(false);
  reportWebVitals(console.log)
  function loginclick(ev: React.MouseEvent<HTMLDivElement>){
    ev.stopPropagation();
    setLoginClick(!loginClick)
    console.log("testing");
    return (<Login/>);
  }
  document.addEventListener("click", (evt) => {
    setLoginClick(false)
  })
  return (
    <AppContext.Provider value={{state,dispatch}}>
<Router history= {history}>
<div className="main-header">
  <nav>
    <ul>
      <div>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      </div>
      <div>
        <li><div onClick={loginclick}>login</div></li>
      {loginClick ? <Login>hellow</Login>: null}
      </div>
    </ul>
  </nav>
  </div>
  <Route exact path="/" component={Home}/>
  <Route path="/about" component={About}/>
  </Router>
   </AppContext.Provider>
  );
}

export default App;
