import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeType, setActiveType] = useState("web");

  const filteredProjects = PROJECTS.filter((p) => p.type === activeType);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      {/* Tab Navigation */}
      <div className="flex justify-center space-x-10 mb-10">
        {["web", "api"].map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`relative pb-2 text-xl transition-all duration-300 ${
              activeType === type ? "text-white" : "text-neutral-400"
            }`}
          >
            {type === "web" ? "Web Projects" : "API Documentation"}
            {activeType === type && (
              <span className="absolute left-0 -bottom-1 h-1 w-full bg-cyan-500 rounded-full transition-all duration-300"></span>
            )}
          </button>
        ))}
      </div>

      {/* Project List */}
      <div className="grid grid-cols-1 gap-10 px-6 md:grid-cols-2 lg:grid-cols-2 xl:px-20">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="rounded border border-neutral-800 p-6"
          >
            <img
              src={project.image}
              alt={project.title}
              className="mb-4 w-full rounded"
            />
            <h6 className="mb-2 text-xl font-semibold">{project.title}</h6>
            <p className="mb-4 text-neutral-400">{project.description}</p>

            <div className="flex flex-row gap-2 mb-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-cyan-400 border border-cyan-500 px-3 py-1 rounded hover:bg-cyan-500 hover:text-white transition"
                >
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-yellow-400 border border-yellow-500 px-3 py-1 rounded hover:bg-yellow-500 hover:text-white transition"
                >
                  See on GitHub
                </a>
              )}
            </div>

            <div className="flex flex-wrap">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
