import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import "antd/dist/antd.css";
import { Button, Modal } from "antd";
import { useState } from "react";

const Connect = styled.div`
  text-align: center;
  font-size: 16px;
  width: 100%;
  height: 24px;
  :hover {
    cursor: pointer;
  }
`;

const Chatbot = styled(ChatBot)`
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalButton = styled(Button)`
  width: 80px;
  height: 50px;
  position: absolute;
  top: 660px;
  left: 1334px;
`;

const ChatBotPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const route = useRouter();

  const onClickRoute = () => {
    route.push("./groupcode");
  };

  const steps = [
    {
      id: "0",
      message: "Hello there!",
      trigger: "1",
    },
    {
      id: "1",
      message: "Write your name",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hello {previousValue}, how can I help you?",
      trigger: "4",
    },
    {
      id: "4",
      component: <div>View</div>,
      trigger: "5",
    },
    {
      id: "5",
      component: <Connect onClick={onClickRoute}>Connect</Connect>,
      end: true,
    },
  ];

  const theme = {
    background: "#C9FF8F",
    headerBgColor: "#197B22",
    headerFontSize: "20px",
    botBubbleColor: "#0F3789",
    headerFontColor: "white",
    botFontColor: "white",
    userBubbleColor: "#FF5733",
    userFontColor: "white",
  };

  return (
    <>
      <h2>Chatbot Practice</h2>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <ThemeProvider theme={theme}>
          <Chatbot steps={steps} hideHeader={false} />
        </ThemeProvider>
      </Modal>
      <ModalButton type="primary" onClick={showModal}>
        <img src="/more.png/" />
      </ModalButton>
    </>
  );
};
export default ChatBotPage;
