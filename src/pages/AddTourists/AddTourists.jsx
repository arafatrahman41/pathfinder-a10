import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddTourists = () => {

  const {
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => (
    fetch('http://localhost:5000/touristSpot', {
      method: 'POST', 
      headers: {
        "content-type" : "application/json",
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        Swal.fire({
          title: 'success!',
          text: 'Spot Added Successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      }
    })
  )

  return (
    <div className="flex justify-center container mx-auto py-20 px-8">
      <div className="w-full lg:w-2/3 xl:w-1/2 p-12 space-y-3 rounded-xl bg-[#37B7C3]">
        <h1 className="text-2xl font-bold text-center text-[#EBF4F6] font-montserrat">
          Add Tourist Spot 
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid col-span-1 md:grid-cols-6 gap-6">
            {/* first field */}
            <div className="space-y-1 md:col-span-3 text-sm">
              <label
                htmlFor="spotName"
                className="block text-[#EBF4F6] font-montserrat font-semibold"
              >
                Tourists Spot Name
              </label>
              <input
                type="text"
                name="tourist_spot_name"
                id="spotName"
                placeholder="Enter Your Spot Name"
                className="w-full px-4 py-3 rounded-xl font-roboto" {...register("tourist_spot_name")}
              />
            </div>
            {/* second field */}
            <div className="space-y-1 md:col-span-3 text-sm">
              <label
                htmlFor="countryName"
                className="block text-[#EBF4F6] font-montserrat font-semibold"
              >
                Country Name
              </label>
              <input
                type="text"
                name="country_name"
                id="countryName"
                placeholder="Enter The Country"
                className="w-full px-4 py-3 rounded-xl font-roboto" {...register("country_name")}
              />
            </div>
            {/* third field */}
            <div className="space-y-1 md:col-span-3 text-sm">
              <label
                htmlFor="location"
                className="block text-[#EBF4F6] font-montserrat font-semibold"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Enter Your Location"
                className="w-full px-4 py-3 rounded-xl font-roboto" {...register("location")}
              />
            </div>
            {/* fourth field */}
            <div className="space-y-1 md:col-span-3 text-sm">
              <label
                htmlFor="cost"
                className="block text-[#EBF4F6] font-montserrat font-semibold"
              >
                Average Cost
              </label>
              <input
                type="text"
                name="average_cost"
                id="averageCost"
                placeholder="Average Cost"
                className="w-full px-4 py-3 rounded-xl font-roboto" {...register("average_cost")}
              />
            </div>
            {/* fifth field */}
            <div className="space-y-1 md:col-span-3 text-sm">
              <label
                htmlFor="season"
                className="block text-[#EBF4F6] font-montserrat font-semibold"
              >
                Season
              </label>
              <input
                type="text"
                name="season"
                id="season"
                placeholder="season"
                className="w-full px-4 py-3 rounded-xl font-roboto" {...register("season")}
              />
            </div>
            {/* sixth field */}
            <div className="space-y-1 md:col-span-3 text-sm">
              <label
                htmlFor="time"
                className="block text-[#EBF4F6] font-montserrat font-semibold"
              >
                Travel Time
              </label>
              <input
                type="text"
                name="travel_time"
                id="time"
                placeholder="Travel Time"
                className="w-full px-4 py-3 rounded-xl font-roboto" {...register("travel_time")}
              />
            </div>
            {/* seventh field */}
            <div className="space-y-1 md:col-span-3 text-sm">
              <label
                htmlFor="visitors"
                className="block text-[#EBF4F6] font-montserrat font-semibold"
              >
                Total Visitor Per Year
              </label>
              <input
                type="text"
                name="totalVisitorPerYear"
                id="visitor"
                placeholder="Visitor Per Year"
                className="w-full px-4 py-3 rounded-xl font-roboto" {...register("totalVisitorPerYear")}
              />
            </div>
            {/* eighth field */}
            <div className="space-y-1 md:col-span-3 text-sm">
              <label
                htmlFor="name"
                className="block text-[#EBF4F6] font-montserrat font-semibold"
              >
                Name
              </label>
              <input
                type="name"
                name="name" 
                id="name"
                placeholder="Enter Your Name"
                className="w-full px-4 py-3 rounded-xl font-roboto" {...register("name")}
              />
            </div>
            {/* ninth field */}
            <div className="space-y-1 md:col-span-6 text-sm">
              <label
                htmlFor="email"
                className="block text-[#EBF4F6] font-montserrat font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-3 rounded-xl font-roboto" {...register("email")}
              />
            </div>
            {/* tenth field */}
            <div className="space-y-1 md:col-span-6 text-sm">
              <label
                htmlFor="image"
                className="block text-[#EBF4F6] font-montserrat font-semibold"
              >
                Image
              </label>
              <input
                type="text"
                name="image"
                id="image"
                placeholder="Image URL"
                className="w-full px-4 py-3 rounded-xl font-roboto" {...register("image")}
              />
            </div>
            {/* eleventh field */}
            <div className="space-y-1 md:col-span-6 text-sm">
              <label
                htmlFor="description"
                className="block text-[#EBF4F6] font-montserrat font-semibold"
              >
                Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Short Description"
                className="w-full px-4 py-3 rounded-xl font-roboto" {...register("description")}
              />
            </div>
          </div>
          <button
          className="w-full mt-6 p-3 text-center rounded-xl bg-[#071952] text-[#EBF4F6] font-roboto">
            Add Spot
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTourists;
