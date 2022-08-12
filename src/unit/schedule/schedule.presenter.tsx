import * as S from "./schedule.styles";
import { momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

export default function ScheduleUI(props) {
  moment.locale("en-EN");
  moment.locale("kr-KR");
  const localizer = momentLocalizer(moment);

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
