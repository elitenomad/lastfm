import React from 'react';
import {BrowserRouter as Router, Route, Switch} from  'react-router-dom';
import Home from './Home';
import PopularArtists from  './PopularArtists';
import Album from './Album';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/popular-artists' component={PopularArtists} />
                        <Route path='/artists/:artist/tracks' component={Album} />
                        <Route render={() => { <h1>Not Found</h1> }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;