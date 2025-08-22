import React from "react";

const About = () => {
    return (
        <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 py-12">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="max-w-3xl text-center">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                    className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-teal-500" />
                <p className="text-lg mb-6">
                    Hi 👋, I'm <span className="text-teal-400 font-semibold">Tanmay Nath</span>,
                    a passionate <span className="font-semibold">MERN Stack Developer</span> and
                    <span className="font-semibold"> AI Enthusiast</span> with 3+ years of experience.
                    I love building full-stack web applications and integrating cutting-edge AI features
                    to solve real-world problems.
                </p>
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-teal-400">Experience Timeline</h3>
                    <ul className="space-y-4 text-left">
                        <li>⚡ <b>Tata Power</b> – Python, GIS, Magik Programming, ArcGIS</li>
                        <li>⚡ <b>OpsVision</b> – Node.js, React.js, ADX queries, Jest, Swagger</li>
                        <li>⚡ <b>Service Experience Portal</b> – AngularJS, Java Spring Boot, Jenkins</li>
                    </ul>
                </div>
            </div>

        </div>
    )
};

export default About;