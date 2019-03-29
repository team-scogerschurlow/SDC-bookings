import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

import Price from './components/rating-price.jsx';

class Booking extends React.Component {
    constructor() {
        super();
        this.state = {
            currentRental: {},
            availability: []
        }

        this.getRentalDataForId = this.getRentalDataForId.bind(this);
        this.getAvailabilityDataForId = this.getAvailabilityDataForId.bind(this);
    }

    componentDidMount() {
        //this section gets the data id from the URL
        //rather fragily and then passes the id
        //on to the getData function
        let id = document.URL.split('/')[3];
        this.getRentalDataForId(id);
        this.getAvailabilityDataForId(id);
    }

    getRentalDataForId(id) {
        //this is invoked onMount and is passed the id from the page url
        //it gets the value from the server and is given the entire body
        //of data for the rental entry according to the id and sets the 
        //state accordingly
        axios.get(`/getrentaldata/${id}`)
        .then((results)=>{
            this.setState({
                currentRental: results.data[0]
            })
        })
        .catch((err) => {
            console.log(`error on client getting rental data`, err);
        })
    }

    getAvailabilityDataForId(id) {

        axios.get(`getavailabilitydata/${id}`)
        .then((results)=> {
            // this.setState({
            //     availability: results.data
            // })

            console.log(results);
        })
        .catch((err)=>{
            console.log(`error getting availability on client`, err);
        })

    }

  

    render() {
        return (
            <div>
                <Price rating={this.state.currentRental.rating} />
            </div>
        );
    }
    
}

ReactDOM.render(<Booking />, document.getElementById("booking"));