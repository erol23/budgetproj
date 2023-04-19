import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center h-screen justify-center">
      <div className="lg:shadow-xl h-1/2 w-1/2 rounded-lg flex">
        <div className="hidden lg:flex w-1/2 ">
          <img
            src="https://picsum.photos/200/300"
            alt=""
            className="h-full w-full"
          />
        </div>

        <div className="flex flex-col h-full items-center justify-center w-full lg:w-1/2">
          <h2>Hello again!</h2>
          <p>It's great to have you back</p>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <input
                type="floating_email"
                name="email"
                className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg w-full p-2.5 dark:border-violet-600 dark:placeholder-gray-400 dark:text-black focus:ring-violet-500 focus:border-violet-500"
                placeholder=""
                required
              />
              {/* <label htmlFor="floating_email">Email</label> */}
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg w-full p-2.5 dark:border-violet-600 dark:placeholder-gray-400 dark:text-black focus:ring-violet-500 focus:border-violet-500"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>
            <Link to="/user">
              <button
                type="submit"
                className="w-full bg-violet-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
            </Link>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <Link
                to="/user"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
