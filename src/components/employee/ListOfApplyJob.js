import * as Yup from "yup";
import "../style/CartCardComponent.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Cache } from "aws-amplify";
import "../style/CartCardComponent.css";
import HeaderForEmployee from "./HeaderForEmployee";

export default function ListOfApplyJob() {
  let navigate = useNavigate();

  return (
    <section class="h-100 h-custom">
      <div>
        {" "}
        <HeaderForEmployee />
      </div>
      <div class="container py-5 h-100">
        <i class="bi bi-cart4" style={{ fontSize: 40, fontWeight: "bold" }}></i>
        <a style={{ marginLeft: 5, fontSize: 40 }}>Cart</a>
        <br />
        <br />

        {/* {products.map((product) => (
          <div
            class="row mb-4 d-flex justify-content-between align-items-center"
            key={product.product_id}
          >
            <div class="col-md-2 col-lg-2 col-xl-2">
              <img
                src={product.product_url}
                class="img-fluid rounded-3"
                alt="Cotton T-shirt"
                style={{ width: 150, height: 150 }}
                onClick={() => {
                  navigate("/product/" + product.product_id);
                }}
              />
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3">
              <h6 class="text-black mb-0">{product.product_name}</h6>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
              <div class="col" style={{ width: 300 }}>
                <input
                  type="number"
                  name="clicks"
                  min="1"
                  max={product.max_quantity}
                  defaultValue={product.quantity}
                  onChange={(event) => {
                    product.quantity = event.target.value;
                    console.log(product.max_quantity);
                    if (product.quantity <= product.max_quantity) {
                      updateItem(product.product_id, product.quantity);
                      product.product_total_price =
                        product.quantity * product.price;
                      setNewPrice(event.target.value);
                      console.log(product);
                    } else {
                      alert("Only" + product.max_quantity + "available");
                    }
                  }}
                />
              </div>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
              <h6>
                {" "}
                $
                {
                  (product.product_total_price =
                    product.quantity * product.price)
                }
              </h6>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
              <a
                href="#!"
                class="text-muted"
                onClick={() => deleteCartItem(product.product_id)}
              >
                <i class="bi bi-x-lg"></i>
              </a>
            </div>
            <div style={{ marginTop: 12 }}></div>
            <div
              class="row"
              style={{
                paddingTop: 8,
                borderTop: "1px solid #ccc",
              }}
            ></div>
          </div>
        ))} */}
      </div>

      <br />
      <div className="row">
        <div className="col">
          <h5 class="text-uppercase">Total price</h5>
        </div>

        <div className="col" style={{ textAlign: "end" }}>
          <h5>$ {sum}</h5>
        </div>
      </div>
      <br />
      <br />
      <button
        type="button"
        className="checkoutbutton"
        // onClick={() => checkoutCart()}
      >
        Check out
      </button>
      <div style={{ paddingTop: 50 }}></div>
    </section>
  );
}
