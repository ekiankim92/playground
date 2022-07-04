import styled from "@emotion/styled";

interface PropsItems {
  el?: any;
  index?: number;
}

const ListName = styled.div`
  background-color: #ededed;
  width: 320px;
`;

export default function ProductItems(props: PropsItems) {
  console.log("el:", props.el);
  console.log("props.el.name:", props.el.name);
  console.log("props.el.price:", props.el.price);
  console.log(props.el.stocked);

  if (props.el.stocked === false) {
    console.log("there is no stock!");
  }

  return (
    <>
      <div>{props.el.category}</div>
      <ListName>{props.el.name}</ListName>
      <div>{props.el.price}</div>
      <hr />
    </>
  );
}
