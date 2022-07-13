import * as S from "./tabs.styles";
import BuxiHeaders from "../../commons/headers/buxi-headers";
import { PropsTabsUIItems } from "./tabs.types";

export default function TabsUIItems(props: PropsTabsUIItems) {
  return (
    <>
      <S.Container>
        <S.Title>네이버 여행 현황 조회</S.Title>
        <S.TabWrapper>
          <S.BasicTab onClick={props.onClickBasic} isBasic={props.isBasic}>
            Basic
          </S.BasicTab>
          <S.SmartTab onClick={props.onClickSmart} isSmart={props.isSmart}>
            Smart
          </S.SmartTab>
          <S.GoldTab onClick={props.onClickGold} isGold={props.isGold}>
            Gold
          </S.GoldTab>
          <S.AllTab onClick={props.onClickAll} isAll={props.isAll}>
            All
          </S.AllTab>
        </S.TabWrapper>
      </S.Container>
      <BuxiHeaders />
      {props.isBasic && (
        <S.Section>
          {props.basicList.map((el: any, index: number) => (
            <>
              <S.DataTable key={index}>
                <S.TableRow>
                  <S.TableNumber>{index + 1}</S.TableNumber>
                  <S.TableReservation>{el.reservation}</S.TableReservation>
                  <S.TableName>{el.name}</S.TableName>
                  <S.TableAmount>{el.amount}</S.TableAmount>
                  <S.TablePayment>{el.payment}</S.TablePayment>
                </S.TableRow>
              </S.DataTable>
            </>
          ))}
        </S.Section>
      )}
      {props.isSmart && (
        <S.Section>
          {props.smartList.map((el: any, index: number) => (
            <>
              <S.DataTable key={index}>
                <S.TableRow>
                  <S.TableNumber>{index + 1}</S.TableNumber>
                  <S.TableReservation>{el.reservation}</S.TableReservation>
                  <S.TableName>{el.name}</S.TableName>
                  <S.TableAmount>{el.amount}</S.TableAmount>
                  <S.TablePayment>{el.payment}</S.TablePayment>
                </S.TableRow>
              </S.DataTable>
            </>
          ))}
        </S.Section>
      )}
      {props.isGold && (
        <S.Section>
          {props.goldList.map((el: any, index: number) => (
            <>
              <S.DataTable key={index}>
                <S.TableRow>
                  <S.TableNumber>{index + 1}</S.TableNumber>
                  <S.TableReservation>{el.reservation}</S.TableReservation>
                  <S.TableName>{el.name}</S.TableName>
                  <S.TableAmount>{el.amount}</S.TableAmount>
                  <S.TablePayment>{el.payment}</S.TablePayment>
                </S.TableRow>
              </S.DataTable>
            </>
          ))}
        </S.Section>
      )}
      {props.isAll && (
        <S.Section>
          {props.allList.map((el: any, index: number) => (
            <>
              <S.DataTable key={index}>
                <S.TableRow>
                  <S.TableNumber>{index + 1}</S.TableNumber>
                  <S.TableReservation>{el.reservation}</S.TableReservation>
                  <S.TableName>{el.name}</S.TableName>
                  <S.TableAmount>{el.amount}</S.TableAmount>
                  <S.TablePayment>{el.payment}</S.TablePayment>
                </S.TableRow>
              </S.DataTable>
            </>
          ))}
        </S.Section>
      )}
    </>
  );
}
