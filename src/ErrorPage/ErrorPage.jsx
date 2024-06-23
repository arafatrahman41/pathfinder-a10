import { Link } from 'react-router-dom';
import errorEarth from '../assets/error-earth.png'

const ErrorPage = () => {
  return (
    <div className="bg-[#EBF4F6] min-h-screen">
      <div className="text-center flex flex-col justify-center items-center min-h-screen gap-6">
        <img src={errorEarth} alt="" />
        <h1 className="text-8xl md:text-[10rem] text-[#088395] font-black font-montserrat">Oops!</h1>
        <h3 className="text-2xl md:text-3xl text-[#071952] font-black font-roboto">404 - <span className="uppercase">page not found</span></h3>
        <Link to='/'>
        <button className='bg-[#37B7C3] text-xl font-roboto text-[#EBF4F6] px-6 py-3 rounded-xl hover:scale-105 hover:opacity-95'>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
