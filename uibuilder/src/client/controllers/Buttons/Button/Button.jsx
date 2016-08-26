
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { modelSelector } from './selectors.js';
import { containerActions } from './actions.js';

import { Panel } from 'react-bootstrap';

class Button extends Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(e) {
        e.stopPropagation();
        e.preventDefault();
        //
        // actions where bound in containerActions, look at actions.js
        //
        const {exampleAction_1, exampleAction_2, exampleAction_3} = this.props;
        const arg1 = 'arg1';
        const arg2 = 'arg2';
        exampleAction_1();
        exampleAction_2(arg1);
        exampleAction_3(arg1, arg2);
    }

    hallo(){
    console.log("test");
    }

    render() {
        //
        // taken from modelSelector, look at selectors.js and reducer.js
        //
        const {model: {arg1, arg2}} = this.props;

        return (
            <Panel>
                <button onClick = {this.hallo} params={this.props.params}>
                    <span params={this.props.params}>Empty Panel</span>
                </button>
            </Panel>
            );
    }
}

export default connect(modelSelector, containerActions)(Button);
