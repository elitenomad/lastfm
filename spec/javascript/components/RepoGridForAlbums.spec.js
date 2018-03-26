import RepoGridForAlbums from './../../../app/javascript/components/RepoGridForAlbums';
import React from 'react';
import { shallow } from 'enzyme';

describe('RepoGridForAlbums Component', () => {
    const albums = [
        {
            "name": "Believe",
            "playcount": 2007078,
            "mbid": "63b3a8ca-26f2-4e2b-b867-647a6ec2bebd",
            "url": "https://www.last.fm/music/Cher/Believe",
            "artist": {
                "name": "Cher",
                "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
                "url": "https://www.last.fm/music/Cher"
            },
            "image": [
                {
                    "#text": "https://lastfm-img2.akamaized.net/i/u/34s/b0c2311a9af7f0edbc8b99450944ca1b.png",
                    "size": "small"
                },
                {
                    "#text": "https://lastfm-img2.akamaized.net/i/u/64s/b0c2311a9af7f0edbc8b99450944ca1b.png",
                    "size": "medium"
                },
                {
                    "#text": "https://lastfm-img2.akamaized.net/i/u/174s/b0c2311a9af7f0edbc8b99450944ca1b.png",
                    "size": "large"
                },
                {
                    "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/b0c2311a9af7f0edbc8b99450944ca1b.png",
                    "size": "extralarge"
                }
            ]
        }
    ];

    it('is expected to render correctly', () => {
        const wrapper = shallow(<RepoGridForAlbums  albums={albums}/>);
        expect(wrapper).toMatchSnapshot();
        const li = wrapper.find('.poplular-item');
        expect(li.find('ul.space-list-items')).not.toBeNull();
    });
});


