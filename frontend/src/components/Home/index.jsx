import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaRegDotCircle, FaRegTimesCircle, FaRegClock } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
const Home = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true); // start loading
      try {
        const response = await fetch("http://localhost:3000/doctors");
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
      } finally {
        setLoading(false); // end loading
      }
    };

    fetchDoctors();
  }, []);

  return (
    <>
      <nav>
        <Link to="/">
          <img src="/logo.jpg" className="w-32 ml-10" />
        </Link>
      </nav>
      <div className="min-h-screen bg-white flex flex-col items-center p-4 text-center">
        <h1 className="text-4xl font-bold text-orange-500 mb-4 mt-10">
          Find and Book Appointments with Trusted Doctors
        </h1>
        <p className="text-lg text-gray-600 font-bold max-w-2xl">
          Explore doctors by specialization, check their availability, and
          schedule your visit — all in a few clicks.
        </p>
        <input
          type="text"
          placeholder="Search by name or specialization"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mt-6 px-4 py-2 border rounded-md w-full max-w-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <div className="cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 w-full">
          {loading ? (
            <div role="status" className="flex justify-center w-screen">
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-orange-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            doctors
              .filter((doctor) => {
                const query = searchQuery.toLowerCase();
                return (
                  doctor.name.toLowerCase().includes(query) ||
                  doctor.specialization.toLowerCase().includes(query)
                );
              })
              .map((eachDoctor) => (
                <div
                  key={eachDoctor.id}
                  className="card bg-white shadow-lg rounded-lg flex flex-col h-[400px]"
                >
                  <img
                    src={eachDoctor.image}
                    alt={eachDoctor.name}
                    className="h-56 object-cover object-top rounded-t-lg mb-4"
                  />
                  <div className="flex justify-between items-center mb-4">
                    <div className="border-l-2 border-orange-600 pl-3">
                      <span className="text-orange-600 font-semibold">
                        {eachDoctor.specialization}
                      </span>
                    </div>

                    <div
                      className={`text-xs font-semibold flex items-center px-2 py-1 rounded mr-4
                  ${
                    eachDoctor.availability === "Available Today" &&
                    "bg-green-100 text-green-700"
                  }
                  ${
                    eachDoctor.availability === "On Leave" &&
                    "bg-red-100 text-red-700"
                  }
                  ${
                    eachDoctor.availability === "Fully Booked" &&
                    "bg-yellow-100 text-yellow-700"
                  }`}
                    >
                      {eachDoctor.availability === "Available Today" && (
                        <>
                          <FaRegDotCircle className="text-green-500 mr-1" />
                          {eachDoctor.availability}
                        </>
                      )}
                      {eachDoctor.availability === "On Leave" && (
                        <>
                          <FaRegTimesCircle className="text-red-500 mr-1" />
                          {eachDoctor.availability}
                        </>
                      )}
                      {eachDoctor.availability === "Fully Booked" && (
                        <>
                          <FaRegClock className="text-yellow-500 mr-1" />
                          {eachDoctor.availability}
                        </>
                      )}
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 text-left px-4">
                    {eachDoctor.name}
                  </h2>
                  <hr className="border-t border-dotted border-gray-400 pt-2 mx-3" />
                  <div className="flex items-center justify-between pb-4 px-3">
                    <div className="pl-2">
                      <p className="text-gray-600 text-sm mb-2">
                        Consultation Fees
                      </p>
                      <p className="text-orange-600 text-xl font-bold mb-0 text-left">
                        Rs. {eachDoctor.fees}
                      </p>
                    </div>
                    <Link to={`/doctor-profile/${eachDoctor.id}`}>
                      <button className="bg-orange-500 text-white text-sm px-3 py-2 rounded-md flex items-center hover:bg-orange-600 transition duration-300">
                        <SlCalender className="inline mr-2" />
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
