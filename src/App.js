import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Card from "./Card";
import Cartitems from "./Cartitems";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/icons/star-fill.svg";
import "../node_modules/bootstrap-icons/icons/cart-fill.svg";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone",
      price: 100.0,
      isForSale: true,
      isRated: true,
    },
    {
      id: 2,
      name: "Sony",
      price: 20.0,
      isOffer: true,
      isForSale: true,
      isRated: true,
    },
    {
      id: 3,
      name: "Samsung",
      price: 30.0,
      isForSale: true,
      isOffer: true,
    },
    { id: 4, name: "Xiaomi", price: 40.0, isForSale: false },
    {
      id: 5,
      name: "Vivo",
      price: 50.0,
      isForSale: false,
      isRated: true,
    },
    {
      id: 6,
      name: "Oppo",
      price: 60.0,
      isForSale: true,
      isOffer: true,
    },
    {
      id: 7,
      name: "Nokia",
      price: 70.0,
      isForSale: true,
      isRated: true,
    },
    {
      id: 8,
      name: "Motorolo",
      price: 80.0,
      isForSale: true,
      isOffer: true,
    },
  ]);

  const [Cart, setCart] = useState(0);
  const [disable, setdisable] = useState(products.disable);
  let handlecart = (item) => {
    setCart(Cart + 1);
    setdisable(true);
    setCartitems([...cartitems, item]);
    setTotal(total + item.price);
  };
  const [cartitems, setCartitems] = useState([]);
  const [total, setTotal] = useState(0);
  let removeCart = (item) => {
    let itemindex = cartitems.findIndex((obj) => obj.id == item.id);
    cartitems.splice(itemindex, 1);
    setCartitems([...cartitems]);
    setTotal(total - item.price);
    setCart(Cart - 1);
  };
  return (
    <div className="App">
      <div className="container-fluid">
        <div>
          <Navbar cartitems={cartitems} Cart={Cart} handlecart={handlecart} />
        </div>
        <div>
          <div className="header">
            <Header />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div className="row d-flex justify-content-center">
                {products.map((product) => {
                  return (
                    <Card
                      product={product}
                      handlecart={handlecart}
                      key={product.name}
                      disable={disable}
                      cartitems={cartitems}
                    />
                  );
                })}
              </div>
            </div>
            <div className="col-2">
              <div className="row">
                <h1>Cart</h1>
                <div className="col-lg-12 text-center">
                  <ol className="list-group list-group-numbered">
                    {cartitems.map((item) => {
                      return (
                        <Cartitems
                          removeCart={removeCart}
                          item={item}
                          handlecart={handlecart}
                        />
                      );
                    })}
                  </ol>
                  <h4>Total: ${total}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
