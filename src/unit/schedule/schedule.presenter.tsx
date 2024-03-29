import * as S from "./schedule.styles";
import { momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/ko";

export default function ScheduleUI(props) {
  const localizer = momentLocalizer(moment);
  console.log("localizer:", localizer);

  return (
    <S.Wrapper>
      <S.ScheduleCalendar
        localizer={localizer}
        events={props.events}
        startAccessor="start"
        endAccessor="end"
        selectable={true}
        views={["month", "week", "day"]}
        defaultDate={props.defaultDate}
        onSelectSlot={props.handleSelectSlot}
        onSelectEvent={props.onClickRemoveEvent}
        scrollToTime={props.scrollToTime}
      />
    </S.Wrapper>
  );
}
