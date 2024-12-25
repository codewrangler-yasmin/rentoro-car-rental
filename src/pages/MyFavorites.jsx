import { BsTrash3Fill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyFavorites = () => {
  // Static favorite car data
  const favoriteCars = [
    {
      id: 1,
      image: "https://via.placeholder.com/80",
      model: "Mercedes-Benz G Wagon",
      dailyPrice: "$599",
      availability: "Available",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/80",
      model: "Porsche 911",
      dailyPrice: "$750",
      availability: "Unavailable",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/80",
      model: "Range Rover Sport",
      dailyPrice: "$680",
      availability: "Available",
    },
  ];

  return (
    <div className="p-10 rounded-2xl border border-gray-200 bg-gray-50 font-accent">
      {/* Title */}
      <h2 className="text-xl font-bold text-gray-700 flex gap-3">
        My Favorite Cars
        <span className="bg-blue-200 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
          0 Favorites
        </span>
      </h2>
      <p className="text-gray-500 mb-6">
        Manage and Review Your Saved Favorites.
      </p>

      {/* Display No Favorites */}
      {favoriteCars.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-lg text-gray-500">
            No favorite cars available.{" "}
            <Link
              to="/cars"
              className="text-blue-500 font-bold hover:underline"
            >
              Browse Cars
            </Link>
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          {/* Table */}
          <table className="w-full border-collapse border border-gray-200 rounded-lg shadow-sm">
            {/* Table Header */}
            <thead className="bg-blue-50">
              <tr>
                <th className="px-6 py-3 text-left text-gray-600 font-semibold border-b"></th>
                <th className="px-6 py-3 text-left text-gray-600 font-semibold border-b">
                  Car Model
                </th>
                <th className="px-6 py-3 text-left text-gray-600 font-semibold border-b">
                  Daily Rental Price
                </th>
                <th className="px-6 py-3 text-left text-gray-600 font-semibold border-b">
                  Availability
                </th>
                <th className="px-6 py-3 text-left text-gray-600 font-semibold border-b">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {favoriteCars.map((car) => (
                <tr key={car.id} className="bg-white hover:bg-gray-50">
                  {/* Car Image */}
                  <td className="px-6 py-4 border-b">
                    <img
                      src={car.image}
                      alt={car.model}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </td>
                  {/* Car Model */}
                  <td className="px-6 py-4 border-b">{car.model}</td>
                  {/* Daily Rental Price */}
                  <td className="px-6 py-4 border-b">{car.dailyPrice}</td>
                  {/* Availability */}
                  <td
                    className={`px-6 py-4 border-b font-semibold ${
                      car.availability === "Available"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {car.availability}
                  </td>
                  {/* Actions */}
                  <td className="px-6 py-4 border-b">
                    <div className="flex gap-3">
                      {/* View Button */}
                      <Link
                        to={`/cars/${car.id}`}
                        className="p-2 text-white bg-green-500 rounded-full hover:bg-green-600 flex items-center justify-center"
                      >
                        <FaEye />
                      </Link>
                      {/* Delete Button */}
                      <button className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600">
                        <BsTrash3Fill />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyFavorites;
