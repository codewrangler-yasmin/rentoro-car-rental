import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../providers/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {/* Helmet used for head management */}
      <Helmet>
        <title>My Profile | Rentoro Car Rental Services</title>
      </Helmet>
      <div className="p-8 font-accent">
        <h1 className="text-xl font-semibold mb-6">My Profile</h1>

        <div className="max-w-md p-10 rounded-2xl border border-gray-200 bg-gray-50">
          <div className="flex items-center space-x-4">
            {/* Profile Image */}
            <div className="w-16 h-16">
              <img
                src={user ? user?.photoURL : `https://via.placeholder.com/150`} // Replace with actual profile image URL
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {/* Profile Details */}
            <div>
              <h2 className="text-xl font-semibold">
                {user ? user?.displayName : "N/A"}
              </h2>{" "}
              {/* Replace with actual display name */}
              <p className="text-gray-500">{user ? user?.email : "N/A"}</p>{" "}
              {/* Replace with actual email */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
