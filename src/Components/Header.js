import {
  Container,
  Nav,
  Navbar,
  FormControl,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartState } from "../context/GlobalContext";
import "./styles.css";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    filterDispatch,
  } = CartState();

  // console.log(CartState());

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 100 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">HOME</Link>
        </Navbar.Brand>
        <FormControl
          className="m-auto"
          style={{ width: 500 }}
          type="text"
          placeholder="Search here the product you want"
          onChange={(e) => {
            filterDispatch({
              type: "FILTER_BY_SEARCH",
              payload: e.target.value,
            });
          }}
        />

        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{ minWidth: 370 }}
              className="dropdown-menu-right"
            >
              {cart.length > 0 ? (
                <>
                  {cart.map((item) => (
                    <span className="cart-item" key={item.id}>
                      <img
                        className="cartItemImg"
                        src={item.image}
                        alt="item"
                      />
                      <div className="cartItemDetail">
                        <span>{item.title}</span>
                        <span>₹ {Math.round(item.price)}</span>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer", color: "#dc3545" }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: item,
                            })
                          }
                        />
                      </div>
                    </span>
                  ))}
                  {cart.length > 0 ? (
                    <Link to="/cart">
                      <Button style={{ width: "95%", margin: "0 10px" }}>
                        Go To Cart
                      </Button>
                    </Link>
                  ) : null}
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
