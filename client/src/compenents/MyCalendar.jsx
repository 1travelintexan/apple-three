import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import axios from "axios";
function MyCalendar() {
  const [requestedDates, setRequestedDates] = useState([
    "2025-07-01",
    "2025-07-11",
  ]);
  const [unavailableDates, setUnavailableDates] = useState([
    new Date(2025, 6, 25), //july 25th 2025
    new Date(2025, 6, 1), //july 1st 2025
  ]);

  useEffect(() => {}, []);

  //function to add reservation to DB
  function handleSubmitRequest(e) {
    console.log("request dates", requestedDates);
    try {
      const { data } = axios.post("http://localhost:5005/api/booking", {
        dates: requestedDates,
        email: "horheyinc@gmail.com",
      });
      console.log("booking created", data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="calendar-container">
      <h2>Pick your days</h2>
      <Calendar
        className="calendar"
        onChange={(selectedDates) => {
          setRequestedDates(selectedDates);
        }}
        value={requestedDates}
        selectRange={true}
        tileClassName={({ date }) => {
          // styling the weekend days differently
          // const isWeekend = date.getDay() === 0 || date.getDay() === 6;
          // if (isWeekend) {
          //   return "weekend";
          // }
          if (
            unavailableDates.some(
              (d) => d.toDateString() === date.toDateString()
            )
          ) {
            return "close";
          } else {
            return "open";
          }
        }}
        tileDisabled={({ date, view }) =>
          view === "month" &&
          unavailableDates.some((d) => d.toDateString() === date.toDateString())
        }
      />
      <button onClick={handleSubmitRequest}>Book</button>
    </div>
  );
}
export default MyCalendar;
