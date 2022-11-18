import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  margin: 60px auto;
  border: 1px solid #d3d3d3;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 500px;
  height: 40px;
`;

export const FirstNameLabel = styled.label`
  font-size: 18px;
  width: 57%;
`;

export const LastNameLabel = styled.label`
  font-size: 18px;
  width: 43%;
`;

export const NameWrapper = styled.div`
  width: 500px;
  height: 80px;
`;

export const FirstNameInput = styled.input`
  width: 260px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 16px;
  :focus {
    outline: none;
    border-bottom: 1px solid #000;
  }
`;

export const LastNameInput = styled.input`
  width: 200px;
  height: 40px;
  margin-left: 24px;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 16px;
  :focus {
    outline: none;
    border-bottom: 1px solid #000;
  }
`;

export const EmailWrapper = styled.div`
  width: 500px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const EmailLabel = styled.label`
  font-size: 18px;
`;

export const EmailInput = styled.input`
  width: 260px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 16px;
  :focus {
    outline: none;
    border-bottom: 1px solid #000;
  }
`;

export const PasswordWrapper = styled.div`
  width: 500px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const PasswordLabel = styled.label`
  font-size: 18px;
`;

export const PasswordInput = styled.input`
  width: 260px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 16px;
  :focus {
    outline: none;
    border-bottom: 1px solid #000;
  }
`;

export const PassConfirmWrapper = styled.div`
  width: 500px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const ConfirmPassLabel = styled.label`
  font-size: 18px;
`;

export const ConfirmPassInput = styled.input`
  width: 260px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 16px;
  :focus {
    outline: none;
    border-bottom: 1px solid #000;
  }
`;

export const ButtonWrapper = styled.div`
  width: 400px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 300px;
  height: 40px;
  border: none;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: #ffcccb;
`;
