import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PopularSpot = ({ spot }) => {
  console.log(spot);
  const { image, tourist_spot_name, country_name, description, _id
  } = spot;
  return (
    <Link to={`/viewDetails/${_id}`} className="p-6 rounded-md shadow-md hover:scale-105 duration-500">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-md h-72"
      />
      <div className="mt-6 mb-2">
        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
          {tourist_spot_name}
        </span>
        <h2 className="text-xl font-semibold tracking-wide uppercase">
          {country_name}
        </h2>
      </div>
      <p>
        {description}
      </p>
    </Link>
  );
};

PopularSpot.propTypes = {
  spot: PropTypes.object,
};

export default PopularSpot;
