import React from 'react';

import styles from "../css/style.css";

class Calendar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showCalendar: false,
            refYear: new Date().getFullYear(),
            refMonth: new Date().getMonth(),
            startDate: "Check-In",
            endDate: "Checkout",
            firstDateSelect: true,
            idCounter: 0

        }
        this.getDaysForCurrentMonth = this.getDaysForCurrentMonth.bind(
          this
        );
        this.toggleCalendar = this.toggleCalendar.bind(this);
        this.selectDate = this.selectDate.bind(this);
    }

   

    toggleCalendar (e) {
   
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

      if (e.target.innerHTML !== "") {
        if (this.state.firstDateSelect && e.target.getAttribute('data-availability') === '1' ) {
            console.log(e.target.getAttribute('data-availability'));
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
        } else if (e.target.getAttribute('data-availability') === '1' ) {
            let secondDate = this.state.refMonth +
                  "/" +
                  e.target.innerHTML +
                  "/" +
                  this.state.refYear;

          if (this.isSecondDateLater(this.state.startDate, secondDate, '/') && e.target.getAttribute('data-availability') === '1' ) {
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
                data-availability={this.setDataForDayAvailability(
                  weekOneArray[0]
                )}
                onClick={this.selectDate}
              >
                {weekOneArray[0]}
              </td>
              <td
                className={this.getClassForDay(weekOneArray[1])}
                data-availability={this.setDataForDayAvailability(
                  weekOneArray[1]
                )}
                onClick={this.selectDate}
              >
                {weekOneArray[1]}
              </td>
              <td
                className={this.getClassForDay(weekOneArray[2])}
                data-availability={this.setDataForDayAvailability(
                  weekOneArray[2]
                )}
                onClick={this.selectDate}
              >
                {weekOneArray[2]}
              </td>
              <td
                className={this.getClassForDay(weekOneArray[3])}
                data-availability={this.setDataForDayAvailability(
                  weekOneArray[3]
                )}
                onClick={this.selectDate}
              >
                {weekOneArray[3]}
              </td>
              <td
                className={this.getClassForDay(weekOneArray[4])}
                data-availability={this.setDataForDayAvailability(
                  weekOneArray[4]
                )}
                onClick={this.selectDate}
              >
                {weekOneArray[4]}
              </td>
              <td
                className={this.getClassForDay(weekOneArray[5])}
                data-availability={this.setDataForDayAvailability(
                  weekOneArray[5]
                )}
                onClick={this.selectDate}
              >
                {weekOneArray[5]}
              </td>
              <td
                className={this.getClassForDay(weekOneArray[6])}
                data-availability={this.setDataForDayAvailability(
                  weekOneArray[6]
                )}
                onClick={this.selectDate}
              >
                {weekOneArray[6]}
              </td>
            </tr>
            <tr className="week-two">
              <td
                id='day-in-past'
                className={this.getClassForDay(remainingDays[0])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[0]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[0]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[1])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[1]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[1]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[2])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[2]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[2]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[3])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[3]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[3]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[4])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[4]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[4]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[5])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[5]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[5]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[6])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[6]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[6]}
              </td>
            </tr>
            <tr className="week-three">
              <td
                className={this.getClassForDay(remainingDays[7])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[7]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[7]}
              </td>
              <td
              id='unavailable'
                className={this.getClassForDay(remainingDays[8])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[8]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[8]}
              </td>
              <td
              id='available'
                className={this.getClassForDay(remainingDays[9])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[9]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[9]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[10])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[10]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[10]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[11])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[11]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[11]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[12])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[12]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[12]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[13])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[13]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[13]}
              </td>
            </tr>
            <tr className="week-four">
              <td
                className={this.getClassForDay(remainingDays[14])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[14]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[14]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[15])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[15]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[15]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[16])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[16]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[16]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[17])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[17]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[17]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[18])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[18]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[18]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[19])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[19]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[19]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[20])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[20]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[20]}
              </td>
            </tr>
            <tr className="week-five">
              <td
                className={this.getClassForDay(remainingDays[21])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[21]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[21]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[22])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[22]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[22]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[23])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[23]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[23]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[24])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[24]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[24]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[25])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[25]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[25]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[26])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[26]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[26]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[27])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[27]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[27]}
              </td>
            </tr>
            <tr className="week-five">
              <td
                className={this.getClassForDay(remainingDays[28])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[28]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[28]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[29])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[29]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[29]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[30])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[30]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[30]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[31])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[31]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[31]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[32])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[32]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[32]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[33])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[33]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[33]}
              </td>
              <td
                className={this.getClassForDay(remainingDays[34])}
                data-availability={this.setDataForDayAvailability(
                  remainingDays[34]
                )}
                onClick={this.selectDate}
              >
                {remainingDays[34]}
              </td>
            </tr>
          </tbody>
        );
    }

    getClassForDay (tdDate) {
      const d = new Date();
      const today = d.toISOString().split('T')[0];      
      function helperForFindIndexToCompareDates (element) {
        return tdDate + 'T07:00:00.000Z' === element.rental_date;
      }
      
      if (tdDate === "") {
        return styles["previous-month"];
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
          if (todayIndexOfDate !== -1) {
            const todayAvailabilityOfDate = this.props.dates[todayIndexOfDate].available;
            if (todayAvailabilityOfDate === 0) {
              return styles["today-closed"];
            } else {
              return styles['today-open'];
            }
          } 
          
        }

        if (this.isSecondDateLater(tdDate, today, '-')) {
          return styles["past-date"];
        } else {
         
          const indexOfDate = this.props.dates.findIndex(
            helperForFindIndexToCompareDates
          );
          if (indexOfDate === -1) {
            return 'no-data-yet';
          }
           const availabilityOfDate = this.props.dates[indexOfDate].available;

          if (availabilityOfDate === 0) {
            return styles["closed"];
          } else {
            return styles["open"];
          }
          
        }
       
      }
      
    }

    setDataForDayAvailability (tdDate) {
      const d = new Date();
      const today = d.toISOString().split('T')[0];
     
      function helperForFindIndexToCompareDates(element) {
        return tdDate + 'T07:00:00.000Z' === element.rental_date;
      }

      if (tdDate !== "") {
        if (tdDate < 10) {
          tdDate = "0" + tdDate.toString();
        }
        const refDateArr = today.split("-");
        tdDate = refDateArr[0] + "-" + refDateArr[1] + "-" + tdDate;

        const indexOfDate = this.props.dates.findIndex(
            helperForFindIndexToCompareDates
        );

        if (this.isSecondDateLater(tdDate, today, '-') && tdDate !== today) {
          return "0";
        } 

        if (indexOfDate !== -1) {
          const availabilityOfDate = this.props.dates[indexOfDate].available;
          if (availabilityOfDate === 0) {
            return "0";
          } else {
            return "1";
          }

        }  
      }

      
    }


    render () {
        return (
          <div className = {styles['basic-font']}>
              <h4>Dates</h4>
              <button className={styles['button-data-display']} id='show-cal' onClick={this.toggleCalendar} >{this.state.startDate}</button>
            <button className={styles['button-data-display']} onClick={this.toggleCalendar} >{this.state.endDate}</button>
        {this.state.showCalendar ? (
          <div id='cal'>
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="7">
                        <button className={styles["button-action-styling"]}>-</button>
                                    {this.parseMonthName()} {this.state.refYear}
                        <button className={styles["button-action-styling"]}>+</button>
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
                <button id='btn-close' className={styles["button-action-styling"]} onClick={this.toggleCalendar}>Close</button>
          </div>

        ) : null }

        
            
          </div>
        );
    }



}

export default Calendar;