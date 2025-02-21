import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import GoogleLogin from "../../hooks/GoogleLogin";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import GithubLogin from "../../hooks/GithubLogin";
import registerImg from "../../assets/register.jpg";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { userRegisterWithEmail, userProfileUpdate, setUser } = useAuth();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    userRegisterWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        userProfileUpdate({ displayName: name, photoURL: photo })
          .then(() => {
            const userInfo = { name, email, photo, role: "user" };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                e.target.reset();
                enqueueSnackbar(`${name} registration successful!`, {
                  variant: "success",
                  autoHideDuration: 1000,
                });
              }
            });
          })
          .catch(() =>
            enqueueSnackbar("Failed to update user profile.", {
              variant: "error",
            })
          );

        navigate("/");
      })
      .catch(() =>
        enqueueSnackbar("Error during registration. Try again!", {
          variant: "error",
        })
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex w-full max-w-4xl">
        {/* Left Side - Image Section */}
        <div className="w-1/2 hidden md:flex items-center justify-center">
          <img src={registerImg} alt="Register" className="rounded-lg" />
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            Create an Account
          </h2>

          {/* Register Form */}
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-base font-medium text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-700 text-white"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-base font-medium text-white">
                Photo
              </label>
              <input
                type="text"
                name="photo"
                required
                className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-700 text-white"
                placeholder="Enter your Photo URL"
              />
            </div>

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
              Create Account
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
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
