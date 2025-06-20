import React from "react";

const ExperienceTimeline = ({ experiences }) => {
  return (
    <div className="relative border-l-2 border-gray-200 ml-4">
      {experiences.map((exp, index) => (
        <div key={index} className="mb-10 ml-6 flex flex-col md:flex-row md:items-center">
          {/* Timeline Icon */}
          <span className="absolute w-6 h-6 bg-white border-2 border-gray-300 rounded-full -left-3 flex items-center justify-center text-sm">
            <img src={exp.icon} alt="icon" className="w-4 h-4 object-contain" />
          </span>

          {/* Date */}
          <div className="text-sm text-gray-500 md:w-1/3">{exp.date}</div>

          {/* Card */}
          <div className="bg-white shadow-md rounded-lg p-4 ml-0 md:ml-8 w-full md:w-2/3">
            <h3 className="text-lg font-semibold">{exp.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{exp.company_name}</p>
            <ul className="list-disc pl-5 text-gray-500 text-sm space-y-1">
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
