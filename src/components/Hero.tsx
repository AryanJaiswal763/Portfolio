
import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Full Stack Developer & AI/ML Enthusiast";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Aryan Jaiswal
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
              {text}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
            </div>

            <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Final year BTech student specializing in AI/ML at Shri Ramdeobaba College of Engineering. 
              Passionate about creating innovative solutions with modern web technologies and artificial intelligence.
            </p>

            <div className="flex justify-center lg:justify-start space-x-6 mb-8">
              <a
                href="https://github.com/AryanJaiswal763"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
              >
                <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="https://linkedin.com/in/aryan-deepak-jaiswal-59151b31a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-blue-600 hover:bg-blue-500 transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href="mailto:aryanjaiswal763@gmail.com"
                className="p-3 rounded-full bg-purple-600 hover:bg-purple-500 transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://codolio.com/profile/aryanJaiswal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-cyan-600 hover:bg-cyan-500 transition-all duration-300 hover:scale-110 group"
              >
                <ExternalLink className="w-6 h-6 text-white" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToAbout}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                Explore My Work
              </button>
              <a
                href="mailto:aryanjaiswal763@gmail.com"
                className="px-8 py-3 border-2 border-gray-600 text-gray-300 rounded-full font-medium hover:border-white hover:text-white transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Profile Picture */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src="/lovable-uploads/5684f98e-986a-45e6-a9ab-178441e7cce5.png"
                alt="Aryan Jaiswal"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white/20 shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </button>
    </section>
  );
};
