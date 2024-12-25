import { MdOutlineSupportAgent } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FaCar } from "react-icons/fa";

const Features = () => {
  return (
    <section className="pt-24 text-primary absolute pb-12 border-b border-gray-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 border-b border-gray-300 pb-6">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col border-r border-dotted border-gray-400">
            <div className="text-6xl text-blue-400 mb-4">
              <FaCar />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Extensive Car Selection:
            </h3>
            <p className="text-gray-600">
              Choose from a diverse fleet to match your style and needs.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col border-r border-dotted border-gray-400">
            <div className="text-6xl text-pink-400 mb-4">
              <GiReceiveMoney />
            </div>
            <h3 className="text-xl font-semibold mb-2">Value for Money: </h3>
            <p className="text-gray-600">
              Affordable rates with no hidden fees, ensuring great deals every
              time.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col border-r border-dotted border-gray-400">
            <div className="text-6xl text-purple-400 mb-4">
              <HiOutlineClipboardDocumentList />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Hassle-Free Reservations:
            </h3>
            <p className="text-gray-600">
              Simplified booking process designed for your convenience.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col">
            <div className="text-6xl text-green-400 mb-4">
              <MdOutlineSupportAgent />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Dedicated Support Team:
            </h3>
            <p className="text-gray-600">
              Reliable assistance around the clock for a worry-free experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
