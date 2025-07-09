
import { useState } from 'react';
import { Plus, ExternalLink, Github, ChevronRight } from 'lucide-react';

export const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const majorProjects = [
    { 
      name: 'CureAi', 
      type: 'major',
      description: 'AI-powered healthcare solution',
      icon: '🏥',
      placeholder: true
    },
    { 
      name: 'Stock Prediction Model', 
      type: 'major',
      description: 'Machine learning model for stock market prediction',
      icon: '📈',
      placeholder: true
    }
  ];

  const minorProjects = [
    { 
      name: 'Weather App', 
      type: 'minor',
      description: 'Real-time weather application',
      icon: '🌤️',
      placeholder: true
    },
    { 
      name: 'Tic Tac Toe Game', 
      type: 'minor',
      description: 'Interactive game with AI opponent',
      icon: '🎮',
      placeholder: true
    },
    { 
      name: 'Chess', 
      type: 'minor',
      description: 'Full-featured chess game',
      icon: '♟️',
      placeholder: true
    },
    { 
      name: 'CricScore', 
      type: 'minor',
      description: 'Cricket scoring application',
      icon: '🏏',
      placeholder: true
    }
  ];

  const displayedMinorProjects = showAllProjects ? minorProjects : minorProjects.slice(0, 2);

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my development work and innovative solutions
          </p>
        </div>

        {/* Major Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold mr-3">M</span>
            Major Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {majorProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-700/30 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 border border-slate-600/30 hover:border-blue-500/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-4">{project.icon}</span>
                    <div>
                      <h4 className="text-xl font-bold text-white">{project.name}</h4>
                      <p className="text-gray-400 text-sm">{project.description}</p>
                    </div>
                  </div>
                  {project.placeholder && (
                    <div className="flex space-x-2">
                      <button className="p-2 bg-slate-600/50 rounded-lg hover:bg-slate-600 transition-colors opacity-50 cursor-not-allowed">
                        <Github className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-2 bg-slate-600/50 rounded-lg hover:bg-slate-600 transition-colors opacity-50 cursor-not-allowed">
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  )}
                </div>
                <div className="border-t border-slate-600/30 pt-4">
                  <p className="text-sm text-gray-500 italic">
                    Links, tech stack, and detailed description coming soon...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minor Projects */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center text-sm font-bold mr-3">m</span>
            Minor Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedMinorProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-700/30 backdrop-blur-sm rounded-xl p-4 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 border border-slate-600/30 hover:border-green-500/50"
              >
                <div className="text-center">
                  <span className="text-2xl mb-3 block">{project.icon}</span>
                  <h4 className="text-lg font-bold text-white mb-2">{project.name}</h4>
                  <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                  <p className="text-xs text-gray-500 italic">Details coming soon...</p>
                </div>
              </div>
            ))}
          </div>

          {minorProjects.length > 2 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-cyan-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105"
              >
                {showAllProjects ? 'Show Less' : 'View All Minor Projects'}
                <ChevronRight className={`w-4 h-4 ml-2 transition-transform ${showAllProjects ? 'rotate-90' : ''}`} />
              </button>
            </div>
          )}
        </div>

        {/* Add More Projects Placeholder */}
        <div className="bg-slate-700/20 backdrop-blur-sm rounded-xl p-8 border-2 border-dashed border-slate-600/50 hover:border-blue-500/50 transition-colors">
          <div className="text-center">
            <Plus className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-400 mb-2">More Projects Coming Soon</h4>
            <p className="text-gray-500">Space reserved for additional projects and innovations</p>
          </div>
        </div>
      </div>
    </section>
  );
};
