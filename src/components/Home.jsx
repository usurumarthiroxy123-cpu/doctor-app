import { useState, useEffect } from "react";
import Doctorcard from "./Doctorcard";
import axios from "axios";
import { useMemo } from "react";
import { DoctorContext } from "./DoctorProvider";
import { useContext } from "react";
function Home() {
  let [doctors, setDoctors] = useState([]);
  let [search, setSearch] = useState("");
  let [specialization, setSpecialization] = useState("");
   let {newdoctor}=useContext(DoctorContext)
  async function fetchdata() {
   
    try{
      let apidata=await axios.get('https://doc-back.onrender.com/doctors')
      setDoctors(apidata.data);
    }catch(err){
      alert('failed')
      console.log(err,'api is failed to fetch')
    }
  }

  // useEffect(() => {
  //   fetchdata();
  // }, []);

  useEffect(() => {
    
     fetchdata()
    
  }, [newdoctor]);

  const filtereddoctors=useMemo(()=>{
    return doctors.filter((val)=>{
    console.log('running')
    return (
      val.name.toLowerCase().includes(search.toLowerCase())
      &&
      (specialization=="" || val.specialization==specialization)
    )
  })

  },[search,specialization,doctors])
  
  return (
    <div>
      <div className="filters">
        <input
          type="text"
          className="text-field"
          value={search}
          placeholder="search doctor"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="text-field"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        >
          <option value="Muscles">Muscles</option>
          <option value="Bones">Bones</option>
          <option value="Heart">Heart</option>
        </select>
      </div>
      {filtereddoctors.length > 0 ? (
        <div className="doctorparent">
          {filtereddoctors.map((doctor) => {
            return (
              <Doctorcard
                key={doctor.id}
                name={doctor.name}
                gender={doctor.gender}
                specialization={doctor.specialization}
                id={doctor.id}
               
              />
            );
          })}
        </div>
      ) : (
        <h1>no doctors found
        </h1>
      )}
    </div>
  );
}

export default Home;