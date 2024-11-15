import React from "react";
import {Code, User, Briefcase} from "lucide-react";
import img from "../assets/Screenshot from 2024-11-15 08-15-12.png";
export const Hero: React.FC = () => {
    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <div className="relative min-h-[90vh] bg-gray-900 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-gray-900" />

            <div className="relative h-full grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Image Section */}
                <div className="relative order-1 lg:order-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-3xl" />
                    <img
                        src={img}
                        alt="Faisal"
                        className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
                    />
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-center order-2 lg:order-1">
                    <h1 className="text-5xl font-bold text-white lg:text-6xl xl:text-7xl">Hi, I'm Faisal</h1>
                    <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-2xl">
                        Senior Software Engineer with over a decade of experience crafting exceptional digital
                        experiences. Specializing in full-stack development, cloud architecture, and AI integration.
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg">
                        <div className="flex items-center space-x-2 bg-gray-800/50 p-4 rounded-xl shadow-sm backdrop-blur-sm">
                            <Code className="text-blue-400" size={24} />
                            <div>
                                <h3 className="font-semibold text-white">Full Stack</h3>
                                <p className="text-sm text-gray-400">Developer</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 bg-gray-800/50 p-4 rounded-xl shadow-sm backdrop-blur-sm">
                            <Briefcase className="text-blue-400" size={24} />
                            <div>
                                <h3 className="font-semibold text-white">4+ Years</h3>
                                <p className="text-sm text-gray-400">Experience</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex space-x-4">
                        <a
                            href="#projects"
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
                        >
                            View Projects
                        </a>
                        <button
                            onClick={scrollToContact}
                            className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-400 hover:text-white transition-all transform hover:scale-105"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
