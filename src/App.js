import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import ConditionalBreakpoints from './exercises/conditionalBreakpoints';
import BlackBoxing from './exercises/blackboxing';
import DOMBreakpoints from './exercises/domBreakpoints';
import MemoryLeaks from './exercises/memoryLeaks';
import PageJank from './exercises/pageJank';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="container">
              <div className="top-bar">
                  <ul>
                      <li><Link to="/conditionalBreakpoints">Conditional Breakpoints</Link></li>
                      <li><Link to="/blackboxing">BlackBoxing</Link></li>
                      <li><Link to="/domBreakpoints">DOM Breakpoints</Link></li>
                      <li><Link to="/memoryLeaks">Memory Leaks</Link></li>
                      <li><Link to="/pageJank">Page Jank</Link></li>
                  </ul>
                  <hr/>
              </div>

              <Route exact path="/conditionalBreakpoints" component={ConditionalBreakpoints}/>
              <Route exact path="/blackboxing" component={BlackBoxing}/>
              <Route exact path="/domBreakpoints" component={DOMBreakpoints}/>
              <Route exact path="/memoryLeaks" component={MemoryLeaks}/>
              <Route exact path="/pageJank" component={PageJank}/>
          </div>
      </Router>
    );
  }
}

export default App;
