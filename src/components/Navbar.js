import React from 'react'
import PropTypes from 'prop-types'
import {Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item" style={{color:"red"}}>
          <Link className="nav-link" to="/">{props.home}</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
        <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}  style={{display:'flex',justifySelf:'end',marginTop:'8px',marginRight:'5px'}}>
  <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" htmlFor="flexSwitchCheckDefault" style={{marginLeft:'5px'}}>{props.mode==='light'?'Enable Dark Mode':'Enable Light Mode'} </label>
</div>
        {/* <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}  style={{display:'flex',justifySelf:'end',marginTop:'8px'}}>
  <input class="form-check-input" onClick={props.toggleColorMode} type="checkbox" role="switch" id="flexSwitchCheckDefault1"/>
  <label class="form-check-label" htmlFor="flexSwitchCheckDefault1" style={{marginLeft:'5px'}}>{props.colormode==='light'?'Enable Pro-Dark Mode':'Enable Pro-Light Mode'} </label>
</div> */}
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    )
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    home:PropTypes.string,
    about:PropTypes.string,
    searchButton:PropTypes.string,
    placeholder:PropTypes.string

}
Navbar.defaultProps={
    title:'set tittle',
    home:'set'
}