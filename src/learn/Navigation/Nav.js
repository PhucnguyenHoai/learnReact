import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact>Home</NavLink>
                <NavLink to="/addDelete" activeClassName="active">Form</NavLink>
                <NavLink to="/tickClock" activeClassName="active">Clock</NavLink>
                <NavLink to="/event" activeClassName="active">Event</NavLink>
                <NavLink to="/axios" activeClassName="active">Axios</NavLink>
                
                {/* <Link to='/'>Home</Link>
                <Link to='/addDelete'>Form</Link>
                <Link to='/tickClock'>Clock</Link>
                <Link to='/event'>Event</Link> */}

                {/* <a className="active" href="/">Home</a>
                <a href="/addDelete">Form</a>
                <a href="/tickClock">Clock</a>
                <a href="/event">Event</a> */}
            </div>
        );
    }
}

export default Nav;