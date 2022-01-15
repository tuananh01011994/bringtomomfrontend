import React, { useState, useEffect } from "react";
import HeaderForEmployer from "./HeaderForEmployer";

import { useParams, useNavigate } from "react-router-dom";

export default function HomeForEmployer() {
  return (
    <div class=".container-fluid">
      <div>
        <HeaderForEmployer />
      </div>

      <div class="row" style={{ width: 800, paddingLeft: 50 }}>
        <div class="col">
          <a
            style={{
              fontSize: 22,
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
            href="url"
          >
            List of job
          </a>
        </div>
      </div>
      <br />
      <div class="row" style={{ paddingLeft: 100 }}>
        {/* {category.map((category) => (
          <div class="col">
            <div class="row" key={category.category_id}>
              <img
                style={{ height: 200, width: 200 }}
                class="rounded-circle"
                alt="100x100"
                src={category.imgUrl}
              ></img>
              <a style={{ paddingLeft: 50 }}>{category.category_name}</a>
            </div>
          </div>
        ))} */}
      </div>
      <br />
      <br />

      {/* <div class="row" style={{ width: 800, paddingLeft: 50 }}>
        <div class="col">
          <a
            style={{
              fontSize: 22,
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
            href="url"
          >
            Explore Popular Products
          </a>
        </div>
      </div>
      <br />
      <div class="row" style={{ paddingLeft: 100 }}> */}
      {/* {products.map((product) => (
          <div class="col">
            <div
              class="row"
              key={product.product_id}
              onClick={() => {
                navigate("/product/" + product.product_id);
              }}
            >
              <img
                style={{ height: 200, width: 200 }}
                class="rounded-circle"
                alt="100x100"
                src={product.img_url}
              ></img>
              <a style={{ paddingLeft: 50 }}>{product.product_name}</a>
            </div>
          </div>
        ))} */}
      {/* </div> */}

      <div style={{ marginTop: 50 }}></div>
    </div>
  );
}
