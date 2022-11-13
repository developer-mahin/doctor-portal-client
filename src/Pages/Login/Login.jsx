import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import loginImage from "../../assets/images/login.png";

const Login = () => {
  const { register, handleSubmit } = useForm();
//   const onSubmit = (data) => console.log(data);

const handleLogin = (data)=>{
    console.log(data)
}

  return (
    <div className="max-w-[1100px] mx-auto lg:py-48 py-9 px-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <img src={loginImage} alt="" />
        </div>
        <div className="border shadow-xl rounded-xl p-7">
          <form onSubmit={handleSubmit(handleLogin)}>
            <h2 className="text-center text-2xl pb-9 font-semibold">Login</h2>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                placeholder="Your email"
                className="input input-bordered w-full"
                {...register("email")}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                placeholder="Your password"
                className="input input-bordered w-full"
                {...register("password")}
              />
              <label className="label">
                <span className="label-text text-xs hover:underline cursor-pointer">Forgot Password?</span>
              </label>
            </div>
            <input
              className="w-full btn btn-accent"
              type="submit"
              value={"login"}
            />
          </form>
          <div>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="grid h-20 card rounded-box place-items-center">
                <p>
                  New to Doctors Portal?{" "}
                  <Link className="text-secondary font-semibold hover:underline" to="/register">Create new account</Link>{" "}
                </p>
              </div>
              <div className="divider">OR</div>
              <div className="grid h-20 card rounded-box place-items-center">
                <button className="border-2 border-black w-full py-2 px-6 rounded-xl">CONTINUE WITH GOOGLE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
