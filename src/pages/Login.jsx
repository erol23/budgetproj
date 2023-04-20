import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()

  console.log(window.location.pathname)

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/user")
  }
  return (
    <div className="flex items-center h-screen justify-center">
      <div className="lg:shadow-xl h-3/4 w-3/4 rounded-lg flex">
        <div className="hidden lg:flex w-1/2 ">
          <img
            src="https://picsum.photos/200/300"
            alt=""
            className="h-full w-full rounded-lg"
          />
        </div>

        <div className="flex flex-col h-full items-center justify-center w-full lg:w-1/2">
          <div className="mb-2 flex flex-col items-center">
            <h1 className="text-4xl">Hello again!</h1>
            <p className="text-sm text-gray-500">It's great to have you back</p>
          </div>
          <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-violet-700 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:focus:ring-violet-700 dark:focus:border-violet-700"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-violet-700 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:focus:ring-violet-700 dark:focus:border-violet-700"
                required
              />
            </div>
            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-violet-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <Link
                to="/register"
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
