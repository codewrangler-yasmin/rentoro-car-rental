const AddCar = () => {
  return (
    <div>
      <div className="mx-auto p-10 rounded-2xl border border-gray-200 bg-gray-50 font-accent">
        <h2 className="text-2xl font-bold mb-4">Add Car Details</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          {/* Image URL */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="url"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter image URL"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
