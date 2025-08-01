import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

const login = () => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  async function handlelogin(email, password) {
    // Show loading
    Swal.fire({
      title: "Logging in...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const user = await axios.post(
        "http://localhost:5000/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log(user.data);

      Swal.fire({
        icon: "success",
        title: "Logged in successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error?.response?.data?.message || "Something went wrong!",
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handlelogin(email, pass);
    setemail("");
    setpass("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>
      
      {/* Glass morphism container */}
      <div className="relative backdrop-blur-lg bg-white/10 p-8 rounded-3xl shadow-2xl w-full max-w-md border border-white/20 hover:bg-white/15 transition-all duration-500 hover:shadow-purple-500/25 hover:shadow-2xl">
        {/* Header with gradient text */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-2">
            Welcome Back
          </h1>
          <p className="text-white/70 text-sm">Sign in to continue your journey</p>
        </div>

        <div className="space-y-6">
          {/* Email Field */}
          <div className="group">
            <label className="block text-sm font-medium text-white/90 mb-2 group-focus-within:text-purple-300 transition-colors duration-200">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 hover:bg-white/15 backdrop-blur-sm"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>

          {/* Password Field */}
          <div className="group">
            <label className="block text-sm font-medium text-white/90 mb-2 group-focus-within:text-purple-300 transition-colors duration-200">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={pass}
                onChange={(e) => setpass(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 hover:bg-white/15 backdrop-blur-sm"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={handleSubmit}
            className="group relative w-full bg-gradient-to-r from-purple-600 via-purple-600 to-pink-600 hover:from-purple-500 hover:via-purple-500 hover:to-pink-500 text-white font-semibold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95"
          >
            <span className="relative z-10">Sign In</span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Additional Links */}
        <div className="mt-8 text-center space-y-4">
          <button className="text-white/70 hover:text-purple-300 text-sm transition-colors duration-200 block w-full">
            Forgot your password?
          </button>
          <div className="text-white/50 text-sm">
            Don't have an account? 
            <button className="text-purple-300 hover:text-purple-200 ml-1 font-medium transition-colors duration-200">
              Sign up
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-purple-400 rounded-full opacity-60"></div>
        <div className="absolute -top-1 -right-3 w-2 h-2 bg-pink-400 rounded-full opacity-80"></div>
        <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-indigo-400 rounded-full opacity-70"></div>
      </div>
    </div>
  );
};

export default login;
