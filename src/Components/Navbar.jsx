import Container from "../Components/Container";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navber = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/* --- Logo / Branding Section --- */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <div className="text-yellow-600 text-xl leading-none font-extrabold uppercase tracking-tighter">
                  <p>ProEarn</p>
                  <p className="text-gray-800">Global</p>
                  <p className="text-xs font-medium text-gray-500">
                    Earn & Grow
                  </p>
                </div>
              </Link>
            </div>

            {/* --- Main Desktop Navigation --- */}
            <div className="hidden md:flex items-center space-x-8 text-gray-800 text-lg font-semibold">
              <Link to="/" className="hover:text-yellow-600 transition">
                Home
              </Link>
              <Link to="/tasks" className="hover:text-yellow-600 transition">
                Browse Tasks
              </Link>
              <Link
                to="/leaderboard"
                className="hover:text-yellow-600 transition"
              >
                Top Earners
              </Link>
            </div>

            {/* --- User Menu Section --- */}
            <div className="relative">
              <div className="flex flex-row items-center gap-3">
                {/* Earning Badge for Logged In Users */}
                {user && (
                  <div className="hidden sm:block text-sm font-bold bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full border border-yellow-200">
                    Balance: $0.00
                  </div>
                )}

                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-3 md:py-2 md:px-4 border border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                  <AiOutlineMenu />
                  <div className="hidden md:block">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500">
                      {user?.photoURL ? (
                        <img
                          className="rounded-full"
                          src={user.photoURL}
                          alt="profile"
                        />
                      ) : (
                        "User"
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* --- Dropdown Menu --- */}
              {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[45vw] md:w-[15vw] bg-white overflow-hidden right-0 top-14 text-sm border border-gray-100">
                  <div className="flex flex-col cursor-pointer">
                    {/* Mobile Only Links */}
                    <Link
                      to="/"
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Home
                    </Link>
                    <Link
                      to="/tasks"
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Browse Tasks
                    </Link>

                    {user ? (
                      <>
                        <Link
                          to="/dashboard"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold border-t"
                        >
                          My Dashboard
                        </Link>
                        <Link
                          to="/withdraw"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Withdraw Funds
                        </Link>
                        <hr />
                        <button
                          onClick={logOut}
                          className="px-4 py-3 hover:bg-red-50 text-red-600 transition font-semibold text-left w-full"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className="px-4 py-3 hover:bg-yellow-50 text-yellow-700 transition font-bold"
                        >
                          Start Earning
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navber;
