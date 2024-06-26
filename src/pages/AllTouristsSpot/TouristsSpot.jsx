import PropTypes from "prop-types";

const TouristsSpot = ({ allSpot }) => {
  const {image} = allSpot
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img 
        className="w-96"
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

TouristsSpot.propTypes = {
  allSpot: PropTypes.object,
};

export default TouristsSpot;
