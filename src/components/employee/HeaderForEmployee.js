import React, { useState, useEffect } from "react";
import "../../style/Header.css";
import logo from "../../image/logo.jpg";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export default function HeaderForEmployee() {
  let navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [job, setJob] = useState({});

  const endPoint = "https://bringmoneytomom.herokuapp.com/employee/";
  const endPoint1 = "https://bringmoneytomom.herokuapp.com/jobcategory";

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
    setUserInfo(userInfo);
  }, []);

  const getJob = () => {
    fetch(endPoint1, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJob(data);
        console.log(job);
      });
  };

  useEffect(() => {
    getJob();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => getUserID(), []);
  const getUserID = async () => {
    const loggedInUser = localStorage.getItem("user");
    console.log("User id... :" + loggedInUser);
  };

  const showSubJob = (id) => {
    console.log(id + "job id");
    navigate("/subjobforemployee/" + id);
    window.location.reload(false);
  };

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
            <button className="contact">Contact</button>
          </div>

          <div class="col header-column">
            <a>
              <button
                className="username"
                onClick={() => {
                  navigate("/infoforemployee");
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
                navigate("/homeforemployee");
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
          {/* {job.map((job) => (
            <li class="nav-item">
              <li class="nav-item dropdown" key={job.id}>
                <a
                  key={job.id}
                  class="nav-link dropdown-toggle"
                  role="button"
                  aria-expanded="false"
                  onClick={() => showSubJob(job.id)}
                >
                  {job.name}
                </a>
              </li>
            </li>
          ))} */}
        </ul>
      </div>
    </>
  );
}
