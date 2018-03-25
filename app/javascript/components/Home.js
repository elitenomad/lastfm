import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className='home-container'>
                <h1>Last.Fm.</h1>
                <Link className='button' to='/popular-artists'>Fetch Popular artists</Link>
            </div>
        )
    }
}

export default Home;