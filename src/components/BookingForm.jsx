import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const BookingForm = () => {
  const [value, setValue] = useState(null);
  const [pickupTime, setPickupTime] = useState(null);

  return (
    <>
      <div className="bg-gray-100 shadow-lg rounded-lg p-6">
        {/* Form Section */}
        <form className="mt-6 space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-gray-700 font-medium">
              Email Address
            </label>
            <input
              type="email"
              placeholder="sample@yourcompany.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            />
          </div>

          {/* Pickup Date */}
          <div className="flex items-center gap-3">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Pickup Date
              </label>
              <div className="w-full text-gray-700">
                {/* Date Picker Input Field */}
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  className="z-50"
                >
                  <DatePicker
                    label="Select Date"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    slotProps={{
                      popper: {
                        modifiers: [
                          {
                            name: "preventOverflow",
                            options: {
                              boundary: "viewport",
                            },
                          },
                        ],
                        container: document.getElementById("book_now"), // Attach to modal
                        sx: { zIndex: 9999 },
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div className="w-full">
              {/* Pickup Time */}
              <label className="block text-gray-700 font-medium mb-2">
                Pickup Time
              </label>
              <div className="">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    label="Select Time"
                    value={pickupTime}
                    onChange={(newValue) => setPickupTime(newValue)}
                    slotProps={{
                      popper: {
                        modifiers: [
                          {
                            name: "preventOverflow",
                            options: {
                              boundary: "viewport",
                            },
                          },
                        ],
                        container: document.getElementById("book_now"), // Attach to modal
                        sx: { zIndex: 9999 },
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>

          {/* Request for Booking Button */}
          <button
            type="button"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-medium"
          >
            Request for Booking
          </button>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
