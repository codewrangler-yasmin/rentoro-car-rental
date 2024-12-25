import { Helmet } from "react-helmet-async";
import Reviews from "../components/Reviews";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Promotions from "../components/Promotions";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Rentoro Car Rental</title>
      </Helmet>
      <section>
        <Banner />
      </section>
      <section className="relative h-[300px] -mt-20 bg-gray-100 z-[9999] rounded-tl-[80px] rounded-tr-[80px]">
        <div className="container mx-auto px-6">
          <Features />
        </div>
      </section>
      <section className="py-12"></section>
      <section className="container mx-auto">
        <Reviews />
        <Promotions />
      </section>
    </div>
  );
};

export default Home;
