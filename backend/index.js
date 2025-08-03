const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());


const doctorProfiles = [
  {
    id: 1,
    name: "Dr. Aisha Kapoor",
    specialization: "Cardiologist",
    image: "https://res.cloudinary.com/destro001/image/upload/fl_preserve_transparency/v1754149399/Dr._Aisha_Kapoor_br13xk.jpg?_s=public-apps",
    availability: "Available Today",
    fees: 1200,
    experience: "15 years",
    qualifications: [
      "MBBS - AIIMS, Delhi",
      "MD (Cardiology) - PGIMER, Chandigarh",
    ],
    educationalBackground: `Dr. Aisha Kapoor completed her MBBS from AIIMS, New Delhi. She pursued her MD in Cardiology from PGIMER, Chandigarh.`,
    medicalExperience: `She has performed over 1500 angioplasties and worked with Fortis and Apollo hospitals.`,
    languagesSpoken: ["English", "Hindi", "Punjabi"],
    location: "Apollo Hospital, New Delhi",
    workingHours: [
      { id: 1, day: "Monday", time: "7.30 am - 4.00 pm" },
      { id: 2, day: "Tuesday", time: "Closed" },
      { id: 3, day: "Wednesday", time: "8.30 am - 5.00 pm" },
      { id: 4, day: "Thursday", time: "7.30 am - 4.00 pm" },
      { id: 5, day: "Friday", time: "10.30 am - 12.00 pm" },
      { id: 6, day: "Saturday", time: "10.30 am - 12.00 pm" },
      { id: 7, day: "Sunday", time: "Closed" },
    ],
    about: "Highly experienced cardiologist known for diagnostics and empathy.",
    contact: {
      phone: "+91-9876543210",
      email: "aisha.kapoor@example.com",
    },
  },
  {
    id: 2,
    name: "Dr. Rohan Mehta",
    specialization: "Neurologist",
    image: "https://res.cloudinary.com/destro001/image/upload/fl_preserve_transparency/v1754149606/Dr._Rohan_Mehta_wphsmn.jpg?_s=public-apps",
    availability: "Fully Booked",
    fees: 1500,
    experience: "12 years",
    qualifications: [
      "MBBS - KEM Hospital, Mumbai",
      "DM (Neurology) - NIMHANS, Bangalore",
    ],
    educationalBackground: `Graduated with distinction from KEM Hospital and specialized at NIMHANS.`,
    medicalExperience: `Expert in epilepsy and stroke treatment. Worked at Breach Candy and Hinduja hospitals.`,
    languagesSpoken: ["English", "Hindi", "Marathi"],
    location: "Hinduja Hospital, Mumbai",
    workingHours: [
      { id: 1, day: "Monday", time: "9.00 am - 1.00 pm" },
      { id: 2, day: "Tuesday", time: "9.00 am - 1.00 pm" },
      { id: 3, day: "Wednesday", time: "Closed" },
      { id: 4, day: "Thursday", time: "9.00 am - 1.00 pm" },
      { id: 5, day: "Friday", time: "9.00 am - 1.00 pm" },
      { id: 6, day: "Saturday", time: "10.00 am - 1.00 pm" },
      { id: 7, day: "Sunday", time: "Closed" },
    ],
    about: "Dedicated neurologist specializing in epilepsy and migraines.",
    contact: {
      phone: "+91-9988776655",
      email: "rohan.mehta@example.com",
    },
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    specialization: "Dermatologist",
    image: "https://res.cloudinary.com/destro001/image/upload/fl_preserve_transparency/v1754149400/Dr._Priya_Sharma_n0w9lq.jpg?_s=public-apps",
    availability: "Available Today",
    fees: 800,
    experience: "9 years",
    qualifications: [
      "MBBS - Lady Hardinge, Delhi",
      "MD (Dermatology) - Safdarjung Hospital",
    ],
    educationalBackground: `Graduated with honors from Lady Hardinge Medical College.`,
    medicalExperience: `Known for acne and cosmetic dermatology. Conducts workshops on skin care.`,
    languagesSpoken: ["English", "Hindi"],
    location: "Max Healthcare, Delhi",
    workingHours: [
      { id: 1, day: "Monday", time: "11.00 am - 4.00 pm" },
      { id: 2, day: "Tuesday", time: "11.00 am - 4.00 pm" },
      { id: 3, day: "Wednesday", time: "Closed" },
      { id: 4, day: "Thursday", time: "11.00 am - 4.00 pm" },
      { id: 5, day: "Friday", time: "11.00 am - 2.00 pm" },
      { id: 6, day: "Saturday", time: "10.00 am - 1.00 pm" },
      { id: 7, day: "Sunday", time: "Closed" },
    ],
    about: "Skin expert focused on cosmetic and medical dermatology.",
    contact: {
      phone: "+91-9090909090",
      email: "priya.sharma@example.com",
    },
  },
  {
    id: 4,
    name: "Dr. Arjun Nair",
    specialization: "Orthopedic Surgeon",
    image: "https://res.cloudinary.com/destro001/image/upload/fl_preserve_transparency/v1754149400/Dr._Arjun_Nair_hzcnfe.jpg?_s=public-apps",
    availability: "On Leave",
    fees: 2000,
    experience: "18 years",
    qualifications: ["MBBS - JIPMER", "MS (Orthopedics) - CMC Vellore"],
    educationalBackground: `Completed MBBS at JIPMER and MS at CMC Vellore.`,
    medicalExperience: `Specializes in knee and hip replacement. Performed over 500+ surgeries.`,
    languagesSpoken: ["English", "Malayalam", "Hindi"],
    location: "Manipal Hospital, Bangalore",
    workingHours: [
      { id: 1, day: "Monday", time: "Closed" },
      { id: 2, day: "Tuesday", time: "10.00 am - 2.00 pm" },
      { id: 3, day: "Wednesday", time: "10.00 am - 2.00 pm" },
      { id: 4, day: "Thursday", time: "10.00 am - 2.00 pm" },
      { id: 5, day: "Friday", time: "10.00 am - 2.00 pm" },
      { id: 6, day: "Saturday", time: "Closed" },
      { id: 7, day: "Sunday", time: "Closed" },
    ],
    about: "Top joint replacement specialist in South India.",
    contact: {
      phone: "+91-8888888888",
      email: "arjun.nair@example.com",
    },
  },
  {
    id: 5,
    name: "Dr. Meera Joshi",
    specialization: "Neurologist",
    image: "https://res.cloudinary.com/destro001/image/upload/fl_preserve_transparency/v1754149400/Dr._Meera_Joshi_dxtahl.jpg?_s=public-apps",
    availability: "On Leave",
    fees: 700,
    experience: "10 years",
    qualifications: [
      "MBBS - B.J. Medical College, Pune",
      "DCH - Grant Medical College, Mumbai",
    ],
    educationalBackground: `MBBS from Pune and Diploma in Child Health from Mumbai.`,
    medicalExperience: `Expert in child nutrition, immunization, and developmental delays.`,
    languagesSpoken: ["English", "Hindi", "Marathi"],
    location: "Ruby Hall Clinic, Pune",
    workingHours: [
      { id: 1, day: "Monday", time: "9.00 am - 12.00 pm" },
      { id: 2, day: "Tuesday", time: "9.00 am - 12.00 pm" },
      { id: 3, day: "Wednesday", time: "9.00 am - 12.00 pm" },
      { id: 4, day: "Thursday", time: "Closed" },
      { id: 5, day: "Friday", time: "9.00 am - 12.00 pm" },
      { id: 6, day: "Saturday", time: "9.00 am - 12.00 pm" },
      { id: 7, day: "Sunday", time: "Closed" },
    ],
    about: "Friendly and trusted pediatrician for children of all ages.",
    contact: {
      phone: "+91-7878787878",
      email: "meera.joshi@example.com",
    },
  },
  {
    id: 6,
    name: "Dr. Sameer Desai",
    specialization: "ENT Specialist",
    image: "https://res.cloudinary.com/destro001/image/upload/fl_preserve_transparency/v1754149401/Dr._Sameer_Desai_qhg1p4.jpg?_s=public-apps",
    availability: "Fully Booked",
    fees: 1000,
    experience: "11 years",
    qualifications: [
      "MBBS - Seth GS Medical College, Mumbai",
      "MS (ENT) - AIIMS, Delhi",
    ],
    educationalBackground: `Completed MBBS from Seth GS Medical College and ENT specialization from AIIMS.`,
    medicalExperience: `Has treated over 3000+ patients with sinus issues, ear infections, and vertigo.`,
    languagesSpoken: ["English", "Hindi", "Gujarati"],
    location: "Fortis Hospital, Mumbai",
    workingHours: [
      { id: 1, day: "Monday", time: "10.00 am - 3.00 pm" },
      { id: 2, day: "Tuesday", time: "10.00 am - 3.00 pm" },
      { id: 3, day: "Wednesday", time: "10.00 am - 3.00 pm" },
      { id: 4, day: "Thursday", time: "Closed" },
      { id: 5, day: "Friday", time: "10.00 am - 1.00 pm" },
      { id: 6, day: "Saturday", time: "9.00 am - 11.00 am" },
      { id: 7, day: "Sunday", time: "Closed" },
    ],
    about:
      "Well-known ENT specialist focused on patient comfort and precision.",
    contact: {
      phone: "+91-9797979797",
      email: "sameer.desai@example.com",
    },
  },
  {
    id: 7,
    name: "Dr. Kavita Reddy",
    specialization: "Gynecologist",
    image: "https://res.cloudinary.com/destro001/image/upload/fl_preserve_transparency/v1754149915/Dr._Kavita_Reddy_wojpp3.jpg?_s=public-apps",
    availability: "Available Today",
    fees: 950,
    experience: "14 years",
    qualifications: [
      "MBBS - Osmania Medical College, Hyderabad",
      "MS (OBGYN) - Gandhi Medical College",
    ],
    educationalBackground: `Topped her MBBS batch and earned her MS with honors in obstetrics.`,
    medicalExperience: `Specializes in high-risk pregnancies and women's health. Delivered over 2000+ babies.`,
    languagesSpoken: ["English", "Hindi", "Telugu"],
    location: "Apollo Cradle, Hyderabad",
    workingHours: [
      { id: 1, day: "Monday", time: "9.00 am - 2.00 pm" },
      { id: 2, day: "Tuesday", time: "9.00 am - 2.00 pm" },
      { id: 3, day: "Wednesday", time: "Closed" },
      { id: 4, day: "Thursday", time: "9.00 am - 2.00 pm" },
      { id: 5, day: "Friday", time: "9.00 am - 1.00 pm" },
      { id: 6, day: "Saturday", time: "9.00 am - 1.00 pm" },
      { id: 7, day: "Sunday", time: "Closed" },
    ],
    about:
      "Expert in gynecology and obstetrics with over a decade of experience.",
    contact: {
      phone: "+91-9696969696",
      email: "kavita.reddy@example.com",
    },
  },
  {
    id: 8,
    name: "Dr. Vinay Patil",
    specialization: "General Physician",
    image: "https://res.cloudinary.com/destro001/image/upload/fl_preserve_transparency/v1754149406/Dr._Vinay_Patil_gsx3nc.jpg?_s=public-apps",
    availability: "Available Today",
    fees: 600,
    experience: "7 years",
    qualifications: ["MBBS - Government Medical College, Nagpur"],
    educationalBackground: `Completed MBBS with top honors in community medicine.`,
    medicalExperience: `Experienced in treating chronic illnesses like diabetes, hypertension, and general infections.`,
    languagesSpoken: ["English", "Hindi", "Marathi"],
    location: "Care Hospital, Nagpur",
    workingHours: [
      { id: 1, day: "Monday", time: "8.00 am - 12.00 pm" },
      { id: 2, day: "Tuesday", time: "8.00 am - 12.00 pm" },
      { id: 3, day: "Wednesday", time: "8.00 am - 12.00 pm" },
      { id: 4, day: "Thursday", time: "8.00 am - 12.00 pm" },
      { id: 5, day: "Friday", time: "8.00 am - 12.00 pm" },
      { id: 6, day: "Saturday", time: "8.00 am - 11.00 am" },
      { id: 7, day: "Sunday", time: "Closed" },
    ],
    about: "Approachable and experienced GP for everyday health issues.",
    contact: {
      phone: "+91-9595959595",
      email: "vinay.patil@example.com",
    },
  },
  {
    id: 9,
    name: "Dr. Neha Agarwal",
    specialization: "Dermatologist",
    image: "https://res.cloudinary.com/destro001/image/upload/fl_preserve_transparency/v1754149400/Dr._Neha_Agarwal_ipqdsr.jpg?_s=public-apps",
    availability: "Fully Booked",
    fees: 1100,
    experience: "13 years",
    qualifications: [
      "MBBS - Maulana Azad Medical College, Delhi",
      "MD (Psychiatry) - AIIMS, Delhi",
    ],
    educationalBackground: `Gold medalist from MAMC, specialized in Psychiatry from AIIMS.`,
    medicalExperience: `Focused on treating anxiety, depression, and trauma. Works with adolescents and adults.`,
    languagesSpoken: ["English", "Hindi"],
    location: "VIMHANS Hospital, Delhi",
    workingHours: [
      { id: 1, day: "Monday", time: "10.00 am - 4.00 pm" },
      { id: 2, day: "Tuesday", time: "10.00 am - 4.00 pm" },
      { id: 3, day: "Wednesday", time: "Closed" },
      { id: 4, day: "Thursday", time: "10.00 am - 4.00 pm" },
      { id: 5, day: "Friday", time: "10.00 am - 4.00 pm" },
      { id: 6, day: "Saturday", time: "11.00 am - 2.00 pm" },
      { id: 7, day: "Sunday", time: "Closed" },
    ],
    about: "Empathetic psychiatrist helping individuals lead balanced lives.",
    contact: {
      phone: "+91-9191919191",
      email: "neha.agarwal@example.com",
    },
  },
  {
    id: 10,
    name: "Dr. Rajeev Sinha",
    specialization: "Gastroenterologist",
    image: "https://res.cloudinary.com/destro001/image/upload/fl_preserve_transparency/v1754150102/Dr._Rajeev_Sinha_hvgssc.jpg?_s=public-apps",
    availability: "On Leave",
    fees: 1400,
    experience: "16 years",
    qualifications: [
      "MBBS - King George’s Medical University, Lucknow",
      "DM (Gastroenterology) - SGPGI, Lucknow",
    ],
    educationalBackground: `Completed advanced gastroenterology studies at SGPGI after earning MBBS from KGMU.`,
    medicalExperience: `Has conducted 1000+ endoscopies, colonoscopies, and liver biopsies. Published 20+ research papers.`,
    languagesSpoken: ["English", "Hindi"],
    location: "Medanta, Lucknow",
    workingHours: [
      { id: 1, day: "Monday", time: "8.30 am - 1.30 pm" },
      { id: 2, day: "Tuesday", time: "8.30 am - 1.30 pm" },
      { id: 3, day: "Wednesday", time: "8.30 am - 1.30 pm" },
      { id: 4, day: "Thursday", time: "8.30 am - 1.30 pm" },
      { id: 5, day: "Friday", time: "8.30 am - 1.30 pm" },
      { id: 6, day: "Saturday", time: "9.00 am - 12.00 pm" },
      { id: 7, day: "Sunday", time: "Closed" },
    ],
    about:
      "Senior gastroenterologist with expertise in liver and digestive disorders.",
    contact: {
      phone: "+91-9494949494",
      email: "rajeev.sinha@example.com",
    },
  },
];

const doctors = doctorProfiles.map(
  ({ id, name, specialization, image, availability, fees }) => ({
    id,
    name,
    specialization,
    image,
    availability,
    fees,
  })
);

console.log(doctors);
app.get("/doctors", (req, res) => {
  res.json(doctors);
});

app.get("/doctor-profile/:id", (req, res) => {
  const doctorId = parseInt(req.params.id);
  const profile = doctorProfiles.find((doctor) => doctor.id === doctorId);
  res.send(profile);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
