import React from 'react';

class Calendar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showCalendar: false,
            refDate: Date.now(),
            refYear: new Date(Date.now()).getFullYear(),
            refMonth: new Date(Date.now()).getMonth(),
            startDate: "Check-In",
            endDate: "Checkout"

        }
        this.getDaysForCurrentMonth = this.getDaysForCurrentMonth.bind(
          this
        );
        this.toggleCalendar = this.toggleCalendar.bind(this);
    }

    toggleCalendar (e) {
        e.preventDefault();
        this.setState({
            showCalendar: true
        })

    }

    

    getDaysForCurrentMonth () {
        const date = new Date(
          this.state.refYear + "-" + this.state.refMonth + "-" + "01"
        );
        let weekOneArray = [];
        let remainingDays = [];
        let dayNum = 1;
        let finalDay = 31;
        if (date.getMonth === 2) {
            finalDay = 28;
        }
        if (
          date.getMonth === 4 ||
          date.getMonth === 6 ||
          date.getMonth === 9 ||
          date.getMonth === 11
        ) {
            finalDay = 30;
        }
          for (var i = 0; i < date.getDay(); i++) {
            weekOneArray.push("");
          }

        for (var j = date.getDay(); j <= 6; j++) {
            weekOneArray.push(dayNum);
            dayNum++;
        }

        for (let n = dayNum; n <= finalDay; n++) {
            remainingDays.push(n);
        }

        return (
          <tbody>
            <tr className="week-one">
              <td>{weekOneArray[0]}</td>
              <td>{weekOneArray[1]}</td>
              <td>{weekOneArray[2]}</td>
              <td>{weekOneArray[3]}</td>
              <td>{weekOneArray[4]}</td>
              <td>{weekOneArray[5]}</td>
              <td>{weekOneArray[6]}</td>
            </tr>
            <tr className="week-two">
              <td>{remainingDays[0]}</td>
              <td>{remainingDays[1]}</td>
              <td>{remainingDays[2]}</td>
              <td>{remainingDays[3]}</td>
              <td>{remainingDays[4]}</td>
              <td>{remainingDays[5]}</td>
              <td>{remainingDays[6]}</td>
            </tr>
             <tr className="week-three">
              <td>{remainingDays[7]}</td>
              <td>{remainingDays[8]}</td>
              <td>{remainingDays[9]}</td>
              <td>{remainingDays[10]}</td>
              <td>{remainingDays[11]}</td>
              <td>{remainingDays[12]}</td>
              <td>{remainingDays[13]}</td>
            </tr>
             <tr className="week-four">
              <td>{remainingDays[14]}</td>
              <td>{remainingDays[15]}</td>
              <td>{remainingDays[16]}</td>
              <td>{remainingDays[17]}</td>
              <td>{remainingDays[18]}</td>
              <td>{remainingDays[19]}</td>
              <td>{remainingDays[20]}</td>
            </tr>
             <tr className="week-five">
              <td>{remainingDays[21]}</td>
              <td>{remainingDays[22]}</td>
              <td>{remainingDays[23]}</td>
              <td>{remainingDays[24]}</td>
              <td>{remainingDays[25]}</td>
              <td>{remainingDays[26]}</td>
              <td>{remainingDays[27]}</td>
            </tr>
              <tr className="week-five">
              <td>{remainingDays[28]}</td>
              <td>{remainingDays[29]}</td>
              <td>{remainingDays[30]}</td>
              <td>{remainingDays[31]}</td>
              <td>{remainingDays[32]}</td>
              <td>{remainingDays[33]}</td>
              <td>{remainingDays[34]}</td>
            </tr>
          </tbody>
        );
    }


    render () {
        return (
          <div>
              <h4>Dates</h4>
              <button onClick={this.toggleCalendar} >{this.state.startDate}</button>
                <button onClick={this.toggleCalendar} >{this.state.endDate}</button>
        {this.state.showCalendar ? (
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    {this.state.refMonth} {this.state.refYear}
                                </th>
                            </tr>
                            <tr>
                                <th>Sun</th>
                                <th>Mon</th>
                                <th>Tue</th>
                                <th>Wed</th>
                                <th>Thu</th>
                                <th>Fri</th>
                                <th>Sat</th>
                            </tr>
                        </thead>

                        {this.getDaysForCurrentMonth()}

                    </table>

        ) : null }
            
          </div>
        );
    }



}

export default Calendar;