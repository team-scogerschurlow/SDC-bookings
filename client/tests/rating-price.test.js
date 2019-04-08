import React from 'React';
import {shallow} from 'enzyme';

import RatingPrice from './../src/components/rating-price.jsx';

function setup() {
    const props = {
        data: {
            price: 217
        }
    };
    const wrapper = shallow( <RatingPrice />);
    return {wrapper, props};
}

describe('Rating-Price Test Suite', () => {
    it('should have a div', () => {
        const {wrapper} = setup();
        // const wrapper = shallow(<RatingPrice />)
        expect(wrapper.find('div').exists()).toBe(true);
    });
});

// describe('Examining the syntax of Jest tests', () => {

//     it('sums numbers', () => {
//         expect(1 + 2).toEqual(3);
//         expect(2 + 2).toEqual(4);
//     });
// });

