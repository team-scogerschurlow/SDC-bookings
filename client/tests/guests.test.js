import React from 'React';
import { shallow } from 'enzyme';

import Guests from '../src/components/guests.jsx';

function setup() {
    const props = {
        maxGuests: 10
    };
    const wrapper = shallow( <Guests {...props} />);
    return {wrapper, props};
}

describe('Guests Test Suite', () => {
    it('should have a div', () => {
        const {wrapper} = setup();
        expect(wrapper.find('div').exists()).toBe(true);
    });

    it('should show dropdown on click', () => {
        const {wrapper} = setup();
        const button = wrapper.find('.button-data-display');
        button.simulate('click');
        expect(wrapper.find('.list-no-styles').exists()).toEqual(true);
    })

    it('should add guests', () => {
        const {wrapper} = setup();
        const showButton = wrapper.find(".button-data-display");
        showButton.simulate("click");
        const addButton = wrapper.find('#add-guest');
        expect(wrapper.state('numGuests')).toEqual(0);
        addButton.simulate('click', {target : {name: 'numGuests'}});
        expect(wrapper.state('numGuests')).toEqual(1);
    })

});
