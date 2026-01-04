import { Link, Navigate, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import LoadingSpinner from "../Components/LoadingSpinner";
import useAuth from "../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import { saveOrUpdateUser } from "../utils";

const Login = () => {
  const { signIn, signInWithGoogle, loading, user, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state || "/";

  if (loading) return <LoadingSpinner />;
  if (user) return <Navigate to={from} replace={true} />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const { user } = await signIn(email, password);
      await saveOrUpdateUser(
        {
          name: user?.displayName,
          email: user?.email,
          image: user?.photoURL,
        },
        user.accessToken
      );
      navigate(from, { replace: true });
      toast.success("Log in successful!");
    } catch (err) {
      toast.error(err?.message || "Invalid credentials");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { user } = await signInWithGoogle();
      await saveOrUpdateUser({
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      });
      navigate(from, { replace: true });
      toast.success("Google Login Successful!");
    } catch (err) {
      setLoading(false);
      toast.error(err?.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F3F4F6] px-4 font-sans">
      <div className="flex flex-col w-full max-w-md p-10 rounded-[2.5rem] shadow-2xl bg-white text-slate-800 border border-white/20">
        {/* Logo Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-orange-500 p-3 rounded-2xl shadow-lg shadow-orange-200">
            <div className="w-6 h-6 bg-white rounded-full opacity-90"></div>
          </div>
        </div>

        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black text-[#0F172A] tracking-tight">
            Log in to unlock tasks
          </h1>
          <p className="text-slate-500 mt-2 font-medium">
            Start turning your free time into digital gold.
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="w-full px-5 py-4 border-2 rounded-2xl border-slate-100 focus:border-orange-500 focus:ring-0 outline-none transition-all bg-white placeholder:text-slate-400 font-medium"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              className="w-full px-5 py-4 border-2 rounded-2xl border-slate-100 focus:border-orange-500 focus:ring-0 outline-none transition-all bg-white placeholder:text-slate-400 font-medium"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-orange-200 transition-all active:scale-[0.97] flex-1 mr-4"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin text-xl m-auto" />
              ) : (
                "Sign In Securely"
              )}
            </button>
            <button
              type="button"
              className="text-sm font-semibold text-slate-400 hover:text-orange-600 transition whitespace-nowrap"
            >
              Forgot password?
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-100"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
            <span className="bg-white px-4 text-slate-400">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Login */}
        <button
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-3 border-2 border-slate-50 w-full py-4 rounded-2xl hover:bg-slate-50 transition-colors font-bold text-slate-600 shadow-sm"
        >
          <FcGoogle size={24} />
          <span>Continue Google</span>
        </button>

        {/* Footer Link */}
        <p className="mt-10 text-sm text-center font-semibold text-slate-400">
          New to ProEarn?{" "}
          <Link
            to="/signup"
            className="text-orange-600 hover:text-orange-700 transition"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
