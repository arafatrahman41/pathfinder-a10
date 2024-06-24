import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper,SwiperSlide } from "swiper/react";
import 'animate.css';

// image 
import eiffel from '../../assets/eiffel-tower-france.jpg'
import tower from '../../assets/tower-bridge-england.jpg'
import rome from '../../assets/colosseum-rome-italy.jpg';
import costa from '../../assets/costa-brava-spain.jpg';
import zaandam from '../../assets/zaandam-netherland.jpg';
import lauterbrunnen from '../../assets/lauterbrunnen-switzerland.jpg'

const Slider = () => {
  return (
    <div className='mb-20'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* first slider */}
        <SwiperSlide>
            <div className='h-[80vh] bg-cover bg-center bg-no-repeat' style={{backgroundImage: `linear-gradient(0deg, rgba(235, 244, 246, 0.1), rgba(0, 0, 0, 0.4)), url(${eiffel})`}}>
             <div className='flex flex-col justify-center items-center border h-full'>
             <h2 className='uppercase text-4xl text-[#071952] font-black animate__animated animate__bounce animate__slower'>explore the world with <span className='text-[#37B7C3]'>pathfinder</span></h2>
             <h4 className='text-3xl font-bold text-rose-400 mt-3 animate__animated animate__backInDown animate__slower'>Iconic Paris</h4>
             <p className='text-[#EBF4F6] text-center font-semibold mt-4 md:w-1/2 lg:w-1/3'>Experience the magic of Paris with the breathtaking Eiffel Tower. This iconic landmark offers stunning views of the City of Lights, perfect for romance and adventure</p>
             </div>
            </div>
        </SwiperSlide>
        {/* second slider */}
        <SwiperSlide>
            <div className='h-[80vh] bg-cover bg-center bg-no-repeat' style={{backgroundImage: `linear-gradient(0deg, rgba(235, 244, 246, 0.1), rgba(0, 0, 0, 0.4)), url(${tower})`}}>
             <div className='flex flex-col justify-center items-center border h-full'>
             <h2 className='uppercase text-4xl text-[#071952] font-black animate__animated animate__bounce animate__slower'>explore the world with <span className='text-[#37B7C3]'>pathfinder</span></h2>
             <h4 className='text-3xl font-bold text-yellow-400 mt-3 animate__animated animate__slideInDown animate__slower'>Majestic London</h4>
             <p className='text-[#EBF4F6] text-center font-semibold mt-4 md:w-1/2 lg:w-1/3'>Discover the grandeur of London with the majestic Tower Bridge. An architectural marvel, it stands as a symbol of the city's rich history and vibrant culture</p>
             </div>
            </div>
        </SwiperSlide>
        {/* third slider */}
        <SwiperSlide>
            <div className='h-[80vh] bg-cover bg-center bg-no-repeat' style={{backgroundImage: `linear-gradient(0deg, rgba(235, 244, 246, 0.1), rgba(0, 0, 0, 0.4)), url(${rome})`}}>
             <div className='flex flex-col justify-center items-center border h-full'>
             <h2 className='uppercase text-4xl text-[#071952] font-black animate__animated animate__bounce animate__slower'>explore the world with <span className='text-[#37B7C3]'>pathfinder</span></h2>
             <h4 className='text-3xl font-bold text-amber-400 mt-3 animate__animated animate__jackInTheBox animate__slower'>Ancient Rome</h4>
             <p className='text-[#EBF4F6] text-center font-semibold mt-4 md:w-1/2 lg:w-1/3'>Step back in time and marvel at the Colosseum, the heart of ancient Rome. This monumental amphitheater tells tales of gladiators, emperors, and a bygone era</p>
             </div>
            </div>
        </SwiperSlide>
        {/* forth slider */}
        <SwiperSlide>
            <div className='h-[80vh] bg-cover bg-center bg-no-repeat' style={{backgroundImage: `linear-gradient(0deg, rgba(235, 244, 246, 0.1), rgba(0, 0, 0, 0.4)), url(${zaandam})`}}>
             <div className='flex flex-col justify-center items-center border h-full'>
             <h2 className='uppercase text-4xl text-[#071952] font-black animate__animated animate__bounce animate__slower'>explore the world with <span className='text-[#37B7C3]'>pathfinder</span></h2>
             <h4 className='text-3xl font-bold text-teal-400 mt-3 animate__animated animate__rotateIn animate__slower'>Charming Zaandam</h4>
             <p className='text-[#EBF4F6] text-center font-semibold mt-4 md:w-1/2 lg:w-1/3'>Explore the charming town of Zaandam with its traditional Dutch windmills and picturesque canals. A delightful blend of history and modernity awaits</p>
             </div>
            </div>
        </SwiperSlide>
        {/* fifth slider */}
        <SwiperSlide>
            <div className='h-[80vh] bg-cover bg-center bg-no-repeat' style={{backgroundImage: `linear-gradient(0deg, rgba(235, 244, 246, 0.1), rgba(0, 0, 0, 0.4)), url(${costa})`}}>
             <div className='flex flex-col justify-center items-center border h-full'>
             <h2 className='uppercase text-3xl text-center md:text-4xl text-[#071952] font-black animate__animated animate__bounce animate__slower'>explore the world with <span className='text-[#37B7C3]'>pathfinder</span></h2>
             <h4 className='text-2xl md:text-3xl font-bold text-blue-400 mt-3 animate__animated animate__flip animate__slower'>Sun-Kissed Costa Brava</h4>
             <p className='text-[#EBF4F6] text-center font-semibold mt-4 md:w-1/2 lg:w-1/3'>Bask in the beauty of Costa Brava's sun-kissed beaches and crystal-clear waters. This Mediterranean paradise is perfect for relaxation and exploration</p>
             </div>
            </div>
        </SwiperSlide>
        {/* sixth slider */}
        <SwiperSlide>
            <div className='h-[80vh] bg-cover bg-center bg-no-repeat' style={{backgroundImage: `linear-gradient(0deg, rgba(235, 244, 246, 0.1), rgba(0, 0, 0, 0.4)), url(${lauterbrunnen})`}}>
             <div className='flex flex-col justify-center items-center border h-full'>
             <h2 className='uppercase text-3xl md:text-4xl text-[#071952] font-black animate__animated animate__bounce animate__slower'>explore the world with <span className='text-[#37B7C3]'>pathfinder</span></h2>
             <h4 className='text-2xl md:text-3xl font-bold text-green-400 mt-3 animate__animated animate__fadeInDownBig animate__slower'>Scenic Lauterbrunnen</h4>
             <p className='text-[#EBF4F6] text-center font-semibold mt-4 md:w-1/2 lg:w-1/3'>Immerse yourself in the scenic beauty of Lauterbrunnen, nestled in the Swiss Alps. Known for its stunning waterfalls and lush valleys, it's a nature lover's dream</p>
             </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
