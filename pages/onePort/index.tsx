import Head from "next/head";

export default function OnePortPayment() {
  const onClickPayment = () => {
    // this is from the 결제 준비하기
    const IMP = window.IMP; // 생략 가능
    // IMP.init("imp34808923"); // 이건 내정보에서 확인 가능. 내 식별코드
    IMP.init("imp49910675"); // 이건 멘토님 식별코드. 밤 12시전에 돈 다시 돌아옴
    // this code is from the 결제 준비하기 React.js
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "마우스",
        amount: 100,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "", // 모바일 결제후 리다이렉트 주소
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공시
          console.log(rsp);

          // createPointTransactionsOfLoading 뮤테이션 실행하기 (impUid 인자로 넘기기!)
        } else {
          // 결제 실패시
        }
      }
    );
  };

  return (
    <>
      <div>This is the new One Port changed from 아임포트</div>
      <div>Oneport is from I'mport</div>
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
      결제금액: <input type="text" />
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
