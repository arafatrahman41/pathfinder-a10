import { useLoaderData } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import PopularSpot from "../../components/PopularSpot/PopularSpot";

const Home = () => {
  const spots = useLoaderData();
  return (
    <div>
      <Slider />
      <div className="container mx-auto mt-20 pb-20">
        <small className="text-[#37B7C3]">CHOOSE YOUR PLACE</small>
        <h2 className="text-4xl font-montserrat font-bold text-[#071952]">
          POPULAR <span className="text-[#37B7C3]">TOURS</span>
        </h2>
        <ul>
          {spots.map((spot) => (
            <PopularSpot key={spot._id} spot={spot}></PopularSpot>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
