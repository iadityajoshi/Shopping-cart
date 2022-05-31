import {
  Container,
  Nav,
  Navbar,
  FormControl,
  Dropdown,
  Badge,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import CartState from "../context/GlobalContext";

const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

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
        />

        <Nav>
          <Dropdown
          // alignRight
          >
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>
                {cart.length}
              {/* 1 */}
              </Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{ minWidth: 370 }}
              className="dropdown-menu-right"
            >
              <span style={{ padding: 10 }}>Cart is Empty!</span>
              {/* {cart.length > 0 ? (
                <>
                  {cart.map((item) => {
                    <span className="cart-item" key={item.id}>
                      <img src={item.image} alt="item" />
                      <div className="cartItemDetail">
                        <span>{item.name}</span>
                        <span>₹ {item.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({ type: "DELETE_FROM_CART", payload: item })
                        }
                      />
                    </span>;
                  })}
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )} */}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
