import React from 'React';
import { shallow } from 'enzyme';

import Calendar from '../src/components/calendar.jsx';

function setup() {
    const props = {
        
    };
    const wrapper = shallow(<Calendar />);
    return { wrapper, props };
}

describe('Calendar Test Suite', () => {
    it('should have a div', () => {
        const { wrapper } = setup();
        expect(wrapper.find('div').exists()).toBe(true);
    });


});