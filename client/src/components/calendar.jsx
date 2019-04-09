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

    isSecondDateLater (firstDate, secondDate, splitChar) {
   
        let secondIsLater = false;
        const firstDateArr = firstDate.split(splitChar);
        const secondDateArr = secondDate.split(splitChar);
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

                if (this.isSecondDateLater(this.state.startDate, secondDate, '/')) {
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
              <td
                className={this.getClassForDay(weekOneArray[0])}
                onClick={this.selectDate}
              >
                {weekOneArray[0]}
              </td>
              <td
                className={this.getClassForDay(weekOneArray[1])}
                onClick={this.selectDate}
              >
                {weekOneArray[1]}
              </td>
              <td
                className={this.getClassForDay(weekOneArray[2])}
                onClick={this.selectDate}
              >
                {weekOneArray[2]}
              </td>
              <td
                className={this.getClassForDay(weekOneArray[3])}
                onClick={this.selectDate}
              >
                {weekOneArray[3]}
              </td>
              <td
                className={this.getClassForDay(weekOneArray[4])}
                onClick={this.selectDate}
              >
                {weekOneArray[4]}
              </td>
              <td
                className={this.getClassForDay(weekOneArray[5])}
                onClick={this.selectDate}
              >
                {weekOneArray[5]}
              </td>
              <td
                className={this.getClassForDay(weekOneArray[6])}
                onClick={this.selectDate}
              >
                {weekOneArray[6]}
              </td>
            </tr>
            <tr className="week-two">
              <td className={this.getClassForDay(remainingDays[0])} onClick={this.selectDate}>{remainingDays[0]}</td>
              <td className={this.getClassForDay(remainingDays[1])} onClick={this.selectDate}>{remainingDays[1]}</td>
              <td className={this.getClassForDay(remainingDays[2])} onClick={this.selectDate}>{remainingDays[2]}</td>
              <td className={this.getClassForDay(remainingDays[3])} onClick={this.selectDate}>{remainingDays[3]}</td>
              <td className={this.getClassForDay(remainingDays[4])} onClick={this.selectDate}>{remainingDays[4]}</td>
              <td className={this.getClassForDay(remainingDays[5])} onClick={this.selectDate}>{remainingDays[5]}</td>
              <td className={this.getClassForDay(remainingDays[6])} onClick={this.selectDate}>{remainingDays[6]}</td>
            </tr>
            <tr className="week-three">
              <td className={this.getClassForDay(remainingDays[7])} onClick={this.selectDate}>{remainingDays[7]}</td>
              <td className={this.getClassForDay(remainingDays[8])} onClick={this.selectDate}>{remainingDays[8]}</td>
              <td className={this.getClassForDay(remainingDays[9])} onClick={this.selectDate}>{remainingDays[9]}</td>
              <td className={this.getClassForDay(remainingDays[10])} onClick={this.selectDate}>{remainingDays[10]}</td>
              <td className={this.getClassForDay(remainingDays[11])} onClick={this.selectDate}>{remainingDays[11]}</td>
              <td className={this.getClassForDay(remainingDays[12])} onClick={this.selectDate}>{remainingDays[12]}</td>
              <td className={this.getClassForDay(remainingDays[13])} onClick={this.selectDate}>{remainingDays[13]}</td>
            </tr>
            <tr className="week-four">
              <td className={this.getClassForDay(remainingDays[14])} onClick={this.selectDate}>{remainingDays[14]}</td>
              <td className={this.getClassForDay(remainingDays[15])} onClick={this.selectDate}>{remainingDays[15]}</td>
              <td className={this.getClassForDay(remainingDays[16])} onClick={this.selectDate}>{remainingDays[16]}</td>
              <td className={this.getClassForDay(remainingDays[17])} onClick={this.selectDate}>{remainingDays[17]}</td>
              <td className={this.getClassForDay(remainingDays[18])} onClick={this.selectDate}>{remainingDays[18]}</td>
              <td className={this.getClassForDay(remainingDays[19])} onClick={this.selectDate}>{remainingDays[19]}</td>
              <td className={this.getClassForDay(remainingDays[20])} onClick={this.selectDate}>{remainingDays[20]}</td>
            </tr>
            <tr className="week-five">
              <td className={this.getClassForDay(remainingDays[21])} onClick={this.selectDate}>{remainingDays[21]}</td>
              <td className={this.getClassForDay(remainingDays[22])} onClick={this.selectDate}>{remainingDays[22]}</td>
              <td className={this.getClassForDay(remainingDays[23])} onClick={this.selectDate}>{remainingDays[23]}</td>
              <td className={this.getClassForDay(remainingDays[24])} onClick={this.selectDate}>{remainingDays[24]}</td>
              <td className={this.getClassForDay(remainingDays[25])} onClick={this.selectDate}>{remainingDays[25]}</td>
              <td className={this.getClassForDay(remainingDays[26])} onClick={this.selectDate}>{remainingDays[26]}</td>
              <td className={this.getClassForDay(remainingDays[27])} onClick={this.selectDate}>{remainingDays[27]}</td>
            </tr>
            <tr className="week-five">
              <td className={this.getClassForDay(remainingDays[28])} onClick={this.selectDate}>{remainingDays[28]}</td>
              <td className={this.getClassForDay(remainingDays[29])} onClick={this.selectDate}>{remainingDays[29]}</td>
              <td className={this.getClassForDay(remainingDays[30])} onClick={this.selectDate}>{remainingDays[30]}</td>
              <td className={this.getClassForDay(remainingDays[31])} onClick={this.selectDate}>{remainingDays[31]}</td>
              <td className={this.getClassForDay(remainingDays[32])} onClick={this.selectDate}>{remainingDays[32]}</td>
              <td className={this.getClassForDay(remainingDays[33])} onClick={this.selectDate}>{remainingDays[33]}</td>
              <td className={this.getClassForDay(remainingDays[34])} onClick={this.selectDate}>{remainingDays[34]}</td>
            </tr>
          </tbody>
        );
    }

    getClassForDay (tdDate) {
      //console.log(this.props.dates);
      const d = new Date();
      const today = d.toISOString().split('T')[0];      
      function helperForFindIndexToCompareDates (element) {
        return tdDate + 'T07:00:00.000Z' === element.rental_date;
      }
      
      if (tdDate === "") {
        return "previous-month";
      } else {
        if (tdDate < 10) {
          tdDate = "0" + tdDate.toString();
        }
        const refDateArr = today.split("-");
        tdDate = refDateArr[0] + "-" + refDateArr[1] + "-" + tdDate;

        if (tdDate === today) {
          const todayIndexOfDate = this.props.dates.findIndex(
            helperForFindIndexToCompareDates
          )
          const todayAvailabilityOfDate = this.props.dates[todayIndexOfDate].available;

          if (todayAvailabilityOfDate === 0) {
            return 'today-closed';
          } else {
            return 'today-open';
          }
        }

        if (this.isSecondDateLater(tdDate, today, '-')) {
          return "past-date";
        } else {
         
          const indexOfDate = this.props.dates.findIndex(
            helperForFindIndexToCompareDates
          );
          if (indexOfDate === -1) {
            return 'no-data-yet';
          }
           const availabilityOfDate = this.props.dates[indexOfDate].available;

          if (availabilityOfDate === 0) {
            return "closed";
          } else {
            return "open";
          }
          
        }
       
      }
      
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