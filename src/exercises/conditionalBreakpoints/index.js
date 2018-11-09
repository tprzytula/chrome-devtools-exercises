import React, { Component } from 'react';
import * as Api from './utils/api';
import Readme from './README.md';
import Exercise from './../../common/exercise';

const books = [
    '978-1942788331',
    '978-1984268945',
    '978-0783881157',
    '978-0-06-245771-4',
    '978-0722532935',
    '978-0340733509',
    '978-0857207289',
    '978-0743409384',
    '978-0140280197',
    '978-1591846093',
    '9780590353427',
    '978-1478121732'
];

class ConditionalBreakpoints extends Component {
    state = {
        isbn: '',
        title: '',
        description: '',
        currentBook: 0,
        error: false
    };

    rollNextBook = () => {
        const nextBook = (Math.floor(Math.random() * books.length) + 1) - 1;
        const isDifferent = nextBook !== this.state.currentBook;
        return isDifferent ? nextBook : this.rollNextBook();
    };

    fetchBook = () => {
        const nextBook = this.rollNextBook();
        Api.findBook(books[nextBook])
            .then(({ title, description }) => {
                this.setState({
                    title,
                    description,
                    currentBook: nextBook,
                    error: false
                });
            });
    };

    renderBook = () => {
        if (this.state.error) {
            return <h1>Encountered error</h1>
        }

        if (!this.state.title) {
            return null;
        }

        return (
            <div>
                <h2>{this.state.title}</h2>
                <span>{this.state.description ? this.state.description : 'No description provided'}</span>
            </div>
        )
    };

    render() {
        return (
            <Exercise readmeFile={Readme}>
                <Exercise.Task>
                    <button onClick={this.fetchBook}>Next book</button>
                    {this.renderBook()}
                </Exercise.Task>
                <Exercise.Readme/>
            </Exercise>
        )
    }
}

export default ConditionalBreakpoints;