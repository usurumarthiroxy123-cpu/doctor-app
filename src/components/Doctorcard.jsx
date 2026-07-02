import { useNavigate } from "react-router-dom"

function Doctorcard({name,specialization,gender,id}) {//destructurin props
    // props are the read only inputs used to pass informatin
    // to the child component-props is an object
    const navigate=useNavigate()
  return (
    <div className='card'>
        <div><img width='100%' height='100%' src="https://cdn-icons-png.flaticon.com/512/387/387561.png" alt="" /></div>
        <h1>{name}</h1>
        <h3>{specialization}</h3>
        <p>{gender}</p>
        <button onClick={()=>navigate(`/doctor/${id}`)}>view details</button>
        <button onClick={()=>deletedata(id)}>Del</button>
        <button onClick={()=>updatedata(id)}>Upd</button>
    </div>
  )
}   

export default Doctorcard