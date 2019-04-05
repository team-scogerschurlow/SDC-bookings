import React from 'react';
import { shallow } from 'enzyme';

import ratingPrice from '../src/components/rating-price.jsx';

function setup() {
    const props = {
        data: {
            price: 217
        }
        
    };
    const wrapper = shallow(<ratingPrice />);
    return { wrapper, props };
}

describe('Rating-Price Test Suite', () => {
    it('should have a div', () => {
        const { wrapper } = setup();
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
