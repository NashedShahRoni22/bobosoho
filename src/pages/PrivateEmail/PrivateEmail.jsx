import { Link } from "react-router-dom";

export default function PrivateEmail() {
  return (
    <main>
      <section className="min-h-screen w-full bg-[#1b1340] text-white">
        <div className="px-5 md:container md:mx-auto">
          <p className="text-xl font-medium">For Personal User</p>
          <h1 className="max-w-xl text-4xl font-medium">
            Experience Privacy and Security with Bobosoho for Email, Chat &
            Sharing.
          </h1>
          <p className="max-w-lg text-xl">
            Simple and Secure, keeping your connections private—no ads, no data
            sharing.
          </p>
          <button>
            <Link
              to="/business"
              className="bg-gradient-to-r from-cyan-100 to-yellow-200 text-xl"
            >
              Get Bobosoho for Business
            </Link>
          </button>
        </div>
      </section>
    </main>
  );
}
