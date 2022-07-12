import { useState } from "react";
import TabsUI from "./tabs.presenter";

const basicList = [
  {
    reservation: "200511121317142_R8C9",
    name: "김은국",
    amount: 74100,
    payment: "네이버페이",
    coupon: "BUXINPBG00000000",
  },
  {
    reservation: "200511123515796_4ZZP",
    name: "노은정",
    amount: 54800,
    payment: "네이버페이",
    coupon: "BUXINPBG00000000",
  },
  {
    reservation: "200511145429129_VYAH",
    name: "박철수",
    amount: 0,
    payment: "네이버페이",
    coupon: "BUXINPBG00000000",
  },
  {
    reservation: "200513103650948_R6DQ",
    name: "안영희",
    amount: 100000,
    payment: "네이버페이",
    coupon: "BUXINPBG00000000",
  },
  {
    reservation: "200513105119081_DRWP",
    name: "최현제",
    amount: 117000,
    payment: "네이버페이",
    coupon: "BUXINPBG00000000",
  },
];

const smartList = [
  {
    reservation: "200507175115771_PWTD",
    name: "최은국",
    amount: 0,
    payment: "토스페이",
    coupon: "BUXINPSG00000000",
  },
  {
    reservation: "200507160307667_KB4R",
    name: "마이클 로스",
    amount: 65500,
    payment: "토스페이",
    coupon: "BUXINPSG00000000",
  },
  {
    reservation: "200507161116900_VEEE",
    name: "밥 딜런",
    amount: 43500,
    payment: "네이버페이",
    coupon: "BUXINPSG00000000",
  },
  {
    reservation: "200507173525811_SFBP",
    name: "이지영",
    amount: 96200,
    payment: "네이버페이",
    coupon: "BUXINPSG00000000",
  },
  {
    reservation: "200507170047986_UF2F",
    name: "송민호",
    amount: 78200,
    payment: "토스페이",
    coupon: "BUXINPSG00000000",
  },
];

const goldList = [
  {
    reservation: "200508105108281_AH5P",
    name: "임제니",
    amount: 132000,
    payment: "네이버페이",
    coupon: "BUXINPGG00000000",
  },
  {
    reservation: "200508115708093_NBJ3",
    name: "김태연",
    amount: 238500,
    payment: "네이버페이",
    coupon: "BUXINPGG00000000",
  },
  {
    reservation: "200508142720250_WWFV",
    name: "이유리",
    amount: 83200,
    payment: "토스페이",
    coupon: "BUXINPGG00000000",
  },
  {
    reservation: "200508112048162_9S2V",
    name: "이홍기",
    amount: 78100,
    payment: "토스페이",
    coupon: "BUXINPGG00000000",
  },
  {
    reservation: "200508141209156_GSJZ",
    name: "임재범",
    amount: 11400,
    payment: "네이버페이",
    coupon: "BUXINPGG00000000",
  },
];

export default function Tabs() {
  // Naver Trip Basic, Naver Trip Smart, Naver Trip Gold
  // NAVERPAY00000000
  // NAVERPAY00000011
  // BUXINPBG00000000 Basic
  // BUXINPSG00000000 Smart
  // BUXINPGG00000000 Gold

  const [isBasic, setIsBasic] = useState<boolean>(false);
  const [isSmart, setIsSmart] = useState<boolean>(false);
  const [isGold, setIsGold] = useState<boolean>(false);

  return <TabsUI />;
}
