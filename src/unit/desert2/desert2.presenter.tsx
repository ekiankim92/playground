import DesertUIItem2 from "./desert2.presenterItem";
import { v4 as uuidv4 } from "uuid";
import { PropsDesert2 } from "./desert2.types";

export default function DesertUI2(props: PropsDesert2) {
  return (
    <>
      {props.cart.map((el: any, index: number) => (
        <DesertUIItem2
          key={uuidv4()}
          //   key={index}
          el={el}
          onClickAdd={props.onClickAdd}
          onClickRemove={props.onClickRemove}
          total={props.total}
          isTrue={props.isTrue}
          selectElement={props.selectElement}
        />
      ))}
    </>
  );
}
