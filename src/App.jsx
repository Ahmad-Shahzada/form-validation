import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import "./App.css";

// Zod Schema
const schema = z.object({
  firstname: z
    .string()
    .min(3, "Minimum length is 3 characters")
    .max(6, "Maximum length is 6 characters"),
  email: z
    .string()
    .email("Enter a valid email address"),
  lastName: z
    .string()
    .regex(/^[A-Za-z]+$/, "Last name must contain only letters"),
});

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema), 
  });

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitted the form", data);
    reset(); 
  }

  return (
    <div className="min-h-screen shadow flex items-center justify-center w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-2xl rounded-xl px-10 pt-8 pb-10 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600 hover:text-blue-500 mb-6">
          React Hook zood form
        </h2>

        {/* First Name */}
        <div className="mb-4">
          <label className="block  text-blue-600 hover:text-blue-500 text-sm font-bold mb-2">
            First Name:
          </label>
          <input
            className={`shadow border rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ${
              errors.firstname ? "border-red-500" : ""
            }`}
            {...register("firstname")}
            type="text"
            placeholder="Enter your first name"
          />
          {errors.firstname && (
            <p className="text-red-500 text-xs italic mt-1">
              {errors.firstname.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-blue-600 hover:text-blue-500 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            className={`shadow border rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ${
              errors.email ? "border-red-500" : ""
            }`}
            {...register("email")}
            type="email"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className="mb-6">
          <label className="block text-blue-600 hover:text-blue-500 text-sm font-bold mb-2">
            Last Name:
          </label>
          <input
            className={`shadow border rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ${
              errors.lastName ? "border-red-500" : ""
            }`}
            {...register("lastName")}
            type="text"
            placeholder="Enter your last name"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs italic mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            disabled={isSubmitting}
            className={`${
              isSubmitting
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-500"
            } text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
