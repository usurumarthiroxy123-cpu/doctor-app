import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Doctorcard from "./components/Doctorcard";
import Addnewdoctor from "./components/Addnewdoctor";
import "./components/styles.css";

function App() {
  const [count, setCount] = useState(0);

  const doctors = [
    { name: "John", specialization: "Ear", gender: "Male" },
    { name: "Shiva", specialization: "Heart", gender: "Male" },
    { name: "Abhi", specialization: "Muscle", gender: "Male" },
    { name: "Zedek", specialization: "Heart", gender: "Male" },
    { name: "Ramya", specialization: "Eyes", gender: "Female" },
    { name: "Keerthi", specialization: "Heart", gender: "Female" },
    { name: "Rao", specialization: "Bones", gender: "Male" },
  ];

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Inc</button>

      <Navbar />
      <Section />

      {/* ADD THIS */}
      <Addnewdoctor />

      <div className="doctorparent">
        {doctors.map((doctor, index) => (
          <Doctorcard
            key={index}
            name={doctor.name}
            specialization={doctor.specialization}
            gender={doctor.gender}
            image={doctor.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;