import TabsUIItems from "./tabs.presenterItem";
import { PropsTabsUI } from "./tabs.types";

export default function TabsUI(props: PropsTabsUI) {
  return (
    <TabsUIItems
      basicList={props.basicList}
      isBasic={props.isBasic}
      onClickBasic={props.onClickBasic}
      onClickSmart={props.onClickSmart}
      onClickGold={props.onClickGold}
      onClickAll={props.onClickAll}
      isSmart={props.isSmart}
      smartList={props.smartList}
      isGold={props.isGold}
      goldList={props.goldList}
      allList={props.allList}
      isAll={props.isAll}
    />
  );
}
