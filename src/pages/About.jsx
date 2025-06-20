import React from 'react';
import { skills, experiences } from '../constants';
import ExperienceTimeline from './ExperienceTimeline';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow-sm">Yojit Kataria</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          A CSE student who loves building things with code. I mess around with C++, web dev, and cool ideas that can actually help people. Always learning, always creating.
        </p>
      </div>

      {/* Skills Section */}
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section (simple list instead of timeline) */}
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I completed a 6-week Front-End Web Development internship under the IBM SkillsBuild program, where I collaborated in a team of four to develop a community-focused web solution aligned with SDG 2 (Zero Hunger). Our project enabled users to donate food and essentials through a responsive and interactive platform built with HTML, CSS, and JavaScript. In addition to this, I have also begun contributing to open-source projects on GitHub, focusing on frontend issues and documentation improvements to support the developer community and enhance real-world coding skills.
          </p>
        </div>

        <ul className="mt-8 space-y-6">
          {experiences.map((experience, index) => (
            <li key={index} className="border-l-4 border-blue-500 pl-4">
              <h4 className="text-lg font-semibold">{experience.title}</h4>
              <p className="text-slate-600">{experience.company_name}</p>
              <p className="text-sm text-slate-500">{experience.date}</p>
            </li>
          ))}
        </ul>
      

      </div>

      {/* Experience Timeline */}
      <ExperienceTimeline experiences={experiences} />
    


      {/* Contact Section */}

      <hr className='border-slate-200' />

      <CTA  />
    </section>
  );
};

export default About;
