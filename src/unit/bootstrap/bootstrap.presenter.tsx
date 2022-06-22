import * as S from "./bootstrap.styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Pagination } from "react-bootstrap";

export default function BootStrapUI() {
  const active = 2;
  const items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <S.Wrapper>
      <S.Title>Bootstrap Practice</S.Title>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Book Name</th>
            <th>Rent Date</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2} style={{ textAlign: "center" }}>
              Larry the Bird
            </td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <S.Paginations>{items}</S.Paginations>
    </S.Wrapper>
  );
}
