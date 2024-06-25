import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#071952] text-[#EBF4F6] font-roboto">
        <footer className="flex flex-col md:flex-row gap-6 py-10 md:py-20 px-10 container mx-auto">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold md:text-4xl font-montserrat">PathFinder</h2>
          <p className="lg:w-3/4 mt-3">Your guide to exploring Europe hidden gems. Discover unique destinations, detailed travel guides, and inspiring stories to make your journey unforgettable. Follow us on social media for the latest updates and travel tips.</p>
          <div className="flex items-center gap-4 w-full my-6">
            <FaGoogle size={25}/>
            <FaGithub size={25}/>
            <FaTwitter size={25}/>
            <FaFacebook size={25}/>
          </div>
        </div>
        <div className="flex flex-col">
          <h6 className="font-semibold text-xl whitespace-nowrap mb-3 font-montserrat">Quick Links</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Tours</a>
          <a className="link link-hover">Destinations</a>
          <a className="link link-hover">Blog</a>
        </div>
        <div className="lg:pl-8">
          <h2 className="text-xl font-semibold font-montserrat">Subscribe</h2>
          <p className="mt-3 lg:w-2/3">Sign up for our monthly blogletter to stay informed about travel and tours</p>
          <div className="relative">
          <input className="mt-6 py-4 pr-28 rounded-xl" type="email" name="email" id="footerEmail" placeholder="Email Address" />
          <button className="bg-[#37B7C3] rounded-xl px-6 py-3 hover:opacity-95 font-semibold absolute top-7 right-11 md:right-2 lg:right-[215px]">Send</button>
          </div>
        </div>
      </footer>
      <div className="text-center border-t container mx-auto py-8">
      <p>Copyright © {new Date().getFullYear()} - All right reserved by PathFinder</p>
      </div>
    </div>
  );
};

export default Footer;
