import { useState } from "react";

function Addnewdoctor() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [salary, setSalary] = useState("");

  const [doctors, setDoctors] = useState([]);

  function handlesubmit(e) {
    e.preventDefault();

    const formdata = {
      id: Date.now(),
      name,
      age,
      gender,
      specialization,
      salary,
    };

    setDoctors([...doctors, formdata]);

    setName("");
    setAge("");
    setGender("");
    setSpecialization("");
    setSalary("");
  }

  return (
    <div>
      <h1>Add New Doctor</h1>

      <form className="form-container" onSubmit={handlesubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Doctor Name"
          className="text-field"
        />

        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="text"
          placeholder="Enter Age"
          className="text-field"
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select your Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          type="text"
          placeholder="Enter Specialization"
          className="text-field"
        />

        <input
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          type="text"
          placeholder="Enter Salary"
          className="text-field"
        />

        <button type="submit">Add Doctor</button>
      </form>

      <div className="doctorparent">
        {doctors.map((doc) => (
          <div className="card" key={doc.id}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/387/387561.png"
              alt="doctor"
              width="100%"
            />

            <h3>{doc.name}</h3>
            <p>Age: {doc.age}</p>
            <p>Gender: {doc.gender}</p>
            <p>Specialization: {doc.specialization}</p>
            <p>Salary: {doc.salary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Addnewdoctor;