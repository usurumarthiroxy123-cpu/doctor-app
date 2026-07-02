import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";


function AppointmentForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [appointment, setAppointment] = useState({
    patientName: "",
    phone: "",
    date: "",
    time: "",
    reason: ""
  });
  const availableSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
];

  function handleChange(e) {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const appointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    appointments.push({
  doctorId: id,
  doctorName: location.state?.doctorName || "Doctor",
  ...appointment
});

    localStorage.setItem(
      "appointments",
      JSON.stringify(appointments)
    );

    alert("Appointment Booked Successfully!");

    navigate("/appointments");
  }

  return (
  <div className="appointment-page">
    <div className="appointment-card">

      <div className="doctor-header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/387/387561.png"
          alt="Doctor"
        />

        <div>
          <h2>{location.state?.doctorName || "Doctor"}</h2>
          <p>Book your appointment quickly and securely.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>

        <label>Patient Name</label>
        <input
          type="text"
          name="patientName"
          placeholder="Enter your full name"
          value={appointment.patientName}
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={appointment.phone}
          onChange={handleChange}
          required
        />

        <label>Appointment Date</label>
        <input
          type="date"
          name="date"
          value={appointment.date}
          onChange={handleChange}
          required
        />

        <label>Available Time</label>

        <select
          name="time"
          value={appointment.time}
          onChange={handleChange}
          required
        >
          <option value="">Select Time Slot</option>

          {availableSlots.map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>

        <label>Reason for Visit</label>

        <textarea
          name="reason"
          placeholder="Describe your symptoms..."
          value={appointment.reason}
          onChange={handleChange}
          required
        />

        <button className="book-btn">
          Book Appointment
        </button>

      </form>

    </div>
  </div>
);
}

export default AppointmentForm;