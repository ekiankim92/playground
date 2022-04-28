// 오른쪽에 주어진 movies는 영화에 대한 정보가 담긴 배열 속 객체 입니다. 해당 조건에 맞는 영화들의 목록을 만들어 주세요.

const movies = [
  { title: "킹스맨", genre: "액션", 상영관: "메가박스" },
  { title: "러브레터", genre: "로맨스", 상영관: "cgv" },
  { title: "스폰지밥", genre: "코미디", 상영관: "메가박스" },
  { title: "노트북", genre: "드라마", 상영관: "cgv" },
  { title: "임파서블", genre: "액션", 상영관: "cgv" },
  { title: "파리의 인어", genre: "로맨스", 상영관: "메가박스" },
  { title: "심슨", genre: "코미디", 상영관: "메가박스" },
  { title: "포레스트 검프", genre: "드라마", 상영관: "cgv" },
];

const result = movies.filter((el) => el.genre === "액션");
console.log(result);

<div>====================================================================</div>;

// 오른쪽에 주어진 List를 낮은 가격순으로 정렬해주세요

let List = [
  { number: 1, title: "장미", price: 4000 },
  { number: 2, title: "식칼", price: 7000 },
  { number: 3, title: "슬리퍼", price: 12000 },
  { number: 4, title: "주전자", price: 5000 },
  { number: 5, title: "선풍기", price: 5700 },
  { number: 6, title: "마우스 패드", price: 1800 },
  { number: 7, title: "휴대폰 케이스", price: 5500 },
  { number: 8, title: "마우스", price: 6500 },
];

const newResult = List.sort((a, b) => a.price - b.price);
console.log(newResult);

<div>====================================================================</div>;

// 3위까지 나타내어 "현재 인기 "0" 위 과일은 "000" 입니다. 라는 문구를 나타내고 싶습니다.
