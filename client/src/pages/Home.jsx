import React from "react";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl font-bold mb-2">Hi, I'm Tanmay Nath 👋</h2>
            <p className="text-lg mb-6">MERN Stack Developer | AI Enthusiast</p>
            <div className="space-x-4">
                <a href="/resume.pdf" className="bg-white text-black px-4 py-2 rounded">Download Resume</a>
                <a href="#contact" className="border px-4 py-2 rounded">Contact Me</a>

            </div>

        </div>
    )
};

export default Home;