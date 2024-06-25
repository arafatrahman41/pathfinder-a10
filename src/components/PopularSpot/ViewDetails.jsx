import { FaMapLocationDot } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const tourSpot = useLoaderData();

  const {
    tourist_spot_name,
    image,
    country_name,
    description,
    location,
    average_cost,
    season,
    travel_time,
    totalVisitorPerYear,
  } = tourSpot;

  return (
    <div className="py-20 container mx-auto px-8">
      <section>
        <h2 className="text-2xl md:text-4xl font-bold uppercase text-[#071952] mb-8 font-montserrat">
          {tourist_spot_name}
        </h2>
        <img
          className="w-full object-cover object-center h-[50vh] lg:h-[70vh] rounded-md"
          src={image}
          alt=""
        />
      </section>
      <section className="my-8">
        <div className="flex items-center gap-8">
          <h3 className="text-2xl font-montserrat font-semibold capitalize text-[#071952]">
            {country_name}
          </h3>
          <div className="flex items-center gap-2">
            <FaMapLocationDot size={25} color="#37B7C3" />
            <h2 className="text-xl font-semibold font-montserrat text-[#37B7C3]">
              {location}
            </h2>
          </div>
        </div>
        <p className="font-roboto">{description}</p>
      </section>
      <section className="bg-[#37B7C3] rounded-xl w-72 mx-auto text-center my-8 text-[#EBF4F6] py-6 space-y-2">
        <p className="font-roboto font-medium">Average Cost: $<span className="font-base">{average_cost}</span></p>
        <p className="font-roboto font-medium">Best Time to Visit: <span className="font-base">{season}</span></p>
        <p className="font-roboto font-medium">Travel Time: <span className="font-base">{travel_time}</span></p>
        <p className="font-roboto font-medium">Total Visitors Per Year: <span className="font-base">{totalVisitorPerYear}</span></p>
      </section>
    </div>
  );
};

export default ViewDetails;
