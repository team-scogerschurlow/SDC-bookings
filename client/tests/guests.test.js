import React from 'React';
import { shallow } from 'enzyme';

import Guests from './../src/components/guests.jsx';

function setup() {
    const props = {
        maxGuests: 10
    };
    const wrapper = shallow( <Guests/>);
    return {wrapper, props};
}

describe('Guests Test Suite', () => {
    it('should have a div', () => {
        const {wrapper} = setup();
        expect(wrapper.find('div').exists()).toBe(true);
    });

    it('should have button', () => {
        const wrapper = setup();
        expect(wrapper.exists("button")).to.equal(true);

    });

});
