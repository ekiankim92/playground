import { useState } from "react";
import TabsUI from "./tabs.presenter";

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
