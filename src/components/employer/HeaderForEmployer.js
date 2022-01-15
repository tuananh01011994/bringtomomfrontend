import React, { useState, useEffect } from "react";
import "../../style/Header.css";
import logo from "../../image/logo.jpg";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export default function HeaderForEmployee() {
  let navigate = useNavigate();
  const endPoint = "https://bringmoneytomom.herokuapp.com/employer/";
  const endPoint1 = "https://bringmoneytomom.herokuapp.com/jobcategory";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => getUserID(), []);
  const getUserID = async () => {
    const loggedInUser = localStorage.getItem("user");
    console.log("User id... :" + loggedInUser);
  };

  const [userInfo, setUserInfo] = useState({});

  const load = () => {
    fetch(endPoint + localStorage.getItem("user"), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserInfo(data);
        console.log(userInfo);
      });
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <div
        className="gradient-custom"
        style={{
          padding: 16,
          paddingBottom: 0,
          paddingTop: 8,
        }}
      >
        <div
          class="row"
          style={{
            paddingBottom: 8,
            borderBottom: "2px solid thistle",
          }}
        >
          <div class="col header-column">
            <button className="contact">List of Job</button>
          </div>
          <div class="col header-column">
            <button
              className="contact"
              onClick={() => {
                navigate("/addjobforemployer");
              }}
            >
              Add Job
            </button>
          </div>

          <div class="col header-column">
            <a>
              <button
                className="username"
                onClick={() => {
                  navigate("/infoforemployer");
                }}
              >
                <i
                  class="bi bi-person"
                  style={{ marginRight: 5, fontSize: 20 }}
                ></i>
                {userInfo.name}
              </button>
            </a>
          </div>
          <div class="col header-column">
            <button onClick={handleLogout}>logout</button>
          </div>
        </div>
        <div class="row" style={{ padding: 16 }}>
          <div
            class="col"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              style={{ height: 100, width: 100 }}
              class="rounded-circle"
              alt="100x100"
              onClick={() => {
                navigate("/homeforemployer");
              }}
            />

            <form style={{ width: "100%" }}>
              <div
                class="input-group"
                style={{ paddingRight: 16, paddingLeft: 16 }}
              >
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  placeholder="Search products..."
                  id="search"
                />
                <button
                  type="submit"
                  class="btn btn-primary"
                  style={{
                    backgroundColor: "rgba(196, 113, 245, 1)",
                    color: "white",
                    borderColor: "rgba(196, 113, 245, 1)",
                  }}
                >
                  <i class="bi-search" size="10x"></i>
                </button>
              </div>
            </form>
            <button
              type="button"
              class="btn btn-primary"
              style={{
                backgroundColor: "rgba(196, 113, 245, 1)",
                color: "white",
                borderColor: "rgba(196, 113, 245, 1)",
              }}
              //   onClick={() => navigate("/cart")}
            >
              <i class="bi bi-cart4"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          paddingLeft: 8,
          paddingRight: 8,
        }}
      >
        <ul
          class="nav nav-tabs"
          style={{
            paddingLeft: 32,
          }}
        >
          {/* {category.map((category) => (
            <li class="nav-item">
              <li class="nav-item dropdown" key={category.category_id}>
                <a
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  {category.category_name}
                </a>
                <ul class="dropdown-menu">
                  {category.list_subcategories.map((subcategory) => (
                    <li>
                      <a
                        class="dropdown-item"
                        key={subcategory.subcategory_id}
                        onClick={() =>
                          showSubCategory(subcategory.subcategory_id)
                        }
                      >
                        {subcategory.subcategory_name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </li>
          )
          )} */}
        </ul>
      </div>
    </>
  );
}
