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
      toast.success("Welcome back to ProEarn!");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
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
      toast.success("Welcome back!");
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error(err?.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50 font-sans">
      <div className="flex flex-col w-full max-w-md p-8 rounded-2xl shadow-xl bg-white text-slate-800 border border-slate-100">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-indigo-900 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-slate-500 mt-2">
            Ready to start your next earning task?
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-semibold text-slate-700"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="name@company.com"
              className="w-full px-4 py-3 border rounded-xl border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-slate-50"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-slate-700"
              >
                Password
              </label>
              <button
                type="button"
                className="text-xs font-medium text-indigo-600 hover:text-indigo-800 transition"
              >
                Forgot password?
              </button>
            </div>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              id="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 border rounded-xl border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-slate-50"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-[0.98] flex justify-center items-center"
          >
            {loading ? (
              <TbFidgetSpinner className="animate-spin text-xl" />
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-200"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-4 text-slate-400 font-medium">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Login */}
        <button
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-3 border border-slate-200 w-full py-3 rounded-xl hover:bg-slate-50 transition-colors font-medium text-slate-700"
        >
          <FcGoogle size={24} />
          <span>Google Account</span>
        </button>

        {/* Footer Link */}
        <p className="mt-8 text-sm text-center text-slate-500">
          New to the platform?{" "}
          <Link
            state={from}
            to="/signup"
            className="font-bold text-indigo-600 hover:text-indigo-800 underline-offset-4 hover:underline transition"
          >
            Create an Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
