import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function RepoGridForArtists ({ artists }) {
    return (
        <ul className='popular-list'>
            {artists.map(({name, image, url}, index) => {
                const tracks_url_per_artist = `/artists/${name.split(' ').join('+')}/tracks`
                return (
                    <li key={name} className='popular-item'>
                        <div className='popular-rank'>#{index + 1}</div>
                        <ul className='space-list-items'>
                            <li>
                                <img
                                    className='avatar'
                                    src={image[2]['#text']}
                                    alt={`Avatar for ${name}`}
                                />
                            </li>
                            <li>@{name}</li>
                            <li>{ url }</li>
                            <li>
                                <Link className='button' to={tracks_url_per_artist}>Top Tracks of {name}</Link>
                            </li>
                        </ul>
                    </li>
                )
            })}

            { artists.length <= 0 ? 'No results for the search string' : '' }
        </ul>
    )
}

RepoGridForArtists.propTypes = {
    artists: PropTypes.array.isRequired,
};


export default RepoGridForArtists;