import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  margin: 60px auto;
  background-color: #eee;
`;

export const Title = styled.h2`
  text-align: center;
  padding-top: 10px;
`;

export const UserWrapper = styled.section`
  width: 700px;
  height: 700px;
  background-color: #fff;
  margin: 0px auto;
`;

export const RequiredInfo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 640px;
  height: 30px;
  padding: 4px;
  font-size: 12px;
  color: #ff7f7f;
`;

export const Asterix = styled.span`
  color: #ff7f7f;
`;

export const NameWrapper = styled.form`
  display: flex;
  align-items: center;
`;

export const Name = styled.label`
  width: 10%;
  margin: 22px;
  font-size: 20px;
`;

export const NameInput = styled.input`
  font-size: 20px;
  width: 400px;
  border: none;
  border-bottom: 1px solid #d3d3d3;
  :focus {
    outline: none;
    border-bottom: 1px solid #000;
  }
  ::placeholder {
    opacity: 0.3;
  }
`;

export const CancelImg = styled.img`
  width: 14px;
  height: 14px;
`;

export const CancelBtn = styled.button`
  border: none;
  position: relative;
  right: 30px;
  background-color: #fff;
  /* background-color: green; */
`;

export const EmailWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Email = styled.label`
  width: 10%;
  margin: 22px;
  font-size: 20px;
`;

export const EmailInput = styled.input`
  font-size: 20px;
  width: 400px;
  border: none;
  border-bottom: 1px solid #d3d3d3;
  :focus {
    outline: none;
    border-bottom: 1px solid #000;
  }
  ::placeholder {
    opacity: 0.3;
  }
`;
