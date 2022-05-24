import * as S from "./calendar.styles";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";

const { RangePicker } = DatePicker;

export default function CalendarUI() {
  const [date, setDate] = useState([]);

  const onChangeCalendar = (moment) => {
    setDate([moment]);
    console.log("moment:", moment);
    console.log(moment[0]._d);
    console.log(moment[1]._d);
    console.log("date:", date);
    const firstDate = moment[0]._d;
    const secondDate = moment[1]._d;
    console.log("firstDate:", firstDate);
    console.log("secondDate:", secondDate);
  };

  return (
    <S.Wrapper>
      <S.Title>Calendar</S.Title>
      <Space direction="vertical" size={12}>
        <RangePicker onChange={onChangeCalendar} />
      </Space>
      {date.map((el, index) => (
        <div key={index}>
          <div>{el._d}</div>
        </div>
      ))}
    </S.Wrapper>
  );
}
