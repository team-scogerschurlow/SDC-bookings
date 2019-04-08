const React = require('React');
const shallow = require('enzyme');

const RatingPrice = require('./../src/components/rating-price.jsx');

// function setup() {
//     const props = {
//         data: {
//             price: 217
//         }
//     };
//     const wrapper = shallow( <RatingPrice />);
//     return { wrapper, props };
// }

// describe('Rating-Price Test Suite', () => {
//     it('should have a div', () => {
//         const { wrapper } = setup();
//         expect(wrapper.find('div').exists()).toBe(true);
//     });
// });

describe('Examining the syntax of Jest tests', () => {

    it('sums numbers', () => {
        expect(1 + 2).toEqual(3);
        expect(2 + 2).toEqual(4);
    });
});

