import React from 'react';
import { withRouter } from 'react-router-dom';
import UserPage from "./UserPage";
// import MyNavbar from "./MyNavbar";

class GotAccessToken extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            accessToken: null,
        };
        // declare methods here
        this.getDatToken = this.getDatToken.bind(this);
    }

    componentDidMount() {
        console.log(this.props);

        // const accessToken = this.props.location.search.split('?access_token=')[1];
        const accessToken = this.props.match.params.token;
        //
        // console.log('from params', accessToken);
        // this.setState({accessToken: accessToken});

        this.getDatToken(this.props.match.params.token);

    }

    getDatToken = (token) => {
        this.props.getDatToken(token);
    };

    render() {
        return(<React.Fragment>

            {/*{this.state.accessToken && <UserPage accessToken={this.state.accessToken} /> }*/}
            <div>&nbsp;</div>

        </React.Fragment>);
    }


}

export default withRouter(GotAccessToken);