import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import HeaderForEmployer from "./HeaderForEmployer";
import "../../style/AddJobForEmployer.css";

export default function AddJobForEmployer() {
  const [data, setData] = useState([]);

  const [status, setStatus] = useState("");
  const [job, setJob] = useState({});

  const endPoint1 =
    "https://bringmoneytomom.herokuapp.com/job/ " +
    localStorage.getItem("user") +
    "/" +
    job.id;

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

  useEffect(() => getUserID(), []);
  const getUserID = async () => {
    const loggedInUser = localStorage.getItem("user");
    console.log("User id... :" + loggedInUser);
  };

  const addProduct = (
    description,
    level,
    location,
    salary_range,
    specialization,
    title,
    employer_id,
    jobcategory_id
  ) => {
    fetch(endPoint1, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: description,
        level: level,
        location: location,
        salaryRange: salary_range,
        specialization: specialization,
        title: title,
        loggedInUser: employer_id,
        id: jobcategory_id,
      }),
    })
      .then((data) => data.json())
      .then((response) => {
        if (response.status === 500) {
          alert("Job exists");
        }
      });
    // navigate("/list-of-seller-product/");
  };

  const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
      <>
        <div class="mb-3 mt-3">
          <label htmlFor={props.id || props.name}>{label}</label>
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
      </>
    );
  };

  const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select class="form-control" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

  return (
    <div className=".container-fluid">
      <div style={{ marginBottom: 50 }}>
        {" "}
        <HeaderForEmployer />
      </div>
      <div class="container mt-3">
        <div
          style={{
            flex: 1,
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h1>Add a new job</h1>
        </div>
        <Formik
          initialValues={{
            title: "",
            salaryRange: "",
            specialization: "",
            description: "",
            level: "",
            location: "",
          }}
          validationSchema={Yup.object({
            title: Yup.string()
              .max(50, "Must be 50 characters or less")
              .required("Required"),
            salaryRange: Yup.string().required("Required"),
            specialization: Yup.string().required("Required"),
            description: Yup.string().required("Required"),
            level: Yup.string().required("Required"),
            location: Yup.string().required("Required"),
          })}
          onSubmit={(values) => {
            addProduct(
              values.description,
              values.level,
              values.location,
              values.salaryRange,
              values.specialization,
              values.title
            );
          }}
        >
          <Form>
            <MySelect label="Categories" name="id">
              {/* <option>Select a sub-category type</option>
              {job.map((job) => (
                <option key={job.id} value={job.id}>
                  {job.name}
                </option>
              ))} */}
            </MySelect>
            <br />

            <MyTextInput
              label="Job Title"
              name="title"
              type="text"
              placeholder="Title"
            />

            <MyTextInput
              label="Salary"
              name="salaryRange"
              type="text"
              placeholder="Brand"
            />

            <MyTextInput
              label="Specialization"
              name="specialization"
              type="text"
              placeholder="Specialization"
            />

            <MyTextInput
              label="Description"
              name="description"
              type="text"
              placeholder="Description"
            />

            <MyTextInput
              label="Level"
              name="level"
              type="text"
              placeholder="Level"
            />
            <MyTextInput
              label="Location"
              name="location"
              type="text"
              placeholder="Location"
            />

            <br />
            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
              <button type="submit" className="saveaddproduct">
                Add
              </button>
            </div>
          </Form>
        </Formik>
      </div>{" "}
      <br /> <br />
    </div>
  );
}
