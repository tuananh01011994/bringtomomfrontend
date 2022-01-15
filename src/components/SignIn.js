import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import "../style/SignIn.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function SignIn() {
  let navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [role, setRole] = useState();

  async function handleSubmit(phone, password) {
    const user = { phone, password };
    // send the username and password to the server
    const response = await axios.get(
      "https://bringmoneytomom.herokuapp.com/login/" + phone + "/" + password
    );
    // set the state of the user

    var dataArray = response.data.split(",");
    console.log(dataArray);
    console.log(dataArray[0]);
    console.log(dataArray[1]);
    setUser(dataArray[0]);
    setRole(dataArray[1]);
    // store the user in localStorage
    localStorage.setItem("user", dataArray[0]);
    console.log(response.data);
    console.log(
      "https://bringmoneytomom.herokuapp.com/login/" + phone + "/" + password
    );
  }

  console.log(role);
  if (user === "Incorrect phone/account") {
    alert("Incorrect account");
  } else if (user === "Incorrect Password") {
    alert("Incorrect Password");
  } else if (role === "employee") {
    navigate("/homeforemployee");
  } else if (role === "employer") {
    navigate("/homeforemployer");
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
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
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black">
                <div class="card-body p-md-3">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign in
                      </p>
                      <Formik
                        class="mx-1 mx-md-4"
                        initialValues={{
                          phone: "",
                          password: "",
                        }}
                        // Check validation of each attribute
                        validationSchema={Yup.object({
                          phone: Yup.string()
                            .min(10, "Must be 10-11 characters")
                            .max(11, "Must be 10-11 characters")
                            .required("Required"),
                          password: Yup.string().required("Required"),
                        })}
                        onSubmit={(values) => {
                          handleSubmit(values.phone, values.password);
                          console.log(values);
                        }}
                      >
                        <Form>
                          <MyTextInput
                            label="Phone"
                            name="phone"
                            type="string"
                            placeholder="090123123"
                          />

                          <MyTextInput
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="*********"
                          />
                          <div class="forgot">
                            <button type="submit" className="signinbutton">
                              Sign in
                            </button>

                            <p className="signin">
                              <p class=" text-muted">
                                Don't have an account ?{" "}
                              </p>
                            </p>
                            <p className="signupcenter">
                              <p class=" text-muted">
                                <a
                                  href=""
                                  class="button"
                                  onClick={() => {
                                    navigate("/signupforemployee");
                                  }}
                                >
                                  Sign up for employee
                                </a>
                              </p>
                            </p>

                            <p className="signupcenter">
                              <p class=" text-muted">
                                <a>OR</a>
                              </p>
                            </p>
                            <p className="signupcenter">
                              <p class=" text-muted">
                                <a
                                  href=""
                                  class="button"
                                  onClick={() => {
                                    navigate("/signupforemployer");
                                  }}
                                >
                                  Sign up for employer
                                </a>
                              </p>
                            </p>
                          </div>
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
