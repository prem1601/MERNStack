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
  }
  

  return (
    <section id="login">
      <div className="container mx-auto p-4">
        <div className="bg-white w-full max-w-md mx-auto p-5 rounded">
          <div className=" w-[130px] h-[130px] mx-auto rounded-full overflow-hidden">
            <img src={LoginGif} alt="Login" />
          </div>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Email :</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="enter email"
                  className="w-full h-full outline-none bg-transparent"
                  onChange={handleChange}
                  name={'email'}
                  value={data.email}
                />
              </div>
            </div>

            <div className="py-3">
              <label>Password :</label>
              <div className="bg-slate-100 p-2 flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="enter passowrd"
                  className="w-full h-full outline-none bg-transparent"
                  onChange={handleChange}
                  name="password"
                  value={data.password}
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className=" text-xl cursor-pointer"
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
              <Link
                to={"/forgot-password"}
                className=" block w-fit ml-auto mt-1 hover:underline hover:text-red-600"
              >
                Forgot Password..?
              </Link>
            </div>

            <button className=" bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 hover:bg-red-700 transition-all mx-auto block mt-5">
              Login
            </button>
          </form>

          <p className="my-5">
            Dont have an account ?{" "}
            <Link
              to="/sign-up"
              className="hover:text-red-700 hover:underline text-red-600"
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
