import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/GlobalContext";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card style={{ width: "100%", height: 415, margin: 10 }}>
        <Card.Img
          style={{ height: "52%", width: "100%" }}
          variant="top"
          src={prod.image}
          alt={prod.title}
        />
        <Card.Body
        // style={{ padding:10, maxHeight: 250}}
        >
          <div
            style={{
              overflowX: "hidden",
              overflowY: "auto",
              width: "100%",
              height: 50,
              marginBottom: 10,
            }}
          >
            <Card.Title>{prod.title}</Card.Title>
          </div>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>Standard Delivery</div>
            )}
            <Rating rating={Math.round(prod.rating.rate)} />
          </Card.Subtitle>
          {cart.some((item) => item.id === prod.id) ? (
            <Button variant="danger"
            onClick= {()=> dispatch({type: 'REMOVE_FROM_CART', payload: prod}) } >
              Remove from cart</Button>
          ) : (
            <Button variant="primary" disabled={!prod.inStock} 
            onClick= {()=> dispatch({type: 'ADD_TO_CART', payload: prod}) }  >
              {!prod.inStock ? "Out of stock" : "Add to cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
