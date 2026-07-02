import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/section";
import Addnewdoctor from "./components/Addnewdoctor";
import Doctordetails from "./components/Doctordetails";
import ProtectedRoute from "./components/ProtectedRoute";
import DoctorProvider from "./components/DoctorProvider";
import AppointmentForm from "./components/AppointmentForm";
import Appointments from "./components/Appointments";
import "./components/styles.css";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/add-doctor"
          element={
            <ProtectedRoute>
              <DoctorProvider>
                <Addnewdoctor />
              </DoctorProvider>
            </ProtectedRoute>
          }
        />

        <Route path="/book/:id" element={<AppointmentForm />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/doctor/:id" element={<Doctordetails />} />
      </Routes>
    </div>
  );
}

export default App;