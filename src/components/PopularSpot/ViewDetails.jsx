import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const tourSpot = useLoaderData();
  const { image } = tourSpot;

  return (
    <div>
        
    </div>
  );
};

export default ViewDetails;
