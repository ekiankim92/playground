import Commons from "../../src/unit/commons/commons.container";
import SubmitButton from "../../src/commons/buttons/buttons01";
import Button02 from "../../src/commons/buttons/buttons02";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
`;

const onClickAlert = () => {
  alert("testing");
};

const onChangeAlert = () => {
  alert("second testing");
};

const CommonsPage = (props) => {
  return (
    <Wrapper>
      <Commons />
      <SubmitButton
        color="blue"
        width="360px"
        height="160px"
        text="this is the buttons"
        borderRadius="22px"
        onPress={onClickAlert}
        backgroundColor="red"
      />
      <Button02
        width="260px"
        height="60px"
        borderRadius="12px"
        color="lightcoral"
        around="12px"
        change={onChangeAlert}
      />
    </Wrapper>
  );
};
export default CommonsPage;
