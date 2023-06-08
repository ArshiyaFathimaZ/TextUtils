import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'

// We can't change the porps in our function /components
// Navbar is a components

export default function Navbar(props) {
//   const changedEvent=()=>{
//     switch(document.getElementById("dropdown").value)
//     {
//       case "blue":
//         props.setTheme("blue");
//         break;
//       case "green":
//           props.setTheme("green");
//           break;

//           case "red":
//           props.setTheme("red");
//            break;
// default:
//   break;
//     }
//   }
  return (
    // JS syntax for css here template literals
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      {/* <Link className="navbar-brand" href="/textForm">{props.title}</Link> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
            {/* <a className="nav-link" href="/about">{props.aboutText}</a> */}
          {/* </li> */}
         </ul>
         <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label " for="flexSwitchCheckDefault">{props.mode} Mode</label>
        </div>
        {/* <form>
        <select id="dropdown" onChange={changedEvent} >
          <option value="blue" >Blue Theme</option>
          <option value="green" >Green Theme</option>
          <option value="red" >Red Theme</option>
        </select>
        </form> */}
         {/* <form className="d-flex">
          <input type="search" className="form-control me-2" placeholder="search" aria-label='Search' />
          <button className="btn btn-primary" type="submit">Search</button>
         </form> */}
      </div>
    </div>
  </nav>
  
  )
}

// To give the prop data types as string,object ,number etc
Navbar.propTypes={
    // NOTE:isRequired if setting the poperty to this and not sending the value then it will through error
    // title:PropTypes.string,
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired,
}

// Default props -pass default values to the props
Navbar.defaultProps={
    title:'Set title',
    aboutText:'About Text here'
}