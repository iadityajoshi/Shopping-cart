import React from "react";
import { CartState } from "../../context/GlobalContext";
import SingleProduct from "../SingleProduct";
import "./styles.css";
import Filters from "../Filter/Filters";

const Home = () => {
  const {
    state: { products },
    filterState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();
  // console.log(products);

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => Math.round(prod.rating.rate) >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((item) => (
          <SingleProduct prod={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
