import styled from "@emotion/styled";

interface PropsItems {
  el?: any;
  index?: number;
  isSold?: boolean;
}

const ListName = styled.div`
  background-color: #ededed;
  width: 320px;
  color: ${(props: PropsItems) => (props.isSold ? "red" : "#000")};
`;

export default function ProductItems(props: PropsItems) {
  console.log("el:", props.el);
  console.log("props.el.name:", props.el.name);
  console.log("props.el.price:", props.el.price);
  console.log(props.el.stocked);

  return (
    <>
      <div>{props.el.category}</div>
      {props.el.stocked ? (
        <ListName>{props.el.name}</ListName>
      ) : (
        <ListName isSold={true}>{props.el.name}</ListName>
      )}
      <div>{props.el.price}</div>
      <hr />
    </>
  );
}
