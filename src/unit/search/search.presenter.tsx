import * as S from "./search.styles";

export default function SearchPageUI(props) {
  return (
    <S.Wrapper>
      <S.SearchBarWrapper>
        <div>{"<---"}</div>
        <S.SearchInput
          type="search"
          placeholder="검색어를 입력해주세요"
          onChange={props.onClickAddKeywords}
        />
        <S.SearchImg src="/toy4.png" />
      </S.SearchBarWrapper>
      <S.HistoryWrapper>
        <S.SearchAndDeleteWrapper>
          <S.RecentSearch>최근 검색어</S.RecentSearch>
          <S.DeleteAllSearch>전체삭제</S.DeleteAllSearch>
        </S.SearchAndDeleteWrapper>
        <div>keywords here</div>
        <div>Hello World</div>
        <div>3rd search words</div>
        <div>{props.keywords}</div>
      </S.HistoryWrapper>
    </S.Wrapper>
  );
}
