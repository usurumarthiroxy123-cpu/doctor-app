import { useEffect, useState } from "react";
import Doctorcard from "./Doctorcard";

function Home() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("");

  function fetchdata() {
    let data = [
      {
        id: 1,
        name: "Teja",
        age: 26,
        gender: "Male",
        specialization: "Muscles",
        salary: 7000000,
        experience: 5,
        fees: 500,
        available: true,
      },
      {
        id: 2,
        name: "Sam",
        age: 26,
        gender: "Male",
        specialization: "Bones",
        salary: 4000000,
        experience: 3,
        fees: 400,
        available: true,
      },
      {
        id: 3,
        name: "Anu",
        age: 25,
        gender: "Female",
        specialization: "Heart",
        salary: 5000000,
        experience: 4,
        fees: 600,
        available: false,
      },
    ];

    setDoctors(data);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  const filteredarray = doctors.filter((val) => {
    return (
      (val.name.toLowerCase().includes(search.toLowerCase()) ||
        val.specialization.toLowerCase().includes(search.toLowerCase())) &&
      (specialization === "" ||
        val.specialization === specialization)
    );
  });

  return (
    <div>
      <div className="filters">
        <input
          type="text"
          className="text-field"
          placeholder="Search your doctor"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        >
          <option value="">Select Specialization</option>
          <option value="Bones">Bones</option>
          <option value="Heart">Heart</option>
          <option value="Muscles">Muscles</option>
        </select>
      </div>

      <h2>Total Doctors: {filteredarray.length}</h2>

      <div className="doctorparent">
        {filteredarray.length > 0 ? (
          filteredarray.map((doctor) => (
            <Doctorcard
              key={doctor.id}
              name={doctor.name}
              gender={doctor.gender}
              specialization={doctor.specialization}
              experience={doctor.experience}
              fees={doctor.fees}
              available={doctor.available}
            />
          ))
        ) : (
          <h1>No Doctors Found</h1>
        )}
      </div>
    </div>
  );
}

export default Home;