import { createContext, useState } from "react";
import axios from "axios";

export const DoctorContext = createContext();

function DoctorProvider({ children }) {
  const [newdoctor, setNewdoctor] = useState(null);

  async function deletedata(id) {
    await axios.delete(`https://doc-back.onrender.com/doctors/${id}`);
    setNewdoctor(id);
  }

  async function updatedata(id) {
    const formdata = {
      id: Date.now(),
      name: "john",
      age: 25,
      gender: "male",
      specialization: "bones",
      salary: 190001,
    };

    await axios.put(`https://doc-back.onrender.com/doctors/${id}`, formdata);
    setNewdoctor(id);
  }

  return (
    <DoctorContext.Provider
      value={{ newdoctor, setNewdoctor, deletedata, updatedata }}
    >
      {children}
    </DoctorContext.Provider>
  );
}

export default DoctorProvider;