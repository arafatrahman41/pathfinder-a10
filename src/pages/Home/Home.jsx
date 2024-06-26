import { useLoaderData } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import PopularSpot from "../../components/PopularSpot/PopularSpot";
import TourGallery from "../../components/TourGallery/TourGallery";

const Home = () => {
  const spots = useLoaderData();
  return (
    <div>
      <Slider />
      <TourGallery />
      <div className="container mx-auto px-8 mt-20 pb-20">
        <small className="text-[#37B7C3] uppercase">top destination</small>
        <h2 className="text-4xl font-montserrat font-bold text-[#071952]">
          POPULAR <span className="text-[#37B7C3]">DESTINATION</span>
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {spots.map((spot) => (
            <PopularSpot key={spot._id} spot={spot}></PopularSpot>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
