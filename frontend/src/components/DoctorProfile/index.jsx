import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SlCalender } from "react-icons/sl";
import { FaRegDotCircle, FaRegTimesCircle, FaRegClock } from "react-icons/fa";

const DoctorProfile = () => {
  const { id } = useParams();
  const [doctorProfile, setDoctorProfile] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    datetime: "",
  });
  const [confirmation, setConfirmation] = useState("");

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);

    const dayName = new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
    });

    const daySlot = doctorProfile.workingHours.find((d) => d.day === dayName);
    if (!daySlot) {
      setTimeSlots([]);
      return;
    }

    const [startTime, endTime] = daySlot.time.split(" - ");
    const slots = generateTimeSlots(startTime.trim(), endTime.trim(), 60); // 1hr slots
    setTimeSlots(slots);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime) {
      alert("Please select both date and time.");
      return;
    }

    setFormData({
      ...formData,
      datetime: `${selectedDate} ${selectedTime}`,
    });

    setConfirmation("Appointment booked successfully!");
    setTimeout(() => {
      setConfirmation("");
      setIsOpen(false);
      setFormData({ name: "", email: "", datetime: "" });
      setSelectedDate("");
      setSelectedTime("");
    }, 2000);
  };

  useEffect(() => {
    const fetchDoctorProfile = async () => {
      const response = await fetch(
        `http://localhost:3000/doctor-profile/${id}`
      );
      const data = await response.json();
      console.log(data);
      setDoctorProfile(data);
    };

    fetchDoctorProfile();
  }, [id]);

  function generateTimeSlots(startTimeStr, endTimeStr, interval = 60) {
    const to24Hour = (t) => {
      const [time, modifier] = t.split(" ");
      let [hours, minutes] = time.split(".");
      if (modifier.toLowerCase() === "pm" && hours !== "12")
        hours = +hours + 12;
      if (modifier.toLowerCase() === "am" && hours === "12") hours = 0;
      return `${hours}:${minutes}`;
    };

    const [start, end] = [to24Hour(startTimeStr), to24Hour(endTimeStr)];
    const [startHour, startMin] = start.split(":").map(Number);
    const [endHour, endMin] = end.split(":").map(Number);

    const slots = [];
    const startDate = new Date();
    startDate.setHours(startHour, startMin, 0);

    const endDate = new Date();
    endDate.setHours(endHour, endMin, 0);

    while (startDate < endDate) {
      slots.push(
        startDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
      startDate.setMinutes(startDate.getMinutes() + interval);
    }

    return slots;
  }

  return (
    <>
      <nav>
        <Link to="/">
          <img src="/logo.jpg" className="w-32 ml-10" />
        </Link>
      </nav>
      {doctorProfile && (
        <div className="m-4 sm:m-6 md:m-10 lg:m-20 flex flex-col lg:flex-row justify-between gap-6">
          <div>
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <img
                src={doctorProfile.image}
                alt={doctorProfile.name}
                className="w-full sm:w-1/2 md:w-2/5 lg:w-1/2 xl:w-1/2 rounded-lg mb-4"
              />
              <div className="p-6 rounded-lg w-full sm:w-md text-left">
                <h2 className="text-orange-600 font-bold text-2xl mb-4">
                  {doctorProfile.name}
                </h2>

                <p className="text-gray-800 text-lg mb-3">
                  {doctorProfile.specialization}
                </p>
                <p className="text-gray-800 text-lg mb-3">
                  {doctorProfile.experience}
                </p>
                <p className="text-orange-600 text-xl font-bold mb-0 text-left">
                  Rs. {doctorProfile.fees}
                </p>
                <ul>
                  {doctorProfile.qualifications?.map(
                    (eachQualification, index) => (
                      <li
                        key={index}
                        className="text-gray-800 text-lg font-semibold mb-3"
                      >
                        {eachQualification}
                      </li>
                    )
                  )}
                </ul>
                <p className="text-gray-800 text-lg mb-3">
                  Call: {doctorProfile.contact.phone}
                </p>
                <p className="text-gray-800 text-lg mb-3">
                  Email: {doctorProfile.contact.email}
                </p>
                <div
                  className={`text-xs font-semibold flex items-center px-2 py-1 rounded mr-4 mb-4 w-32 h-6
                  ${
                    doctorProfile.availability === "Available Today" &&
                    "bg-green-100 text-green-700"
                  }
                  ${
                    doctorProfile.availability === "On Leave" &&
                    "bg-red-100 text-red-700"
                  }
                  ${
                    doctorProfile.availability === "Fully Booked" &&
                    "bg-yellow-100 text-yellow-700"
                  }
                `}
                >
                  {doctorProfile.availability === "Available Today" && (
                    <>
                      <FaRegDotCircle className="text-green-500 mr-1" />
                      {doctorProfile.availability}
                    </>
                  )}
                  {doctorProfile.availability === "On Leave" && (
                    <>
                      <FaRegTimesCircle className="text-red-500 mr-1" />
                      {doctorProfile.availability}
                    </>
                  )}
                  {doctorProfile.availability === "Fully Booked" && (
                    <>
                      <FaRegClock className="text-yellow-500 mr-1" />
                      {doctorProfile.availability}
                    </>
                  )}
                </div>
                <>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="bg-orange-500 text-white font-semibold text-sm px-4 py-2 rounded-md flex items-center hover:bg-orange-600 transition duration-300"
                  >
                    <SlCalender className="inline mr-2" />
                    Book Appointment
                  </button>

                  {/* Overlay */}
                  {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 px-4">
                      <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg relative">
                        <h2 className="text-xl font-bold mb-4 text-gray-800">
                          Book Appointment
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <input
                            type="text"
                            name="name"
                            placeholder="Patient Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded px-3 py-2"
                          />
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded px-3 py-2"
                          />

                          {/* Date Picker */}
                          <input
                            type="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            required
                            className="w-full px-3 py-2 border rounded-md"
                          />

                          {/* Time Slot Selector */}
                          {selectedDate && timeSlots.length > 0 ? (
                            <select
                              className="w-full px-3 py-2 border rounded-md"
                              value={selectedTime}
                              onChange={(e) => setSelectedTime(e.target.value)}
                              required
                            >
                              <option value="">Select a time</option>
                              {timeSlots.map((time, index) => (
                                <option key={index} value={time}>
                                  {time}
                                </option>
                              ))}
                            </select>
                          ) : selectedDate ? (
                            <p className="text-red-600 text-sm mt-2">
                              No available slots for selected date
                            </p>
                          ) : null}

                          <button
                            type="submit"
                            className="bg-orange-500 text-white px-4 py-2 rounded-md w-full hover:bg-orange-600"
                          >
                            Confirm Appointment
                          </button>

                          {confirmation && (
                            <p className="text-green-600 font-medium text-sm text-center mt-2">
                              {confirmation}
                            </p>
                          )}
                        </form>

                        {/* Close Button */}
                        <button
                          onClick={() => setIsOpen(false)}
                          className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-xl font-bold"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  )}
                </>
              </div>
            </div>
            <div className="rounded-xl shadow-sm border border-gray-200 w-full sm:w-full md:w-2/3 lg:w-2/3">
              <div className="mb-6 px-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Biography Of Dr. Sabrina Khan
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {doctorProfile.about}
                </p>
              </div>
              <div className="mb-6 px-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Educational Background
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {doctorProfile.educationalBackground}
                </p>
              </div>

              <div className="mb-6 px-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Medical Experience &amp; Skills
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {doctorProfile.medicalExperience}
                </p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg shadow-sm mt-8 p-4 w-full lg:w-3/4 h-max">
            <h2 className="font-bold text-xl text-gray-900 mb-2">
              Opening Time
            </h2>
            <div className="flex items-center mb-4">
              <div className="h-1 w-20 bg-orange-500 rounded-l"></div>
              <div className="h-px flex-1 bg-gray-200"></div>
            </div>
            <ul>
              {doctorProfile.workingHours.map((eachItem, index) => (
                <React.Fragment key={index}>
                  <li className="flex justify-between items-center">
                    <p className="text-gray-800">{eachItem.day}</p>
                    <p className="text-gray-500">{eachItem.time}</p>
                  </li>
                  <hr className="border border-gray-200 my-2" />
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorProfile;
