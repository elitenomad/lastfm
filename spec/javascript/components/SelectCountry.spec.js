import SelectCountry from './../../../app/javascript/components/SelectCountry';
import React from 'react';
import { shallow } from 'enzyme';

describe('SelectCountry Component', () => {
    it('is expected to render correctly', () => {
        const onChange = jest.fn();
        const value = 'Australia';
        const wrapper = shallow(<SelectCountry  selectedCountry='spain'  onSelect={onChange} />);
        expect(wrapper).toMatchSnapshot();
        wrapper.find('Autocomplete').simulate('change', {
            target: { value },
        });
        expect(onChange).toBeCalledWith(value);
    });
});


