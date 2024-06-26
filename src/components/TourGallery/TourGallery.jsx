import franceTour from "../../assets/tourist-places-in-france.jpg";
import italyTour from "../../assets/italy.jpg"
import spainTour from "../../assets/spain-plaza-espana-parque-maria-luisa.jpg"
import switzTour from "../../assets/switzerland.jpg"
import netherTour from "../../assets/netherland.jpg"
import englandTour from "../../assets/Stonehenge_england.jpg"
import costa from "../../assets/costa-brava-img.jpg"
import village from "../../assets/lauterbrunnen-village.jpg"
import londonEye from "../../assets/London_Eye.jpeg"
import netherFromSky from "../../assets/netherland-from-sky.jpg"

const TourGallery = () => {
  return (
    <div className="container mx-auto">
        <small className="text-[#37B7C3] uppercase">find your place</small>
        <h2 className="text-4xl font-bold font-montserrat text-[#071952] uppercase">Tourist <span className="text-[#37B7C3]">Gallery</span></h2>
      <section className="py-6">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src={netherFromSky}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 object-cover object-center aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src={italyTour}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src={spainTour}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src={switzTour}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src={netherTour}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src={englandTour}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src={village}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src={londonEye}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src={franceTour}
          />
          <img
            src={costa}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3  aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default TourGallery;
