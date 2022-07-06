import { ChangeEvent, useEffect, useRef, useState, KeyboardEvent } from "react";
import * as S from "./products.styles";
import _ from "lodash";

export default function Products() {
  const product = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball",
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball",
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch",
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5",
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7",
    },
  ];

  const [isSold, setIsSold] = useState<boolean>(false);

  const [isFiltered, setIsFiltered] = useState([]);
  const [isElectronics, setIsElectronics] = useState([]);
  const [isProduct, setIsProduct] = useState([]);

  const onFocusRef = useRef(null);

  const [search, setSearch] = useState<string>("");

  const newElectronics = product.filter((el) =>
    el.category.includes("Electronics")
  );

  const newSportingGoods = product.filter((el) =>
    el.category.includes("Sporting Goods")
  );

  const sportingFilter = newSportingGoods.filter((el) => el.stocked === true);
  const electronicsFilter = newElectronics.filter((el) => el.stocked === true);

  const sportingFilterFalse = newSportingGoods.filter(
    (el) => el.stocked === false
  );

  useEffect(() => {
    setIsFiltered(sportingFilter);
    setIsElectronics(electronicsFilter);
    setIsProduct(productFilter);
    onFocusRef.current.focus();
  }, [search]);

  const onChangeCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
    if (event.target.checked === true) {
      setIsSold(true);
    } else {
      setIsSold(false);
    }
  };

  const onChangeInput = _.debounce((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  }, 400);

  const onPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearch(event.currentTarget.value);
    }
  };

  const productFilter = product.filter(
    (el) => String(el.name) === String(search)
  );

  console.log("sportingFilter:", sportingFilter);

  console.log("sportingFilterFalse:", sportingFilterFalse);

  console.log("electronicsFilter:", electronicsFilter);

  return (
    <S.Wrapper>
      <S.Title>Product Lists</S.Title>
      <S.SearchInput
        placeholder="Search.."
        onChange={onChangeInput}
        ref={onFocusRef}
        onKeyPress={onPress}
      />
      <S.CheckboxWrapper>
        <input type="checkbox" onChange={onChangeCheckBox} />
        <label>Only show products in stock</label>
      </S.CheckboxWrapper>
      <S.TitleWrapper>
        <h3>Name</h3>
        <h3>Price</h3>
      </S.TitleWrapper>
      {isSold ? (
        <>
          {isFiltered.map((el: any, index) => (
            <S.NewSportingGoodWrapper key={index}>
              {/* <div>{el.category}</div> */}
              <S.NewSportingGoods>{el.name}</S.NewSportingGoods>
              <div>{el.price}</div>
            </S.NewSportingGoodWrapper>
          ))}
        </>
      ) : (
        <>
          {newSportingGoods.map((el, index) => (
            <S.NewSportingGoodWrapper key={index}>
              {/* <div>{el.category}</div> */}
              <S.NewSportingGoods>{el.name}</S.NewSportingGoods>
              <div>{el.price}</div>
            </S.NewSportingGoodWrapper>
          ))}
        </>
      )}
      {isSold ? (
        isElectronics.map((el: any, index) => (
          <S.NewElectronicsWrapper key={index}>
            {/* <div>{el.category}</div> */}
            <div>{el.name}</div>
            <div>{el.price}</div>
          </S.NewElectronicsWrapper>
        ))
      ) : (
        <>
          {newElectronics.map((el, index) => (
            <S.NewElectronicsWrapper key={index}>
              {/* <div>{el.category}</div> */}
              <div>{el.name}</div>
              <div>{el.price}</div>
            </S.NewElectronicsWrapper>
          ))}
        </>
      )}
      <div>Searched Item</div>
      {isProduct.map((el, index) => (
        <div key={index}>
          <div>{el.name}</div>
          <div>{el.price}</div>
        </div>
      ))}
    </S.Wrapper>
  );
}
