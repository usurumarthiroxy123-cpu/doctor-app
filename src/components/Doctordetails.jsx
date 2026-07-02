import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
function Doctordetails() {
  const {id}=useParams()
  let [doctor,setDoctor]=useState({})


  async function   fetchdata(){
  
    const response=await axios.get('https://doc-back.onrender.com/doctors')

    let finddoctor=response.data.find(val=>{
        return val.id==id
    })
    setDoctor(finddoctor)
  }

    useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div>
        <h1>{doctor.id}</h1>
        <h1>{doctor.name}</h1>
        <h1>{doctor.salary}</h1>
        <h1>{doctor.gender}</h1>
        <h1>{doctor.specialization}</h1>
    </div>
  )
}

export default Doctordetails