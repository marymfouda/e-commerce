import React from "react";
import { CartProvider } from "react-use-cart";
import { addCart, removeCart, decCart, clearCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.handleCart);

  if (!cart.length) return <h1 className="text-center">Your Cart is Empty</h1>;
  return (
    <CartProvider>
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h5>
              Cart({cart.length})total Items:(
              {cart.reduce((acc, item) => acc + item.qty, 0)})
            </h5>
            <table className="table table-light-hover m-0">
              <tbody>
                {cart.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img src={item.image} style={{ height: "6rem" }} />
                      </td>
                      <td> {item.title} </td>
                      <td> ${item.price} </td>
                      <td>Quantity ({item.qty}) </td>
                      <td>
                        <button
                          className="btn btn-secondary ms-2"
                          onClick={() => dispatch(decCart(item))}
                        >
                          -
                        </button>
                        <button
                          className="btn btn-success  ms-2"
                          onClick={() => dispatch(addCart(item))}
                        >
                          +
                        </button><br/><br/>
                        <button
                          className="btn btn-danger ms-2"
                          onClick={() => dispatch(removeCart(item))}
                        >
                          Remove Item
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-auto ms-auto">
            <h2>
              Total Price:$
              {cart
                .reduce((acc, item) => acc + item.price * item.qty, 0)
                .toFixed(2)}
            </h2>
          </div>
          <div className="col-auto">
             <button className="btn btn-success ms-2">Buy Now
             </button><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             <button
              className="btn btn-danger m-2"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
           
          </div>
        </div>
      </section>
    </CartProvider>
  );
};

export default CartPage;
