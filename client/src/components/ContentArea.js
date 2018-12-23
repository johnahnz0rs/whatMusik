import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import UserPage from './UserPage';
import Login from './Login';
import GotAccessToken from './GotAccessToken';


class ContentArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            accessToken: null,
        };
        // declare methods here
        this.getDatToken = this.getDatToken.bind(this);
    }

    componentDidMount() {
    }

    getDatToken = token => {
        this.setState({accessToken: token}, () => {
            this.props.history.push('/user');
        });
    };

    render() {

        return (
            <React.Fragment>
                <div className="my-background">

                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/user/:token" exact render={() => <GotAccessToken getDatToken={this.getDatToken} />} />
                        <Route path="/user" exact render={() => <UserPage accessToken={this.state.accessToken}/> } />
                    </Switch>

                </div>
            </React.Fragment>
        );
    }
};

export default withRouter(ContentArea);
