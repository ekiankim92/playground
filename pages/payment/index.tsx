import Head from "next/head";
import styled from "@emotion/styled";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import _ from "lodash";
import { useRouter } from "next/router";
// import { useEffect } from "react";

const Wrapper = styled.div`
  width: 800px;
  height: 800px;
  border: 1px solid #000;
  margin: 60px auto;
`;

export default function ImportPage() {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(0);

  const router = useRouter();

  //   const IMP = window.IMP;
  //   IMP.init("imp34808923");
  // if (typeof window !== "undefined") {
  //     console.log("you are on the browser");
  //   } else {
  //     console.log("you are on the server");
  //   }
  //   console.log(window.location.hostname);
  //   console.log(window.location.host);

  //   const onClickPayment = () => {};
  //   const { IMP } = window;
  //   IMP.init("imp34808923");

  //   const onClickPayment = () => {
  //     const IMP = window.IMP;
  //     IMP.init("imp34808923");
  //     IMP.request_pay(
  //       {
  //         pg: "html5_inicis",
  //         pay_method: "card",
  //         merchant_uid: "ORD20180131-0000011",
  //         name: "노르웨이 회전 의자",
  //         amount: 100,
  //         buyer_email: "gildong@gmail.com",
  //         buyer_name: "홍길동",
  //         buyer_tel: "010-4242-4242",
  //         buyer_addr: "서울특별시 강남구 신사동",
  //         buyer_postcode: "01181",
  //       },
  //       (rsp) => {
  //         if (rsp.success) {
  //           console.log(rsp);
  //         } else {
  //           console.log("payment error");
  //         }
  //       }
  //     );
  //   };

  const paymentData = {
    pg: "html5_inicis",
    pay_method: "card",
    // merchant_uid: "ORD20180131-0000011",
    name: product,
    amount: price,
    buyer_email: "gildong@gmail.com",
    buyer_name: "홍길동",
    buyer_tel: "010-4242-4242",
    buyer_addr: "서울특별시 강남구 신사동",
    buyer_postcode: "01181",
  };

  const onChangeProduct = _.debounce((event) => {
    setProduct(event.target.value);
    console.log(event.target.value);
  }, 500);

  const onChangePrice = _.debounce((event) => {
    setPrice(Number(event.target.value));
    console.log(event.target.value);
  }, 500);

  //   const onChangePrice = (event) => {
  //     setPrice(Number(event.target.value));
  //     console.log(event.target.value);
  //   };

  const callBack = (response) => {
    const { success, merchantUid, errorMsg } = response;
    if (success) {
      console.log("payment successful");
    } else {
      console.log(errorMsg);
    }
    console.log(merchantUid);
  };

  const onClickPayment = () => {
    if (!product || !price) {
      Modal.warn({ content: "상품 혹은 가격을 입력해주세요" });
      return;
    }
    if (paymentData.amount <= 10) {
      Modal.warn({ content: "가격이 10원 보다 적을수 없습니다" });
      return;
    }
    const IMP = window.IMP;
    IMP.init("imp34808923");
    IMP.request_pay({ ...paymentData, callBack }, (rsp) => {
      if (rsp.success) {
        console.log(rsp);
        Modal.success({ content: "결제하기가 되었습니다" });
      } else {
        console.log("payment error");
        Modal.error({ content: "결제가 취소되었습니다" });
        router.push("/");
        router.push("/luggage");
      }
    });
    console.log("prev of paymentData:", { ...paymentData });
    console.log("just paymentData:", paymentData);
  };

  return (
    <Wrapper>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <div>Hello World</div>
      <button onClick={onClickPayment}>Payment</button>
      <button>HELLO WORLD TESTING</button>
      <div>=========================================</div>
      상품이름: <input type="text" onChange={onChangeProduct} /> <br />
      상품가격:
      <input
        type="text"
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            alert("숫자만 입력해주세요");
            event.preventDefault();
          }
        }}
        onChange={onChangePrice}
      />
      <br />
      <button onClick={onClickPayment}>결제하기</button>
      <div>=========================================</div>
    </Wrapper>
  );
}
