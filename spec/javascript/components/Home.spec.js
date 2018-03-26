import Home from './../../../app/javascript/components/Home';
import React from 'react';
import { shallow } from 'enzyme';


describe('Home Component', () => {
    it('is expected to renders under a div', () => {
        expect(shallow(<Home />).exists(<div className='home-container'></div>)).toBe(true)
    });

    it('is expected to render a h1', () => {
        expect(shallow(<Home />).find('h1').length).toEqual(1)
    });

    it('is expected to render a Link', () => {
        expect(shallow(<Home />).find('Link').length).toEqual(1)
    });
});

