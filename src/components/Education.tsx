
import { GraduationCap, Calendar, Award } from 'lucide-react';

export const Education = () => {
  const educationData = [
    {
      degree: 'BTech - Computer Science and Engineering (AIML)',
      institution: 'Shri Ramdeobaba College of Engineering and Management',
      year: '2022-2026',
      score: 'CGPA: 9.02',
      status: 'Current',
      color: 'from-blue-500 to-purple-500'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Shri Mohanlal Rughwani Sindhi Hindi High School and Jr College',
      year: '2022',
      score: 'Percentage: 84.17%',
      status: 'Completed',
      color: 'from-green-500 to-emerald-500'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: "St. John's High School",
      year: '2020',
      score: 'Percentage: 92.40%',
      status: 'Completed',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My academic journey and educational achievements
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-102 hover:shadow-xl border border-slate-700/50"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${edu.color} flex-shrink-0`}>
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-300 mb-2 leading-relaxed">
                      {edu.institution}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
                      <div className="flex items-center text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{edu.year}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-400">
                        <Award className="w-4 h-4 mr-2" />
                        <span className="text-sm font-semibold text-blue-400">{edu.score}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 md:ml-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    edu.status === 'Current' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {edu.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-colors">
            <div className="text-3xl font-bold text-blue-400 mb-2">9.02</div>
            <div className="text-gray-400">Current CGPA</div>
          </div>
          <div className="text-center p-6 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-colors">
            <div className="text-3xl font-bold text-green-400 mb-2">AI/ML</div>
            <div className="text-gray-400">Specialization</div>
          </div>
          <div className="text-center p-6 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-colors">
            <div className="text-3xl font-bold text-purple-400 mb-2">2026</div>
            <div className="text-gray-400">Expected Graduation</div>
          </div>
        </div>
      </div>
    </section>
  );
};
