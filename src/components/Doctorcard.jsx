import { useNavigate } from "react-router-dom"
import { DoctorContext } from "./DoctorProvider";
import { useContext } from "react";
function Doctorcard({name,specialization,gender,id}) {
  let navigate=useNavigate()
  let {updatedata,deletedata}=useContext(DoctorContext)
  return (
    <div className="card">
        <div>
           <img
                    src="https://cdn-icons-png.flaticon.com/512/387/387561.png"
                    width="100"
                />
        </div>
        <h2>{name}</h2>
        <p>{specialization}</p>
        <p>{gender}</p>
        <button onClick={()=>navigate(`/doctor/${id}`)}>view details</button>
        <button onClick={()=>{deletedata(id)}}>Del</button>
        <button onClick={()=>updatedata(id)}>update</button>
    </div>
  )
}

export default Doctorcard