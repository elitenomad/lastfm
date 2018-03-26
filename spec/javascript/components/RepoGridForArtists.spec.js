import RepoGridForArtists from './../../../app/javascript/components/RepoGridForArtists';
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('RepoGridForArtists Component', () => {
    const artists = [
        {
            "name":"David Bowie",
            "listeners":"3246761",
            "mbid":"5441c29d-3602-4898-b1a1-b77fa23b8e50",
            "url":"https://www.last.fm/music/David+Bowie",
            "streamable":"0",
            "image":[
                {
                    "#text":"https://lastfm-img2.akamaized.net/i/u/34s/aa9dfbdec965d751cd1fa4ec5a309299.png",
                    "size":"small"
                },
                {
                    "#text":"https://lastfm-img2.akamaized.net/i/u/64s/aa9dfbdec965d751cd1fa4ec5a309299.png",
                    "size":"medium"
                },
                {
                    "#text":"https://lastfm-img2.akamaized.net/i/u/174s/aa9dfbdec965d751cd1fa4ec5a309299.png",
                    "size":"large"
                },
                {
                    "#text":"https://lastfm-img2.akamaized.net/i/u/300x300/aa9dfbdec965d751cd1fa4ec5a309299.png",
                    "size":"extralarge"
                },
                {
                    "#text":"https://lastfm-img2.akamaized.net/i/u/300x300/aa9dfbdec965d751cd1fa4ec5a309299.png",
                    "size":"mega"
                }
            ]
        }
    ];

    it('is expected to render correctly', () => {
        const wrapper = shallow(<RepoGridForArtists  artists={artists}/>);
        expect(wrapper).toMatchSnapshot();

        const li = wrapper.find('.poplular-item');
        expect(li.find('ul.space-list-items')).not.toBeNull();
    });
});


