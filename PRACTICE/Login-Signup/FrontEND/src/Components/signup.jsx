import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

const signup = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [gender, setgender] = useState("");

  async function handlesignup(firstname, lastname, email, password, gender) {
    // Show loading
    Swal.fire({
      title: "Signing up...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      const user = await axios.post("http://localhost:5000/auth/signup", {
        firstname,
        lastname,
        email,
        password,
        gender
      }, {
        withCredentials: true
      });

      console.log(user.data);

      Swal.fire({
        icon: "success",
        title: "Signed up successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Signup Failed",
        text: error?.response?.data|| "Something went wrong!",
      });
      console.log(error);
    }
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    handlesignup(firstname, lastname, email, pass, gender);
    setfirstname("");
    setlastname("");
    setemail("");
    setpass("");
    setgender("");
  };

   return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-60 h-60 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
      </div>
      
      {/* Glass morphism container */}
      <div className="relative backdrop-blur-lg bg-white/10 p-8 rounded-3xl shadow-2xl w-full max-w-lg border border-white/20 hover:bg-white/15 transition-all duration-500 hover:shadow-purple-500/25 hover:shadow-2xl">
        {/* Header with gradient text */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-2">
            Join Us Today
          </h1>
          <p className="text-white/70 text-sm">Create your account and start your adventure</p>
        </div>

        <form onSubmit={handlesubmit} className="space-y-6">
          {/* Name Fields Row */}
          <div className="flex gap-4">
            <div className="group flex-1">
              <label className="block text-sm font-medium text-white/90 mb-2 group-focus-within:text-purple-300 transition-colors duration-200">
                First Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setfirstname(e.target.value)}
                  placeholder="John"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 hover:bg-white/15 backdrop-blur-sm"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
            
            <div className="group flex-1">
              <label className="block text-sm font-medium text-white/90 mb-2 group-focus-within:text-purple-300 transition-colors duration-200">
                Last Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                  placeholder="Doe"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 hover:bg-white/15 backdrop-blur-sm"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          </div>

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
                placeholder="john.doe@example.com"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 hover:bg-white/15 backdrop-blur-sm"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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
                placeholder="Create a strong password"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 hover:bg-white/15 backdrop-blur-sm"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>

          {/* Gender Field */}
          <div className="group">
            <label className="block text-sm font-medium text-white/90 mb-2 group-focus-within:text-purple-300 transition-colors duration-200">
              Gender
            </label>
            <div className="relative">
              <select
                value={gender}
                onChange={(e) => setgender(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 hover:bg-white/15 backdrop-blur-sm appearance-none cursor-pointer"
              >
                <option value="" className="bg-gray-800 text-white">Select Gender</option>
                <option value="Male" className="bg-gray-800 text-white">Male</option>
                <option value="Female" className="bg-gray-800 text-white">Female</option>
                <option value="Other" className="bg-gray-800 text-white">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="group relative w-full bg-gradient-to-r from-purple-600 via-purple-600 to-pink-600 hover:from-purple-500 hover:via-purple-500 hover:to-pink-500 text-white font-semibold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95"
          >
            <span className="relative z-10">Create Account</span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-8 text-center space-y-4">
          <div className="text-white/50 text-sm">
            Already have an account? 
            <button className="text-purple-300 hover:text-purple-200 ml-1 font-medium transition-colors duration-200">
              Sign in
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-purple-400 rounded-full opacity-60"></div>
        <div className="absolute -top-1 -right-3 w-2 h-2 bg-pink-400 rounded-full opacity-80"></div>
        <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-indigo-400 rounded-full opacity-70"></div>
        <div className="absolute top-1/2 -left-1 w-2 h-2 bg-purple-300 rounded-full opacity-60"></div>
      </div>
    </div>
  );
  
};

export default signup;
