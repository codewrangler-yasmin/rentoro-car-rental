import { Helmet } from "react-helmet-async";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { IoCloudUploadOutline } from "react-icons/io5";
import { BsTrash3 } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const UpdateCar = () => {
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const handleRemoveImage = () => {
    setFile(null); // Reset the file state to null
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const carModel = form.carModel.value;
    const rentalPrice = form.rentalPrice.value;
    const availability = form.availability.value;
    const regNumber = form.regNumber.value;
    const features = form.features.value;
    const location = form.location.value;
    const mileage = form.mileage.value;
    const fuelType = form.fuelType.value;
    const transmission = form.transmission.value;
    const color = form.color.value;
    const image = form.image.files[0];
    const formData = {
      carModel,
      rentalPrice,
      availability,
      regNumber,
      features,
      image,
      location,
      mileage,
      fuelType,
      transmission,
      color,
      renter: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      bookingCount: 0,
    };
    console.table(formData);
  };

  return (
    <>
      {/* Helmet used for head management */}
      <Helmet>
        <title>Update Car | Rentoro Car Rental Services</title>
      </Helmet>
      <div className="mx-auto p-10 rounded-2xl border border-gray-200 bg-gray-50 font-accent">
        <h2 className="text-xl font-bold">Update Car Details</h2>
        <p className="text-gray-500 mb-6">
          Update Car Information to Keep Your Listings Accurate
        </p>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              disabled={true}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              disabled={true}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Car Model */}
          <div>
            <label className="block text-sm font-medium mb-1">Car Model</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter car model"
            />
          </div>

          {/* Daily Rental Price */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Daily Rental Price
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter price"
            />
          </div>

          {/* Availability */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Availability
            </label>
            <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select availability</option>
              <option value="available">Available</option>
              <option value="notAvailable">Not Available</option>
            </select>
          </div>

          {/* Vehicle Registration Number */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Vehicle Registration Number
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter registration number"
            />
          </div>

          {/* Features */}
          <div>
            <label className="block text-sm font-medium mb-1">Features</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter features (e.g., GPS, AC)"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter location"
            />
          </div>
          {/* Mileage */}
          <div>
            <label className="block text-sm font-medium mb-1">Mileage</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Mileage"
            />
          </div>
          {/* Fuel Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Fuel Type</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Fuel Type"
            />
          </div>
          {/* Transmission */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Transmission
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Transmission"
            />
          </div>
          {/* Color */}
          <div>
            <label className="block text-sm font-medium mb-1">Color</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Color"
            />
          </div>
          {/* Upload Image */}
          <div className="col-span-1 md:col-span-2">
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<IoCloudUploadOutline />}
            >
              Upload Image
              <VisuallyHiddenInput
                type="file"
                name="image"
                onChange={handleChange}
                multiple
              />
            </Button>
            {file && (
              <div className="relative group w-64 mt-5">
                {/* Dark overlay */}
                <div
                  onClick={handleRemoveImage}
                  className="cursor-pointer absolute inset-0 bg-black opacity-50 group-hover:block hidden rounded-md"
                ></div>
                <img
                  className="w-full h-auto rounded-md"
                  src={file}
                  alt="Uploaded preview"
                />
                {/* Delete button */}
                <button
                  type="button"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={handleRemoveImage}
                >
                  <BsTrash3 />
                </button>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter description"
            ></textarea>
          </div>

          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="btn px-5 text-lg bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateCar;
