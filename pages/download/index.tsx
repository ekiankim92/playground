import styled from "@emotion/styled";
import { useState } from "react";

const ButtonWrapper = styled.div`
  width: 200px;
  height: 62px;
  box-shadow: 12px 12px 10px gray;
  margin-left: 40px;
`;

const Button = styled.button`
  width: 200px;
  height: 62px;
  border: none;
  :active {
    transform: translate(8px, 8px);
  }
  :hover {
    cursor: pointer;
  }
`;

const Anchor = styled.a`
  background: green;
  margin: 20px;
`;

const LangWrapper = styled.div`
  width: 500px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 40px;
`;

const Label = styled.div`
  width: 200px;
  height: 60px;
  border: 1px solid #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    opacity: 0.4;
    cursor: pointer;
  }
`;

export default function Download() {
  const [id, setId] = useState("");

  const onClickLang = (event) => {
    setId(event.target.id);
    console.log("id:", event.target.id);
  };

  const onClickDownload = (event) => {
    // event.preventDefault();
    if (!id) alert("please select the language");
  };

  return (
    <>
      <div>Download</div>
      <LangWrapper>
        <Label id="ENG" onClick={onClickLang}>
          English Version
        </Label>
        <Label id="KOR" onClick={onClickLang}>
          Korean Version
        </Label>
        <Label id="JAP" onClick={onClickLang}>
          Japanese Version
        </Label>
      </LangWrapper>
      <Anchor href={`pdf/${id}.pdf`} download>
        <ButtonWrapper>
          <Button className={`download_${id}`} onClick={onClickDownload}>
            {id} Download
          </Button>
        </ButtonWrapper>
      </Anchor>
    </>
  );
}
