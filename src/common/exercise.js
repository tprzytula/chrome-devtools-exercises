import '../styles.css';
import './exercise.css';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { getContent } from "../utils/readme";

const UserContext = React.createContext({});

class Exercise extends Component {
    state = { readme: '' };

    componentWillMount = async () => {
        const result = await getContent(this.props.readmeFile);
        this.setState(() => ({ readme: result }));
    };

    static Task = (props) => (
        <UserContext.Consumer>
            {() =>
                <div className="exercise-container padding">
                    <h1>Exercise</h1>
                    <hr/>
                    {props.children}
                </div>
            }
        </UserContext.Consumer>
    );

    static Readme = (props) => (
        <UserContext.Consumer>
            {({ readme }) =>
                <div className="markdown-container padding">
                    <h1>Readme</h1>
                    <hr/>
                    <ReactMarkdown source={readme}/>
                    {props.children}
                </div>
            }
        </UserContext.Consumer>
    );

    render() {
        return (
            <UserContext.Provider value={{ readme: this.state.readme }}>
                <div className="content">
                    {this.props.children}
                </div>
            </UserContext.Provider>
        );
    }
}

export default Exercise;