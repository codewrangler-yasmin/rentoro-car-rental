import PuffLoader from "react-spinners/PuffLoader";
const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <PuffLoader
        color="#405FF2"
        cssOverride={null}
        loading
        size={100}
        speedMultiplier={2}
      />
    </div>
  );
};

export default LoadingSpinner;
