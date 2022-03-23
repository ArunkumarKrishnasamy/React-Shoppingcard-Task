import React, { useState } from "react";
import "../node_modules/bootstrap-icons/icons/star-fill.svg";

function Card(props) {
  return (
    <div className="card col-lg-3 mb-3" style={{ width: "17rem" }}>
      <img src="https://picsum.photos/450/300" className="card-img-top" />
      {props.product.isOffer ? (
        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          Sale
        </div>
      ) : null}
      <div className="card-body">
        <h5 className="fw-bolder">{props.product.name}</h5>
        <div>
          {props.product.isRated ? (
            <div className="d-flex justify-content-center small text-warning mb-2">
              <div>
                <i className="bi bi-star-fill"></i>
              </div>
              <div>
                <i className="bi bi-star-fill"></i>
              </div>

              <div>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
          ) : null}
        </div>
        <div className="text-center">
          {props.product.isOffer ? (
            <div>
              {" "}
              <span className="text-muted text-decoration-line-through me-1">
                ${props.product.price}
              </span>
              ${props.product.price - 10}
            </div>
          ) : (
            <div>${props.product.price}</div>
          )}
        </div>
        {props.product.isForSale ? (
          <button
            className="btn btn-outline-dark mt-auto"
            onClick={() => {
              props.handlecart(props.product);
            }}
            disabled={props.cartitems.some(obj=> obj.id ==props.product.id)}
          >
            {" "}
            Add to Cart
          </button>
        ) : (
          <div>
            <button className="btn btn-outline-dark mt-auto" disabled={true}>
              View options
            </button>
            <div
              className="badge bg-danger text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              Out of Stock
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
