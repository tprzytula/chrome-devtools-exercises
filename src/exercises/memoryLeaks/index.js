import React, { Component } from 'react';
import Readme from './README.md';
import Exercise from './../../common/exercise';

class MemoryLeaks extends Component {
    render() {
        return (
            <Exercise readmeFile={Readme}>
                <Exercise.Task>WIP</Exercise.Task>
                <Exercise.Readme/>
            </Exercise>
        )
    }
}

export default MemoryLeaks;