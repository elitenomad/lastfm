import PopularArtists from './../../../app/javascript/components/PopularArtists';
import React from 'react';
import { shallow } from 'enzyme';
import axios from "axios/index";
jest.mock('axios');

describe('Popular Artists Component', () => {
    const resp = {
        data:{
            topartists:{
                artist:[
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
        expect(shallow(<PopularArtists />).exists(<div id='popular-artists'></div>)).toBe(true)
    });

    it('is expected to render pagination component', () => {
        expect(shallow(<PopularArtists />).find('#react-paginate').length).toEqual(1)
    });

});


