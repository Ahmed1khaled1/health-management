import React, { useContext, useEffect, useState } from "react";
import Hero from "../components/Hero";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Li from "../components/common/Li";
import Button from "../components/common/Button";

const Appointments = () => {
  const { doctors, currency } = useContext(AppContext);
  const { docId } = useParams();
  const [docInfo, setDocInfo] = useState(null);
  // const [docSlots, setDocSlots] = useState([]);
  // const [slotIndex, setSlotIndex] = useState(0);
  // const [slotTime, setSlotTime] = useState("");

  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const fetchDocData = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docId, docInfo);
  };

  const generateTimeSlots = () => {
    let timeSlots = [];
    for (let hour = 10; hour < 21; hour++) {
      let date = new Date();
      date.setHours(hour, 0);
      timeSlots.push(
        date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );

      date.setMinutes(30);
      timeSlots.push(
        date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    }
    return timeSlots;
  };

  console.log(generateTimeSlots());
  const times = generateTimeSlots();

  // const getAvailableSlotes = async () => {
  //   setDocSlots([]);
  //   //getting current date
  //   let today = new Date();

  //   for (let i = 0; i < 7; i++) {
  //     //getting date with index
  //     let currentDate = new Date(today);
  //     currentDate.setDate(today.getDate() + i);

  //     //setting end time of the date with index
  //     let endTime = new Date();
  //     endTime.setDate(today.getDate() + i);
  //     endTime.setHours(21, 0, 0, 0);

  //     if (today.getDate() === currentDate.getDate()) {
  //       currentDate.setHours(
  //         currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
  //       );
  //       currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
  //     } else {
  //       currentDate.setHours(10);
  //       currentDate.setMinutes(0);
  //     }

  //     let timeSlots = []

  //     while(currentDate < endTime){
  //       let formatedTime = currentDate.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})

  //       //add slots to array
  //       timeSlots.push({
  //         dateTime:new Date(currentDate),
  //         time:formatedTime
  //       })

  //       // increament time by 30 min
  //       currentDate.setMinutes(currentDate.getMinutes() + 30)
  //     }

  //     setDocSlots(prev =>([...prev,timeSlots]))
  //   }
  // };

  useEffect(() => {
    fetchDocData();
  }, [doctors, docId]);

  // useEffect(() => {
  //   getAvailableSlotes();
  // }, [docInfo]);

  useEffect(() => {}, []);

  return (
    docInfo && (
      <div>
        <Hero titlePage="Team Detail" />
        <div className="w-full md:max-w-11/12 mx-auto flex flex-col lg:flex-row gap-7 p-7 md:px-10 lg:px-20 my-10 lg:my-10">
          {/* left */}
          <div className="w-full lg:w-1/3 max-w-lg mx-auto">
            <div className="w-full  bg-cyan-100/40 rounded-xl mb-5">
              <img src={docInfo.image} alt="doctorPhoto" className="w-full" />
            </div>
            <div className="flex flex-col gap-5 bg-cyan-500/10 p-5 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="bg-white p-4 rounded-full text-cyan-500  hover:text-white hover:bg-second">
                  <MapPin />
                </div>
                <div>
                  <p className="font-bold text-gray-800">Address</p>
                  <p className="text-gray-500 ">{docInfo.address.line1}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white p-4 rounded-full text-cyan-500  hover:text-white hover:bg-second">
                  <PhoneCall />
                </div>
                <div>
                  <p className="font-bold text-gray-800">Call Us</p>
                  <p className="text-cyan-500 ">+1 123 456 7890 </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white p-4 rounded-full text-cyan-500  hover:text-white hover:bg-second">
                  <Mail />
                </div>
                <div>
                  <p className="font-bold text-gray-800">Send us a Mail</p>
                  <p className="text-cyan-500 ">email@domain.com </p>
                </div>
              </div>
            </div>
          </div>
          {/* right  */}
          <div className="w-full lg:w-2/3 max-w-lg lg:max-w-3xl mx-auto ">
            <h2 className="text-2xl md:text-4xl font-bold text-primary">
              {docInfo.name}
            </h2>
            <p className=" text-second mt-3">{docInfo.degree}</p>
            <p className="text-gray-600 mt-3">{docInfo.about} </p>
            <table className="w-full text-left text-gray-700">
              <tbody>
                <tr>
                  <td className="p-3 border-b font-semibold border-gray-300">
                    Specialty
                  </td>
                  <td className="p-3 border-b border-gray-300">
                    {docInfo.speciality}
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="p-3 border-b font-semibold border-gray-300">
                    Degrees
                  </td>
                  <td className="p-3 border-b border-gray-300 text-cyan-500">
                    {docInfo.degree}
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b font-semibold border-gray-300">
                    Experience
                  </td>
                  <td className="p-3 border-b border-gray-300">
                    {docInfo.experience}
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="p-3 font-semibold  border-gray-300">Fees</td>
                  <td className="p-3  border-gray-300">
                    {currency}
                    {docInfo.fees}{" "}
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="text-2xl text-primary font-bold my-5">
              Professional Skills{" "}
            </p>

            <ul className="list-none grid grid-cols-1 sm:grid-cols-2 w-full text-gray-800 font-medium space-y-2 ">
              <Li text="Radiant Skin Dermatology" />
              <Li text="Laser Resurfacing" />
              <Li text="Flawless Dermatology" />
              <Li text="Refined Skin Dermatology" />
              <Li text="Luminous Dermatology" />
              <Li text="Anti Aging" />
            </ul>

            <form className="bg-second p-7 my-7 pb-10 rounded-2xl text-white w-full max-w-">
              <div className="mb-10">
                <h2 className="font-bold text-3xl">Book Your Appointment</h2>
              </div>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 space-y-3">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className=" w-full h-12 border-b-2 border-white focus:border-amber-200 bg-second py-2 px-3 text-white focus:outline-none focus:bg-second"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className=" w-full h-12 border-b-2 border-white focus:border-amber-200 bg-second py-2 px-3 text-white focus:outline-none focus:bg-second"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className=" w-full h-12 border-b-2 border-white focus:border-amber-200 bg-second py-2 px-3 text-white focus:outline-none focus:bg-second"
                />
                <input
                  type="numeric"
                  placeholder="Phone Number"
                  required
                  className=" w-full h-12 border-b-2 border-white focus:border-amber-200 bg-second py-2 px-3 text-white focus:outline-none focus:bg-second"
                />
                <div className="w-full flex items-center justify-between">
                  <label> Choose day: {selectedDay || "Not Choosen"}</label>
                  <select
                    onChange={(e) => setSelectedDay(e.target.value)}
                    className="text-primary"
                  >
                    <option value="">
                      Choose day
                    </option>
                    {weekDays.map((day, index) => (
                      <option key={index} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="w-full flex items-center justify-between mb-5">
                  <label>Choose time: {selectedTime || "Not Choosen"} </label>
                  <select
                    className="text-primary"
                    onChange={(e) => setSelectedTime(e.target.value)}
                    disabled={!selectedDay}
                  >
                    <option value="">Choose time </option>
                    {times.map((time, index) => (
                      <option key={index} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <Button text="Book" bg="bg-primary" />
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default Appointments;
