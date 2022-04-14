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
