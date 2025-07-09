
export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a final year student at <span className="text-blue-400 font-semibold">Shri Ramdeobaba College of Engineering and Management</span>, 
              pursuing BTech specializing in <span className="text-purple-400 font-semibold">AI/ML</span>. 
              With a strong foundation in full-stack development and artificial intelligence, I'm passionate about creating innovative solutions.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              As an effective communicator with confidence in public speaking and team interactions, 
              I bring strong analytical and problem-solving skills to every project. Known for effective time management 
              and leadership in team projects, I'm always eager to learn new technologies and enhance my knowledge.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="text-2xl font-bold text-blue-400 mb-2">9.02</div>
                <div className="text-sm text-gray-400">Current CGPA</div>
              </div>
              <div className="text-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="text-2xl font-bold text-purple-400 mb-2">2026</div>
                <div className="text-sm text-gray-400">Graduation Year</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Core Strengths</h3>
              <div className="space-y-4">
                {[
                  'Problem-solving',
                  'Time Management',
                  'Confident Communication',
                  'Effective Leadership',
                  'Consistent Performance'
                ].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
