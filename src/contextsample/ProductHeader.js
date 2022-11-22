import React, { useContext } from "react";
import { FavoriteContext } from "./FavoriteProductContext";

const ProductHeader = () => {
  //bu componentte favori ürün sayısı gösterilir

  const { favorites } = useContext(FavoriteContext);
  return (
    <>
      <h1>Favorite Product Count : {favorites.length} </h1>
    </>
  );
};

export default ProductHeader;
