import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { BookingContext } from "../../../../context/BookingContext";

export default function EditBooking({ isOpen, setIsOpen, booking }) {
  const { updateBooking } = useContext(BookingContext);

  if (!isOpen) return null;

  const statusOptions = ["Pending", "Confirmed", "Cancelled"];

  const bookingSchema = Yup.object().shape({
    status: Yup.string().oneOf(statusOptions, "Invalid status").required("Status is required"),
  });

  const formik = useFormik({
    initialValues: { status: booking?.status || "Pending" },
    enableReinitialize: true,
    validationSchema: bookingSchema,
    onSubmit: async (values) => {
      try {
        await updateBooking(booking._id, { status: values.status });
        toast.success("Booking updated successfully");
        setIsOpen(false);
      } catch (err) {
        toast.error("Failed to update booking");
      }
    },
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <div className="bg-white dark:bg-[#10161E] rounded-2xl p-6 w-full max-w-sm shadow-xl relative">
        <h2 className="text-lg font-semibold mb-2 text-black dark:text-white">Edit Booking</h2>
        <p className="text-gray-500 dark:text-gray-300 text-sm mb-4">Change booking status</p>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-black dark:text-white mb-1">Status</label>
            <select
              id="status"
              name="status"
              value={formik.values.status}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border rounded-xl outline-none focus:ring-2 focus:ring-gradient-violet text-sm bg-white dark:bg-[#1B2638] text-black dark:text-white border-gray-300 dark:border-gray-600"
            >
              {statusOptions.map((status) => (
                <option key={status} value={status} className="bg-white dark:bg-[#1B2638] text-black dark:text-white">{status}</option>
              ))}
            </select>
            {formik.touched.status && formik.errors.status && <div className="text-red-500 text-sm mt-1">{formik.errors.status}</div>}
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 border rounded-xl border-gray-300 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm">Cancel</button>
            <button type="submit" className="bg-gradient-to-r from-gradient-violet to-gradient-peach text-white px-4 py-2 rounded-xl shadow-md hover:opacity-90 transition text-sm">Update</button>
          </div>
        </form>

        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-red-600"><IoMdClose size={24} /></button>
      </div>
    </div>
  );
}
