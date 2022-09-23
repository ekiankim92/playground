import {
  Wrapper,
  ReactCalendar,
  CalendarWrapper,
  Input,
  Submit,
} from "./calendar.styles";
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
        setEvents((prev) => [...prev, { start, end, title }]);
      }
    },
    [setEvents]
  );

  const onHandleSelectSlot = () => {
    const { title, start, end } = inputs;

    const store = setEvents([...events, { title, start, end }]);
    const list = localStorage.setItem("dates", JSON.stringify(store));
    setEvents([list]);
  };

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

  //   const addNewEvents = () => {
  //     const { title, start, end } = inputs;
  //     const newEvents = [
  //       {
  //         title,
  //         start,
  //         end,
  //       },
  //     ];
  //     localStorage.setItem("mainEvents", JSON.stringify(newEvents));
  //   };

  const addNewEvents = useCallback(({ start, end, title }) => {
    const newEvents = [
      {
        title,
        start,
        end,
      },
    ];
    const result = window.prompt("Add events");
    if (result) {
      // prettier-ignore
      const local = [localStorage.setItem("newDates", JSON.stringify(newEvents))]
      setEvents((prev) => [...prev, { start, end, title }, ...local]);
      console.log("local:", local);
    }
  }, []);

  //   useEffect(() => {
  //     const { start, end, title } = inputs;
  //     addNewEvents({ start, end, title });
  //   }, []);

  const onClickSubmit = (event) => {
    event.preventDefault();
    return onHandleSelectSlot();
  };

  const onSelectEvent = () => {
    alert("select event");
  };

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
          <Submit onClick={onClickSubmit}>Submit</Submit>
          <ReactCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            onSelectSlot={addNewEvents}
            onSelectEvent={onSelectEvent}
            onCreateOrEdit={""}
            selectable={true}
          />
        </CalendarWrapper>
      </Wrapper>
    </>
  );
}
