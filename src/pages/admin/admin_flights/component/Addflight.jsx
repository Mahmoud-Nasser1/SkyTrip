import { useContext, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FlightContext } from '../../../../context/FlightContext';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import timeConverter from '../../../../hooks/timeConverter';
import countryConverter from "../../../../hooks/countryConverter"

export default function Addflight() {
  const [isOpen, setIsOpen] = useState(false);
  const { addFlight } = useContext(FlightContext);
  
  const flightSchema = Yup.object().shape({
    flightId: Yup.string().required("Flight ID is required"),
    airline: Yup.string().required("Airline is required"),
    from: Yup.string().required("From city is required"),
    to: Yup.string().required("To city is required"),
    departure: Yup.string().required("Departure time is required"),
    arrival: Yup.string().required("Arrival time is required"),
    duration: Yup.string().required("Duration is required"),     
    cabinClass: Yup.string().required("Cabin class is required"), 
    flightType: Yup.string().required("Flight type is required"), 
    capacity: Yup.number().required("Capacity is required").min(1, "Capacity must be at least 1"),
    flightDate: Yup.date().required("Flight Date is required"),
    price: Yup.number().required("Price is required").min(0, "Price must be at least 0")
  });

  const formik = useFormik({
    initialValues: {
  flightId: "",
  airline: "",
  from: "",
  to: "",
  departure: "",
  arrival: "",
  duration: "",
  capacity: "",
  flightDate: "",
  price: "",
  cabinClass: "",
  flightType: "",
    },
    validationSchema: flightSchema,
    onSubmit: async (values, { resetForm }) => {
const payload = {
  flightNumber: values.flightId,
  airline: values.airline,
  departureCity:countryConverter( values.from),
  arrivalCity: countryConverter(values.to),
  departureTime: timeConverter(values.departure),
  arrivalTime: timeConverter(values.arrival),
  duration: values.duration,
  passenger: values.capacity,
  cabinClass: values.cabinClass,
  flightType: values.flightType,
  flightDate: values.flightDate,
  price: values.price,
};

      try {
        await addFlight(payload);
        toast.success("Flight added successfully");
        resetForm();
        setIsOpen(false);
      } catch (err) {
        toast.error("Failed to add flight");
      }
    },
  });
  
  return (
    <div className="flex justify-center">
      <button onClick={() => setIsOpen(true)} className="bg-gradient-to-r from-gradient-violet to-gradient-peach text-white px-4 sm:px-5 py-2 rounded-full shadow-md hover:opacity-90 transition-all text-sm sm:text-base">+ Add New Flight</button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center  z-50 p-4">
          <div className="bg-white rounded-2xl p-4 sm:p-6 w-full max-w-sm sm:max-w-lg shadow-xl relative dark:bg-[#10161E] max-h-[80vh] overflow-y-auto">
            <h2 className="text-lg sm:text-xl font-semibold">Add New Flight</h2>
            <p className="text-gray-500 text-xs sm:text-sm mb-4">Create a new flight schedule</p>

            <form onSubmit={formik.handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label htmlFor="flightId" className="text-sm font-medium text-black dark:text-white">Flight ID</label>
                <input id="flightId" name="flightId" type="text" placeholder="FL006" value={formik.values.flightId} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full mt-1 p-2 border text-black border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-violet text-sm sm:text-base"/>
                {formik.touched.flightId && formik.errors.flightId && <div className="text-red-500 text-sm">{formik.errors.flightId}</div>}
              </div>

              <div>
                <label htmlFor="airline" className="text-sm font-medium text-black dark:text-white">Airline</label>
                <input id="airline" name="airline" type="text" placeholder="Airline name" value={formik.values.airline} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full mt-1 p-2 border text-black border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-peach text-sm sm:text-base"/>
                {formik.touched.airline && formik.errors.airline && <div className="text-red-500 text-sm">{formik.errors.airline}</div>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="from" className="text-sm font-medium text-black dark:text-white">From</label>
                  <input id="from" name="from" type="text" placeholder="New York" value={formik.values.from} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full mt-1 p-2 border text-black border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-violet text-sm sm:text-base"/>
                  {formik.touched.from && formik.errors.from && <div className="text-red-500 text-sm">{formik.errors.from}</div>}
                </div>
                <div>
                  <label htmlFor="to" className="text-sm font-medium text-black dark:text-white">To</label>
                  <input id="to" name="to" type="text" placeholder="London" value={formik.values.to} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full mt-1 p-2 border text-black border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-peach text-sm sm:text-base"/>
                  {formik.touched.to && formik.errors.to && <div className="text-red-500 text-sm">{formik.errors.to}</div>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="departure" className="text-sm font-medium text-black dark:text-white">Departure</label>
                  <input id="departure" name="departure" type="time" value={formik.values.departure} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full text-black mt-1 p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-violet text-sm sm:text-base"/>
                  {formik.touched.departure && formik.errors.departure && <div className="text-red-500 text-sm">{formik.errors.departure}</div>}
                </div>
                <div>
                  <label htmlFor="arrival" className="text-sm font-medium text-black dark:text-white">Arrival</label>
                  <input id="arrival" name="arrival" type="time" value={formik.values.arrival} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full text-black mt-1 p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-peach text-sm sm:text-base"/>
                  {formik.touched.arrival && formik.errors.arrival && <div className="text-red-500 text-sm">{formik.errors.arrival}</div>}
                </div>
              </div>
              
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
              <div>
    <label htmlFor="cabinClass" className="text-sm font-medium text-black dark:text-white">Cabin Class</label>
    <select
      id="cabinClass"
      name="cabinClass"
      value={formik.values.cabinClass}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className="w-full mt-1 p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-violet text-black text-sm sm:text-base"
    >
      <option value="">Select Cabin Class</option>
      <option value="Economy">Economy</option>
      <option value="Business">Business</option>
      <option value="First Class">First Class</option>
    </select>
    {formik.touched.cabinClass && formik.errors.cabinClass && <div className="text-red-500 text-sm">{formik.errors.cabinClass}</div>}
              </div>
              
              <div>
    <label htmlFor="flightType" className="text-sm font-medium text-black dark:text-white">Flight Type</label>
    <select
      id="flightType"
      name="flightType"
      value={formik.values.flightType}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className="w-full mt-1 p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-violet text-black text-sm sm:text-base"
    >
      <option value="">Select Flight Type</option>
      <option value="Non-stop">Non-stop</option>
      <option value="1 Stop">1 Stop</option>
      <option value="2 Stops">2 Stops</option>
    </select>
    {formik.touched.flightType && formik.errors.flightType && <div className="text-red-500 text-sm">{formik.errors.flightType}</div>}
              </div>
              </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
              <div>
                <label htmlFor="capacity" className="text-sm font-medium text-black dark:text-white">Capacity</label>
                <input id="capacity" name="capacity" type="number" placeholder="200" min="1" value={formik.values.capacity} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full mt-1 p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-violet text-black text-sm sm:text-base"/>
                {formik.touched.capacity && formik.errors.capacity && <div className="text-red-500 text-sm">{formik.errors.capacity}</div>}
              </div>
              
              <div>
  <label htmlFor="flightDate" className="text-sm font-medium text-black dark:text-white">Flight Date</label>
  <input id="flightDate" name="flightDate" type="date" value={formik.values.flightDate} onChange={formik.handleChange} onBlur={formik.handleBlur}className="w-full mt-1 p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-violet text-black text-sm sm:text-base"/>
  {formik.touched.flightDate && formik.errors.flightDate && (
    <div className="text-red-500 text-sm">{formik.errors.flightDate}</div>
  )}
              </div>
            </div>


          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
            
            <div>
  <label htmlFor="price" className="text-sm font-medium text-black dark:text-white">Price</label>
  <input id="price" name="price" type="number" min="0" placeholder="100" value={formik.values.price} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full mt-1 p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-violet text-black text-sm sm:text-base"/>
  {formik.touched.price && formik.errors.price && (<div className="text-red-500 text-sm">{formik.errors.price}</div>)}
            </div>

            <div>
  <label htmlFor="duration" className='text-sm font-medium text-black dark:text-white'>Duration</label>
  <input id="duration" name="duration" type="text" placeholder="5h 20m" value={formik.values.duration} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full mt-1 p-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-gradient-violet text-black text-sm sm:text-base"/>
  {formik.touched.duration && formik.errors.duration && (<div className="text-red-500 text-sm">{formik.errors.duration}</div>)}
</div>

            </div>
            
              <div className="flex flex-col sm:flex-row justify-end gap-2 pt-4">
                <button type="button" onClick={() => setIsOpen(false)} className="px-3 sm:px-4 py-2 border text-black dark:text-white border-gray-300 rounded-xl hover:bg-gray-100 transition text-sm sm:text-base">Cancel</button>
                <button type="submit" className="bg-gradient-to-r from-gradient-violet to-gradient-peach text-white px-3 sm:px-4 py-2 rounded-xl shadow-md hover:opacity-90 transition text-sm sm:text-base">Add Flight</button>
              </div>
              
            </form>
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-red-600"><IoMdClose size={24}/></button>
          </div>
        </div>
      )}
    </div>
  );
}
