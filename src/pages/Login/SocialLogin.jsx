import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import useAuth from "../../hook/useAuth";

const SocialLogin = () => {
    const {googleLogin, twitterLogin, githubLogin} = useAuth();


  return (
    <div className="flex justify-center space-x-4">
      <button onClick={() => googleLogin()} aria-label="Log in with Google" className="p-3 rounded-sm">
        <FaGoogle size={25} />
      </button>
      <button onClick={() => twitterLogin()} aria-label="Log in with Twitter" className="p-3 rounded-sm">
        <FaTwitter size={25} />
      </button>
      <button onClick={() => githubLogin()} aria-label="Log in with GitHub" className="p-3 rounded-sm">
        <FaGithub size={25} />
      </button>
    </div>
  );
};

export default SocialLogin;
