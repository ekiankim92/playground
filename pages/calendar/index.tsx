import Calendar from "../../src/unit/calendar/calendar.container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";

const CalendarPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [count, setCount] = useState<number>(0);
  const [clickCount, setClickCount] = useState<number>(0);

  const onChangeStartDate = (dates) => {
    console.log("startDate:", startDate);
    console.log("dates:", dates);
    setStartDate(dates);
  };

  const onChangeEndDate = (dates) => {
    console.log("endDate:", endDate);
    console.log("dates:", dates);
    setEndDate(dates);
  };

  const onChangeDateRange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const onClickCountDays = () => {
    if (startDate === endDate) {
      alert("please choose the range of dates");
    }
    const result = Math.floor(
      Math.abs(Number(endDate) - Number(startDate)) / (1000 * 60 * 60 * 24)
    );
    setClickCount(Number(result));
    console.log(result);
    return result;
  };

  useEffect(() => {
    const ShowDates = () => {
      const counts = Math.floor(
        Math.abs(Number(endDate) - Number(startDate)) / (1000 * 60 * 60 * 24)
      );
      console.log(counts);
      setCount(Number(counts));
    };
    ShowDates();
  }, [startDate, endDate]);

  return (
    <>
      <Calendar />
      <h2>Start Date</h2>
      <DatePicker
        selected={startDate}
        onChange={onChangeStartDate}
        isClearable
        // dateFormat="MMM dd"
        monthsShown={2}
      />
      <div>===============================================================</div>
      <h2>End Date</h2>
      <DatePicker
        selected={endDate}
        onChange={onChangeEndDate}
        isClearable
        withPortal
      />
      <div>===============================================================</div>
      <DatePicker
        selected={startDate}
        onChange={onChangeDateRange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        minDate={new Date()}
        monthsShown={2}
      />
      <div>===============================================================</div>
      <h2>Count how many days</h2>
      <button onClick={onClickCountDays}>Count Days</button>
      <div>CLICKCOUNT: {clickCount}</div>
      <div>COUNT: {count}</div>
    </>
  );
};
export default CalendarPage;
