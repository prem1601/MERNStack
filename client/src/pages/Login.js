import LoginGif from "../assets/login.gif";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  //   Data
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="login">
      <div className="container p-4 mx-auto">
        <div className="w-full max-w-md p-5 mx-auto bg-white rounded">
          <div className="w-20 h-20 mx-auto overflow-hidden rounded-full ">
            <img src={LoginGif} alt="Login" />
          </div>

          <form className="flex flex-col gap-2 pt-6" onSubmit={handleSubmit}>
            <div className="grid py-1">
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

            <div className="py-1">
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

            <button className=" bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 hover:bg-red-700 transition-all mx-auto block mt-5">
              Login
            </button>
          </form>

          <p className="my-5">
            Dont have an account ?{" "}
            <Link
              to="/sign-up"
              className="text-red-600 hover:text-red-700 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
