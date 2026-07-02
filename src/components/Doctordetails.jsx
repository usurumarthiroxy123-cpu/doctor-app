import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

function Doctordetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [doctor, setDoctor] = useState({})

  async function fetchdata() {
    const response = await axios.get("https://doc-back.onrender.com/doctors")

    const finddoctor = response.data.find((val) => val.id == id)

    setDoctor(finddoctor)
  }

  useEffect(() => {
    fetchdata()
  }, [])

  return (
    <div>
      <h1>{doctor.id}</h1>
      <h1>{doctor.name}</h1>
      <h1>{doctor.salary}</h1>
      <h1>{doctor.gender}</h1>
      <h1>{doctor.specialization}</h1>

      <button onClick={() => navigate(`/book/${doctor.id}`, {
  state: {
    doctorName: doctor.name
  }
})}>
        Book Appointment
      </button>
    </div>
  )
}

export default Doctordetails