import React from 'react';

class Calendar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showCalendar: false,
            refYear: new Date().getFullYear(),
            refMonth: new Date().getMonth(),
            startDate: "Check-In",
            endDate: "Checkout",
            firstDateSelect: true

        }
        this.getDaysForCurrentMonth = this.getDaysForCurrentMonth.bind(
          this
        );
        this.toggleCalendar = this.toggleCalendar.bind(this);
        this.selectDate = this.selectDate.bind(this);
    }

   

    toggleCalendar (e) {
        e.preventDefault();
        if (this.state.showCalendar) {
            this.setState({
              showCalendar:false
            })
        } else {
            this.setState({
                showCalendar: true
            })
        }
    }

    isSecondDateLater (firstDate, secondDate) {
   
        let secondIsLater = false;
        const firstDateArr = firstDate.split('/');
        const secondDateArr = secondDate.split('/');
        if (
          Number(firstDateArr[0]) <= Number(secondDateArr[0]) &&
          Number(firstDateArr[1]) <= Number(secondDateArr[1]) &&
          Number(firstDateArr[2]) <= Number(secondDateArr[2])
        ) {
          secondIsLater = true;
        }

        return secondIsLater;

    }

    selectDate (e) {
        e.preventDefault();
        if (e.target.innerHTML !== "") {
            if (this.state.firstDateSelect) {
                this.setState({
                  startDate:
                    this.state.refMonth +
                    "/" +
                    e.target.innerHTML +
                    "/" +
                    this.state.refYear,
                  firstDateSelect: false,
                  endDate: "Checkout"
                });
            } else {
              let secondDate = this.state.refMonth +
                    "/" +
                   e.target.innerHTML +
                    "/" +
                    this.state.refYear;

                if (this.isSecondDateLater(this.state.startDate, secondDate)) {
                    this.setState({
                        endDate: secondDate,
                        firstDateSelect: true
                    });

                    }
            }
            
        }
    }

    parseMonthName () {
        if (this.state.refMonth === 0) {
            return 'January';
        }
        if (this.state.refMonth === 1) {
          return "February";
        }
        if (this.state.refMonth === 2) {
          return "March";
        }
        if (this.state.refMonth === 3) {
          return "April";
        }
        if (this.state.refMonth === 4) {
          return "May";
        }
        if (this.state.refMonth === 5) {
          return "June";
        }
        if (this.state.refMonth === 6) {
          return "July";
        }
        if (this.state.refMonth === 7) {
          return "August";
        }
        if (this.state.refMonth === 8) {
          return "September";
        }
        if (this.state.refMonth === 9) {
          return "October";
        }
        if (this.state.refMonth === 10) {
          return "November";
        }
        if (this.state.refMonth === 11) {
          return "December";
        }

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
              <td onClick={this.selectDate}>{weekOneArray[0]}</td>
              <td onClick={this.selectDate}>{weekOneArray[1]}</td>
              <td onClick={this.selectDate}>{weekOneArray[2]}</td>
              <td onClick={this.selectDate}>{weekOneArray[3]}</td>
              <td onClick={this.selectDate}>{weekOneArray[4]}</td>
              <td onClick={this.selectDate}>{weekOneArray[5]}</td>
              <td onClick={this.selectDate}>{weekOneArray[6]}</td>
            </tr>
            <tr className="week-two">
              <td onClick={this.selectDate}>{remainingDays[0]}</td>
              <td onClick={this.selectDate}>{remainingDays[1]}</td>
              <td onClick={this.selectDate}>{remainingDays[2]}</td>
              <td onClick={this.selectDate}>{remainingDays[3]}</td>
              <td onClick={this.selectDate}>{remainingDays[4]}</td>
              <td onClick={this.selectDate}>{remainingDays[5]}</td>
              <td onClick={this.selectDate}>{remainingDays[6]}</td>
            </tr>
             <tr className="week-three">
              <td onClick={this.selectDate}>{remainingDays[7]}</td>
              <td onClick={this.selectDate}>{remainingDays[8]}</td>
              <td onClick={this.selectDate}>{remainingDays[9]}</td>
              <td onClick={this.selectDate}>{remainingDays[10]}</td>
              <td onClick={this.selectDate}>{remainingDays[11]}</td>
              <td onClick={this.selectDate}>{remainingDays[12]}</td>
              <td onClick={this.selectDate}>{remainingDays[13]}</td>
            </tr>
             <tr className="week-four">
              <td onClick={this.selectDate}>{remainingDays[14]}</td>
              <td onClick={this.selectDate}>{remainingDays[15]}</td>
              <td onClick={this.selectDate}>{remainingDays[16]}</td>
              <td onClick={this.selectDate}>{remainingDays[17]}</td>
              <td onClick={this.selectDate}>{remainingDays[18]}</td>
              <td onClick={this.selectDate}>{remainingDays[19]}</td>
              <td onClick={this.selectDate}>{remainingDays[20]}</td>
            </tr>
             <tr className="week-five">
              <td onClick={this.selectDate}>{remainingDays[21]}</td>
              <td onClick={this.selectDate}>{remainingDays[22]}</td>
              <td onClick={this.selectDate}>{remainingDays[23]}</td>
              <td onClick={this.selectDate}>{remainingDays[24]}</td>
              <td onClick={this.selectDate}>{remainingDays[25]}</td>
              <td onClick={this.selectDate}>{remainingDays[26]}</td>
              <td onClick={this.selectDate}>{remainingDays[27]}</td>
            </tr>
              <tr className="week-five">
              <td onClick={this.selectDate}>{remainingDays[28]}</td>
              <td onClick={this.selectDate}>{remainingDays[29]}</td>
              <td onClick={this.selectDate}>{remainingDays[30]}</td>
              <td onClick={this.selectDate}>{remainingDays[31]}</td>
              <td onClick={this.selectDate}>{remainingDays[32]}</td>
              <td onClick={this.selectDate}>{remainingDays[33]}</td>
              <td onClick={this.selectDate}>{remainingDays[34]}</td>
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
          <div>
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="7">
                                    <button>-</button>
                                    {this.parseMonthName()} {this.state.refYear}
                                    <button>+</button>
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
                    <button onClick={this.toggleCalendar}>Close</button>
          </div>

        ) : null }

        
            
          </div>
        );
    }



}

export default Calendar;