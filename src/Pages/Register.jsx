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
    const { name, image, email, password } = data;
    const imageFile = image[0];

    try {
      const result = await createUser(email, password);
      let user = result.user;

      // Upload image to hosting (ImgBB etc)
      const imageURL = await imageUpload(imageFile);

      // Update Firebase Profile
      await updateUserProfile(name, imageURL);

      // Save to Database
      await saveOrUpdateUser(
        { name, email, image: imageURL },
        user.accessToken
      );

      reset();
      navigate(from, { replace: true });
      toast.success("Welcome to ProEarn Global!");
    } catch (err) {
      console.error("Sign Up Error:", err);
      let errorMessage =
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
      });
      navigate(from, { replace: true });
      toast.success("Signup Successful");
    } catch (err) {
      toast.error(err?.message || "Google sign-in failed.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50 py-12 px-4">
      <div className="flex flex-col w-full max-w-lg p-8 rounded-2xl shadow-xl bg-white text-slate-800 border border-slate-100">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-indigo-900 tracking-tight">
            Create Account
          </h1>
          <p className="text-slate-500 mt-2 font-medium">
            Join thousands of users earning daily.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className={`w-full px-4 py-3 border rounded-xl outline-none transition-all bg-slate-50 ${
                  errors.name
                    ? "border-red-400"
                    : "border-slate-200 focus:ring-2 focus:ring-indigo-500"
                }`}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Profile Image */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Profile Picture
              </label>
              <input
                type="file"
                accept="image/*"
                className="block w-full text-xs text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"
                {...register("image", { required: "Image is required" })}
              />
              {errors.image && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.image.message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-slate-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className={`w-full px-4 py-3 border rounded-xl outline-none transition-all bg-slate-50 ${
                errors.email
                  ? "border-red-400"
                  : "border-slate-200 focus:ring-2 focus:ring-indigo-500"
              }`}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-slate-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className={`w-full px-4 py-3 border rounded-xl outline-none transition-all bg-slate-50 ${
                errors.password
                  ? "border-red-400"
                  : "border-slate-200 focus:ring-2 focus:ring-indigo-500"
              }`}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-indigo-100 transition-all active:scale-[0.98] flex justify-center items-center"
          >
            {loading ? (
              <TbFidgetSpinner className="animate-spin text-2xl" />
            ) : (
              "Create Free Account"
            )}
          </button>
        </form>

        {/* Social Link */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-200"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-4 text-slate-400 font-semibold">
              Or join with
            </span>
          </div>
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-3 border border-slate-200 w-full py-3 rounded-xl hover:bg-slate-50 transition-colors font-semibold text-slate-700"
        >
          <FcGoogle size={24} />
          <span>Sign up with Google</span>
        </button>

        <p className="mt-8 text-sm text-center text-slate-500">
          Already a member?{" "}
          <Link
            to="/login"
            className="font-bold text-indigo-600 hover:text-indigo-800 transition"
          >
            Log In here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
