import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// import MyNavbar from './MyNavbar';
import Home from './Home';


import MyMusic from './MyMusic';
import Friends from './Friends';
import Nearby from './Nearby';
import Rando from './Rando';
import MyNavbar from "./MyNavbar";




class UserPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // showThisPage: 'home',
            accessToken: this.props.accessToken,
            // navRoot: this.props.params.url,
        };
        // declare methods here
    }

    componentDidMount() {
        console.log('props', this.props);
        console.log('state', this.state);
        //
        // // const accessToken = this.props.location.search.split('?access_token=')[1];
        // const accessToken = this.props.match.params.token;
        //
        // console.log('from params', accessToken);
        // this.setState({accessToken: accessToken});
        //
        // const navRoot = this.props.match.url.split('/access/')[0];
        // this.setState({navRoot: navRoot});
    }



    render() {



        return(<React.Fragment>
            <div className="">

                (this.state.accessToken && <MyNavbar />}

                <Switch>
                    {/*<Route path={this.state.navRoot + '/home'} component={Home} />*/}
                    {/*<Route path={this.state.navRoot + '/friends'} component={Friends} />*/}
                    {/*/!*<Route path={this.props.match.url + '/my-music'} render={() => <MyMusic accessToken={this.state.accessToken} /> } />*!/*/}
                    {/*<Route path={this.state.navRoot + '/my-music'} component={MyMusic} />*/}
                    {/*<Route path={this.state.navRoot + '/rando'} component={Rando} />*/}
                    {/*<Route path={this.state.navRoot + '/nearby'} component={Nearby} />*/}
                    {/*<Route path="/" component={Home} />*/}


                    {/*<Route path={this.props.match.url + '/home'} component={Home} />*/}
                    {/*<Route path={this.props.match.url + '/friends'} component={Friends} />*/}
                    {/*<Route path={this.props.match.url + '/my-music'} component={MyMusic} />*/}
                    {/*<Route path={this.props.match.url + '/rando'} component={Rando} />*/}
                    {/*<Route path={this.props.match.url + '/nearby'} component={Nearby} />*/}
                    {/*<Route path="/" exact render={() => <Home accessToken={this.state.accessToken} />} />*/}

                    <Route path="/home" component={Home} />
                    <Route path="/friends" component={Friends} />
                    <Route path="/my-music" component={MyMusic} />
                    <Route path="/rando" component={Rando} />
                    <Route path="/nearby" component={Nearby} />
                    <Route path="/user" exact render={() => <Home accessToken={this.state.accessToken} />} />



                </Switch>


            </div>
        </React.Fragment>);
    }

}

export default withRouter(UserPage);