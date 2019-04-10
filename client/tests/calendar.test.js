import React from 'React';
import { shallow } from 'enzyme';

import Calendar from '../src/components/calendar.jsx';

function setup() {
    const props = {
        dates: [{
            available: 1,
            id: 160,
            price: 404,
            rental_date: "2019-03-29T07:00:00.000Z"
        },
        {
            available: 0,
            id: 161,
            price: 405,
            rental_date: '2019-04-10T07:00:00.000Z'
        },
        {
            available: 0,
            id: 162,
            price: 103,
            rental_date: "2019-04-11T07:00:00.000Z"
        }

    ]
        
    };
    const wrapper = shallow(<Calendar {...props}/>);
    return { wrapper, props };
}

describe('Calendar Test Suite', () => {
    it('should have a div', () => {
        const { wrapper } = setup();
        expect(wrapper.find('div').exists()).toBe(true);
    });

    it('should show calendar on click', () => {
        const { wrapper } = setup();
        const button = wrapper.find('#show-cal');
        button.simulate('click');
        expect(wrapper.find('#cal').exists()).toEqual(true);
    })

    it('should not allow users to click on a past date', () => {
        const { wrapper } = setup();
        const button = wrapper.find('#show-cal');
        button.simulate('click');
        const day = wrapper.find('#day-in-past');
        day.simulate('click', {target: {innerHTML: "3", getAttribute: ()=>{0}}});
        expect(wrapper.state('startDate')).toEqual('Check-In');
    })

    it('should not allow users to click on an unavailable date', () => {
        const { wrapper } = setup();
        const button = wrapper.find('#show-cal');
        button.simulate('click');
        const day = wrapper.find('#unavailable');
        day.simulate('click', { target: { innerHTML: "11", getAttribute: () => { 0 } } });
        expect(wrapper.state('startDate')).toEqual('Check-In');
    })

    it('should allow users to click on an available date', () => {
        const { wrapper } = setup();
        const button = wrapper.find('#show-cal');
        button.simulate('click');
        const day = wrapper.find('#available');
        
        day.simulate('click', { target: { innerHTML: "12", getAttribute: () => { 1 } } });
        console.log(wrapper.state("startDate"));
        expect(wrapper.state('startDate')).toEqual('3/12/2019');
    })

    it('should allow users to close the calendar', () => {
        const { wrapper } = setup();
        const showButton = wrapper.find('#show-cal');
        showButton.simulate('click');
        const closeButton = wrapper.find('#btn-close');
        closeButton.simulate('click');
        expect(wrapper.find("#available").exists()).toEqual(false);
       
    })

    


});