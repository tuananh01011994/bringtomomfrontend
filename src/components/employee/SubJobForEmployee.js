import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HeaderForEmployee from "./HeaderForEmployee";

// render products data when we search or sort products or do nothing(display all products)
const renderData = (job, navigate) => {
  return (
    <div class="row g-1 ">
      {job.map((job) => (
        <div class="col-md-3">
          <div
            class="card-deck card p-3"
            style={{ height: 210 }}
            key={job.id}
            // onClick={() => {
            //   navigate("/product/" + product.product_id);
            // }}
          >
            <div class="card-body">
              <h5 class="card-title" style={{ textAlign: "start" }}>
                Title: {job.title}
              </h5>
              <h5 class="card-title" style={{ textAlign: "start" }}>
                Salary: {job.salaryRange}
              </h5>
              <h5 class="card-title" style={{ textAlign: "start" }}>
                Specialization: {job.specialization}
              </h5>
              <h5 class="card-title" style={{ textAlign: "start" }}>
                Description: {job.description}
                <h5 class="card-title" style={{ textAlign: "start" }}>
                  Level: {job.level}
                  <h5 class="card-title" style={{ textAlign: "start" }}>
                    Location: {job.location}
                  </h5>
                </h5>
              </h5>
            </div>
          </div>{" "}
        </div>
      ))}
    </div>
  );
};

export default function SubJobForEmployee() {
  // Invoke when user click to request another page.
  const [pageCount, setpageCount] = useState(1);
  const [currentPage, setcurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [job, setJob] = useState([]);
  const [field, setField] = useState("");
  const [sortType, setsortType] = useState("");
  const [status, setStatus] = useState("idle");
  const isIdle = status === "idle";
  const isSort = status === "sort";
  var newArray = [];
  let { id } = useParams();
  const endPoint = `https://mlr4fsfb80.execute-api.ap-southeast-1.amazonaws.com/default/managerds/products/?currentPage=${currentPage}&subcategory_id=${id}`;
  const endPoint1 = `https://mlr4fsfb80.execute-api.ap-southeast-1.amazonaws.com/default/managerds/products/?subcategory_id=${id}&totalproducts`;
  let limit = 4;
  let navigate = useNavigate();

  useEffect(() => {
    console.log(id);
    // Set the list of all products
    fetch(`https://bringmoneytomom.herokuapp.com/job/category/` + id)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        for (let i = 0; i < data.length; i++) {
          newArray = newArray.concat(data[i]);
          console.log(i);
        }
        setJob(newArray);
        console.log(job);
      });
  }, []);
  return (
    <div
      className=".container-fluid"
      style={{ paddingLeft: 20, paddingRight: 10 }}
    >
      <div style={{ paddingTop: 20 }}>
        <div style={{ paddingTop: 20 }}>
          {job?.length ? renderData(job, navigate) : null}
        </div>
      </div>
      <button onClick={() => navigate("/homeforemployee")}></button>
    </div>
  );
}
