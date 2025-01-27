const skills = [
  { name: "HTML", level: "Expert" },
  { name: "CSS", level: "Expert" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "React.js", level: "Intermediate" },
  { name: "Node.js", level: "Beginner" },
  { name: "MySQL", level: "Intermediate" },
  { name: "C++", level: "Intermediate" },
  { name: "Data Structures & Algorithms", level: "Beginner" },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900 text-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Skills</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            A showcase of my expertise and the tools I use to create impactful projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-800 to-gray-700 rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-300">
                {skill.name}
              </h3>
              <p className="text-gray-300 mt-2 text-lg font-medium">{skill.level}</p>
              <div className="w-full bg-gray-700 h-2 mt-6 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    skill.level === "Expert"
                      ? "bg-gradient-to-r from-blue-500 to-teal-300 w-[90%]"
                      : skill.level === "Intermediate"
                      ? "bg-gradient-to-r from-green-400 to-green-600 w-[70%]"
                      : "bg-gradient-to-r from-yellow-400 to-yellow-600 w-[50%]"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
