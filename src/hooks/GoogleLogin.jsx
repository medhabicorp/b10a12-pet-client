import { useSnackbar } from "notistack";
import useAxiosPublic from "./useAxiosPublic";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        // console.log(result.user)
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
          photo: result.user.photoURL,
          role: "user",
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          //   console.log(res.data);
          enqueueSnackbar(
            `${result.user?.displayName} login has been successfully.`,
            {
              variant: "success",
              autoHideDuration: 1000,
            }
          );
          navigate("/");
        });
      })

      .catch((error) => {
        enqueueSnackbar(
          "Login failed! Please check your credentials and try again.",
          {
            variant: "error",
            autoHideDuration: 5000,
          }
        );
      });
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full py-2 px-4 flex items-center justify-center text-secondary font-semibold rounded-lg border-primary border-2 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white focus:ring-offset-2 text-white cursor-pointer"
    >
      <img
        src="https://i.ibb.co/TcB5YZK/icons8-google-48.png"
        alt="Google logo"
        className="h-5 w-5 mr-2"
      />
      Google
    </button>
  );
};

export default GoogleLogin;
