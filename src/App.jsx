import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("Submitted the form", data);
  }

  return (
    <div className="min-h-screen bg-gradient-to-r  flex items-center justify-center bg-slate-300">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-2xl rounded-xl px-10 pt-8 pb-10 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Form Validation</h2>
        
        {/* First Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.firstname ? "border-red-500" : ""
            }`}
            {...register("firstname", {
              required: "First name is required",
              minLength: { value: 3, message: "Minimum length is 3 characters" },
              maxLength: { value: 6, message: "Maximum length is 6 characters" },
            })}
            type="text"
            placeholder="Enter your first name"
          />
          {errors.firstname && (
            <p className="text-red-500 text-xs italic mt-1">{errors.firstname.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.email ? "border-red-500" : ""
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                message: "Enter a valid email address",
              },
            })}
            type="email"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Last Name:</label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.lastName ? "border-red-500" : ""
            }`}
            {...register("lastName", {
              required: "Last name is required",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Last name must contain only letters",
              },
            })}
            type="text"
            placeholder="Enter your last name"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs italic mt-1">{errors.lastName.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-slate-400 hover:bg-slate-300 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
