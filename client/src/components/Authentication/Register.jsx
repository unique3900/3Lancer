import React from "react";

import { registrationDropDown } from '../../data/RegistrationData';
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      {/* <h1 className="mt-10 text-5xl font-bold">Register</h1> */}

      <form className="grid grid-cols-2 gap-4 px-10 py-4 mt-10 w-5/6 lg:w-5/12 shadow-md rounded-md">
        <div className="bg-indigo-600 flex justify-center py-4 px-3 col-span-2">
          <span className="text-white text-lg font-bold text-center">
            Register to 3Lancer
          </span>
        </div>
        <div class="mb-2">
          <label for="fname" class="block mb-2 text-sm font-medium  ">
            First Name
          </label>
          <input
            type="text"
            id="fname"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="First name"
          />
        </div>
        <div class="mb-2">
          <label for="lname" class="block mb-2 text-sm font-medium  ">
            Last Name
          </label>
          <input
            type="text"
            id="lname"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Last name"
          />
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
          <label for="phone" class="block mb-2 text-sm font-medium  ">
            Phone
          </label>
          <input
            type="number"
            id="phone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Phone"
          />
        </div>

        <div class="mb-2 ">
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

        <div class="mb-2 ">
          <label for="confirmpassword" class="block mb-2 text-sm font-medium  ">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmpassword"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
          />
        </div>
        <div class="mb-2 col-span-2">
          <label for="select" class="block mb-2 text-sm font-medium  ">
            You are a?
          </label>
                  <select name="select" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" id="">
                      <optgroup label="Select Who You Are"className="py-2 mb-2">
                          
                          {registrationDropDown.map((item) => (
                              <option key={item.id} value={item.title} className="py-2">{item.title }</option>
                            ))}
                      </optgroup>
          </select>
              </div>
              <div class="mb-2 col-span-2">
                            <button type="submit" className="bg-pink-700 cursor-pointer px-3 py-2 text-white font-bold w-full">Register</button>
              </div>
              <div className="mt-1">
                  <p className="">Already Have an Account? <span className="text-indigo-600"><Link to={'/login'}>Login Now</Link></span></p>
              </div>
          </form>
          
    </div>
  );
};

export default Register;
