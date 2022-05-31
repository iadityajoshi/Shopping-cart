import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Rating from "../Rating";
import "./style.css";

const Filters = () => {
  const [rate, setRate] = useState(0);

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
        />
      </span>
      <span className="filter-element">
        <Form.Check
        inline
          type="radio"
          id={`inline-2`}
          label="Descending"
          name="group1"
        />
      </span>
      <span>
        <Form.Check
        inline
          type="checkbox"
          id={`inline-3`}
          label="Include out of Stock"
          name="group1"
        />
      </span>
      <span className="filter-element">
        <Form.Check
        inline
          type="checkbox"
          id={`inline-4`}
          label="Fast Delivery Only"
          name="group1"
        />
      </span>
      <span className="filter-element">
        <label style={{ paddingRight: 10 }}>Rating : </label>
        <Rating
          rating={rate}
          onClick={(i) => setRate(i + 1)}
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button variant="light">Clear Filters</Button>
    </div>
  );
};

export default Filters;
