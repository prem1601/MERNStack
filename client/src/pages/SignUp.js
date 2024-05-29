import LoginGif from "../assets/login.gif";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { imageToBase64 } from "../helpers/imagetobase64";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //   Data
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleUploadPic = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const imagePic = await imageToBase64(file);
    setData((prev) => {
      return {
        ...prev,
        profilePic: imagePic,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="signup">
      <div className="container p-4 mx-auto">
        <div className="w-full max-w-md p-5 mx-auto bg-white rounded">
          <div className="relative w-20 h-20 mx-auto overflow-hidden rounded-full">
            <div className="">
              <img src={data.profilePic || LoginGif} alt="Signup" />
            </div>
            <form onSubmit={""}>
              <label htmlFor="profilePic">
                <div className="absolute bottom-0 w-full py-4 pt-2 pb-4 text-xs text-center bg-opacity-75 cursor-pointer bg-slate-200">
                  Upload Photo
                </div>
                <input
                  required
                  type="file"
                  name="profilePic"
                  id="profilePic"
                  className="hidden"
                  onChange={handleUploadPic}
                />
              </label>
            </form>
          </div>

          <form className="flex flex-col gap-2 pt-6" onSubmit={handleSubmit}>
            <div className="grid ">
              <label>Name :</label>
              <div className="p-2 bg-slate-100">
                <input
                  required
                  type="text"
                  placeholder="enter yur name"
                  className="w-full h-full bg-transparent outline-none"
                  onChange={handleChange}
                  name={"name"}
                  value={data.name}
                />
              </div>
            </div>

            <div>
              <label>Email :</label>
              <div className="p-2 bg-slate-100">
                <input
                  required
                  type="email"
                  placeholder="enter email"
                  className="w-full h-full bg-transparent outline-none"
                  onChange={handleChange}
                  name={"email"}
                  value={data.email}
                />
              </div>
            </div>

            <div>
              <label>Password :</label>
              <div className="flex items-center p-2 bg-slate-100">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="enter passowrd"
                  className="w-full h-full bg-transparent outline-none"
                  onChange={handleChange}
                  name="password"
                  value={data.password}
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-xl cursor-pointer "
                >
                  {showPassword ? (
                    <span>
                      <FaEye />
                    </span>
                  ) : (
                    <span>
                      <FaEyeSlash />
                    </span>
                  )}
                </div>
              </div>
              {/* <Link
                to={"/forgot-password"}
                className="block mt-1 ml-auto w-fit hover:underline hover:text-red-600"
              >
                Forgot Password..?
              </Link> */}
            </div>

            <div>
              <label>Confirm Password :</label>
              <div className="flex items-center p-2 bg-slate-100">
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="enter confirm password passowrd"
                  className="w-full h-full bg-transparent outline-none"
                  onChange={handleChange}
                  name="confirmPassword"
                  value={data.confirmPassword}
                />
                <div
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="text-xl cursor-pointer "
                >
                  {showConfirmPassword ? (
                    <span>
                      <FaEye />
                    </span>
                  ) : (
                    <span>
                      <FaEyeSlash />
                    </span>
                  )}
                </div>
              </div>
              {/* <Link
                to={"/forgot-password"}
                className="block mt-1 ml-auto w-fit hover:underline hover:text-red-600"
              >
                Forgot Password..?
              </Link> */}
            </div>

            <button className=" bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 hover:bg-red-700 transition-all mx-auto block mt-5">
              Sign Up
            </button>
          </form>

          <p className="my-5">
            Already have an account ?{" "}
            <Link
              to="/login"
              className="text-red-600 hover:text-red-700 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
