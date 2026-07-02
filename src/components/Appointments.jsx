import { useEffect, useState } from "react";

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    setAppointments(storedAppointments);
  }, []);

  return (
    <div>
      <h1>My Appointments</h1>

      {appointments.length === 0 ? (
        <h3>No Appointments Booked</h3>
      ) : (
        appointments.map((appointment, index) => (
          <div
  key={index}
  style={{
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    margin: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  }}
>
  <h2>🩺 {appointment.doctorName}</h2>

  <p>👤 <strong>Patient:</strong> {appointment.patientName}</p>

  <p>📞 <strong>Phone:</strong> {appointment.phone}</p>

  <p>📅 <strong>Date:</strong> {appointment.date}</p>

  <p>🕙 <strong>Time:</strong> {appointment.time}</p>

  <p>📝 <strong>Reason:</strong> {appointment.reason}</p>

  <button
  onClick={() => {
    const updatedAppointments = appointments.filter(
      (_, i) => i !== index
    );

    localStorage.setItem(
      "appointments",
      JSON.stringify(updatedAppointments)
    );

    setAppointments(updatedAppointments);
  }}
>
  Cancel Appointment
</button>
</div>
        ))
      )}
    </div>
  );
}

export default Appointments;