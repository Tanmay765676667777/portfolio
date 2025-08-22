const projects = [
  {
    title: "Tata Power GIS Automation",
    description: "Developed automation scripts using Python, GIS, and Magik for power grid management.",
    tech: ["Python", "GIS", "Magik", "ArcGIS"],
    link: "https://github.com/your-repo",
  },
  {
    title: "OpsVision Platform",
    description: "Built monitoring dashboards with Node.js, React.js, ADX queries, and Jest testing.",
    tech: ["Node.js", "React.js", "ADX", "Jest"],
    link: "https://github.com/your-repo",
  },
  {
    title: "Service Experience Portal",
    description: "Worked on Angular + Spring Boot app, integrated Jenkins CI/CD pipelines.",
    tech: ["Angular", "Spring Boot", "Jenkins"],
    link: "https://github.com/your-repo",
  },
];

const Projects = () => {
    return(
        <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-teal-500/50 transition">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((t,i) => (
                                <span key= {i} className="bg-teal-600 px-2 py-1 rounded text-sm">{t}</span>
                            ))}

                        </div>
                        <a href={project.link} target="_blank" rel = 'noopener noreferrer' className="text-teal-400 hover:underline">
                        View Project →
                        </a>

                    </div>
                ))}

            </div>

        </div>
    )
};
export default Projects;