import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import "../../style/SignUp.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import HeaderForEmployer from "./HeaderForEmployer";

export default function InfoForEmployer() {
  let navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const endPoint = "https://bringmoneytomom.herokuapp.com/employer/";

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
  const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
      <div class="d-flex flex-row align-items-center mb-4">
        <div class="form-outline flex-fill mb-0">
          <label class="form-label" htmlFor={props.id || props.name}>
            {label}
          </label>
          <input
            className="text-input"
            class="form-control"
            {...field}
            {...props}
          />
          {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <div className="screen">
      <section class="vh-100">
        <div class="container h-100">
          <div>
            {" "}
            <HeaderForEmployer />
          </div>
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black">
                <div class="card-body p-md-3">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Information
                      </p>
                      <Formik
                        class="mx-1 mx-md-4"
                        initialValues={{
                          companytName: "",
                          password: "",

                          phone: "",
                          address: "",
                        }}
                        // Check validation of each attribute
                        validationSchema={Yup.object({
                          name: Yup.string()
                            .max(30, "Must be 30 characters or less")
                            .required("Required"),
                          phone: Yup.string()
                            .max(25, "Must be 25 characters or less")
                            .required("Required"),
                          password: Yup.string().required("Required"),

                          address: Yup.string()
                            .max(100, "Must be 100 characters or less")
                            .required("Required"),
                        })}
                      >
                        <Form>
                          <MyTextInput
                            label="Phone"
                            name="phone"
                            type="string"
                            value={userInfo.phone}
                          />
                          <MyTextInput
                            label="Password"
                            name="password"
                            type="password"
                            value={userInfo.password}
                          />
                          <MyTextInput
                            label="Company Name"
                            name="name"
                            type="text"
                            value={userInfo.name}
                          />

                          <MyTextInput
                            label="Address"
                            name="address"
                            type="text"
                            value={userInfo.address}
                          />

                          <button type="submit" className="signupbutton">
                            Update
                          </button>
                        </Form>
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
