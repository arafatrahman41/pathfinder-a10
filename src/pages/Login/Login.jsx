import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { signInUser } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          toast.success("Logged In Success");
        }
      })
      .catch((error) => {
        if (error) {
          toast.error(error.message);
        }
      });
  };
  return (
    <div className="flex justify-center container mx-auto py-20 px-8">
      <div className="w-full lg:w-2/3 xl:w-1/2 p-12 space-y-3 rounded-xl bg-[#37B7C3]">
        <h1 className="text-2xl font-bold text-center text-[#EBF4F6] font-montserrat">
          Login
        </h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label
              htmlFor="email"
              className="block text-[#EBF4F6] font-montserrat"
            >
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
            <label
              htmlFor="password"
              className="block text-[#EBF4F6] font-montserrat"
            >
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
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16"></div>
          <p className="px-3 text-sm font-roboto">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16"></div>
        </div>
        <SocialLogin />
        <p className="text-xs text-center sm:px-6 font-roboto">
          Don't have an account?
          <Link to="/register" className="hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
