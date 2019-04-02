import React from 'react';


class Guests extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            showDropdown: false,
            numGuests: 0,
            numChildren: 0,
            numInfants: 0
        }

        this.displayDropdown = this.displayDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
        this.decreaseGuests = this.decreaseGuests.bind(this);
        this.increaseGuests = this.increaseGuests.bind(this);
        
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

    decreaseGuests (e) {
      e.preventDefault();
      if (this.state[e.target.name] > 0) {
        this.setState({
          [e.target.name]: this.state[e.target.name] - 1
        })
      }
    }

    increaseGuests (e) {
      e.preventDefault();
       //need to compare to max
       
      this.setState({
        [e.target.name]: this.state[e.target.name] + 1
      })
      
    }


    render () {
        return (
          <div>
            <button onClick={this.displayDropdown}>
              Guests: {this.state.numGuests + this.state.numChildren + this.state.numInfants}
            </button>

            {this.state.showDropdown ? (
              <div>
                <ul>
                  <li>
                    <button
                      name="numGuests"
                      onClick={this.decreaseGuests}
                    >
                      -
                    </button>
                    Guests {this.state.numGuests}
                    <button
                      name="numGuests"
                      onClick={this.increaseGuests}
                    >
                      +
                    </button>
                  </li>
                  <li>
                    <button
                      name="numChildren"
                      onClick={this.decreaseGuests}
                    >
                      -
                    </button>
                    Children {this.state.numChildren}
                    <button
                      name="numChildren"
                      onClick={this.increaseGuests}
                    >
                      +
                    </button>
                  </li>
                  <li>
                    <button
                      name="numInfants"
                      onClick={this.decreaseGuests}
                    >
                      -
                    </button>
                    Infants {this.state.numInfants}
                    <button 
                    name="numInfants"
                    onClick={this.increaseGuests} 
                    >
                      +
                    </button>
                  </li>
                </ul>
                <button onClick={this.hideDropdown}>Close</button>
              </div>
            ) : null}
          </div>
        );
    }

}

export default Guests;