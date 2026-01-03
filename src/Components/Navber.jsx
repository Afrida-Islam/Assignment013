import React, { useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar:
      "https://ui-avatars.com/api/?name=John+Doe&background=f06529&color=fff",
    coins: 1250,
  };

  const githubRepo = "https://github.com/your-username/your-client-repo";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Brand Logo */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-200 transition-all group-hover:rotate-6">
                <div className="h-2.5 w-2.5 rounded-full bg-white ring-4 ring-white/20" />
              </div>
              <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                Revme
              </span>
            </a>

            {/* Hidden on Mobile: Secondary Nav */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href={githubRepo}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-slate-500 hover:text-orange-600 transition-colors flex items-center gap-1.5"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Developer Portal
              </a>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            {!isLoggedIn ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsLoggedIn(true)}
                  className="px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg transition-all"
                >
                  Sign in
                </button>
                <button className="px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all active:scale-95">
                  Get Started
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3 md:gap-6">
                <a
                  href="/dashboard"
                  className="hidden sm:block text-sm font-semibold text-slate-600 hover:text-slate-900"
                >
                  Dashboard
                </a>

                {/* Balance Badge */}
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/60 px-3 py-1.5 rounded-full">
                  <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-[10px]">
                    🪙
                  </div>
                  <span className="text-sm font-bold text-slate-700">
                    {user.coins.toLocaleString()}
                  </span>
                </div>

                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="flex items-center gap-2 p-0.5 rounded-full hover:ring-4 ring-slate-100 transition-all"
                  >
                    <img
                      src={user.avatar}
                      alt="User"
                      className="h-9 w-9 rounded-full border border-white shadow-sm"
                    />
                  </button>

                  {showProfileMenu && (
                    <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
                      <div className="px-4 py-3 border-b border-slate-50 mb-1">
                        <p className="text-sm font-bold text-slate-900 truncate">
                          {user.name}
                        </p>
                        <p className="text-xs text-slate-500 truncate">
                          {user.email}
                        </p>
                      </div>
                      <a
                        href="#settings"
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
                      >
                        Account Settings
                      </a>
                      <button
                        onClick={() => {
                          setIsLoggedIn(false);
                          setShowProfileMenu(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 font-medium hover:bg-red-50 transition-colors"
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
