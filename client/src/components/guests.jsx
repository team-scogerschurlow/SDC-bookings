import React from 'react';


class Guests extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            showDropdown: false
        }

        this.displayDropdown = this.displayDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
        
    }

    displayDropdown (e) {
        e.preventDefault();
        this.setState({
            showDropdown: true
        })
    }

    hideDropdown (e) {
        e.preventDefault();
        this.setState({
            showDropdown: false
        });
    }


    render () {
        return (
            <div>
                <button onClick={this.displayDropdown}>Guests</button>

                {
                    this.state.showDropdown 
                    ? (
                        <div>
                        <ul>
                            <li>Guests</li>
                            <li>Children</li>
                            <li>Infants</li>
                        </ul>
                        <button onClick={this.hideDropdown}>Close</button>
                        </div>

                    ) : (
                        null
                    )

                    
                }
            </div>

        );
    }

}

export default Guests;