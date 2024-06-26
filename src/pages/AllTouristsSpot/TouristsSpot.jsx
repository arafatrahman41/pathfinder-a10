import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TouristsSpot = ({ allSpot }) => {
  const {
    _id,
    image,
    tourist_spot_name,
    average_cost,
    totalVisitorPerYear,
    travel_time,
    season,
  } = allSpot;
  return (
    <div className="card card-side bg-base-100 lg:w-1/2 mx-auto shadow-xl">
      <figure>
        <img className="w-96 p-6" src={image} alt="tourist-spots" />
      </figure>
      <div className="card-body">
        <h2 className="card-title uppercase font-montserrat">{tourist_spot_name}</h2>
        <div className="font-roboto">
            <p className="font-medium">Average Cost:  <span className="font-normal">${average_cost}</span></p>
            <p className="font-medium">Total Visitor Per Year: <span className="font-normal">{totalVisitorPerYear}</span></p>
            <p className="font-medium">Travel Time: <span className="font-normal">{travel_time}</span></p>
            <p className="font-medium">Season: <span className="font-normal">{season}</span></p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/viewDetails/${_id}`}>
          <button className="bg-[#37B7C3] text-[#EBF4F6] py-3 px-5 rounded-xl font-roboto">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

TouristsSpot.propTypes = {
  allSpot: PropTypes.object,
};

export default TouristsSpot;
