import './header.css';
import { Link } from 'react-router-dom';

export default function Header(props){

  function login(){


  }

  function signup(){


  }

  let style = {
        flex:{
          backgroundColor:"magenta"
        },
        box:{
          width:"100px",
          height:"100px"
        }
  }
  
//   npm uninstall jquery
//   npm install react-router-dom@Header
//   npm uninstall react-router-dom
//   npm update react-router-dom

//   npm ls react-router-dom

// node package manager
// library installer h just


  let city = "Faisalabad";

    return  <nav>  
    <div class="nav-wrapper">
      <Link to="/" class="brand-logo">Logo</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        
        {props.loginHogya == true  ? <li><Link to="/dashboard">Dashboard</Link></li> : null}
        {props.loginHogya == true  ? <li><Link onClick={()=>{

          props.setLoginHogya(false);

        }} to="/">Logout</Link></li> : null}
        
      </ul>
    </div>
  </nav>
}

