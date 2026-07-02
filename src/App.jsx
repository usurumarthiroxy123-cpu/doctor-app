import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Section from "./components/section";
import Addnewdoctor from "./components/Addnewdoctor";
import Doctordetails from "./components/Doctordetails";
import ProtectedRoute from "./components/ProtectedRoute";
import DoctorProvider from "./components/DoctorProvider";

import "./components/styles.css";

function App() {
  const [islogin, setIslogin] = useState(false);

  return (
    <div>
      <Navbar />

      <button onClick={() => setIslogin(true)}>
        Click to Login
      </button>

      <Routes>
        <Route path="/" element={<Section />} />

        <Route
          path="/add-doctor"
          element={
            <ProtectedRoute islogin={islogin}>
              <DoctorProvider>
                <Addnewdoctor />
              </DoctorProvider>
            </ProtectedRoute>
          }
        />

        <Route
          path="/doctor/:id"
          element={<Doctordetails />}
        />
      </Routes>
    </div>
  );
}

export default App;