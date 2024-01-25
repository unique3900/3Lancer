import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      {/* <h1 className="mt-10 text-5xl font-bold">Register</h1> */}

      <form className="grid grid-cols-2 gap-4 px-10 py-4 mt-10 w-5/6 lg:w-5/12 shadow-md rounded-md">
        <div className="bg-indigo-600 flex justify-center py-4 px-3 col-span-2">
          <span className="text-white text-lg font-bold text-center">
            Login to 3Lancer
          </span>
        </div>

        <div class="mb-2 col-span-2">
          <label for="email" class="block mb-2 text-sm font-medium  ">
            Email
          </label>
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
          />
        </div>


        <div class="mb-2 col-span-2">
          <label for="password" class="block mb-2 text-sm font-medium  ">
            Password
          </label>
          <input
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
          />
        </div>

        <div class="mb-2 col-span-2">
          <button
            type="submit"
            className="bg-pink-700 cursor-pointer px-3 py-2 text-white font-bold w-full"
          >
            Login
          </button>
              </div>
              <div className="mt-1">
                  <p className="">Dont Have an Account? <span className="text-indigo-600"><Link to={'/register'}>Register Now</Link></span></p>
              </div>
      </form>
    </div>
  );
};

export default Login;
