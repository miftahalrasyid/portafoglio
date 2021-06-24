import React, {useState} from "react";
// import React, {useContext,useState, Children} from "react";

import './Login.css';
const Login: React.FC = ({children}) => {
        // const [cookies,setCookie] = useCookies(['name']);
        const login = () =>{
            
        }
        const [email] = useState("");
        // const [email,setEmail] = useState("");
        const emailValidator = (ev: React.ChangeEvent<HTMLInputElement>) => {
            console.log(ev.target.value)
            // const emailValidator = (elm) => {
                // elm.target.value = /^[a-zA-Z0-9_.@ ]*$/i.test(elm.target.value[elm.target.value.length-1])?elm.target.value : elm.target.value.slice(0,-1);
                // /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(elm.target.value) ? setEmail("") : setEmail("incorrect format");
            }
            // const {children} = prop;
            function onLoginPageClick(ev: React.MouseEvent<HTMLInputElement>){
                ev.stopPropagation();
        // function onLoginPageClick(ev){
            // ev.nativeEvent.stopPropagation();
            console.log(ev.nativeEvent)
        }

    return(
        <div className="loginContainer" onClick={onLoginPageClick}>
            <div className="title"></div>
            {/* <div className="title">{children}</div> */}
            <hr/>
            <input name="email" type="text" placeholder="Email" onChange={emailValidator}/>
            <span>{email}</span>
            <input name="password" type="password" placeholder="Password" onClick={onLoginPageClick}/>
            <input type="submit" onClick={login}/>
        </div>
    );
}

export default Login;