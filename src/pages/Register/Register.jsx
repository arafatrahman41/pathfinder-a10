import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex justify-center container mx-auto py-20 px-8">
      <div className="w-full lg:w-2/3 xl:w-1/2 p-12 space-y-3 rounded-xl bg-[#37B7C3]">
        <h1 className="text-2xl font-bold text-center text-[#EBF4F6] font-montserrat">Register</h1>
        <form noValidate="" action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-[#EBF4F6] font-montserrat">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              className="w-full px-4 py-3 rounded-xl font-roboto"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-[#EBF4F6] font-montserrat">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 rounded-xl font-roboto"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="photo" className="block text-[#EBF4F6] font-montserrat">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="Enter Your Photo URL"
              className="w-full px-4 py-3 rounded-xl font-roboto"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-[#EBF4F6] font-montserrat">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl font-roboto"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-xl bg-[#071952] text-[#EBF4F6] font-roboto">
            Sign in
          </button>
        </form>
        <p className="text-xs text-center sm:px-6 font-roboto pt-8">
          Already have an account?
          <Link to='/login'
            className="hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
    );
};

export default Register;