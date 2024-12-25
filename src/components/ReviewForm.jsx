const ReviewForm = () => {
  return (
    <div className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800">Leave a Review</h2>
      <p className="text-sm text-gray-600 mt-1">
        Your email address will not be published. Required fields are marked *
      </p>

      {/* Form Fields */}
      <div className="mt-8 space-y-4">
        {/* Name & Email */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Ali Tufan"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="creativelayers088@gmail.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium">Title</label>
          <input
            type="text"
            placeholder="Good Cars"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Comment */}
        <div>
          <label className="block text-gray-700 font-medium">Comment</label>
          <textarea
            placeholder="Lorem Ipsum Dolor Sit Amet"
            rows="4"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Post Review <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
