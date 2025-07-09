
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

export const Certifications = () => {
  const certifications = [
    {
      title: 'Data Structures and Algorithms',
      issuer: 'Coursera',
      date: 'Completed',
      url: 'https://www.coursera.org/account/accomplishments/certificate/1VWI7QELKNDO',
      color: 'from-blue-500 to-cyan-500',
      verified: true
    },
    {
      title: 'Full Stack Developer Bootcamp',
      issuer: 'GeeksforGeeks',
      date: 'Completed',
      url: 'https://media.geeksforgeeks.org/courses/certificates/1c5f6a29b85345fb31f64731de008efe.pdf',
      color: 'from-green-500 to-emerald-500',
      verified: true
    },
    {
      title: 'Architecting Solutions on AWS',
      issuer: 'Coursera',
      date: 'Completed',
      url: 'https://www.coursera.org/account/accomplishments/certificate/LIFYYO0NS8AB',
      color: 'from-orange-500 to-red-500',
      verified: true
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-700/30 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 border border-slate-600/30 hover:border-blue-500/50 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} flex-shrink-0`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                {cert.verified && (
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span className="text-xs">Verified</span>
                  </div>
                )}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                {cert.title}
              </h3>
              
              <p className="text-gray-300 mb-3">
                {cert.issuer}
              </p>

              <div className="flex items-center text-gray-400 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">{cert.date}</span>
              </div>

              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:text-blue-300"
              >
                <span className="text-sm font-medium">View Certificate</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>

        {/* Add More Certifications Placeholder */}
        <div className="mt-12 bg-slate-700/20 backdrop-blur-sm rounded-xl p-8 border-2 border-dashed border-slate-600/50 hover:border-purple-500/50 transition-colors">
          <div className="text-center">
            <Award className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-400 mb-2">More Certifications</h4>
            <p className="text-gray-500">Continuously expanding my skill set with new certifications and courses</p>
          </div>
        </div>
      </div>
    </section>
  );
};
