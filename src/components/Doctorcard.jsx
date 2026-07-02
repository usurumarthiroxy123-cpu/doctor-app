import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DoctorContext } from "./DoctorProvider";

function Doctorcard({ name, specialization, gender, id }) {
  const navigate = useNavigate();
const { deletedata, updatedata } = useContext(DoctorContext);
  return (
    <div className="card">
      <div>
        <img
          width="100%"
          height="100%"
          src="https://cdn-icons-png.flaticon.com/512/387/387561.png"
          alt="Doctor"
        />
      </div>

      <h1>{name}</h1>
      <h3>{specialization}</h3>
      <p>{gender}</p>

      <button onClick={() => navigate(`/doctor/${id}`)}>
        View Details
      </button>

      {/* Uncomment after implementing delete and update */}
      {/* <button>Delete</button>
      <button>Update</button> */}
    </div>
  );
}

export default Doctorcard;