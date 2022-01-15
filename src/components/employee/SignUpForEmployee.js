import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import "../../style/SignUp.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function SignUpForEmployee() {
  let navigate = useNavigate();
  const [employee, setEmployee] = useState();
  async function handleSubmit(
    age,
    exp,
    name,
    password,
    phone,
    qualification,

    specialization
  ) {
    fetch("https://bringmoneytomom.herokuapp.com/employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        age: age,
        exp: exp,
        name: name,
        password: password,
        phone: phone,
        qualification: qualification,
        specialization: specialization,
      }),
    }).then((data) => console.log(data + "post..."));
    navigate("/");
  }

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
                        Sign up for employee
                      </p>
                      <Formik
                        class="mx-1 mx-md-4"
                        initialValues={{
                          name: "",
                          password: "",
                          age: 0,
                          phone: "",
                          specialization: "",
                          qualification: "",
                          exp: 0,
                        }}
                        // Check validation of each attribute
                        validationSchema={Yup.object({
                          name: Yup.string()
                            .max(30, "Must be 30 characters or less")
                            .required("Required"),
                          phone: Yup.string()
                            .max(10, "Must be 10 characters or less")
                            .min(9, "Must be 9 chracters or more")
                            .required("Required"),
                          password: Yup.string().required("Required"),
                          age: Yup.string()
                            .required("Required")
                            .min(0, "At least 10"),
                          specialization: Yup.string()
                            .max(100, "Must be 100 characters or less")
                            .required("Required"),
                          qualification: Yup.string()
                            .max(100, "Must be 100 characters or less")
                            .required("Required"),
                          exp: Yup.number()
                            .min(0, "Must be 0 characters or more")
                            .required("Required"),
                        })}
                        onSubmit={(values) => {
                          handleSubmit(
                            values.age,
                            values.exp,
                            values.name,
                            values.password,
                            values.phone,
                            values.qualification,
                            values.specialization
                          );
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
                          <MyTextInput
                            label="Full Name"
                            name="name"
                            type="text"
                            placeholder="Nguyen Tuan Anh"
                          />
                          <MyTextInput
                            label="Age"
                            name="age"
                            type="number"
                            placeholder="18"
                          />

                          <MyTextInput
                            label="Specialization"
                            name="specialization"
                            type="text"
                            placeholder="Software Engineering"
                          />

                          <MyTextInput
                            label="Qualification"
                            name="qualification"
                            type="text"
                            placeholder="Software Engineering Bachelor Degree"
                          />

                          <MyTextInput
                            label="Year(s) of experience"
                            name="exp"
                            type="number"
                            placeholder="2"
                          />

                          <a
                            label="Role"
                            name="role"
                            type="text"
                            values="employee"
                          />

                          <button type="submit" className="signupbutton">
                            Sign up
                          </button>

                          <p className="bottom">
                            <p class=" text-muted">
                              Already have account ?{" "}
                              <a
                                href=""
                                class="button"
                                onClick={() => {
                                  navigate("/");
                                }}
                              >
                                Sign in
                              </a>
                            </p>
                          </p>
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
