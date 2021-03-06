import React from 'React';
import {shallow} from 'enzyme';

import RatingPrice from '../src/components/rating-price.jsx';

function setup() {
    const props = {
        data: {
            price: 217,
            rating: 4
        }
    };
    const wrapper = shallow( <RatingPrice />);
    return {wrapper, props};
}

describe('Rating-Price Test Suite', () => {
    it('should have a div', () => {
        const {wrapper} = setup();
        expect(wrapper.find('div').exists()).toBe(true);
    });

    it('should display props', () => {
        const {wrapper} = setup();
        expect(wrapper.equals(<div><p>$217 a night</p></div>));
    })

    it('should render stars', () => {
        const {wrapper} = setup();
        expect(
          wrapper.find('Starratings')
        )
    })
});


