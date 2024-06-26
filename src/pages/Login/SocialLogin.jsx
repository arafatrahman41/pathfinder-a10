import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import useAuth from "../../hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleLogin, twitterLogin, githubLogin } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(from);
        toast.success("User Added Successfully");
      }
    });
  };

  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={() => handleSocialLogin(googleLogin)}
        aria-label="Log in with Google"
        className="p-3 rounded-sm"
      >
        <FaGoogle size={25} />
      </button>
      <button
        onClick={() => handleSocialLogin(twitterLogin)}
        aria-label="Log in with Twitter"
        className="p-3 rounded-sm"
      >
        <FaTwitter size={25} />
      </button>
      <button
        onClick={() => handleSocialLogin(githubLogin)}
        aria-label="Log in with GitHub"
        className="p-3 rounded-sm"
      >
        <FaGithub size={25} />
      </button>
    </div>
  );
};

export default SocialLogin;
