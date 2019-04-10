import React from 'react';

import styles from "../css/style.css";


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
    
        this.setState({
            showDropdown: true
        })
    }

    hideDropdown (e) {
       
        this.setState({
            showDropdown: false
        });
    }

    decreaseGuests (e) {
  
      if (this.state[e.target.name] > 0) {
        this.setState({
          [e.target.name]: this.state[e.target.name] - 1
        })
      }

    }

    increaseGuests (e) {

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
            <button
              className={styles["button-data-display"]}
              onClick={this.displayDropdown}
            >
              {this.state.numGuests +
                this.state.numChildren +
                this.state.numInfants}{" "}
              {this.state.guests}
            </button>

            {this.state.showDropdown ? (
              <div>
                <ul className={styles["list-no-styles"]}>
                  <li>
                    <button
                      className={styles["button-action-styling"]}
                      name="numGuests"
                      id='min-guest'
                      onClick={this.decreaseGuests}
                    >
                      -
                    </button>
                    Guests {this.state.numGuests}
                    <button
                      className={styles["button-action-styling"]}
                      name="numGuests"
                      id="add-guest"
                      onClick={this.increaseGuests}
                    >
                      +
                    </button>
                  </li>
                  <li>
                    <button
                      className={styles["button-action-styling"]}
                      name="numChildren"
                      onClick={this.decreaseGuests}
                    >
                      -
                    </button>
                    Children {this.state.numChildren}
                    <button
                      className={styles["button-action-styling"]}
                      name="numChildren"
                      id="add-child"
                      onClick={this.increaseGuests}
                    >
                      +
                    </button>
                  </li>
                  <li>
                    <button
                      className={styles["button-action-styling"]}
                      name="numInfants"
                      onClick={this.decreaseGuests}
                    >
                      -
                    </button>
                    Infants {this.state.numInfants}
                    <button
                      className={styles["button-action-styling"]}
                      name="numInfants"
                      id="add-infant"
                      onClick={this.increaseGuests}
                    >
                      +
                    </button>
                  </li>
                  <li>
                    {this.props.maxGuests} guests maximum. Infants do
                    not count towards the maximum number of guests.
                  </li>
                </ul>
                <button
                  className={styles["button-action-styling"]}
                  onClick={this.hideDropdown}
                >
                  Close
                </button>
              </div>
            ) : null}
          </div>
        );
    }

}

export default Guests;