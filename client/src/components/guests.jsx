import React from 'react';


class Guests extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            showDropdown: false,
            numGuests: 0,
            numChildren: 0,
            numInfants: 0,
            guests: 'guests'
        }

        this.displayDropdown = this.displayDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
        this.decreaseGuests = this.decreaseGuests.bind(this);
        this.increaseGuests = this.increaseGuests.bind(this);
        this.setGuestorGuests = this.setGuestorGuests.bind(this);
        
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
       if (e.target.name === 'numInfants') {
         this.setState({
           [e.target.name]: this.state[e.target.name] + 1
         });
       } else if ((this.state.numGuests + this.state.numChildren) < this.props.maxGuests) {
        this.setState({
          [e.target.name]: this.state[e.target.name] + 1
        });
      }

      // if ((this.state.numGuests + this.state.numChildren) === 1) {
      //   console.log('one')
      //   this.setState({
      //     guests: 'guest'
      //   })
      // }
        
    }

    setGuestorGuests (e) {
      e.preventDefault();

       if ((this.state.numGuests + this.state.numChildren) === 1) {
        console.log('one')
        this.setState({
          guests: 'guest'
        })
      } else {
        this.setState({
          guests: 'guests'
        })
      }
      
    }



    render () {
        return (
          <div>
            <button onClick={this.displayDropdown}>
              {this.state.numGuests + this.state.numChildren + this.state.numInfants} {this.state.guests}
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
                      Children   {this.state.numChildren}
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
                  <li>
                    {this.props.maxGuests} guests maximum. Infants do not count towards the 
                    maximum number of guests.
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