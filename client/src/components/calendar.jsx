import React from 'react';

class Calendar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            refDate: Date.now()

        }
    }


    render () {
        return (
          <div>
            <table>
                <thead>
                    <tr>
                        <th> <button> - </button> </th>
                        <th>Calendar</th>
                        <th> <button> + </button> </th>
                    </tr>

                    <tr>
                        <th>
                            February
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


            <tbody>
            

               <tr className="week-one">
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
              </tr>

               <tr className="week-two">
                
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
              </tr>
            </tbody>


            </table>
          </div>
        );
    }



}

export default Calendar;