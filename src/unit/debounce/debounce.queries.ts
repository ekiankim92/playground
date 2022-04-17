import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards(
    $search: String
    $page: Int
    $startDate: DateTime
    $endDate: DateTime
  ) {
    fetchBoards(
      search: $search
      page: $page
      startDate: $startDate
      endDate: $endDate
    ) {
      _id
      writer
      title
      contents
      images
      likeCount
      dislikeCount
      images
    }
  }
`;

export const BEST_BOARDS = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      contents
    }
  }
`;

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($page: Int, $boardId: ID!) {
    fetchBoardComments(page: $page, boardId: $boardId) {
      _id
      writer
      contents
      createdAt
      rating
    }
  }
`;
