
import { Code, Database, Globe, Cpu, Wrench, BookOpen } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['C', 'C++', 'Python'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Frontend',
      icon: Globe,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind', 'Bootstrap'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Backend',
      icon: Cpu,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'SocketIO', 'WebSockets'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MongoDB', 'MySQL'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code', 'Colab', 'Docker', 'Angular', 'TensorFlow', 'AWS basics'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Core Subjects',
      icon: BookOpen,
      skills: ['Operating System', 'Computer Networking', 'OOP', 'DBMS', 'Machine Learning', 'Deep Learning', 'NLP'],
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm hover:bg-slate-700 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
