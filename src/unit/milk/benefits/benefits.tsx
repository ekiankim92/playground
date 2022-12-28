import * as S from "./benefits-css";
import Contribute from "./images/contribute.jpg";
import Customers from "./images/customers.jpg";
import Marketing from "./images/marketing.jpg";
import Shake from "./images/shake.jpg";

export default function Benefits() {
  const infoList = [
    {
      id: "1",
      src: String(Contribute.src),
      title: "Contribute",
      isShow: false,
    },
    {
      id: "2",
      src: String(Customers.src),
      title: "Customers",
      isShow: false,
    },
    {
      id: "3",
      src: String(Marketing.src),
      title: "Marketing",
      isShow: false,
    },
    {
      id: "4",
      src: String(Shake.src),
      title: "Hand shake",
      isShow: false,
    },
  ];

  const contributeStyle = {
    background: `linear-gradient(rgba(250,250,250,0.3), rgba(250,250,250,0.6)), url(${Contribute.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const customerStyle = {
    background: `linear-gradient(rgba(250,250,250,0.3), rgba(250,250,250,0.6)), url(${Customers.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const marketingStyle = {
    background: `linear-gradient(rgba(250,250,250,0.3), rgba(250,250,250,0.6)), url(${Marketing.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const shakeStyle = {
    background: `linear-gradient(rgba(250,250,250,0.3), rgba(250,250,250,0.6)), url(${Shake.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <S.Wrapper>
      <h1>Benefits for companies</h1>
      <h2>In BAGO alliance</h2>
      <S.InfoWrapper>
        {infoList.map((el) => (
          <S.ImgWrapper key={el.id}>
            <S.Img src={el.src} />
          </S.ImgWrapper>
        ))}
      </S.InfoWrapper>
      <S.SecondWrapper>
        <S.Contribute style={contributeStyle}>
          <S.Title>Incentives for Contribution</S.Title>
          <p>
            Reduces user-acquisition cost by sharing the customer pool among the
            aligned service companies
          </p>
        </S.Contribute>
        <S.Customers style={customerStyle}>
          <S.Title>Customer Pool Sharing</S.Title>
          <p>
            This is part of the customers where people will connect with one
            another
          </p>
        </S.Customers>
        <S.Marketing style={marketingStyle}>
          <S.Title>Effective Marketing</S.Title>
          <p>Markting will prevail through the companies core value</p>
        </S.Marketing>
        <S.Shake style={shakeStyle}>
          <S.Title>Global Partnership</S.Title>
          <p>Other companies will come together with sharing one common goal</p>
        </S.Shake>
      </S.SecondWrapper>
      <S.BoxWrapper>
        <S.Test1>BOX 1</S.Test1>
        <S.Test2>BOX 2</S.Test2>
      </S.BoxWrapper>
    </S.Wrapper>
  );
}
