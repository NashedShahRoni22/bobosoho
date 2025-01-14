import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import bobosohoLogo from "../../assets/bobosoho.jpg";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="bg-primary p-5">
      <section className="md:container md:mx-auto">
        <Link to="/" className="inline-block w-fit">
          <img src={bobosohoLogo} alt="bobosoho logo" loading="lazy" />
        </Link>

        {/* Form Div */}
        <div className="mt-8 flex h-fit min-h-screen items-center justify-center font-poppins md:mt-4">
          <form
            style={{
              backgroundImage:
                "linear-gradient(rgb(64, 57, 95) 0%, rgb(27, 19, 64) 100%)",
            }}
            className="h-fit rounded-xl border border-electricViolet px-6 py-8 text-white sm:min-w-96 md:w-1/3"
          >
            <h1 className="text-3xl font-medium">Sign in</h1>
            <p className="mb-6 mt-2.5 text-sm text-neutral-300">
              Enter your Bobosoho Account details.
            </p>

            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 w-full rounded-md border px-4 py-1.5 text-black outline-none focus:border-electricViolet focus:outline focus:outline-electricViolet/20"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  required
                  className="w-full rounded-md border px-4 py-1.5 text-black outline-none focus:border-electricViolet focus:outline focus:outline-electricViolet/20"
                />

                {showPassword ? (
                  <FaRegEyeSlash
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-lg text-black"
                  />
                ) : (
                  <FaRegEye
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-lg text-black"
                  />
                )}
              </div>
            </div>

            <p className="mb-8 mt-5 cursor-pointer text-right text-sm text-electricViolet underline">
              Forgot Password?
            </p>

            <button
              type="submit"
              className="w-full rounded-md bg-electricViolet py-1.5 text-lg text-white"
            >
              Sign in
            </button>

            <p className="mb-4 mt-6 flex items-center justify-center gap-1 text-sm text-neutral-300">
              New to Bobosoho?{" "}
              <Link to="/signup" className="text-electricViolet underline">
                Create account
              </Link>
            </p>
            <hr />
            <Link
              to="/login"
              className="mt-4 block text-center text-sm capitalize text-electricViolet underline"
            >
              Can&apos;t access your account?
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
}
