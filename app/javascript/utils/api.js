const axios = require('axios');

export function fetchPopularTracksPerArtist (artist, page) {
    return axios.get(`/api/v1/albums/${artist}?page=${page}`)
}

export function fetchPopularArtists (country, page) {
    return axios.get(`/api/v1/artists/${country}?page=${page}`);
}