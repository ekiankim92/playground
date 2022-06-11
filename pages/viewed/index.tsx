import View from "../../src/unit/viewed/viewed.container";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 800px;
  height: 400px;
`;

const FirstButton = styled.button`
  width: 200px;
  height: 60px;
  margin: 20px;
`;

const SecondButton = styled.button`
  width: 200px;
  height: 60px;
  margin: 20px;
`;

const ThirdButton = styled.button`
  width: 200px;
  height: 60px;
  margin: 20px;
`;

const ViewPage = () => {
  const FirstTest = () => {
    alert("this is the first test");
  };

  const SecondTest = () => {
    alert("this is the second test");
  };

  const ThirdTest = () => {
    alert("this is the third test");
  };

  const FourthTest = (id) => (event) => {
    // const id = 1234;
    console.log("id:", id);
  };

  return (
    <>
      <Wrapper>
        <div>This is the testing area</div>
        <FirstButton onClick={FirstTest}>1st type button</FirstButton>
        <SecondButton onClick={() => SecondTest()}>
          2nd type button
        </SecondButton>
        <ThirdButton onClick={() => ThirdTest}>3nd type button</ThirdButton>
        <button onClick={() => FourthTest(id)}>4th type button</button>
      </Wrapper>
      <div>
        =======================================================================================================
      </div>
      <View />
    </>
  );
};
export default ViewPage;
