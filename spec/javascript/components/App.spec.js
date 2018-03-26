import App from './../../../app/javascript/components/App';
import React from 'react';
import { shallow } from 'enzyme';

test('App component renders the app inside id "app"', () => {
    expect(shallow(<App />).exists(<div id='app'></div>)).toBe(true)
});