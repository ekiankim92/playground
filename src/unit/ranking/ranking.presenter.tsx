import * as S from "./ranking.styles";
import { v4 as uuid4 } from "uuid";
import { PropsRanking } from "./ranking.types";

export default function RankingUI(props: PropsRanking) {
  return (
    <>
      <S.Wrapper>
        <S.Title>Ranking Page</S.Title>
        <S.RankListOuterWrapper>
          {props.rankList.map((el: any, index: number) => (
            <S.RankListWrapper
              key={uuid4()}
              onClick={props.onClickDetail(el.id)}
            >
              <div>{index + 1}</div>
              <div>{el.name}</div>
            </S.RankListWrapper>
          ))}
        </S.RankListOuterWrapper>
        <S.SuzyWrapper onClick={props.onClickDetailedSuzy}>
          <div>Suzy</div>
        </S.SuzyWrapper>
        <S.IUWrapper onClick={props.onClickDetailedIU}>
          <div>IU</div>
        </S.IUWrapper>
        {props.newList.map((el: any, index: number) => (
          <div key={uuid4()}>
            <div>{index + 1}</div>
            <div>{el.name}</div>
          </div>
        ))}
      </S.Wrapper>
    </>
  );
}
