import {
  Wrapper,
  ReactCalendar,
  CalendarWrapper,
  Input,
  Submit,
} from "../calendar.styles";
import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useCallback, useEffect, useState } from "react";

export default function CalenderUI() {
  const localizer = momentLocalizer(moment);

  const [inputs, setInputs] = useState({
    title: "",
    start: "",
    end: "",
  });

  const [events, setEvents] = useState<any[]>([]);

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const title = window.prompt("일정 적기");
      if (title) {
        const list = [setEvents((prev) => [...prev, { start, end, title }])];
        // prettier-ignore'
        let newList = [
          localStorage.setItem("dates", JSON.stringify({ start, end, title })),
        ];
        setEvents([list, ...newList]);
      }
      console.log("events:", events);
    },
    [setEvents]
  );

  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    console.log("event.target.value:", event.target.value);
  };

  const mainEvents = [
    {
      title: "first event",
      start: new Date("2022-09-21"),
      end: new Date("2022-09-21"),
    },
    {
      title: "second event",
      start: "2022-09-22",
      end: "2022-09-22",
    },
  ];

  return (
    <>
      <Wrapper>
        <CalendarWrapper>
          <Input placeholder="title" onChange={onChangeInputs} name="title" />
          <Input
            placeholder="start: yyyy-mm-dd"
            onChange={onChangeInputs}
            name="start"
          />
          <Input
            placeholder="end: yyyy-mm-dd"
            onChange={onChangeInputs}
            name="end"
          />
          <Submit>Submit</Submit>
          <ReactCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            onSelectSlot={handleSelectSlot}
            onSelectEvent={""}
            onCreateOrEdit={""}
            selectable={true}
          />
        </CalendarWrapper>
      </Wrapper>
    </>
  );
}
