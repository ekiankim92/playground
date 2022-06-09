import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Connect = styled.div`
  text-align: center;
  font-size: 16px;
  width: 100%;
  height: 24px;
  /* border: 1px solid #000; */
  /* border-width: 12px; */
  :hover {
    cursor: pointer;
  }
`;

const Chatbot = styled(ChatBot)`
  /* margin: 240px auto; */
  /* padding: 12px; */
  /* text-align: center; */
  /* width: 1200px; */
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChatBotPage = () => {
  const route = useRouter();

  const onClickRoute = () => {
    route.push("./groupcode");
  };

  const config = {
    width: "400px",
    height: "500px",
    floating: true,
  };

  //   const steps = [
  //     {
  //       id: "0",
  //       message: "Welcome to the page!",
  //       trigger: 1,
  //     },
  //     {
  //       id: "1",
  //       message: "Curious about my website? Press start button to get started!",
  //       trigger: 2,
  //     },
  //     {
  //       id: "2",
  //       options: [{ value: 1, label: "Click here to get started", trigger: 3 }],
  //     },
  //     {
  //       id: "3",
  //       message: "Make sure the blog and the app is connected",
  //       trigger: 4,
  //     },
  //     {
  //       id: "4",
  //       component: (
  //         <div>
  //           <Back>Back</Back>
  //           <Connect>Connect</Connect>
  //         </div>
  //       ),
  //       end: true,
  //     },
  //   ];

  //   const theme = {
  //     background: "#f5f8fb",
  //     headerBgColor: "#EF6C00",
  //     headerFontColor: "#fff",
  //     headerFontSize: "16px",
  //     botBubbleColor: "#fff",
  //     userFontColor: "#4a4a4a",
  //   };

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
    // {
    //   id: "4",
    //   options: [
    //     { value: 1, label: "View course" },
    //     { value: 2, label: "Read Articles" },
    //   ],
    //   trigger: "5"
    // },
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
      <ThemeProvider theme={theme}>
        <Chatbot
          steps={steps}
          //   hideHeader={true}
          hideHeader={false}
          //   placeholder="Chat not available"
          {...config}
        />
      </ThemeProvider>
    </>
  );
};
export default ChatBotPage;
