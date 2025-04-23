
import { useState, useEffect } from "react";
import { CalendarCheck, MapPin, Users, Sparkle, ChevronRight, Brain, Lightbulb, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars-container absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={`star-${i}`}
              className="absolute rounded-full bg-white" 
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `twinkle ${Math.random() * 5 + 3}s infinite ease-in-out`
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <div 
              key={`nebula-${i}`}
              className="absolute rounded-full blur-3xl" 
              style={{
                background: i % 2 === 0 ? 
                  'radial-gradient(circle, rgba(147,51,234,0.2) 0%, rgba(79,70,229,0.05) 70%, rgba(0,0,0,0) 100%)' : 
                  'radial-gradient(circle, rgba(79,70,229,0.2) 0%, rgba(147,51,234,0.05) 70%, rgba(0,0,0,0) 100%)',
                width: `${Math.random() * 30 + 20}%`,
                height: `${Math.random() * 30 + 20}%`,
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 80}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: 0.6,
                animation: `float ${Math.random() * 100 + 50}s infinite linear`
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 30 }).map((_, i) => (
            <div 
              key={`dust-${i}`}
              className="absolute rounded-full bg-purple-200" 
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
                animation: `float-dust ${Math.random() * 40 + 20}s infinite linear`
              }}
            />
          ))}
        </div>
      </div>
      
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-10"
        style={{
          backgroundSize: '50px 50px',
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`
        }}
      ></div>
      
      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          <div className={`lg:w-1/2 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-2 mb-6 relative">
              {/* Background image container */}
              <div className="absolute inset-0 overflow-hidden rounded-lg -z-10">
                <img 
                  src="/path/to/your/image.jpg" 
                  alt="Background" 
                  className="w-full h-full object-cover opacity-20" 
                />
              </div>
              
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                <Lightbulb className="h-4 w-4 text-white" />
              </div>
              <div className="h-px flex-grow bg-gradient-to-r from-purple-500 to-transparent"></div>
              <div className="px-4 py-1.5 rounded-full bg-purple-700/30 text-sm font-semibold backdrop-blur-sm border border-purple-500/20">
                Department of CSE (AI & ML)
              </div>
              <div className="h-px flex-grow bg-gradient-to-l from-purple-500 to-transparent"></div>
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <Brain className="h-4 w-4 text-white" />
              </div>
            </div>
          
            <h1 className="mb-8 text-4xl md:text-7xl font-bold leading-tight">
              <div className="mb-2 relative">
                <span className="relative inline-block">
                  IDEATHON 2.0
                  <span className="absolute -top-6 -right-6">
                    <Sparkle className="h-5 w-5 text-yellow-300 animate-pulse" />
                  </span>
                </span>
              </div>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-400 animate-gradient">
                Where Ideas Take Flight
                <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0"></div>
              </span>
            </h1>
            
            <p className="mb-10 text-lg md:text-xl text-purple-100/90 leading-relaxed">
              Join the ultimate platform for innovation and creativity. Pitch your revolutionary ideas, 
              collaborate with brilliant minds, and win exciting prizes!
            </p>
            
            <div className="mb-10 space-y-5 backdrop-blur-md bg-purple-900/20 p-6 rounded-xl border border-purple-500/20 shadow-lg shadow-purple-900/10">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <CalendarCheck className="h-5 w-5 text-purple-300" />
                </div>
                <span className="text-md font-medium">Event Date: MAY 03, 2025</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <MapPin className="h-5 w-5 text-purple-300" />
                </div>
                <span className="text-md font-medium">Venue: C-BlOCk RUDRA SEMINAR HALL</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <Users className="h-5 w-5 text-purple-300" />
                </div>
                <span className="text-md font-medium">Team Size: 2-4 Students</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-none relative overflow-hidden shadow-lg shadow-purple-700/20 px-8"
                asChild
              >
                <a href="https://forms.gle/XRYVanNKxpns2vrT8" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center">
                    Register Now
                    <Rocket className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              </Button>

              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/5 text-white hover:bg-white/10 border-white/10 backdrop-blur-sm shadow-lg shadow-purple-900/5 px-8"
                asChild
              >
                <Link to="/coordinators" className="flex items-center gap-2">
                  More Information
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className={`lg:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative w-full max-w-md perspective-1000">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-2xl blur-xl opacity-70 animate-pulse-slow"></div>
              
              <div className="absolute -left-8 -top-8 z-20 animate-float-slow">
                <div className="p-4 backdrop-blur-md bg-white/5 rounded-xl border border-white/10 shadow-xl">
                  <Brain className="h-6 w-6 text-purple-300" />
                </div>
              </div>
              
              <div className="absolute -right-6 bottom-12 z-20 animate-float-medium">
                <div className="p-4 backdrop-blur-md bg-white/5 rounded-xl border border-white/10 shadow-xl">
                  <Lightbulb className="h-6 w-6 text-yellow-300" />
                </div>
              </div>
              
              <div 
                className="relative z-10 rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 border border-white/10"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${(mousePosition.x - 0.5) * 5}deg) rotateX(${(mousePosition.y - 0.5) * -5}deg)`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/40 to-indigo-800/40 mix-blend-overlay"></div>
                <img 
                  src="/photo-1605810230434-7631ac76ec81" 
                  alt="Ideathon group" 
                  className="w-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-green-300">Registration Open</span>
                  </div>
                  <div className="text-sm font-medium">Unleash your innovative potential at Ideathon 2.0</div>
                </div>
              </div>
              
              <div 
                className="absolute inset-0 z-20 bg-gradient-to-tr from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"
                style={{
                  backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-indigo-950 to-transparent"></div>
      </div>
      
      <style>
        {`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          100% { transform: translateY(0) rotate(360deg); }
        }
        
        @keyframes float-dust {
          from { transform: translateY(0) translateX(0); }
          to { transform: translateY(-100px) translateX(100px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes animate-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: animate-gradient 3s ease infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        `}
      </style>
    </div>
  );
}
