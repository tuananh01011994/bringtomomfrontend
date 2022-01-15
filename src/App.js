import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import SignIn from "./components/SignIn";
import SignUpForEmployee from "./components/employee/SignUpForEmployee";
import SignUpForEmployer from "./components/employer/SignUpForEmployer";
import InfoForEmployee from "./components/employee/InfoForEmployee";
import InfoForEmployer from "./components/employer/InfoForEmployer";
import HomeForEmployee from "./components/employee/HomeForEmployee";
import HomeForEmployer from "./components/employer/HomeForEmployer";
import SubJobForEmployee from "./components/employee/SubJobForEmployee";
import AddJobForEmployer from "./components/employer/AddJobForEmployer";

function App() {
  return (
    <div>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signupforemployee" element={<SignUpForEmployee />} />
            <Route path="/signupforemployer" element={<SignUpForEmployer />} />
            <Route path="/infoforemployee" element={<InfoForEmployee />} />
            <Route path="/infoforemployer" element={<InfoForEmployer />} />
            <Route path="/homeforemployee" element={<HomeForEmployee />} />
            <Route path="/homeforemployer" element={<HomeForEmployer />} />
            <Route path="/addjobforemployer" element={<AddJobForEmployer />} />
            <Route
              path="/subjobforemployee/:id"
              element={<SubJobForEmployee />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
