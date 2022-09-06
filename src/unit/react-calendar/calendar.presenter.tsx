import * as S from "./calendar.styles";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarUI(props) {
  return (
    <S.Wrapper>
      <div>Calendar Pages</div>
      <Calendar
        onChange={props.setValue}
        value={props.value}
        onClickDay={props.onClickList}
      />
      {/* {new Array(10).fill(1).map((el, index) => (
        <div key={el}>
          <div style={{ padding: "8px" }}>{index + 1}</div>
        </div>
      ))} */}
      {props.list?.map((el, index) => (
        <div key={index}>
          <div>{el}</div>
        </div>
      ))}
      <S.Input onChange={props.onChangeInput} />
      <S.Button onClick={props.onClickAdd}>Add Storage</S.Button>
      <hr />
      <hr />
      <hr />
      {props.inputsList?.map((el, index) => (
        <div key={index}>
          <div>{el}</div>
        </div>
      ))}
    </S.Wrapper>
  );
}
