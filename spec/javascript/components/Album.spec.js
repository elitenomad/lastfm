import Album from './../../../app/javascript/components/Album';
import React from 'react';
import { shallow } from 'enzyme';
import axios from "axios/index";
jest.mock('axios');

describe('Album Component', () => {
    const resp = {
        data:{
            topalbums:{
                album:[
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
                ],
                "@attr":{
                    "country":"Spain",
                    "page":"1",
                    "perPage":"50",
                    "totalPages":"11613",
                    "total":"580613"
                }
            }
        }
    };
    axios.get.mockResolvedValue(resp);

    it('is expected to renders under a div', () => {
        const params = {params: { artist: "cher", page: 1 }};
        expect(shallow(<Album match={params} />).exists(<div id='popular-albums'></div>)).toBe(true)
    });

    it('is expected to render pagination component', () => {
        const params = {params: { artist: "cher", page: 1 }};
        expect(shallow(<Album match={params} />).find('#react-paginate').length).toEqual(1)
    });
});


