import React from "react";

function Cartitems(props) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div>
        <div className="fw-bold">{props.item.name}</div>${props.item.price}
      </div>
      <button
        className="badge bg-danger rounded-pill"
        onClick={() => {
          props.removeCart(props.item);
        }}
      >
        X
      </button>
    </li>
  );
}

export default Cartitems;
