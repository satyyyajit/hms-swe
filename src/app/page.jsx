// This is the main page component that will be rendered by Next.js. It is a simple page with a navbar, hero section, and login section. The login section contains two cards, one for students and one for admins. Each card contains an icon, title, and description. The page is styled using Tailwind CSS classes.
import React from "react";
import { GraduationCapIcon, Shield, Building2, GraduationCap } from "lucide-react";
import Link from "next/link";


const LoginCard = ({ user }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center p-4 border-2 border-gray-400 rounded-xl">
      <div className="flex justify-center items-center">{user.icon}</div>
      <h2 className="text-xl font-bold mt-4">{user.title}</h2>
      <p className="text-gray-600">{user.description}</p>
    </div>
  );
};

const LoginSection = () => {
    return (
        <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Login Portals
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Access your respective portal to manage hostel operations
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-2">
            {/* Warden Portal */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-indigo-200 max-w-sm mx-auto">
              <div className="px-6 py-8 text-center">
                <Building2 className="h-12 w-12 text-indigo-600 mx-auto" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Warden</h3>
                <p className="mt-2 text-gray-500">
                  Manage room allocation, fee collection
                </p>
                <button className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300">
                  Login
                </button>
              </div>
            </div>

            {/* Student Portal */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-indigo-200 max-w-sm mx-auto">
              <div className="px-6 py-8 text-center">
                <GraduationCap className="h-12 w-12 text-indigo-600 mx-auto" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Student</h3>
                <p className="mt-2 text-gray-500">
                  View room details, fee status, and more
                </p>
                <button className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300">
                  Login
                </button>
              </div>
            </div>

            {/* Admin Portal */}
            
          </div>
        </div>
      </div>
    )

};


const Home = () => {
  const users = [
    {
      type: "student",
      icon: <GraduationCapIcon size="64" />,
      title: "Student",
      description: "Login as a student",
    },
    {
      type: "admin",
      icon: <Shield size="64" />,
      title: "Admin",
      description: "Login as an admin",
    },
  ];

  return (
    <main className="p-4">
      {/* Navbar */}
      <nav className="h-16 flex justify-center items-center">
        <h1 className="text-xl md:text-2xl font-bold">
          VST - HOSTEL MANAGEMENT SYSTEM
        </h1>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center bg-gray-800 text-white p-6 rounded-xl relative overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src="/grid.png"
          alt="Background grid pattern"
        />
        <div className="relative z-10 text-center my-10">
          <h1 className="text-2xl md:text-3xl font-bold">
            Welcome to VST Hostel Management System
          </h1>
          <p className="text-lg md:text-base mt-2">
            This is the landing page for the VST Hostel Management System
          </p>
          <Link href="#login-section">
            <button className="bg-neutral-900 hover:bg-neutral-800 text-white font-medium py-2 px-4 rounded mt-4">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Login Section */}
      <section
        className="mt-1 flex flex-col justify-center items-center p-4 rounded-xl border-2 border-gray-300"
        id="login-section"
      >
        <LoginSection />
      </section>
    </main>
  );
};

export default Home;