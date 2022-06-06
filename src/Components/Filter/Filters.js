// import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Rating from "../Rating";
import "./style.css";
import { CartState } from "../../context/GlobalContext";

const Filters = () => {
  // const [rate, setRate] = useState(0);
  const {
    filterDispatch,
    filterState: { byStock, byFastDelivery, sort, byRating, searchQuery },
  } = CartState();

  return (
    <div className="filters">
      <h3 className="filter-title">Filter Products</h3>
      <span className="filter-element">
        <Form.Check
          inline
          type="radio"
          id={`inline-1`}
          label="Ascending"
          name="group1"
          onChange={() =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span className="filter-element">
        <Form.Check
        inline
          type="radio"
          id={`inline-2`}
          label="Descending"
          name="group1"
          onChange={() =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
        inline
          type="checkbox"
          id={`inline-3`}
          label="Include out of Stock"
          name="group1"
          onChange={() =>
            filterDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />
      </span>
      <span className="filter-element">
        <Form.Check
        inline
          type="checkbox"
          id={`inline-4`}
          label="Fast Delivery Only"
          name="group1"
          onChange={() =>
            filterDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <span className="filter-element">
        <label style={{ paddingRight: 10 }}>Rating : </label>
        <Rating
          rating={byRating}
          onClick={(i) => filterDispatch({
            type: "FILTER_BY_RATING",
            payload: i + 1,
          })}
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button variant="light"
      onClick={() =>
        filterDispatch({
          type: "CLEAR_FILTERS",
        })
      }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
