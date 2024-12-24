import { Link } from "react-router-dom";

const MyCars = () => {
  // Static car data
  const cars = [
    {
      id: 1,
      image: "https://via.placeholder.com/80",
      model: "Mercedes-Benz C Class",
      dailyPrice: "$399",
      availability: "Available",
      dateAdded: "2023-12-20",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/80",
      model: "BMW 5 Series",
      dailyPrice: "$450",
      availability: "Unavailable",
      dateAdded: "2023-12-18",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/80",
      model: "Audi A4",
      dailyPrice: "$350",
      availability: "Available",
      dateAdded: "2023-12-15",
    },
  ];

  return (
    <div className="p-10 rounded-2xl border border-gray-200 bg-gray-50  font-accent">
      {/* Sorting Options */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-700">My Listed Cars</h2>
        <select
          className="p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue="newest"
        >
          <option value="">Sort By Price/Date</option>
          <option value="newest">Newest By Date</option>
          <option value="oldest">Oldest By Date</option>
          <option value="lowestPrice">Lowest By Price</option>
          <option value="highestPrice">Highest By Price</option>
        </select>
      </div>

      {/* Display No Cars */}
      {cars.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-lg text-gray-500">
            No cars available.{" "}
            <Link
              to="/addCar"
              className="text-blue-500 font-bold hover:underline"
            >
              Add a Car
            </Link>
          </p>
        </div>
      ) : (
        <>
          {/* Table Header */}
          <div className="grid grid-cols-6 gap-4 px-6 py-3 text-gray-600 bg-blue-50 rounded-lg font-semibold">
            <div>Car Image</div>
            <div>Car Model</div>
            <div>Daily Rental Price</div>
            <div>Availability</div>
            <div>Date Added</div>
            <div>Action</div>
          </div>

          {/* Table Rows */}
          {cars.map((car) => (
            <div
              key={car.id}
              className="grid grid-cols-6 gap-4 items-center px-6 py-4 bg-white rounded-lg shadow-sm my-2"
            >
              {/* Car Image */}
              <div>
                <img
                  src={car.image}
                  alt={car.model}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </div>

              {/* Car Model */}
              <div>{car.model}</div>

              {/* Daily Rental Price */}
              <div>{car.dailyPrice}</div>

              {/* Availability */}
              <div
                className={`font-semibold ${
                  car.availability === "Available"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {car.availability}
              </div>

              {/* Date Added */}
              <div>{car.dateAdded}</div>

              {/* Action */}
              <div className="flex gap-3">
                <button className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.5 4a.5.5 0 01.5.5V5h6v-.5a.5.5 0 011 0V5h1.5A1.5 1.5 0 0117 6.5v1a.5.5 0 01-1 0v-1H4v1a.5.5 0 11-1 0v-1A1.5.5 0 014.5 5H6v-.5a.5.5 0 011-.5zm8.828 3H4.172L5 16.828c.073.48.482.857.972.857h7.056c.49 0 .899-.378.972-.857L15.328 7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button className="p-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.414 1.586a2 2 0 00-2.828 0L13.5 2.672 16.328 5.5l1.086-1.086a2 2 0 000-2.828z" />
                    <path
                      fillRule="evenodd"
                      d="M11 6l-9.707 9.707a1 1 0 001.414 1.414L6 13.414l2.586 2.586 7.293-7.293L11 6zm-7.586 8.586L11 7l2.586 2.586L8 16H3.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default MyCars;
