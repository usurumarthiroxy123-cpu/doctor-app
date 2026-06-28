import { createContext } from "react"
import { useState } from "react"
import axios from "axios"
export const DoctorContext=createContext()

function DoctorProvider({ children }) {
  let [newdoctor, setNewdoctor] = useState(null);
  async function deletedata(id) {
    try {
      await axios.delete(`https://doc-back.onrender.com/doctors/${id}`);
      alert("doctor deleted");
      setNewdoctor("deleted" + id);
    } catch (err) {
      console.log(err);
    }
  }
  async function updatedata(id) {
    let data = {
      name: "Manohar",
      age: "57",
      gender: "Male",
      salary: "8900000",
      specialization: "Surgeon",
      id: Date.now(),
    };
    try {
      await axios.put(`https://doc-back.onrender.com/doctors/${id}`, data);
      alert("updated");
      setNewdoctor("updaated" + id);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <DoctorContext.Provider
      value={{ newdoctor, setNewdoctor, updatedata, deletedata }}
    >
      {children}
    </DoctorContext.Provider>
  );
}

export default DoctorProvider;