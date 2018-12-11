import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            root: null,
        };
        // bind methods here
    }

    componentDidMount() {
        console.log(this.props);
        if (this.props.accessToken) {
            const rootURL = '/user/' + this.props.accessToken;
            this.setState({root: rootURL});
        } else {
            const token = '/user/' + this.props.match.url.split('/')[2];
            console.log('token', token);
            this.setState({root: token});
        }
        fetch('http://localhost:5000/api/when-app-loads')
            .then(res => res.json())
            .then(data => console.log('*** msg from backend ***', data))
            .catch(err => console.log(err));
    }




    render() {

        const pageButtons = {
            whiteSpace: 'normal',
            fontWeight: 'bold',
            width: '150px',
            height: '200px',
            fontSize: 'xx-large',
            WebkitTextStroke: '1px teal',
            color: 'white',
            border: '5px solid teal',
        };

        return (<React.Fragment>
            <div>

                <h1 className="text-center font-weight-bold">Welcome</h1>

                <div className="container-fluid text-center mt-3" style={{}}>
                    <div className="">
                        <Link to={this.state.root + "/my-music"}>
                            <button name="mymusic" className="btn btn-lg btn-outline-success m-3" style={pageButtons} onClick={() => console.log('lol u clicked a box', this.state.root)}>My Music</button>
                        </Link>
                        <Link to={this.state.root + "/friends"}>
                            <button name="friends" className="btn btn-lg btn-outline-success m-3" style={pageButtons} onClick={() => console.log('lol u clicked a box', this.state.root)}>Search for Friends</button>
                        </Link>
                    </div>
                    <div className="">
                        <Link to={this.state.root + "/nearby"}>
                            <button name="nearby" className="btn btn-lg btn-outline-success m-3" style={pageButtons} onClick={() => console.log('lol u clicked a box', this.state.root)}>Find Nearby</button>
                        </Link>
                        <Link to={this.state.root + "/rando"}>
                            <button name="rando" className="btn btn-lg btn-outline-success m-3" style={pageButtons} onClick={() => console.log('lol u clicked a box', this.state.root)}>Meet a Rando</button>
                        </Link>
                    </div>
                </div>

            </div>
        </React.Fragment>);
    }

}

export default withRouter(Home);