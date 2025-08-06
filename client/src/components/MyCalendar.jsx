import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
function MyCalendar() {
  const [requestedDates, setRequestedDates] = useState([
    // "2025-07-01",
    // "2025-07-11",
  ]);
  const [unavailableDates, setUnavailableDates] = useState([
    // new Date(2025, 6, 25), //july 25th 2025
    // new Date(2025, 6, 1), //july 1st 2025
  ]);
  useEffect(() => {
    try {
      getAllBookings();
    } catch (error) {
      console.log(error);
    }
  }, []);
  //this gets all the bookings from the DB and sets the state
  const getAllBookings = async () => {
    const allBookings = await axios.get("http://localhost:5005/api/bookings");
    //loop over the array of bookings and then loop over each array of dates inside each booking
    const arrayOfDatesFromDB = [];
    for (let i = 0; i < allBookings.data.length; i++) {
      const oneBooking = allBookings.data[i];
      for (let j = 0; j < oneBooking.dates.length; j++) {
        const oneReservedDateFromDB = formatDate(oneBooking.dates[j]);
        arrayOfDatesFromDB.push(new Date(oneReservedDateFromDB));
      }
    }
    console.log("dates array from DB", arrayOfDatesFromDB);
    setUnavailableDates(arrayOfDatesFromDB);
  };
  //function to add reservation to DB
  async function handleSubmitRequest(e) {
    console.log("request start date and end date", requestedDates);
    console.log(
      "here are all of the dates requested",
      getDatesInRange(requestedDates[0], requestedDates[1])
    );
    try {
      const { data } = await axios.post("http://localhost:5005/api/booking", {
        dates: getDatesInRange(requestedDates[0], requestedDates[1]),
        email: "horheyinc@gmail.com",
      });
      console.log("booking created", data);
      await getAllBookings();
      toast("Booking Successful");
    } catch (error) {
      console.log(error);
    }
  }
  //this function will change the date from the DB to what is needed for react calendar
  const formatDate = (isoString) => {
    const date = new Date(isoString); // or from raw date string
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 0-based month
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}, ${month}, ${day}`;
  };
  //this will take a start date and end date and give all the days in between
  const getDatesInRange = (startDate, endDate) => {
    const dates = [];
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      dates.push(new Date(currentDate)); // copy currentDate
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };
  return (
    <div className="calendar-container">
      <ToastContainer />
      <h2>Available Days:</h2>
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
        //disabled tiles if not available
        tileDisabled={({ date, view }) =>
          view === "month" &&
          unavailableDates.some((d) => d.toDateString() === date.toDateString())
        }
      />
      <p>
        Once you book, you will recieve a confirmation email with all the
        information needed for your stay
      </p>
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        size="large"
        onClick={handleSubmitRequest}
      >
        Book
      </Button>
    </div>
  );
}
export default MyCalendar;
