import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import Profile from '../components/profile/Profile';
import DisplayMsg from '../components/pages/NotFound';


// import { Form, Input, Button, Container, } from 'reactstrap';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App" >
                <Switch>
                    <Route exact path="/profile" component={Profile} />
                    <Route path="*" component={DisplayMsg} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // info: state.contact.result
})


const mapDispatchToProps = state => ({
    // info: state.contact.result
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);