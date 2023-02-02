import React from 'react';
import '../App.css';
import Landing from '../assets/loginn.jpg';
import Eye from '../assets/eye.svg';
import Google from '../assets/google.svg';

const LoginPage = () => {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-16">
          <h2 className="font-bold text-3xl text-[#002D74]">Login</h2>
          <p className="text-xs mt-4 text-[#002D74]">
            If you already a member, easily log in
          </p>
          <form action="" className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="text"
              name="Username"
              placeholder="User Name"
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
              />
              <img
                className="absolute top-1/2 right-3 -translate-y-1/2"
                src={Eye}
                alt="eye"
              />
            </div>

            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
              Login
            </button>
          </form>

          <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
            <hr className="border-gray-400"></hr>
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400"></hr>
          </div>

          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300">
            <img className="mr-3 " src={Google} alt="google" />
            Login with Google
          </button>

          <p className="mt-5 text-xs border-b border-gray-400 py-4">
            Forget your password?
          </p>

          <div className="mt-3 text-xs flex justify-between items-center">
            <p>If you don't have an account...</p>
            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-105 duration-300">
              Register
            </button>
          </div>
        </div>
        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src={Landing} alt="loginn" />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
