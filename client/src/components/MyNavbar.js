import React from 'react';
import { NavLink, withRouter } from "react-router-dom";


const MyNavbar = (props) => {

    console.log('lol this is navbar', props);
    // const rootURL = '/user/' + props.accessToken;

    return (



        <React.Fragment>

            <nav className="navbar navbar-expand-sm navbar-dark container-fluid fixed-top" style={{backgroundColor: '#F36D76'}}>

                {/* brand-home */}
                <NavLink to={'/home'} className="navbar-brand px-3">
                    <span className="navbar-brand font-weight-bold" style={{fontSize: 'x-large'}}>whatMusic </span>
                </NavLink>
                {/* toggler-icon */}
                <button className="navbar-toggler mx-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/*navbar = myMusic / friends / nearby / rando */}
                <div className="collapse navbar-collapse px-3" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto text-center font-weight-bold">
                        <li className="nav-item mx-1">
                            <NavLink to='/my-music' className="nav-link" style={{color: 'white'}}>My Music</NavLink>
                        </li>
                        <li className="nav-item mx-1">
                            <NavLink to="/friends" className="nav-link" style={{color: 'white'}} >Search Friends</NavLink>
                        </li>
                        <li className="nav-item mx-1">
                            <NavLink to="/nearby" className="nav-link" style={{color: 'white'}}>Find Nearby</NavLink>
                        </li>
                        <li className="nav-item mx-1">
                            <NavLink to="/rando" className="nav-link" style={{color: 'white'}}>Meet Rando</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

        </React.Fragment>
    );

};

export default withRouter(MyNavbar);