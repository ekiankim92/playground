import { useState, useCallback, useMemo } from "react";
import ScheduleUI from "./schedule.presenter";

export default function Schedule() {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const title = window.prompt("Add new events");
      if (title) {
        setEvents((prev) => [...prev, { start, end, title }]);
      }
    },
    [setEvents]
  );

  const onClickRemoveEvent = (event) => {
    console.log("event:", event);
    // const newEvents = events.splice(index, 1);
    // setEvents([...newEvents]);
    const newEvents = events.filter((el) => el.title !== event.title);
    setEvents([...newEvents, events]);
  };

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(),
      scrollToTime: new Date(2000, 1, 1, 6),
    }),
    []
  );

  return (
    <ScheduleUI
      events={events}
      handleSelectSlot={handleSelectSlot}
      defaultDate={defaultDate}
      scrollToTime={scrollToTime}
      onClickRemoveEvent={onClickRemoveEvent}
    />
  );
}
