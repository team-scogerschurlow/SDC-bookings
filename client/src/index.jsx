import React from 'react';
import ReactDOM from 'react-dom';
import Price from './components/rating-price.jsx'

class Booking extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Price />
            </div>
        );
    }
    
}

ReactDOM.render(<Booking />, document.getElementById("booking"));