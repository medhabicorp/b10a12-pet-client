import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import GoogleLogin from "../../hooks/GoogleLogin";
import useAuth from "../../hooks/useAuth";
import GithubLogin from "../../hooks/GithubLogin";
import loginImg from "../../assets/login.jpg";

const Login = () => {
  const { userLoginWithEmail, setUser } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLoginWithEmail(email, password)
      .then((result) => {
        setUser(result.user);
        e.target.reset();
        enqueueSnackbar(`Welcome, ${result.user.displayName}!`, {
          variant: "success",
          autoHideDuration: 2000,
        });
        navigate(from, { replace: true });
      })
      .catch(() =>
        enqueueSnackbar("Invalid credentials. Try again!", {
          variant: "error",
          autoHideDuration: 4000,
        })
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex w-full max-w-4xl">
        {/* Left Side - Image Section */}
        <div className="w-1/2 hidden md:flex items-center justify-center">
          <img src={loginImg} alt="Login" className="rounded-lg" />
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            Welcome Back
          </h2>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-base font-medium text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-700 text-white"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-base font-medium text-white">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-700 text-white"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 text-white font-semibold rounded-lg bg-[#0b4b2c] cursor-pointer"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="border-t border-gray-400 flex-grow"></div>
            <span className="mx-2 text-sm text-gray-400">or</span>
            <div className="border-t border-gray-400 flex-grow"></div>
          </div>

          {/* Social Login */}
          <div className="flex items-center space-x-4">
            <GoogleLogin />
            <GithubLogin />
          </div>

          <p className="text-center text-sm mt-4 text-white">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-400 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
