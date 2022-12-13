import styled from "@emotion/styled";
import ButtonMailto from "./mailto";

const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid #000;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  border: none;
`;

export default function Email() {
  const mailto = "www.email.com";
  const label = "this is email";

  const onClickEmail = () => {
    window.location.href = `mailto: @gmail.com`;
    console.log((window.location.href = `mailto: geoidk@gmail.com`));
  };

  return (
    <>
      <div>This is emailing sections</div>
      <div>I will be sending out emails here</div>
      <ButtonMailto mailto={mailto} label={label} />
      <button onClick={onClickEmail}>Write an email</button>
      <Button>
        <a href="mailto: @gmail.com">Click to send an email!!</a>
      </Button>
    </>
  );
}
