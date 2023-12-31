import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
    return (
        // <nav className="navbar navbar-expand-lg bg-body-tertiary">//write anything in place of lg it provides a navbar button.
        // <nav className="navbar navbar-expand-fddsv bg-dark">
        // <nav className="navbar navbar-expand-fddsv  bg-primary">
        <nav className={`navbar navbar-expand-sadf  bg-${props.changeMode} navbar-${props.changeMode}`}>
        {/* // <nav className="navbar navbar-expand-fddsv  bg-danger"> */}
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="/">Navbar</a> */}
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link disabled" href='/'>Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-danger mx-2" type="submit">Search</button>
                    </form>
                </div>
                <div className="d-flex">
                    <div className="bg-info rounded mx-3" onClick={() => { props.toggleMode(`info`) }} style={{height:`30px`,width:`30px` ,cursor:`pointer`}}></div>
                    <div className="bg-success rounded mx-3" onClick={() => { props.toggleMode(`success`) }} style={{height:`30px`,width:`30px` ,cursor:`pointer`}}></div>
                    <div className="bg-danger rounded mx-3" onClick={() => { props.toggleMode(`danger`) }} style={{height:`30px`,width:`30px` ,cursor:`pointer`}}></div>
                    <div className="bg-warning rounded mx-3" onClick={() => { props.toggleMode(`warning`) }} style={{height:`30px`,width:`30px` ,cursor:`pointer`}}></div>
                </div>
            <div className={`form-check form-switch text-${props.changeMode===`light`?`dark`:`light`}`}>
                    {/* <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecheck" onClick={props.toggleMode} /> */}
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecheck" onClick={() => { props.toggleMode(null) }} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked"> {props.printText}</label>
                </div>
            </div>
        </nav>
    );
}
 
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    home: PropTypes.string
}

Navbar.defaultProps = {
    title:'Set default Navbar',
    home:'Set default Home'
}
