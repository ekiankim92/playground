import { Wrapper } from "./postal.styles";
import { Modal } from "antd";
import "antd/dist/antd.css";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function PostalUI(props) {
  //   const { addressKor, addressEng, jibun, zonecode } = props.address;
  //   console.log("addresKor:", addressKor);
  //   console.log("addressEng:", addressEng);
  //   console.log("jibun:", jibun);
  //   console.log("zonecode:", zonecode);

  //   console.log("address:", props.address);

  //   console.log("props.addressKor:", props.addressKor);

  const { addressData } = props;
  //   console.log("with props addressData:", props.addressData);
  console.log("without props addressData:", addressData);
  //   console.log("addressData:", typeof props.addressData);

  return (
    <Wrapper>
      <h1>Daum Postal</h1>
      <button onClick={props.showModal}>Click Here</button>
      {props.isOpen && (
        <Modal
          title="Basic Modal"
          visible={props.isModalOpen}
          // open={props.isModalOpen}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          <DaumPostcodeEmbed onComplete={props.handleComplete} />
        </Modal>
      )}

      {/* this is normal old fashion writing down everything */}
      {/* <div>Address: {props.addressData.address}</div> */}
      {/* <div>AddressEnglish: {props.addressData.addressEnglish}</div> */}
      {/* <div>AutoJibunAddreess: {props.addressData.autoJibunAddress}</div> */}
      {/* <div>Zonecode: {props.addressData.zonecode}</div> */}

      {/* //////////////////////////////////////////////////////////////////////// */}

      {/* this is using deconstructive structuring */}
      {/* <div>Address: {addressData?.address}</div> */}
      {/* <div>AddressEnglish: {addressData?.addressEnglish}</div> */}
      {/* <div>AutoJibunAddreess: {addressData?.autoJibunAddress}</div> */}
      {/* <div>Zonecode: {addressData?.zonecode}</div> */}

      {/* //////////////////////////////////////////////////////////////////////// */}

      {/* this is mapping the data with addressData*/}
      {props.addressData.map((el, index) => (
        <div key={index}>
          <div>{el.address}</div>
          <div>{el.addressEnglish}</div>
          <div>{el.autoJibunAddress}</div>
          <div>{el.zonecode}</div>
        </div>
      ))}
    </Wrapper>
  );
}
