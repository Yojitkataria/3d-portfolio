import React from "react";
import { Link } from "react-router-dom"; 
import CTA from "../components/CTA"; 


const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio to showcase my work.",
    
    progress: 100,
    theme: "bg-blue-100",
  },
  {
    name: "Peer-to-Peer App",
    description: "An upcoming application focused on peer-to-peer communication.",
    iconUrl: "/assets/p2p-icon.png",
    progress: 45,
    theme: "bg-yellow-100",
  },
  {
    name: "Employee Management System",
    description: "A work-in-progress system for managing employee data efficiently.",
    iconUrl: "/assets/ems-icon.png",
    progress: 30,
    theme: "bg-purple-100",
  },
];


const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I'm currently working on a couple of exciting projects that are close to my heart. While they're still in development, I’m thrilled about what’s coming. One is a peer-to-peer application, and the other is an employee management system. Stay tuned—these projects are on the way! I’d love to hear your thoughts or ideas as they evolve.
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
             
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
               
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
