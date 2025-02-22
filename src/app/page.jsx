import Link from "next/link"
import Image from "next/image"
import { Building2Icon, GraduationCapIcon } from "lucide-react"

// Custom Button Component
function CustomButton({ href, children, className }) {
    return (
        <Link href={href} className={`inline-block rounded-2xl bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 transition ${className}`}>
            {children}
        </Link>
    )
}

// Custom Card Component
function CustomCard({ icon, title, description, href }) {
    return (
        <div className="rounded-2xl border p-6 text-center shadow-sm hover:shadow-lg transition border-indigo-600 py-16 ">
            <div className="mb-4 flex justify-center text-blue-600">{icon}</div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="mb-4 text-gray-600">{description}</p>
            <CustomButton href={href}>Login</CustomButton>
        </div>
    )
}

// Icons


// Main Component
export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <header className="border-b bg-white shadow-md">
                <div className="container mx-auto flex h-16 items-center px-4">
                    <h1 className="text-2xl font-bold">VST - HOSTEL MANAGEMENT SYSTEM</h1>
                </div>
            </header>

            <main className="flex-1 p-3">
                {/* Hero Section */}
                <section className="flex flex-col justify-center items-center bg-gray-800 text-white p-6 rounded-xl relative overflow-hidden ">
                    <img
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                        src="/grid.png"
                        alt="Background grid pattern"
                    />
                    <div className="relative z-10 text-center my-28">
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
                <section id="login-section" className="container mx-auto py-12 px-4 md:py-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-2">Login Portals</h2>
                        <p className="text-gray-600">Access your respective portal to manage hostel operations</p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2">
                        <CustomCard
                            icon={<Building2Icon  size={75}/>}
                            title="Warden Portal"
                            description="Manage room allocation, fee collection, and hostel operations"
                            href="/login/admin"
                        />
                        <CustomCard
                            icon={<GraduationCapIcon size={75} />}
                            title="Student Portal"
                            description="View room details, fee status, and manage your hostel experience"
                            href="/login/student"
                        />
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t py-6 bg-white">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                    <p className="text-sm text-gray-600">© {new Date().getFullYear()} Hostel Management. All rights reserved.</p>
                    <nav className="flex gap-4">

                    </nav>
                </div>
            </footer>
        </div>
    )
}