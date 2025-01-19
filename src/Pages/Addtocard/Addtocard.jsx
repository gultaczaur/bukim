import React, { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import "../Addtocard/addtocard.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import İnfo from "../../Components/İnfo/İnfo";

const Addtocard = () => {
  const [data, setData] = useState([]);

  // Lokal storage-dən məlumatları götürmək
  const getData = () => {
    let cart = JSON.parse(localStorage.getItem("card")) || [];
    setData(cart);
  };

  // Məhsul sayını yeniləmək
  const updateQuantity = (id, action) => {
    let cart = [...data];
    const productIndex = cart.findIndex((product) => product.id === id);

    if (productIndex !== -1) {
      if (action === "increase") {
        cart[productIndex].number += 1;
      } else if (action === "decrease" && cart[productIndex].number > 1) {
        cart[productIndex].number -= 1;
      }
      setData(cart);
      localStorage.setItem("card", JSON.stringify(cart));
    }
  };

  // Məhsulu səbətdən silmək
  const removeProduct = (id) => {
    let cart = data.filter((product) => product.id !== id);
    setData(cart);
    localStorage.setItem("card", JSON.stringify(cart));
  };

  // Cəmi qiyməti hesablayan funksiya
  const getTotalPrice = () => {
    return data.reduce(
      (total, product) => total + product.number * parseFloat(product.price),
      0
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <Header />
    <main>
    <section className="addPage">

<div className="add">
  <h2>Səbət</h2>
</div>
<div className="cart-container">
  <div className="cartTab">
    <div className="cart-table-wrapper">
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              </td>
              <td>{product.title}</td>
              <td>
                <div className="quantity">
                  <button
                    type="button"
                    className="qty-minus"
                    onClick={() => updateQuantity(product.id, "decrease")}
                  >
                    -
                  </button>
                  <span>{product.number}</span>
                  <button
                    type="button"
                    className="qty-plus"
                    onClick={() => updateQuantity(product.id, "increase")}
                  >
                    +
                  </button>
                </div>
              </td>
              <td>{product.price * product.number}₼</td>
              <td>
                <button
                  className="remove"
                  onClick={() => removeProduct(product.id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="action">
      <a href="#" className="woo-shop-button">
        <FaLongArrowAltLeft /> Back to Shop
      </a>
    </div>
  </div>
  <div className="summary-container">
    <div className="cart-summary">
      <div className="totals-title">Products in cart</div>
      <p>
        Price <span>{getTotalPrice()}₼</span>
      </p>
      <p>
        Cash discount <span>₼</span>
      </p>
      <p>
        Coupon discount <span>0₼</span>
      </p>
      <p>
        Delivery costs <span>0₼</span>
      </p>
      <p className="total-price">
        Total Price <span>{getTotalPrice()} ₼</span>
      </p>
    </div>

    <div className="coupon-container">
      <div className="totals-title">Coupon</div>
      <input type="text" placeholder="Coupon code" />
      <button className="apply-coupon">Apply coupon</button>
    </div>
    <div className="checkout">
      <a href="#" className="checkout-button button alt wc-forward">
        Proceed to checkout
      </a>
    </div>
  </div>
</div>
</section>
<İnfo/>
    </main>
    
    <Footer/>
    </>
  );
};

export default Addtocard;
