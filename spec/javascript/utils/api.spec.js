import axios from 'axios';
import { fetchPopularTracksPerArtist, fetchPopularArtists } from './../../../app/javascript/utils/api';
jest.mock('axios');

test('should fetch fetchPopularArtists', () => {
    const resp = {data: [{name: 'Bob'}]};
    axios.get.mockResolvedValue(resp);
    return fetchPopularArtists('spain', 1).then(artists => expect(artists.data).toEqual(resp.data));
});

test('should fetch fetchPopularTracksPerArtist', () => {
    const resp = {data: [{track: 'Bobdillon'}]};
    axios.get.mockResolvedValue(resp);
    return fetchPopularTracksPerArtist('cher', 1).then(albums => expect(albums.data).toEqual(resp.data));
});