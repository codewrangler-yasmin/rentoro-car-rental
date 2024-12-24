import { Helmet } from "react-helmet-async";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Rentoro Car Rental</title>
      </Helmet>
      <h1>This is home</h1>
      <div className="container mx-auto">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
