import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import { toast } from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { imageUpload, saveOrUpdateUser } from "../utils";

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle, loading } =
    useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { name, image, email, password, role } = data;
    const imageFile = image[0];
    const initialCoins = role === "worker" ? 10 : 50;

    try {
      const result = await createUser(email, password);
      const user = result.user;
      const imageURL = await imageUpload(imageFile);
      await updateUserProfile(name, imageURL);

      await saveOrUpdateUser(
        {
          name,
          email,
          image: imageURL,
          role,
          coins: initialCoins,
        },
        user.accessToken
      );

      reset();
      navigate(from, { replace: true });
      toast.success(`Account Created! You received ${initialCoins} coins.`);
    } catch (err) {
      console.error("Sign Up Error:", err);
      const errorMessage =
        err.code?.split("/")[1]?.replace(/-/g, " ") || err.message;
      toast.error(errorMessage);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { user } = await signInWithGoogle();
      await saveOrUpdateUser({
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
        role: "worker", // Default for Google Sign-in
        coins: 10,
      });
      navigate(from, { replace: true });
      toast.success("Welcome to ProEarn!");
    } catch (err) {
      toast.error(err?.message || "Google sign-in failed.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F3F4F6] py-12 px-4 font-sans">
      <div className="flex flex-col w-full max-w-xl p-10 rounded-[2.5rem] shadow-2xl bg-white text-slate-800 border border-white/20">
        {/* Logo Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-orange-500 p-3 rounded-2xl shadow-lg shadow-orange-200">
            <div className="w-6 h-6 bg-white rounded-full opacity-90"></div>
          </div>
        </div>

        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black text-[#0F172A] tracking-tight">
            Join ProEarn Global
          </h1>
          <p className="text-slate-500 mt-2 font-medium">
            Choose your role and start earning today.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className={`w-full px-5 py-4 border-2 rounded-2xl outline-none transition-all bg-white font-medium ${
                  errors.name
                    ? "border-red-400"
                    : "border-slate-50 focus:border-orange-500"
                }`}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1 ml-2">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Role Dropdown */}
            <div>
              <select
                className={`w-full px-5 py-4 border-2 rounded-2xl outline-none transition-all bg-white font-medium appearance-none cursor-pointer ${
                  errors.role
                    ? "border-red-400"
                    : "border-slate-50 focus:border-orange-500"
                }`}
                {...register("role", { required: "Role is required" })}
              >
                <option value="">Select Role</option>
                <option value="worker">Worker (Earn Coins)</option>
                <option value="buyer">Buyer (Post Tasks)</option>
              </select>
              {errors.role && (
                <p className="text-red-500 text-xs mt-1 ml-2">
                  {errors.role.message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className={`w-full px-5 py-4 border-2 rounded-2xl outline-none transition-all bg-white font-medium ${
                errors.email
                  ? "border-red-400"
                  : "border-slate-50 focus:border-orange-500"
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 ml-2">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Profile Image URL/File */}
          <div>
            <label className="block mb-2 ml-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
              Profile Picture
            </label>
            <input
              type="file"
              accept="image/*"
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-6 file:rounded-2xl file:border-0 file:text-sm file:font-bold file:bg-orange-50 file:text-orange-600 hover:file:bg-orange-100 cursor-pointer border-2 border-slate-50 rounded-2xl"
              {...register("image", { required: "Image is required" })}
            />
            {errors.image && (
              <p className="text-red-500 text-xs mt-1 ml-2">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className={`w-full px-5 py-4 border-2 rounded-2xl outline-none transition-all bg-white font-medium ${
                errors.password
                  ? "border-red-400"
                  : "border-slate-50 focus:border-orange-500"
              }`}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Min 6 characters" },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                  message: "Must include one letter and one number",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1 ml-2">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-200 transition-all active:scale-[0.97] flex justify-center items-center"
          >
            {loading ? (
              <TbFidgetSpinner className="animate-spin text-xl" />
            ) : (
              "Create Account & Get Coins"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-100"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
            <span className="bg-white px-4 text-slate-400">
              Or sign up with
            </span>
          </div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-3 border-2 border-slate-50 w-full py-4 rounded-2xl hover:bg-slate-50 transition-colors font-bold text-slate-600 shadow-sm"
        >
          <FcGoogle size={24} />
          <span>Google Account</span>
        </button>

        <p className="mt-8 text-sm text-center font-semibold text-slate-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-600 hover:text-orange-700 transition"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
