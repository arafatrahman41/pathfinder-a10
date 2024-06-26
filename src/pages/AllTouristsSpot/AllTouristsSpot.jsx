import { useLoaderData } from "react-router-dom";
import TouristsSpot from "./TouristsSpot";

const AllTouristsSpot = () => {
  const allSpots = useLoaderData();
  console.log(allSpots);
  return (
    <div>
      <h2></h2>
      <div className="container mx-auto px-8 py-20">
        <ul className="space-y-6">{allSpots.map(allSpot => <TouristsSpot key={allSpot._id} allSpot={allSpot}></TouristsSpot>)}</ul>
      </div>
    </div>
  );
};

export default AllTouristsSpot;
