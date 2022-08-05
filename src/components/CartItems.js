import React from "react";
import { useSelector } from "react-redux";
import { addCart, deleteCart } from "../redux/actions";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

const CartItems = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartHandler);

  return cart.length ? (
    <div className="mt-5" style={{overflow:"hidden", minHeight:"72vh"}}>
      {cart.map((item) => {
        console.log("item: ", item.title);
        return (
          <div className="row my-4 py-4 bg-light">
            <div className="col-md-4">
              <div className="d-flex justify-content-center">
              <img
                src={item.image}
                alt={item.title}
                height="200px"
                width="180px"
              />
              </div>
            </div>
            <div className="col-md-6">
              <h3>{item.title}</h3>
              <p className="lead fw-bolder">
                {item.qty} X ${item.price} = $
                {(item.qty * item.price).toFixed(2)}
              </p>
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => dispatch(deleteCart(item))}
              >
                <i className="fa fa-minus"></i>
              </button>
              <button
                className="btn btn-outline-dark"
                onClick={() => dispatch(addCart(item))}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="d-flex justify-content-center align-items-center h5" style={{height: "78vh"}}>Your cart is empty</div>
  );
};

export default CartItems;
