import styled from "@emotion/styled";
import { useState } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";

const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid #000;
  margin: 60px auto;
`;

const GroupdCodeInput = styled.input`
  width: 280px;
  height: 50px;
`;

const GroupdCodeGenerator = styled.input`
  width: 180px;
  height: 50px;
  color: #fff;
  background-color: #000;
  :hover {
    cursor: pointer;
    /* font-weight: 600; */
    opacity: 0.8;
  }
`;

const QuestionMark = styled.span`
  color: #fff;
  background-color: #000;
  border-radius: 16px;
  :hover {
    cursor: pointer;
  }
`;

const GroupCodePage = () => {
  const [code, setCode] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onClickGenerator = () => {
    // const possible = "abcdefghijklmnopqrstuvwxyz123456789";
    // const groupCode = String(Math.random() * possible.length);
    // setCode(groupCode);
    // console.log("groupdCode:", groupCode);
    // console.log(code);
    let rndText = "";
    const possible = "abcdefghijklmnopqrstuvwxyz123456789";
    for (let i = 0; i < 4; i++)
      rndText += possible.charAt(Math.floor(Math.random() * possible.length));
    setCode(rndText);

    // const result = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  return (
    <Wrapper>
      <div>Other Options</div>
      <GroupdCodeInput
        type="text"
        placeholder="Please enter your group code"
        value={code}
        readOnly
      />
      <GroupdCodeGenerator
        type="button"
        value="Generate Group Code"
        onClick={onClickGenerator}
      />
      <div>What is Group Code?</div>
      <QuestionMark onClick={showModal}>??</QuestionMark>
      <Modal
        title="What is Group Code?"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          인근의 일행과 같은 차량을 이용하려면, 그룹 코드를 입력하고 일행에게
          알려주세요
        </div>
      </Modal>
    </Wrapper>
  );
};
export default GroupCodePage;
