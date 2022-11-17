import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import registerJson from "../../assets/lotifile/register.json";
import SmallSpinner from "../../components/Spinner/SmallSpinner/SmallSpinner";
import { AuthContext } from "../../context/AuthContext/AuthProvider";
import useToken from "../../hooks/useToken";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { loading, setLoading, createUser, updateUserName, googleSignIn } =
    useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  // const [useTokenEmail, setUseTokenEmail] = useState("");
  // const [token] = useToken(useTokenEmail);
  const navigate = useNavigate();

  // if (token) {
  //   navigate("/");
  // }

  const handleRegister = (data, event) => {
    setSignUpError("");
    const email = data.email;
    const password = data.password;
    const image = data.image[0];

    const formDate = new FormData();
    formDate.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=6172cdc3d7968fb2194fbc4fc29a6a67`;

    fetch(url, {
      method: "POST",
      body: formDate,
    })
      .then((res) => res.json())
      .then((imageData) => {
        createUser(email, password)
          .then((result) => {
            const user = result.user;

            // update profile
            updateUserName(data.name, imageData.data.display_url)
              .then(() => {
                // save user in db
                saveUserFromDB(
                  data.name,
                  data.email,
                  imageData.data.display_url
                );
              })
              .catch((err) => {
                toast.error(err.message);
              });

            toast.success("Successfully register your account");
            event.target.reset();
          })
          .catch((error) => {
            setSignUpError(error.message);
            setLoading(false);
          });
      });
  };

  const saveUserFromDB = (name, email, image) => {
    const userInfo = {
      name,
      email,
      image,
    };
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        getAccessToken(email);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("successfully login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const getAccessToken = (email) => {
    fetch(`http://localhost:5000/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.accessToken) {
          localStorage.setItem("doctors-portal-token", data.accessToken);
          navigate("/");
        }
      });
  };

  return (
    <div className="max-w-[1100px] mx-auto lg:py-40 py-9 px-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <Lottie animationData={registerJson} />
        </div>

        <div className="border shadow-xl rounded-xl p-7">
          <form onSubmit={handleSubmit(handleRegister)}>
            <h2 className="text-center text-2xl pb-9 font-semibold">
              Register
            </h2>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
                {...register("name", {
                  required: "Name is required",
                  maxLength: { value: 20, message: "20 character or smaller" },
                  pattern: {
                    value: /^[A-Za-z ]+$/i,
                    message: "Number not allowed",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-400">{errors.name?.message}</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Image</span>
              </label>
              <input
                type="file"
                placeholder="Your email"
                className="w-full m-0 p-0"
                accept="image/*"
                {...register("image", {
                  required: "This files is requires",
                })}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                // setUseTokenEmail={()=>setUseTokenEmail()}
                placeholder="Your email"
                className="input input-bordered w-full"
                {...register("email", {
                  required: "Email Address is required",
                })}
              />
              {errors.email && (
                <p className="text-red-400">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered w-full"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 character or longer",
                  },
                  pattern: {
                    value:
                      /^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹])./ &&
                      /([A-Z])/,
                    message:
                      "Password must contain at least one Special Symbol and one Uppercase Character",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-400">{errors.password?.message}</p>
              )}
              <label className="label">
                <span className="label-text text-xs hover:underline cursor-pointer">
                  Forgot Password?
                </span>
              </label>
            </div>
            <button
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary border-none px-6 py-3 text-white rounded-lg font-semibold cursor-pointer uppercase"
              type="submit"
            >
              {" "}
              {loading ? <SmallSpinner></SmallSpinner> : "Register"}
            </button>
          </form>
          {signUpError && <p className="text-red-500">{signUpError}</p>}
          <div>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="grid h-20 card rounded-box place-items-center">
                <p>
                  Already have an account?{" "}
                  <Link
                    className="text-secondary font-semibold hover:underline"
                    to="/login"
                  >
                    Please login
                  </Link>{" "}
                </p>
              </div>
              <div className="divider">OR</div>
              <div className="grid h-20 card rounded-box place-items-center">
                <button
                  onClick={handleGoogleSignIn}
                  className="border-2 border-black w-full rounded-lg flex items-center justify-center gap-1 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary border-none px-6 py-3 text-white"
                >
                  <FaGoogle className="text-2xl"></FaGoogle>
                  <span className="font-semibold">CONTINUE WITH GOOGLE</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
