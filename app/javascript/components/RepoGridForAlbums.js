import React from 'react';
import PropTypes from "prop-types";

function RepoGridForAlbums ({ albums }) {
    return (
        <ul className='popular-list'>
            {albums.map(({name, image,playcount, url, artist}, index) => {
                return (
                    <li key={name} className='popular-item'>
                        <div className='popular-rank'>#{index + 1}</div>
                        <ul className='space-list-items'>
                            <li>
                                <img
                                    className='avatar'
                                    src={image[2]['#text'] || '/img/No_album_cover.jpg'}
                                    alt={`Avatar for ${artist.name}`}
                                />
                            </li>
                            <li>{name}</li>
                            <li>{ url }</li>
                            <li>@{artist.name}</li>
                            <li>@{artist.url}</li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}

RepoGridForAlbums.propTypes = {
    albums: PropTypes.array.isRequired,
};


export default RepoGridForAlbums;