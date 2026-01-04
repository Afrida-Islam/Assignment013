import Container from "../Components/Container";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { MapPin } from "lucide-react";
const Navber = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  // Replace this with your actual Client Repository URL
  const githubRepoUrl = "https://github.com/your-username/your-client-repo";

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/* --- Logo Section --- */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-11 h-11 bg-[#E87D4E] rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200 group-hover:rotate-6 transition-transform duration-300">
                    <MapPin className="text-white w-6 h-6 fill-current" />
                  </div>
                  <span className="text-2xl font-black tracking-tight text-zinc-900">
                    Revme<span className="text-[#E87D4E]">.</span>
                  </span>
                </div>
              </Link>
            </div>

            {/* --- Navigation & Developer Button --- */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="font-semibold text-gray-700 hover:text-indigo-600 transition"
              >
                Home
              </Link>

              {/* Join as Developer Button (Visible to everyone) */}
              <a
                href={githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-700 transition"
              >
                Join as Developer
              </a>
            </div>

            {/* --- User Section --- */}
            <div className="relative">
              <div className="flex flex-row items-center gap-3">
                {/* Available Coins (Logged Users Only) */}
                {user && (
                  <div className="hidden sm:flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1 rounded-full border border-amber-200">
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Coins:
                    </span>
                    <span className="font-extrabold text-sm">0.00</span>
                  </div>
                )}

                {/* Profile/Menu Trigger */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 md:py-1 md:px-2 border border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                  <AiOutlineMenu className="ml-1" />
                  <div className="hidden md:block">
                    {user?.photoURL ? (
                      <img
                        className="rounded-full w-8 h-8 object-cover border border-slate-200"
                        src={user.photoURL}
                        alt="profile"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xs uppercase">
                        ?
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* --- Dropdown Menu --- */}
              {isOpen && (
                <div className="absolute rounded-xl shadow-xl w-[50vw] md:w-[15vw] bg-white overflow-hidden right-0 top-14 text-sm border border-gray-100 animate-in fade-in zoom-in duration-200">
                  <div className="flex flex-col cursor-pointer">
                    {/* Mobile Only: Github Link */}
                    <a
                      href={githubRepoUrl}
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold text-indigo-600"
                    >
                      Join as Developer
                    </a>

                    {user ? (
                      <>
                        <Link
                          to="/dashboard"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold border-t"
                        >
                          Dashboard
                        </Link>
                        <hr />
                        <button
                          onClick={() => {
                            logOut();
                            setIsOpen(false);
                          }}
                          className="px-4 py-3 hover:bg-red-50 text-red-600 transition font-bold text-left w-full"
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
                          className="px-4 py-3 hover:bg-indigo-50 text-indigo-700 transition font-bold"
                        >
                          Register
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
