
import { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" }
  ];

  const handleMenuClick = (itemName) => {
    setActiveItem(itemName);
    setIsMenuOpen(false);
    // In your actual project, replace this with:
    // navigate(path) or your routing logic
    console.log(`Demo: Navigating to ${itemName}`);
  };

  const handleAuthClick = (type) => {
    console.log(`Demo: ${type} clicked - replace with your routing logic`);
    // In your actual project, replace with:
    // navigate('/login') or navigate('/signup')
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-pink-800/80 border-b border-white/10 shadow-lg shadow-purple-500/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <button 
              onClick={() => handleMenuClick("Home")}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl rotate-45 transform group-hover:rotate-180 transition-transform duration-500"></div>
                <div className="absolute inset-0 w-10 h-10 bg-gradient-to-tr from-white/20 to-transparent rounded-xl rotate-45"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                MyApp
              </span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleMenuClick(item.name)}
                  className={`group relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeItem === item.name
                      ? "text-white bg-white/10 shadow-lg shadow-purple-500/20"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Active indicator */}
                  {activeItem === item.name && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl animate-pulse"></div>
                  )}
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => handleAuthClick('Sign In')}
              className="group relative px-4 py-2 text-white/80 hover:text-white font-medium transition-all duration-300 hover:bg-white/5 rounded-xl"
            >
              <span className="relative z-10">Sign In</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => handleAuthClick('Sign Up')}
              className="group relative px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="relative z-10">Sign Up</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group relative p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute left-0 top-1 w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`absolute left-0 top-5 w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 py-4' 
            : 'max-h-0 opacity-0 py-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-2 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item.name)}
                className={`group relative w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  activeItem === item.name
                    ? "text-white bg-white/10 shadow-lg shadow-purple-500/20"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Active indicator */}
                {activeItem === item.name && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl animate-pulse"></div>
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
            
            {/* Mobile Auth Buttons */}
            <div className="pt-4 space-y-2 border-t border-white/10">
              <button 
                onClick={() => handleAuthClick('Sign In')}
                className="group relative w-full text-left px-4 py-3 text-white/80 hover:text-white font-medium transition-all duration-300 hover:bg-white/5 rounded-xl"
              >
                <span className="relative z-10">Sign In</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={() => handleAuthClick('Sign Up')}
                className="group relative w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">Sign Up</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-0 right-1/3 w-1 h-1 bg-pink-400 rounded-full opacity-80 animate-pulse"></div>
    </nav>
  );
};

export default Navbar;
