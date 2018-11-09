import React, { Component } from 'react';
import Readme from './README.md';
import Exercise from './../../common/exercise';

class BlackBoxing extends Component {
    render() {
        return (
            <Exercise readmeFile={Readme}>
                <Exercise.Task>WIP</Exercise.Task>
                <Exercise.Readme/>
            </Exercise>
        )
    }
}

export default BlackBoxing;