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

    it('should display the correct number of guests', () => {
        const { wrapper } = setup();
        const showButton = wrapper.find(".button-data-display");
        showButton.simulate("click");
        const addGuestButton = wrapper.find('#add-guest');
        const addChildButton = wrapper.find('#add-child');
        const addInfantButton = wrapper.find('#add-infant');
        addGuestButton.simulate('click', { target: { name: 'numGuests' } });
        addChildButton.simulate("click", { target: { name: "numChildren" } });
        addInfantButton.simulate("click", { target: { name: "numInfants" } });
        const sumGuests = wrapper.state("numGuests") + wrapper.state("numChildren")+ wrapper.state("numInfants");
        expect(sumGuests).toEqual(3);
        
    })

    it('should remove guests if the number of guests is greater than zero', () => {
        const { wrapper } = setup();
        const showButton = wrapper.find(".button-data-display");
        showButton.simulate("click");
        const addButton = wrapper.find('#add-guest');
        expect(wrapper.state('numGuests')).toEqual(0);
        addButton.simulate('click', { target: { name: 'numGuests' } });
        const minButton = wrapper.find('#min-guest');
        minButton.simulate('click', { target: { name: 'numGuests' } });
        const sumGuests = wrapper.state("numGuests") + wrapper.state("numChildren") + wrapper.state("numInfants");
        expect(sumGuests).toEqual(0);

    })

    it('should not remove guests if the number of guests is already zero', () => {
        const { wrapper } = setup();
        const showButton = wrapper.find(".button-data-display");
        showButton.simulate("click");
        const minButton = wrapper.find('#min-guest');
        minButton.simulate('click', { target: { name: 'numGuests' } });
        const sumGuests = wrapper.state("numGuests") + wrapper.state("numChildren") + wrapper.state("numInfants");
        expect(sumGuests).toEqual(0);

    })



});
